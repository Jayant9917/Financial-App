'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollClick = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // If we're on a different page, navigate to home first, then scroll
    if (pathname !== '/') {
      router.push('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      // If we're already on home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-t-1 border-purple-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-2 shadow-sm overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover scale-110"
                  aria-label="Shivay Finance Logo"
                  style={{ display: 'block', margin: 0, padding: 0 }}
                >
                  <source src="/images/logo/real-estate.webm" type="video/webm" />
                </video>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Shivay Finance</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xs">
              Making Finance Simple, Fast & Transparent
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="tel:+918197222439"
                className="text-blue-600 hover:text-blue-700 transition-all duration-200 p-2 hover:bg-blue-50 rounded-lg hover:shadow-sm"
                aria-label="Call us"
              >
                <div className="h-8 w-8 sm:h-10 sm:w-10 relative">
                  <Image
                    src="/images/usedIcons/phone.png"
                    alt="Phone icon"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
              </a>
              <a
                href="https://wa.me/918197222439"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition-all duration-200 p-2 hover:bg-green-50 rounded-lg hover:shadow-sm"
                aria-label="WhatsApp us"
              >
                <div className="h-8 w-8 sm:h-10 sm:w-10 relative">
                  <Image
                    src="/images/usedIcons/whatsapp.png"
                    alt="WhatsApp icon"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
              </a>
              <a
                href="https://www.instagram.com/shivayfinaceandservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-all duration-200 p-2 hover:bg-pink-50 rounded-lg hover:shadow-sm"
                aria-label="Follow us on Instagram"
              >
                <div className="h-8 w-8 sm:h-10 sm:w-10 relative">
                  <Image
                    src="/images/usedIcons/instagram.png"
                    alt="Instagram icon"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Quick Links</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link 
                  href="/" 
                  className="text-slate-700 hover:text-blue-600 transition-all duration-200 inline-block hover:translate-x-1 transform font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  onClick={(e) => handleScrollClick('services', e)}
                  className="text-slate-700 hover:text-blue-600 transition-all duration-200 inline-block hover:translate-x-1 transform font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  onClick={(e) => handleScrollClick('about', e)}
                  className="text-slate-700 hover:text-blue-600 transition-all duration-200 inline-block hover:translate-x-1 transform font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  onClick={(e) => handleScrollClick('contact', e)}
                  className="text-slate-700 hover:text-blue-600 transition-all duration-200 inline-block hover:translate-x-1 transform font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Our Services</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link 
                  href="#services" 
                  onClick={(e) => handleScrollClick('services', e)}
                  className="text-slate-700 hover:text-purple-600 transition-all duration-200 inline-block hover:translate-x-1 transform font-medium"
                >
                  Home Loan
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  onClick={(e) => handleScrollClick('services', e)}
                  className="text-slate-700 hover:text-purple-600 transition-all duration-200 inline-block hover:translate-x-1 transform font-medium"
                >
                  Mortgage Loan
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  onClick={(e) => handleScrollClick('services', e)}
                  className="text-slate-700 hover:text-purple-600 transition-all duration-200 inline-block hover:translate-x-1 transform font-medium"
                >
                  Balance Transfer
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  onClick={(e) => handleScrollClick('services', e)}
                  className="text-slate-700 hover:text-purple-600 transition-all duration-200 inline-block hover:translate-x-1 transform font-medium"
                >
                  Top-Up Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Get In Touch</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <a
                href="tel:+918197222439"
                className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-all duration-200 group"
              >
                <div className="p-1 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors">
                  <div className="h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0 relative">
                    <Image
                      src="/images/usedIcons/phone.png"
                      alt="Phone icon"
                      width={28}
                      height={28}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <span className="font-medium">+91 8197222439</span>
              </a>
              <a
                href="https://wa.me/918197222439"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-all duration-200 group"
              >
                <div className="p-1 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors">
                  <div className="h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0 relative">
                    <Image
                      src="/images/usedIcons/whatsapp.png"
                      alt="WhatsApp icon"
                      width={28}
                      height={28}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <span className="font-medium">WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/shivayfinaceandservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-all duration-200 group"
              >
                <div className="p-1 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors">
                  <div className="h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0 relative">
                    <Image
                      src="/images/usedIcons/instagram.png"
                      alt="Instagram icon"
                      width={28}
                      height={28}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8">
          <div className="text-center">
            <p className="text-sm sm:text-base text-slate-600">
              © {currentYear} <span className="font-semibold text-blue-700">Shivay Finance and Services</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

