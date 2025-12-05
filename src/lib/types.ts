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
  proficiency: number;
  icon: React.ComponentType<{ className?: string }> | LucideIcon;
};

export type Post = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  date: string;
  author: string;
};
