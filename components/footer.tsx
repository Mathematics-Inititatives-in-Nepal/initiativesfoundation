import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo-if.png" alt="Initiatives Foundation" width={32} height={32} className="h-8 w-auto" />
              <span className="font-bold text-lg">Initiatives Foundation</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming education in Nepal through innovative programs and community partnerships.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Initiatives
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog & Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <h3 className="font-semibold mb-4">Our Initiatives</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/initiatives/min" className="text-muted-foreground hover:text-primary transition-colors">
                  Mathematics Initiatives (MIN)
                </Link>
              </li>
              <li>
                <Link href="/initiatives/itf" className="text-muted-foreground hover:text-primary transition-colors">
                  Initiative for the Future (ITF)
                </Link>
              </li>
              <li>
                <Link href="/initiatives/cgi" className="text-muted-foreground hover:text-primary transition-colors">
                  Connect Globe Initiative (CGI)
                </Link>
              </li>
              <li>
                <Link href="/initiatives/ise" className="text-muted-foreground hover:text-primary transition-colors">
                  Social Entrepreneurship (ISE)
                </Link>
              </li>
              <li>
                <Link href="/initiatives/ori" className="text-muted-foreground hover:text-primary transition-colors">
                  Open Research Initiative (ORI)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">info@initiativesfoundation.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+977-1-XXXXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Initiatives Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
