"use client"

import Link from "next/link"
import { ArrowRight, Building2, ClipboardCheck, FileText, HardHat, LineChart, Shield } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-800 to-blue-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Our Services
              </h1>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Comprehensive project management solutions tailored specifically for strata committees
              </p>
            </div>
            <motion.div
              className="mt-8 rounded-xl overflow-hidden shadow-xl max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
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

      {/* Services Section */}
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card id="project-management" className="flex flex-col h-full bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="p-3 w-fit rounded-full bg-teal-100 dark:bg-teal-700 mb-2">
                    <ClipboardCheck className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                  </div>
                  <CardTitle>End-to-End Project Management</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Complete project management from investigation to handover
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600 dark:text-gray-300">
                    We manage your projects from initial investigation through delivery and handover, ensuring every
                    step is handled with expertise and attention to detail. Our comprehensive approach means you can
                    focus on other priorities while we handle the complexities.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Initial site assessment and problem definition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Project planning and scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Budget management and cost control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Regular progress reporting to the committee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Final inspection and project handover</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card id="trade-coordination" className="flex flex-col h-full bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="p-3 w-fit rounded-full bg-teal-100 dark:bg-teal-700 mb-2">
                    <HardHat className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                  </div>
                  <CardTitle>Trade Coordination</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Expert coordination of trades and detailed reporting
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600 dark:text-gray-300">
                    We coordinate all necessary investigation work with trades and provide detailed reports on outcomes.
                    Our technical expertise ensures that the right specialists are engaged for each specific issue.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Selection of appropriate specialists for each task</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Scheduling and coordination of multiple trades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Quality assurance of all work performed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Comprehensive documentation of findings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Clear, jargon-free reporting to the committee</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card id="tender-management" className="flex flex-col h-full bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="p-3 w-fit rounded-full bg-teal-100 dark:bg-teal-700 mb-2">
                    <FileText className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                  </div>
                  <CardTitle>Tender Management</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Professional development of scope and tender documents
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600 dark:text-gray-300">
                    We develop comprehensive scope and tender documents, and facilitate the entire tender process to
                    ensure you receive competitive, comparable quotes from qualified contractors.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Detailed scope of works development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Professional tender document preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Contractor qualification and selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Tender evaluation and comparison</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Contract negotiation assistance</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card id="procurement" className="flex flex-col h-full bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="p-3 w-fit rounded-full bg-teal-100 dark:bg-teal-700 mb-2">
                    <LineChart className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                  </div>
                  <CardTitle>Procurement Strategies</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Optimised procurement for value and financial management
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600 dark:text-gray-300">
                    We optimise procurement strategies to ensure value for money and successful financial management of
                    your project, giving your strata committee confidence that funds are being used effectively.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Multiple quote sourcing and comparison</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Value engineering to optimise costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Transparent cost reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Budget tracking and management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Cost-benefit analysis for major decisions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card id="safety-quality" className="flex flex-col h-full bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="p-3 w-fit rounded-full bg-teal-100 dark:bg-teal-700 mb-2">
                    <Shield className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                  </div>
                  <CardTitle>Safety & Quality Management</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Rigorous site inspections and trade management
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600 dark:text-gray-300">
                    We manage projects from a safety and quality perspective by undertaking regular site inspections and
                    managing trades to ensure all work meets required standards and regulations.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Regular site safety inspections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Quality assurance checks at key milestones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Compliance with building codes and regulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Documentation of safety and quality processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Issue identification and resolution</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card id="regulatory-compliance" className="flex flex-col h-full bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="p-3 w-fit rounded-full bg-teal-100 dark:bg-teal-700 mb-2">
                    <Building2 className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                  </div>
                  <CardTitle>Regulatory Compliance</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Expert assistance with DA applications and compliance
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600 dark:text-gray-300">
                    We help strata committees navigate the complex world of regulatory compliance, including assistance
                    with Development Applications (DAs) and ensuring all work meets relevant building codes and
                    standards.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Development Application preparation and submission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Liaison with council and regulatory bodies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Building code compliance assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Documentation for compliance requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Certification and approval management</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-900 to-blue-900 text-white"
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
              <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Contact us today to discuss how we can help your strata committee manage complex projects with clarity
                and expertise.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="px-8 bg-white text-teal-700 hover:bg-gray-100">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

