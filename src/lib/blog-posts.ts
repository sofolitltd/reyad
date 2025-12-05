import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Post } from "@/lib/types";

export const posts: Post[] = [
  {
    id: "blog-1",
    title: "Advanced State Management in Flutter with Riverpod",
    description:
      "A comprehensive guide to leveraging Riverpod for scalable and maintainable state management in your Flutter applications.",
    imageUrl: PlaceHolderImages.find((p) => p.id === "blog-1-thumbnail")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((p) => p.id === "blog-1-thumbnail")!
      .imageHint,
    date: "July 18, 2024",
    author: "Reyad",
  },
  {
    id: "blog-2",
    title: "Creating Custom Animations with Flutter's AnimationController",
    description:
      "Unlock the power of custom animations in Flutter. Learn how to use AnimationController and Tweens to bring your UI to life.",
    imageUrl: PlaceHolderImages.find((p) => p.id === "blog-2-thumbnail")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((p) => p.id === "blog-2-thumbnail")!
      .imageHint,
    date: "June 30, 2024",
    author: "Reyad",
  },
  {
    id: "blog-3",
    title: "Integrating Firebase into Your Flutter App",
    description:
      "Step-by-step tutorial on adding Firebase for backend services like Authentication, Firestore, and Cloud Functions to your Flutter project.",
    imageUrl: PlaceHolderImages.find((p) => p.id === "blog-3-thumbnail")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((p) => p.id === "blog-3-thumbnail")!
      .imageHint,
    date: "May 22, 2024",
    author: "Reyad",
  },
];
