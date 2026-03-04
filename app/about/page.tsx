"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-r from-teal-800 to-blue-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                About Us
              </h1>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Specialised project management expertise for strata committees
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Founder Section - Payright-style layout */}
      <motion.section
        className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="flex flex-col items-center text-center lg:items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-white dark:border-gray-700">
                <img
                  src="/kate-gibbs-headshot.jpg"
                  alt="Kate Gibbs - Founder & Managing Director"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Kate Gibbs</h2>
              <p className="text-teal-600 dark:text-teal-400 font-medium text-lg mt-1">Founder & Managing Director</p>
            </motion.div>
            <motion.div
              className="flex flex-col space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 md:text-xl/relaxed dark:text-gray-300">
                Kate brings over 15 years of experience in managing complex infrastructure and construction
                projects across aviation, government, and private sectors.
              </p>
              <p className="text-gray-700 md:text-xl/relaxed dark:text-gray-300">
                With a background in major terminal refurbishments, runway projects, and building remediation, she applies
                the same rigorous project management methodologies to your strata needs.
              </p>
              <p className="text-gray-700 md:text-xl/relaxed dark:text-gray-300">
                This wealth of experience ensures your strata committee receives professional guidance that combines
                technical expertise with practical know-how.
              </p>
              <div className="rounded-xl border bg-white p-6 shadow-sm dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-4">How This Benefits You</h3>
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
                    <span>Experience with complex stakeholder management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 shrink-0 mt-0.5" />
                    <span>Knowledge of regulatory compliance and council requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 shrink-0 mt-0.5" />
                    <span>Proven track record of delivering projects on time and on budget</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Approach Section - Continuous gradient with previous section */}
      <motion.section
        className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Approach</h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                What makes our project management services different
              </p>
            </div>
            <div className="mt-8"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold">Technical Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We bring specialised building and engineering knowledge to every project, complementing your strata
                manager's administrative expertise with our technical focus.
              </p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold">Transparent Processes</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in complete transparency throughout the project lifecycle, from initial investigation to
                final handover, keeping your committee informed every step of the way.
              </p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold">Value for Money</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our procurement strategies and tender management processes ensure you're getting the best value for your
                strata funds, with multiple quotes and optimised approaches.
              </p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold">Clear Communication</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We translate complex technical information into clear, jargon-free reports and updates that your entire
                strata committee can understand and act upon.
              </p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold">Regulatory Knowledge</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We navigate the complex world of building regulations, council requirements, and compliance issues,
                ensuring your projects meet all necessary standards.
              </p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold">Dedicated Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We focus exclusively on your technical projects, complementing your strata manager's services and giving
                your project the specialised attention and expertise it deserves.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-r from-teal-900 to-blue-900 text-white"
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

