import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Clock,
  Award,
  BookOpen,
  Laptop,
  Globe,
  Target,
  Lightbulb,
  Microscope,
  GraduationCap,
  TrendingUp,
} from "lucide-react"
import programsData from "@/data/programs.json"

const iconMap = {
  BookOpen,
  Award,
  Laptop,
  Users,
  Globe,
  Target,
  Microscope,
  Lightbulb,
}

export default function ProgramsPage() {
  const { programs, categories } = programsData

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Professional":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "University Level":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
      case "Graduate Level":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "Entrepreneur":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="min-h-screen">
      <section className="relative py-8 lg:py-12 min-h-[50vh] lg:min-h-[60vh] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/mathematics-enrichment-students-problem-solving.jpg"
            alt="Students learning together"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                Our Programs
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 leading-tight">
                Comprehensive <span className="text-primary">Learning</span> Programs for{" "}
                <span className="text-secondary">Every Stage</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
                From mathematics enrichment to global exchanges, our diverse programs cater to learners at every level,
                providing pathways for growth, skill development, and meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="group">
                  <Link href="#programs">
                    Browse Programs{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>

            {/* Program Highlights */}
            <div className="space-y-6">
              <Card className="bg-background/80 backdrop-blur-sm border-primary/20 hover-lift">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <TrendingUp className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <CardTitle className="text-lg">Active Programs</CardTitle>
                    <CardDescription>Currently running {programs.length} specialized programs</CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-background/80 backdrop-blur-sm border-secondary/20 hover-lift">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Users className="h-8 w-8 text-secondary mr-3" />
                  <div>
                    <CardTitle className="text-lg">All Skill Levels</CardTitle>
                    <CardDescription>From beginner to graduate level programs</CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-background/80 backdrop-blur-sm border-primary/20 hover-lift">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Globe className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <CardTitle className="text-lg">Global Reach</CardTitle>
                    <CardDescription>Programs connecting local and international opportunities</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our programs span multiple domains, each designed to address specific learning needs and career goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap]
              return (
                <Card key={category.id} className="text-center hover-lift">
                  <CardHeader>
                    <IconComponent className={`h-8 w-8 mx-auto mb-2 text-${category.color}`} />
                    <CardTitle className="text-sm">{category.name}</CardTitle>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programs" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Available Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of programs designed to empower learners at every stage of their journey
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program) => {
              const IconComponent = iconMap[program.icon as keyof typeof iconMap]
              return (
                <Card key={program.id} className="hover-lift group">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{program.title}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {program.initiative}
                          </Badge>
                        </div>
                        <CardDescription>{program.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Program Details */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{program.participants}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{program.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{program.nextBatch}</span>
                        </div>
                      </div>

                      {/* Level Badge */}
                      <div>
                        <Badge className={getLevelColor(program.level)}>{program.level}</Badge>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {program.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Schedule */}
                      <div className="text-sm">
                        <span className="font-semibold">Schedule: </span>
                        <span className="text-muted-foreground">{program.schedule}</span>
                      </div>

                      {/* Apply Button */}
                      <Button asChild className="w-full">
                        <Link href="/contact">
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Application Process */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps to join our programs and start your learning journey
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-lg">Choose Program</CardTitle>
                <CardDescription>
                  Browse our programs and select the one that matches your interests and goals
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-lg">Submit Application</CardTitle>
                <CardDescription>Fill out the application form with your details and motivation letter</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-lg">Interview Process</CardTitle>
                <CardDescription>
                  Participate in our selection process including interviews and assessments
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <CardTitle className="text-lg">Start Learning</CardTitle>
                <CardDescription>Join your cohort and begin your transformative learning experience</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards your learning journey. Apply now or get in touch to learn more about our
              programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get More Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
