"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsPage() {
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
                Our Projects
              </h1>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Showcasing our expertise in strata and commercial property remediation
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-800 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fire-rating-Remedial-Building-Services-scaled.jpg-KY6XagxDI4KErYSKCoz47kBGt4eg8A.jpeg"
                    alt="Waterproofing project"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Waterproofing Remediation</CardTitle>
                  <CardDescription>North Sydney Apartment Complex</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Comprehensive waterproofing remediation for a 12-storey apartment building experiencing significant
                    water ingress issues. Our team coordinated multiple trades to identify and resolve complex
                    structural problems.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-800 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Free-Software-for-Construction-Project-Management.jpg-vxSa59BpoxZBzo2acE52soPTVStKds.jpeg"
                    alt="Facade restoration project"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Façade Restoration</CardTitle>
                  <CardDescription>Heritage Building, Sydney CBD</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Restoration of a heritage-listed building façade requiring specialised trades and materials. Our
                    project management ensured compliance with heritage requirements while delivering on time and within
                    budget.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-800 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construction-project-management-guide-1024x576.jpg-hk2uyWFugkc5ghleIvCmdpvhF7bjRM.jpeg"
                    alt="Structural repair project"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Structural Repairs</CardTitle>
                  <CardDescription>Commercial Building, Parramatta</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Major structural repair project for a commercial property requiring careful planning and execution.
                    We managed the entire process from initial assessment through to completion, minimising disruption
                    to tenants.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Project 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-800 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HERO%20-%20Construction%20Project%20Management%20Software%20vs%20Construction%20Operations-dx8fW9POVz8GhL4qSkV7cGhnfNdlYV.webp"
                    alt="Building compliance upgrade"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Fire Safety Compliance</CardTitle>
                  <CardDescription>Residential Tower, Eastern Suburbs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Comprehensive fire safety compliance upgrade for a 20-storey residential tower. Our team coordinated
                    with fire engineers, council representatives, and multiple trades to ensure full compliance with
                    current regulations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Project 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-800 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CS-0538_More-PRST-Article-Images_SelectingACOnstructionStaffingAgency_InPostImage_1000x460-1000x460-qNOIjP070AClSNAIi0u0k2DWnanFB5.png"
                    alt="Building upgrade project"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Common Area Refurbishment</CardTitle>
                  <CardDescription>Luxury Apartments, North Shore</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Complete refurbishment of common areas in a premium apartment complex. Our project management
                    ensured minimal disruption to residents while delivering a high-quality finish that enhanced
                    property values.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Project 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-800 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen-Shot-2024-10-09-at-3.43.25-pm-c92UdGfZNpMihFZQtKJfZwNmF3QB5x.png"
                    alt="Balcony remediation project"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Balcony Waterproofing</CardTitle>
                  <CardDescription>Beachside Apartments, Northern Beaches</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Comprehensive balcony waterproofing and tiling project for a beachside apartment complex. Our team
                    managed the complex logistics of working on multiple balconies while ensuring minimal disruption to
                    residents.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
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
                Have a Similar Project?
              </h2>
              <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Contact us today to discuss how we can help with your strata or commercial property remediation needs.
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

