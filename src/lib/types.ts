import { LucideIcon } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  repoLink?: string;
  liveLink?: string;
};

export type Skill = {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  icon: React.ComponentType<{ className?: string }> | LucideIcon;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  date: string;
  author: string;
  content: string;
};
