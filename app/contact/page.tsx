"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Form submitted",
      description: "We'll get back to you as soon as possible.",
    })

    setIsSubmitting(false)

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Reduced padding */}
      <section className="w-full py-8 md:py-12 bg-gradient-to-r from-teal-800 to-blue-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Contact Us
              </h1>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Get in touch to discuss how we can help your strata committee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Reduced top padding */}
      <section className="w-full pt-8 pb-12 md:py-16 lg:py-24 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" name="first-name" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" name="last-name" required />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select name="inquiry-type" defaultValue="general">
                      <SelectTrigger id="inquiry-type">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="project">Project Management</SelectItem>
                        <SelectItem value="tender">Tender Management</SelectItem>
                        <SelectItem value="water">Water Ingress Issues</SelectItem>
                        <SelectItem value="da">DA Application Assistance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your project or inquiry..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Strata Street
                        <br />
                        Sydney NSW 2000
                        <br />
                        Australia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600 dark:text-gray-300">(02) 1234 5678</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Mobile: 0400 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">info@stratafix.com.au</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        For quotes: quotes@stratafix.com.au
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        For support: support@stratafix.com.au
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal-600 shrink-0 mt-0.5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a
                        href="https://linkedin.com/company/stratafix"
                        className="text-teal-600 hover:underline dark:text-teal-400"
                      >
                        linkedin.com/company/stratafix
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal-600 shrink-0 mt-0.5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <div>
                      <p className="font-medium">Facebook</p>
                      <a
                        href="https://facebook.com/stratafix"
                        className="text-teal-600 hover:underline dark:text-teal-400"
                      >
                        facebook.com/stratafix
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-6 bg-white dark:bg-gray-800">
                <h2 className="text-xl font-bold mb-4">How We Can Help</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Whether you're dealing with water ingress issues, need help with a DA application, or want to ensure
                  your strata committee is getting value for money on a major project, we're here to help. Our
                  specialised technical expertise complements your strata manager's services for complex building
                  projects.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Contact us today for a no-obligation discussion about your strata project management needs.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4">Office Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p>Monday - Friday</p>
                    <p>9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Saturday</p>
                    <p>By appointment</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Sunday</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Location</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                Conveniently located in Sydney's CBD
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border shadow-lg h-[400px] w-full bg-white dark:bg-gray-800 flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-300">Map would be displayed here</p>
          </div>
        </div>
      </section>
    </div>
  )
}

