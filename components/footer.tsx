import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/strata-pm-logo.jpg"
                alt="The Strata PM - Remediation Project Management"
                width={180}
                height={54}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Specialized project management expertise for strata committees
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/services#project-management"
                className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"
              >
                Project Management
              </Link>
              <Link
                href="/services#tender-management"
                className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"
              >
                Tender Management
              </Link>
              <Link
                href="/services#safety-quality"
                className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"
              >
                Safety & Quality
              </Link>
              <Link
                href="/services#regulatory-compliance"
                className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"
              >
                Regulatory Compliance
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-teal-600" />
                <span>PO Box 1352, Manly NSW 1655</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-teal-600" />
                <span>0410 635 865</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-teal-600" />
                <a
                  href="mailto:info@thestratapm.com.au"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  info@thestratapm.com.au
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} The Strata PM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
