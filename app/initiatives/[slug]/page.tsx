import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import initiativesData from "@/data/initiatives.json"

interface Initiative {
  id: string
  name: string
  shortName: string
  description: string
  image: string
  features: string[]
  impact: Record<string, string | undefined>
}

export async function generateStaticParams() {
  return initiativesData.map((initiative) => ({
    slug: initiative.id,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const initiative = initiativesData.find((init) => init.id === params.slug)

  if (!initiative) {
    return {
      title: "Initiative Not Found - Initiatives Foundation",
      description: "The initiative you are looking for does not exist.",
    }
  }

  return {
    title: `${initiative.name} - Initiatives Foundation`,
    description: initiative.description,
    keywords: [
      `${initiative.name} Initiatives Foundation`,
      `${initiative.shortName} program`,
      "Initiatives Foundation",
      "Nepal education",
      ...initiative.features.map((f) => f.toLowerCase()),
    ],
    openGraph: {
      title: `${initiative.name} - Initiatives Foundation`,
      description: initiative.description,
      url: `https://www.initiativesfoundation.org/initiatives/${initiative.id}`,
      siteName: "Initiatives Foundation",
      images: [
        {
          url: initiative.image || "https://www.initiativesfoundation.org/images/initiative-default-detail.jpg",
          width: 800,
          height: 600,
          alt: initiative.name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${initiative.name} - Initiatives Foundation`,
      description: initiative.description,
      creator: "@initiativesfdn",
      images: [initiative.image || "https://www.initiativesfoundation.org/images/initiative-default-detail.jpg"],
    },
  }
}

export default function InitiativePage({ params }: { params: { slug: string } }) {
  const initiative = initiativesData.find((init) => init.id === params.slug) as Initiative

  if (!initiative) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <div className="h-48 md:h-64 lg:h-72 relative">
          <Image
            src={initiative.image || "/images/initiative-default-detail.jpg"}
            alt={initiative.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              {initiative.shortName}
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance leading-tight">
              {initiative.name}
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed">
              {initiative.description}
            </p>
          </div>
        </div>

        <div className="absolute top-4 left-4 z-10">
          <Link
            href="/initiatives"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Initiatives</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-12 md:py-16">
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">About This Initiative</h2>
            <div className="bg-muted/20 rounded-2xl p-6 md:p-8">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {initiative.name} represents our commitment to creating meaningful change through targeted action.
                  This initiative focuses on {initiative.description.toLowerCase()} and has been designed to address
                  specific challenges while creating sustainable solutions for the future.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Through collaborative efforts and innovative approaches, we work with communities, institutions, and
                  partners to ensure maximum impact and lasting change.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What We Do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                Our comprehensive approach ensures maximum impact through these key activities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {initiative.features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 border border-muted/50 p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-1 w-8 bg-primary/30 rounded-full"></div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          Activity {index + 1}
                        </span>
                      </div>
                      <p className="text-foreground leading-relaxed text-sm md:text-base font-medium">{feature}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 md:p-10 border border-primary/10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Make a Difference?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Join us in making a difference through {initiative.name}. There are many ways to contribute to this
              initiative and create lasting impact in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/contact">
                  <Users className="h-4 w-4 mr-2" />
                  Get Involved
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent" asChild>
                <Link href="/initiatives">View All Initiatives</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
