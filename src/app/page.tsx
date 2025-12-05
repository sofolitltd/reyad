import { AboutSection } from "./components/about-section";
import { BlogSection } from "./components/blog-section";
import { ContactSection } from "./components/contact-section";
import { PortfolioSection } from "./components/portfolio-section";
import { SkillsSection } from "./components/skills-section";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 space-y-16 md:space-y-24">
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
