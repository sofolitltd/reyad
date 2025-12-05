import type { Project } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ProjectCard } from "./project-card";

const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Campus Assistant",
    description: "A comprehensive education app for university students, featuring course management, campus info, and notifications.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-1-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-1-screenshot")!
      .imageHint,
    tags: ["Flutter", "Firebase", "Figma", "Android", "Web"],
    liveLink: "https://play.google.com/store/apps/details?id=com.sofolit.campusassistant",
  },
  {
    id: "proj-2",
    title: "The Forge",
    description: "A modern portfolio website for The Forge, built with Next.js and Sanity CMS, deployed on Vercel.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-2-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-2-screenshot")!
      .imageHint,
    tags: ["Next.js", "Sanity CMS", "Vercel", "Portfolio"],
    liveLink: "https://theforgebd.vercel.app/",
  },
    {
    id: "proj-3",
    title: "Petelements BD",
    description: "An e-commerce website for a pet shop, built with WordPress. Features product catalog, cart, and online ordering.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-3-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-3-screenshot")!
      .imageHint,
    tags: ["WordPress", "E-commerce", "WooCommerce"],
    liveLink: "https://www.petelementsbd.com/",
  },
  {
    id: "proj-4",
    title: "Wellbeing Clinic",
    description: "A mental health and wellbeing app for psychology support and clinic management. Available on web, Android, and Play Store.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-4-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-4-screenshot")!
      .imageHint,
    tags: ["Mental Health", "Web", "Android", "Psychology", "Flutter"],
    liveLink: "https://wellbeingclinic.web.app/",
  },
  {
    id: "proj-5",
    title: "Blood Finder App",
    description: "A web application to help connect blood donors with recipients in need. Built with Flutter for cross-platform availability.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-5-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-5-screenshot")!
      .imageHint,
    tags: ["Flutter", "Firebase", "Health"],
    liveLink: "https://bloodfinder.web.app/",
  },
  {
    id: "proj-6",
    title: "Certificate Generator",
    description: "A Flutter application for generating and customizing professional certificates from predefined templates.",
    imageUrl: PlaceHolderImages.find((img) => img.id === "project-6-screenshot")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((img) => img.id === "project-6-screenshot")!
      .imageHint,
    tags: ["Flutter", "Dart", "PDF", "GetX"],
    repoLink: "https://github.com/sofolitltd/certificate-generator",
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
