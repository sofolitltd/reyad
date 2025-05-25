import AboutSection from "@/components/home/About";
import ContactSection from "@/components/home/Contact";
import EducationSection from "@/components/home/Education";
import ExperienceSection from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/Projects";
import SkillsSection from "@/components/home/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-gradient-to-b from-white via-teal-50 to-white">
        <AboutSection />
      </div>
      <div className="bg-gradient-to-b from-teal-50 via-white to-cyan-50">
        <ExperienceSection />
      </div>
      <div className="bg-gradient-to-b from-cyan-50 via-white to-teal-100">
        <EducationSection />
      </div>
      <div className="bg-white">
        <SkillsSection />
      </div>
      <div className="bg-gradient-to-b from-teal-100 via-white to-teal-50">
        <ProjectsSection />
      </div>
      <div className="bg-white">
        <ContactSection />
      </div>
    </div>
  );
}
