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
import { posts } from "@/lib/blog-posts";

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12 font-headline">
        From the Blog
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
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
