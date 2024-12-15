import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Global Offices</h3>
            <div className="space-y-6 text-zinc-400">
              <div>
                <h4 className="font-medium mb-2">India</h4>
                <address className="not-italic">
                  NovaTrail Energy<br />
                  Bangalore, India - 560001
                </address>
              </div>
              <div>
                <h4 className="font-medium mb-2">USA</h4>
                <address className="not-italic">
                  NovaTrail Energy<br />
                  1234 Solar Lane<br />
                  San Francisco, CA, 94107<br />
                  USA
                </address>
              </div>
              <div>
                <h4 className="font-medium mb-2">Dubai</h4>
                <address className="not-italic">
                  NovaTrail Energy<br />
                  Downtown Dubai<br />
                  UAE - PO Box 12345
                </address>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-zinc-50">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-zinc-50">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-zinc-50">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-zinc-50">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-zinc-400">
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@novatrail.com</p>
              <p>Support: support@novatrail.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2 text-zinc-400">
              <Link href="#" className="block hover:text-zinc-50">
                About Us
              </Link>
              <Link href="#" className="block hover:text-zinc-50">
                Services
              </Link>
              <Link href="#" className="block hover:text-zinc-50">
                Projects
              </Link>
              <Link href="#" className="block hover:text-zinc-50">
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-400">
          <p>&copy; {new Date().getFullYear()} NovaTrail Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

