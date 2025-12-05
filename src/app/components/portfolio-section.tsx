import type { Project } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ProjectCard } from "./project-card";

const projectsData: Project[] = [
  {
    id: "proj-7",
    title: "Scroll to Top Button",
    description: "A reusable 'Scroll to Top' button component for React, built with Tailwind CSS. It features a smooth scroll animation and a clean, modern design that can be easily integrated into any project.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-7-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-7-screenshot")!
      .imageHint,
    tags: ["React", "Tailwind CSS", "UI Component"],
    repoLink: "https://github.com/example/scroll-to-top-button",
  },
  {
    id: "proj-4",
    title: "Doctor App",
    description: "A Flutter application for booking doctor appointments, managing patient records, and handling online consultations.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-4-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-4-screenshot")!
      .imageHint,
    tags: ["Flutter", "Dart", "Firebase", "GetX"],
    repoLink: "https://github.com/sofolitltd/doctor-app",
  },
  {
    id: "proj-5",
    title: "Food Delivery App UI",
    description: "A beautiful and responsive UI kit for a food delivery application, built with Flutter. Includes over 30 unique screens.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-5-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-5-screenshot")!
      .imageHint,
    tags: ["Flutter", "Dart", "UI/UX"],
    repoLink: "https://github.com/sofolitltd/food-delivery-app-ui",
  },
  {
    id: "proj-6",
    title: "Real Estate App UI",
    description: "A clean and modern UI for a real estate application. Features property listings, search filters, and agent profiles. Built with Flutter.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-6-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-6-screenshot")!
      .imageHint,
    tags: ["Flutter", "Dart", "UI Design"],
    repoLink: "https://github.com/sofolitltd/real-estate-app-flutter-ui",
  },
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
    description:
      "A comprehensive fitness tracking application to monitor workouts, set goals, and view progress over time. Built with Flutter and uses GetX for state management.",
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
