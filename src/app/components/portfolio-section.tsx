import type { Project } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ProjectCard } from "./project-card";

const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "E-Commerce App",
    description:
      "A feature-rich e-commerce application built with Flutter, featuring a clean UI, state management with Bloc, and Firebase integration for backend services.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-1-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-1-screenshot")!
      .imageHint,
    tags: ["Flutter", "Firebase", "Bloc"],
    repoLink: "https://github.com/example/ecommerce-app",
    liveLink: "#",
  },
  {
    id: "proj-2",
    title: "Social Media Platform",
    description: "", // Empty description to demo AI summary
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-2-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-2-screenshot")!
      .imageHint,
    tags: ["Flutter", "Dart", "Node.js", "MongoDB"],
    repoLink: "https://github.com/example/social-media-app",
  },
  {
    id: "proj-3",
    title: "Fitness Tracker",
    description:
      "A mobile app to track workouts, set fitness goals, and visualize progress with charts. Built using Flutter and Provider for state management.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-3-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-3-screenshot")!
      .imageHint,
    tags: ["Flutter", "Provider", "SQLite"],
    liveLink: "#",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12 font-headline">
        Portfolio
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
