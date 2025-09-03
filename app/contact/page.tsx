"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  Users,
  Handshake,
  GraduationCap,
  MessageCircle,
  Clock,
  Globe,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "",
    program: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this to your backend
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@initiativesfoundation.org",
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+977-1-4567890",
      description: "Available Monday to Friday, 9 AM - 6 PM NPT",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Kathmandu, Nepal",
      description: "Schedule an appointment to visit our main office",
    },
    {
      icon: Globe,
      title: "Follow Us",
      details: "@InitiativesFoundation",
      description: "Stay updated with our latest news and programs",
    },
  ]

  const inquiryTypes = [
    { value: "volunteer", label: "Volunteer Opportunities", icon: Heart },
    { value: "partnership", label: "Partnership & Collaboration", icon: Handshake },
    { value: "program", label: "Program Information", icon: GraduationCap },
    { value: "donation", label: "Donations & Support", icon: Users },
    { value: "general", label: "General Inquiry", icon: MessageCircle },
  ]

  const programs = [
    "Mathematics Enrichment Program",
    "Teacher Training Program",
    "Coding Bootcamp",
    "Soft Skills Workshop",
    "Global Exchange Program",
    "Startup Incubator",
    "Research Fellowship",
    "Innovation Lab",
    "Other",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              Let's <span className="text-primary">Connect</span> and Create{" "}
              <span className="text-secondary">Impact</span> Together
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8">
              Whether you want to volunteer, partner with us, apply for programs, or simply learn more about our work,
              we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ways to Reach Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the method that works best for you. We're here to help and answer any questions you may have.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="text-center hover-lift">
                  <CardHeader>
                    <IconComponent className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                    <CardDescription className="font-semibold text-foreground">{info.details}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Form */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+977-XXX-XXXXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization (Optional)</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange("organization", e.target.value)}
                        placeholder="Your organization"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Type of Inquiry *</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleInputChange("inquiryType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Program Selection (conditional) */}
                  {formData.inquiryType === "program" && (
                    <div className="space-y-2">
                      <Label htmlFor="program">Program of Interest</Label>
                      <Select value={formData.program} onValueChange={(value) => handleInputChange("program", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent>
                          {programs.map((program) => (
                            <SelectItem key={program} value={program}>
                              {program}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  {/* Newsletter Subscription */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for updates on programs and initiatives
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full" size="lg">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Response Time Info */}
            <Card className="bg-primary/5 border-primary/20 mt-6">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Quick Response</h4>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our programs and organization
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">How can I apply for programs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can apply through our contact form by selecting "Program Information" as your inquiry type, or
                  visit our Programs page for specific application details.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">Are programs free to join?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most of our programs are free or offered at minimal cost. We believe in making quality education
                  accessible to all, regardless of financial background.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">Can international students participate?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Many of our programs welcome international participants, especially our global exchange and
                  online programs. Contact us for specific eligibility requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">How can organizations partner with you?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We welcome partnerships with educational institutions, NGOs, and corporations. Reach out through our
                  partnership inquiry option to discuss collaboration opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
