"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
            {/* Project 1 - Fire Safety Compliance */}
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
                    alt="Fire safety compliance project"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Fire Safety Compliance</CardTitle>
                  <CardDescription>Major Transport Hub, $20M Project Value</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Project Managed the fire system upgrade for a major transport hub building. Work completed within budget
                    and program without impacting operations. Required high-level stakeholder engagement and contractor
                    negotiations. Successfully challenged scope of work and specification in line with fire compliance
                    requirements, reducing overall project scope and saving the client $1M. Met Heritage Consultants
                    requirements leading to specialist project completion report issued.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 2 - Building Facade Remediation */}
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
                    alt="Building facade remediation project"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Building Facade Remediation</CardTitle>
                  <CardDescription>Multi-Storey High Rise, Northern Beaches</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Structural and aesthetic remediation of a multi-storey high rise including painting colour change,
                    bespoke external shutter replacement, and negotiating budget and delivery program with Strata and
                    Contractors.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 3 - Retaining Wall Remediation */}
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
                    alt="Retaining wall remediation project"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Retaining Wall Remediation</CardTitle>
                  <CardDescription>Multi-Storey High Rise, Northern Beaches</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Design changes to enhance strength and reduce or eliminate risk of the same failure occurring in the
                    future. Project Management included stakeholder management, strata budget and scope approval.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 4 - Internal Lift Replacement */}
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
                    alt="Lift replacement project"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Internal Lift Replacement</CardTitle>
                  <CardDescription>Commercial Buildings, Mascot - $300K to $1.2M</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Lift replacement for multiple commercial buildings. Project management included working with clients
                    through the design phase to ensure scope completeness and avoid variations, design review and shop
                    drawing review and sign-off, stakeholder engagement and contractor management.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 5 - Common Area Refurbishment */}
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
                    alt="Common area refurbishment project"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Common Area Refurbishment</CardTitle>
                  <CardDescription>Private & Commercial Properties - $100K to $50M</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Project Managed common area refurbishment works for both private and commercial properties from design,
                    through tendering of work, construction and through to completion.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 6 - Complex Investigation & Remediation */}
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
                    alt="Complex investigation and remediation project"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Complex Investigation & Remediation</CardTitle>
                  <CardDescription>Multi-Storey High Rise, Northern Beaches</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Resolved a high-risk situation on a multi-storey high rise that included destructive investigation,
                    structural engineering, and multiple trades. Project Management included developing the scope in
                    consultation with the Strata Committee, stakeholder engagement for access, managing budget and trades
                    throughout, ensuring only budgeted and approved work was undertaken and providing transparency to
                    Committee and Contractors through to completion.
                  </p>
                </CardContent>
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

