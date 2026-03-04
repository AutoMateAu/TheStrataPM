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
                        PO Box 1352
                        <br />
                        Manly NSW 1655
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Mobile</p>
                      <p className="text-gray-600 dark:text-gray-300">0410 635 865</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:info@thestratapm.com.au"
                        className="text-teal-600 hover:underline dark:text-teal-400"
                      >
                        info@thestratapm.com.au
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
                Servicing Sydney&apos;s Northern Beaches and beyond
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border shadow-lg h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26543.48378399498!2d151.2696!3d-33.7969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a9c94e3db8f1%3A0x5017d681632b870!2sManly%20NSW%201655!5e0!3m2!1sen!2sau!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Strata PM location - Manly, NSW"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

