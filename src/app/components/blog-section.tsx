import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const posts: Post[] = [
  {
    id: "blog-1",
    title: "Mastering State Management in Jetpack Compose",
    description:
      "A deep dive into different state management patterns in Jetpack Compose, from simple state hoisting to using ViewModels and Hilt.",
    imageUrl: PlaceHolderImages.find((p) => p.id === "blog-1-thumbnail")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((p) => p.id === "blog-1-thumbnail")!
      .imageHint,
    date: "July 15, 2024",
    author: "Reyad",
  },
  {
    id: "blog-2",
    title: "Building Dynamic UIs with Compose Modifiers",
    description:
      "Explore tips and tricks for creating stunning and responsive user interfaces using Jetpack Compose's powerful modifier system.",
    imageUrl: PlaceHolderImages.find((p) => p.id === "blog-2-thumbnail")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((p) => p.id === "blog-2-thumbnail")!
      .imageHint,
    date: "June 28, 2024",
    author: "Reyad",
  },
  {
    id: "blog-3",
    title: "Android & Firebase: A Powerful Combination",
    description:
      "Learn how to integrate Firebase into your Android app for backend services like authentication, Firestore, and cloud functions.",
    imageUrl: PlaceHolderImages.find((p) => p.id === "blog-3-thumbnail")!
      .imageUrl,
    imageHint: PlaceHolderImages.find((p) => p.id === "blog-3-thumbnail")!
      .imageHint,
    date: "May 10, 2024",
    author: "Reyad",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12 font-headline">
        From the Blog
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href="#" key={post.id}>
            <Card className="flex flex-col h-full overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg">
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint={post.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-lg font-bold mb-2 font-headline">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0 text-xs text-muted-foreground flex justify-between">
                <span>{post.date}</span>
                <span>By {post.author}</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
