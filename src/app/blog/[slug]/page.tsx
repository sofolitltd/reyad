
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
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostContent } from '@/app/components/blog-post-content';


type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Reyad's Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-12">
        <article>
          <header className="relative h-64 md:h-96">
            <Image
              src={post.imageUrl}
              alt={post.imageHint}
              fill
              className="object-cover"
              data-ai-hint={post.imageHint}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </header>

          <div className="container pb-16">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6">
                    <Breadcrumb className="mb-4">
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
                          <BreadcrumbLink href="/#blog" asChild>
                            <a href="/#blog">Blog</a>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                          <ChevronRight className="w-4 h-4" />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                          <BreadcrumbPage className="max-w-40 truncate">{post.title}</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                      {post.title}
                    </h1>
                    <div className="text-sm text-muted-foreground flex items-center gap-4">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <BlogPostContent content={post.content} />

                   <Button
                      variant="ghost"
                      className="mt-8"
                      asChild
                    >
                      <a href="/#blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to all posts
                      </a>
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
