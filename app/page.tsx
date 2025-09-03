import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Lightbulb, Globe, Heart, Award } from "lucide-react"

export default function HomePage() {
  const impactMetrics = [
    { icon: Users, label: "Students Reached", value: "10,000+", color: "text-primary" },
    { icon: Globe, label: "Communities Engaged", value: "50+", color: "text-secondary" },
    { icon: Lightbulb, label: "Projects Incubated", value: "25+", color: "text-primary" },
    { icon: Award, label: "Awards Won", value: "15+", color: "text-secondary" },
  ]

  const initiatives = [
    {
      name: "Mathematics Initiatives in Nepal",
      shortName: "MIN",
      description: "Transforming mathematics education through enrichment programs and competitions.",
      href: "/initiatives/min",
      image: "/mathematics-education-nepal-students.jpg",
    },
    {
      name: "Initiative for the Future",
      shortName: "ITF",
      description: "Developing essential soft skills through workshops and innovation programs.",
      href: "/initiatives/itf",
      image: "/students-workshop-technology-skills.jpg",
    },
    {
      name: "Connect Globe Initiative",
      shortName: "CGI",
      description: "Fostering international collaborations and global learning opportunities.",
      href: "/initiatives/cgi",
      image: "/international-collaboration-students-global.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh] lg:min-h-[70vh]">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4">
                Transforming Education in Nepal
              </Badge>
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-balance mb-6">
                Empowering Communities Through <span className="text-primary">Innovation</span> and{" "}
                <span className="text-secondary">Education</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground text-pretty mb-6">
                Initiatives Foundation is a social enterprise dedicated to transforming education in Nepal through
                innovative programs, community partnerships, and sustainable impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/about">
                    Learn Our Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/initiatives">Explore Initiatives</Link>
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <Image
                src="/nepal-students-learning-education-community.jpg"
                alt="Students learning in Nepal"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measuring success through the lives we've touched and communities we've empowered
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="pt-6">
                  <metric.icon className={`h-12 w-12 mx-auto mb-4 ${metric.color}`} />
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Flagship Initiatives</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to address Nepal's educational challenges through innovation and community
              engagement
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover-lift group">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={initiative.image || "/initiatives-foundation-default.jpg"}
                    alt={initiative.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{initiative.shortName}</Badge>
                  </div>
                  <CardTitle className="text-xl">{initiative.name}</CardTitle>
                  <CardDescription>{initiative.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href={initiative.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/initiatives">
                View All Initiatives <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Be part of the transformation. Whether through volunteering, partnerships, or donations, your contribution
            makes a lasting impact on Nepal's educational landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Volunteer With Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
