"use client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";

const experienceEntries = [
  {
    id: "exp1",
    title: "Mobile App Developer (Freelance)",
    company: "Self-employed",
    location: "Remote",
    period: "2022 - Present",
    description:
      "Building cross-platform mobile apps using Flutter and Firebase for clients in education, health, and e-commerce.",
    icon: <FaLaptopCode />,
    color: "#14b8a6",
  },
  {
    id: "exp2",
    title: "Content Creator",
    company: "YouTube / Social Media",
    location: "Online",
    period: "2020 - Present",
    description:
      "Creating educational and tech content for YouTube and other platforms. Focused on app tutorials, productivity, and digital skills.",
    icon: <FaBriefcase />,
    color: "#0ea5e9",
  },
  {
    id: "exp3",
    title: "WordPress Developer (Freelance)",
    company: "Self-employed",
    location: "Remote",
    period: "2019 - 2022",
    description:
      "Developed and customized WordPress sites for small businesses, including e-commerce and portfolio websites.",
    icon: <FaLaptopCode />,
    color: "#6366f1",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-12 sm:py-14 bg-transparent text-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          My <span className="text-teal-500">Experience</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A timeline of my professional journey and key roles.
        </p>
      </div>
      <VerticalTimeline lineColor="#14b8a6">
        {experienceEntries.map((exp) => (
          <VerticalTimelineElement
            key={exp.id}
            contentStyle={{
              background: "#fff",
              color: "#0f172a",
              borderTop: `4px solid ${exp.color}`,
              boxShadow: "0 4px 24px 0 rgba(0,0,0,0.05)",
              padding: "16px 20px", // Reduced padding for lower height
              minHeight: "90px",     // Lower minHeight
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            iconStyle={{
              background: exp.color,
              color: "#fff",
              boxShadow: "0 0 0 4px #fff, 0 2px 4px 0 rgba(0,0,0,0.05)",
            }}
            icon={exp.icon}
          >
            <h3 className="text-lg font-bold text-teal-600 mb-1">{exp.title}</h3>
            <p className="text-sm font-medium text-gray-800 mb-1">
              {exp.company} &middot; {exp.location}
            </p>
            <p className="text-xs text-gray-500 mb-1">{exp.period}</p>
            <p className="text-gray-700 text-sm">{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  </section>
);

export default ExperienceSection;