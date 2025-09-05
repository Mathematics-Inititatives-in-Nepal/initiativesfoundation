import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, User, ArrowRight } from "lucide-react"
import blogsData from "@/data/blogs.json"

export const metadata: Metadata = {
  title: "Blog - Initiatives Foundation",
  description:
    "Explore the latest news, stories, and insights from Initiatives Foundation. Read about our educational programs, community impact, and transformative initiatives in Nepal.",
  keywords: [
    "Initiatives Foundation Blog",
    "Education News Nepal",
    "Nepal Education Stories",
    "Community Impact Nepal",
    "Educational Initiatives",
    "Transformative Education",
  ],
  openGraph: {
    title: "Blog - Initiatives Foundation",
    description:
      "Explore the latest news, stories, and insights from Initiatives Foundation. Read about our educational programs, community impact, and transformative initiatives in Nepal.",
    url: "https://www.initiativesfoundation.org/blog",
    siteName: "Initiatives Foundation",
    images: [
      {
        url: "https://www.initiativesfoundation.org/images/blog-default-featured.jpg",
        width: 800,
        height: 600,
        alt: "Initiatives Foundation Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Initiatives Foundation",
    description:
      "Explore the latest news, stories, and insights from Initiatives Foundation. Read about our educational programs, community impact, and transformative initiatives in Nepal.",
    creator: "@initiativesfdn",
    images: ["https://www.initiativesfoundation.org/images/blog-default-featured.jpg"],
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, stories, and updates from our journey of transforming education in Nepal
          </p>
        </div>

        {/* Featured Post */}
        {blogsData.length > 0 && (
          <div className="mb-16">
            <Card className="overflow-hidden hover-lift">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto">
                  <Image
                    src={blogsData[0].image || "/images/blog-default-featured.jpg"}
                    alt={blogsData[0].title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    Featured Post
                  </Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-balance">{blogsData[0].title}</h2>
                  <p className="text-muted-foreground mb-6 text-pretty">{blogsData[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {blogsData[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {new Date(blogsData[0].date).toLocaleDateString()}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${blogsData[0].slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.slice(1).map((post) => (
            <Card key={post.id} className="hover-lift group">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/images/blog-default-post.jpg"}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More articles coming soon. Stay tuned for updates on our educational initiatives!
          </p>
        </div>
      </div>
    </div>
  )
}
