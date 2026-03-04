"use client"

import Link from "next/link"
import { ArrowRight, Building2, CheckCircle, ClipboardCheck, FileText, HardHat, LineChart, Shield } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-teal-800 to-blue-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Expert Project Management for Strata Committees
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Comprehensive project management solutions tailored specifically for strata committees. From initial
                investigation to final handover, we ensure your projects are delivered with expertise and clarity.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact">
                <Button size="lg" className="px-8 bg-white text-teal-700 hover:bg-gray-100">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="px-8 border-white text-black bg-white hover:bg-gray-100">
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Overview Section */}
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-700 dark:text-teal-400">Our Services</h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed dark:text-gray-300">
                Comprehensive project management solutions tailored specifically for strata committees
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="p-3 w-fit rounded-full bg-teal-100 dark:bg-teal-700 mb-2">
                    <ClipboardCheck className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                  </div>
                  <CardTitle>End-to-End Project Management</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Complete project management from investigation to handover
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    We manage your projects from initial investigation through delivery and handover, ensuring every
                    step is handled with expertise.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="p-3 w-fit rounded-full bg-teal-100 dark:bg-teal-700 mb-2">
                    <FileText className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                  </div>
                  <CardTitle>Tender Management</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Professional development of scope and tender documents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    We develop comprehensive scope and tender documents to ensure you receive competitive, comparable
                    quotes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="p-3 w-fit rounded-full bg-teal-100 dark:bg-teal-700 mb-2">
                    <Shield className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                  </div>
                  <CardTitle>Safety & Quality Management</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Rigorous site inspections and trade management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Regular site inspections and quality management to ensure all work meets required standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Why Choose The Strata PM?
              </h2>
              <p className="text-gray-700 md:text-lg dark:text-gray-300">
                With over 15 years of experience in managing complex infrastructure and construction projects, we bring
                specialized expertise to your strata committee.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-2 shrink-0 mt-0.5" />
                  <span>Advanced project management methodologies adapted for strata projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-2 shrink-0 mt-0.5" />
                  <span>Technical expertise from major infrastructure projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-2 shrink-0 mt-0.5" />
                  <span>Transparent processes and clear communication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-2 shrink-0 mt-0.5" />
                  <span>Value for money through optimized procurement strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-2 shrink-0 mt-0.5" />
                  <span>Proven track record of delivering projects on time and on budget</span>
                </li>
              </ul>
              <Link href="/about">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construction-project-management-guide-1024x576.jpg-hk2uyWFugkc5ghleIvCmdpvhF7bjRM.jpeg"
                alt="Construction professionals reviewing blueprints"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-teal-900 to-blue-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Ready to Get Started?
              </h2>
              <p className="max-w-[600px] text-white md:text-xl/relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Contact us today to discuss how we can help your strata committee manage complex projects with clarity
                and expertise.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="px-8 bg-white text-teal-700 hover:bg-gray-100">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="px-8 border-white text-black bg-white hover:bg-gray-100">
                  View Our Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
