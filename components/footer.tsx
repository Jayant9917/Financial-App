import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-contain"
                  aria-label="Home Loans Logo"
                >
                  <source src="/images/logo/real estate.webm" type="video/webm" />
                </video>
              </div>
              <h3 className="text-lg font-semibold">Shivay Finance</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Making Finance Simple, Fast & Transparent
            </p>
            <div className="flex gap-4">
              <a
                href="tel:+918197222439"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/918197222439"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp us"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#home-loan" className="text-muted-foreground hover:text-primary transition-colors">
                  Home Loan
                </Link>
              </li>
              <li>
                <Link href="/services#mortgage-loan" className="text-muted-foreground hover:text-primary transition-colors">
                  Mortgage Loan
                </Link>
              </li>
              <li>
                <Link href="/services#balance-transfer" className="text-muted-foreground hover:text-primary transition-colors">
                  Balance Transfer
                </Link>
              </li>
              <li>
                <Link href="/services#top-up-loan" className="text-muted-foreground hover:text-primary transition-colors">
                  Top-Up Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+918197222439"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="inline h-4 w-4 mr-2" />
                +91 8197222439
              </a>
              <a
                href="https://wa.me/918197222439"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="inline h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Shivay Finance and Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

