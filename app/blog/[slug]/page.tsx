import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, User, ArrowLeft, Share2 } from "lucide-react"
import blogsData from "@/data/blogs.json"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogsData.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found - Initiatives Foundation",
      description: "The blog post you are looking for does not exist.",
    }
  }

  return {
    title: `${post.title} - Initiatives Foundation`,
    description: post.excerpt,
    keywords: [...post.tags, "Initiatives Foundation", "Blog", "Nepal"],
    openGraph: {
      title: `${post.title} - Initiatives Foundation`,
      description: post.excerpt,
      url: `https://www.initiativesfoundation.org/blog/${post.slug}`,
      siteName: "Initiatives Foundation",
      images: [
        {
          url: post.image || "https://www.initiativesfoundation.org/images/blog-default-article.jpg",
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - Initiatives Foundation`,
      description: post.excerpt,
      creator: "@initiativesfdn",
      images: [post.image || "https://www.initiativesfoundation.org/images/blog-default-article.jpg"],
    },
  }
}



interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogsData.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogsData.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="mb-12">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">{post.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>
            <p className="text-xl text-muted-foreground text-pretty">{post.excerpt}</p>
          </div>

          {/* Featured Image */}
          <div className="aspect-video mb-8 overflow-hidden rounded-lg">
            <Image
              src={post.image || "/images/blog-default-article.jpg"}
              alt={post.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Share this article</h3>
                <p className="text-muted-foreground">Help spread the word about our mission</p>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group block">
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={relatedPost.image || "/images/blog-default-related.jpg"}
                      alt={relatedPost.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
                    <span>{relatedPost.author}</span>
                    <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }))
}
