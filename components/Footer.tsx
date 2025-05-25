// components/Footer.tsx

"use client"; // This component will have client-side interactivity
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/asifreyad',
    icon: <FaGithub size={22} />,
    label: 'GitHub Profile',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/asifreyad',
    icon: <FaLinkedin size={22} />,
    label: 'LinkedIn Profile',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/asifreyad',
    icon: <FaFacebook size={22} />,
    label: 'Facebook Profile',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@asifreyad',
    icon: <FaYoutube size={22} />,
    label: 'YouTube Channel',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/01704340860',
    icon: <FaWhatsapp size={22} />,
    label: 'WhatsApp',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Up Button */}
      <button
        onClick={handleScrollTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
      >
        <FaArrowUp size={22} />
      </button>

      <footer className="bg-white text-gray-900 border-t border-gray-200 mt-auto relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center">
          {/* Left: Copyright & Powered */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm">
              &copy; {currentYear} Asif Reyad. All rights reserved.
            </p>
            <p className="text-xs mt-1 text-gray-500">
              Powered by <Link href="https://sofolit.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 font-semibold">sofolit.vercel.app</Link>
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;