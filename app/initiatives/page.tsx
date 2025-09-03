import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Globe, Lightbulb, BookOpen, Play } from "lucide-react"
import initiativesData from "@/data/initiatives.json"

export default function InitiativesPage() {
  const iconMap = {
    min: BookOpen,
    itf: Lightbulb,
    cgi: Globe,
    ise: Target,
    ori: Users,
  }

  return (
    <div className="min-h-screen">
      <section className="relative py-8 lg:py-12 min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/nepal-education-transformation-students-classroom.jpg"
            alt="Students in classroom"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                Our Initiatives
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 leading-tight">
                Transforming <span className="text-primary">Education</span> Through{" "}
                <span className="text-secondary">Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
                Discover our comprehensive ecosystem of educational programs designed to empower students, educators,
                and communities across Nepal and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="group">
                  <Link href="#initiatives">
                    Explore Initiatives{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="group bg-transparent">
                  <Link href="/contact">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Our Story
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-background/80 backdrop-blur-sm border-primary/20 hover-lift">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-3xl font-bold text-primary">10,000+</CardTitle>
                  <CardDescription className="text-sm">Students Reached</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-background/80 backdrop-blur-sm border-secondary/20 hover-lift">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-3xl font-bold text-secondary">500+</CardTitle>
                  <CardDescription className="text-sm">Educators Trained</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-background/80 backdrop-blur-sm border-primary/20 hover-lift">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-3xl font-bold text-primary">200+</CardTitle>
                  <CardDescription className="text-sm">Schools Partnered</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-background/80 backdrop-blur-sm border-secondary/20 hover-lift">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-3xl font-bold text-secondary">15+</CardTitle>
                  <CardDescription className="text-sm">Countries Connected</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section id="initiatives" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Initiatives</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each initiative addresses specific educational needs while working together to create comprehensive impact
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {initiativesData.map((initiative, index) => {
              const IconComponent = iconMap[initiative.id as keyof typeof iconMap] || BookOpen
              return (
                <Card key={initiative.id} className="hover-lift group">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">{initiative.name}</CardTitle>
                          <Badge variant="outline">{initiative.shortName}</Badge>
                        </div>
                        <CardDescription className="text-base">{initiative.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {initiative.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Impact Stats */}
                      <div>
                        <h4 className="font-semibold mb-2">Impact:</h4>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          {Object.entries(initiative.impact).map(([key, value]) => (
                            <div key={key}>
                              <div className="text-lg font-bold text-primary">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Learn More Button */}
                      <Button asChild className="w-full">
                        <Link href={`/initiatives/${initiative.id}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to be part of the change? Join us in transforming education and creating lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Volunteer With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Support Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
