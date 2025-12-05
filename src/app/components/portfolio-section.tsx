import type { Project } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ProjectCard } from "./project-card";

const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "E-Commerce App",
    description:
      "A full-featured e-commerce application built with Flutter, using Provider for state management and Firebase for backend services.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-1-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-1-screenshot")!
      .imageHint,
    tags: ["Flutter", "Dart", "Firebase", "Provider"],
    repoLink: "https://github.com/example/ecommerce-flutter-app",
    liveLink: "#",
  },
  {
    id: "proj-2",
    title: "Fitness Tracker App",
    description: "", // Empty description to demo AI summary
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-2-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-2-screenshot")!
      .imageHint,
    tags: ["Flutter", "Dart", "GetX", "SQLite"],
    repoLink: "https://github.com/example/fitness-tracker-flutter",
  },
  {
    id: "proj-3",
    title: "Movie Discovery App",
    description:
      "A sleek movie discovery app using the TMDB API, built with Flutter and Riverpod for state management. Features clean architecture and beautiful animations.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-3-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-3-screenshot")!
      .imageHint,
    tags: ["Flutter", "Dart", "Riverpod", "Dio"],
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
