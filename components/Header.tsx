// components/Header.tsx
"use client"; // Needed for components with client-side interactivity like useState and useEffect

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  // Add more links as needed
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle smooth scrolling
  const handleScrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '/' || !href.startsWith('#')) {
      window.location.href = href;
      return;
    }

    const id = href.substring(1);
    const targetElement = document.getElementById(id);

    if (targetElement) {
      const isMobile = window.innerWidth < 768;
      const headerOffset = isMobile ? 300 : 70; // Increase offset for mobile if needed
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      if (isMobile) {
        // Wait for mobile menu to close before scrolling
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }, 250); // 250ms matches most menu close animations
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }, []);

  // Effect to detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentActive = '';

      // Check for the home section first if it's at the very top
      // Adjust this threshold based on your layout's top spacing
      if (scrollY < 100) {
        currentActive = '/';
      }

      navLinks.forEach((link) => {
        if (link.href.startsWith('#')) {
          const id = link.href.substring(1);
          const section = document.getElementById(id);

          if (section) {
            // Adjust offset to trigger active state slightly before the section reaches the very top
            // This should be approximately the header height + some padding
            const offset = 80;
            if (scrollY >= section.offsetTop - offset && scrollY < section.offsetTop + section.offsetHeight - offset) {
              currentActive = link.href;
            }
          }
        }
      });
      setActiveSection(currentActive);
    };

    // Throttle scroll event for performance
    let throttleTimeout: NodeJS.Timeout | null = null;
    const throttledHandleScroll = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          handleScroll();
          throttleTimeout = null;
        }, 100); // Adjust throttle time as needed (e.g., 100ms)
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    // Call once on mount and on resize to set initial active section
    handleScroll();
    window.addEventListener('resize', handleScroll);


    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', handleScroll);
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, []);

  return (
    <header className="bg-white text-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Site Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-teal-500 hover:text-teal-400 transition-colors duration-300">
              Reyad
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} legacyBehavior>
                <a
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
                    ${
                      (pathname === link.href && link.href === '/') || activeSection === link.href
                        ? 'bg-teal-500 text-white transform scale-105'
                        : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600 hover:scale-105'
                    }`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu open/close */}
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (collapsible) */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} legacyBehavior>
                <a
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out
                    ${
                      (pathname === link.href && link.href === '/') || activeSection === link.href
                        ? 'bg-teal-500 text-white transform scale-105' // Active state with slight scale
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105' // Hover state with slight scale
                    }`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
