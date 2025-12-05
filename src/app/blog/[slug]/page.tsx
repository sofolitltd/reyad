'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/lib/blog-posts';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SiteHeader } from '@/components/site-header';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function BlogPostPage() {
  const params = useParams();
  const { slug } = params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <div className="flex-1 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the blog post you're looking for.
            </p>
            <Button asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-12">
        <article>
          <header className="relative h-64 md:h-96">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.imageHint}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </header>

          <div className="container -mt-16 md:-mt-24 pb-16">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <Breadcrumb className="mb-8">
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                           <Link href="/" className="flex items-center gap-2">
                            <Home className="w-4 h-4" /> Home
                          </Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>
                        <ChevronRight className="w-4 h-4" />
                      </BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/#blog">Blog</BreadcrumbLink>
                      </BreadcrumbItem>
                       <BreadcrumbSeparator>
                        <ChevronRight className="w-4 h-4" />
                      </BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbPage className="max-w-40 truncate">{post.title}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                
                  <div className="mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                      {post.title}
                    </h1>
                    <div className="text-sm text-muted-foreground flex items-center gap-4">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="prose prose-invert prose-lg max-w-none mx-auto text-foreground">
                    <p className="lead">{post.description}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                    </p>
                    <p>
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
                    </p>
                  </div>

                   <Button
                      variant="ghost"
                      className="mt-8"
                      asChild
                    >
                      <Link href="/#blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to all posts
                      </Link>
                    </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
