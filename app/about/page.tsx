import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Eye, Heart, Users, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from program design to implementation.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach our work with empathy and understanding, putting the needs of our communities first.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnerships and work together to achieve greater impact.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We embrace creative solutions and cutting-edge approaches to solve educational challenges.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4">
                Our Story
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                From <span className="text-primary">Vision</span> to <span className="text-secondary">Impact</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8">
                What started as Mathematics Initiatives in Nepal (MIN) has evolved into a comprehensive ecosystem of
                educational programs that are transforming lives across Nepal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Volunteer With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Partner With Us</Link>
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <Image
                src="/nepal-education-foundation-team-working-together.jpg"
                alt="Initiatives Foundation team"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  To transform education in Nepal by creating innovative, accessible, and impactful programs that
                  empower students, educators, and communities to reach their full potential and contribute to
                  sustainable development.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  A Nepal where every individual has access to quality education and opportunities for growth, where
                  innovation thrives, and where communities are empowered to create lasting positive change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our approach to creating lasting change
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to make a difference? There are many ways to get involved and support our work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Volunteer <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
