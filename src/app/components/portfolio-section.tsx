import type { Project } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ProjectCard } from "./project-card";

const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Media Player App",
    description:
      "A feature-rich media player for Android built with Jetpack Compose, featuring a modern UI, state management with ViewModel, and ExoPlayer for playback.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-1-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-1-screenshot")!
      .imageHint,
    tags: ["Kotlin", "Jetpack Compose", "ExoPlayer"],
    repoLink: "https://github.com/example/media-player-app",
    liveLink: "#",
  },
  {
    id: "proj-2",
    title: "Task Management App",
    description: "", // Empty description to demo AI summary
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-2-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-2-screenshot")!
      .imageHint,
    tags: ["Kotlin", "Compose", "Room", "Hilt"],
    repoLink: "https://github.com/example/task-management-app",
  },
  {
    id: "proj-3",
    title: "Recipe Finder",
    description:
      "A mobile app to discover and save recipes, built with Jetpack Compose and leveraging the Ktor client for networking and Coil for image loading.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-3-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-3-screenshot")!
      .imageHint,
    tags: ["Kotlin", "Jetpack Compose", "Ktor", "Coil"],
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
