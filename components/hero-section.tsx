'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { ArrowRight, Home } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-6 sm:py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <AnimatedSection variant="slideInLeft" className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Shivay Finance and<br />
                  Services
                </h1>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary mt-2 sm:mt-3 md:mt-4">
                  Making Finance<br />
                  Simple, Fast &<br />
                  Transparent
                </h3>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                Get your dream home with our hassle-free home loan services. 
                Quick approvals, competitive rates, and flexible repayment plans.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <span className="text-green-600">✓</span> Easy EMIs
              </span>
              <span className="mx-1 sm:mx-2">•</span>
              <span className="inline-flex items-center gap-1">
                <span className="text-green-600">✓</span> Quick Approvals
              </span>
              <span className="mx-1 sm:mx-2">•</span>
              <span className="inline-flex items-center gap-1">
                <span className="text-green-600">✓</span> Low Interest Rates
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button 
                asChild 
                size="lg" 
                className="group text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 h-auto min-h-[48px] sm:min-h-[56px] bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg font-semibold"
              >
                <Link href="/apply-now">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="group text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-6 h-auto min-h-[48px] sm:min-h-[56px] bg-white border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700 hover:text-blue-700 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg font-medium flex items-center"
              >
                <a href="tel:+918197222439" className="flex items-center">
                  <div className="mr-2 h-4 w-4 sm:h-5 sm:w-5 relative">
                    <Image
                      src="/images/usedIcons/phone.png"
                      alt="Phone icon"
                      width={20}
                      height={20}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="hidden sm:inline">+91 8197222439</span>
                  <span className="sm:hidden">Call</span>
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="group text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-6 h-auto min-h-[48px] sm:min-h-[56px] bg-white border-2 border-slate-200 hover:border-green-500 hover:bg-green-50 text-slate-700 hover:text-green-700 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg font-medium flex items-center"
              >
                <a
                  href="https://wa.me/918197222439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <div className="mr-2 h-4 w-4 sm:h-5 sm:w-5 relative">
                    <Image
                      src="/images/usedIcons/whatsapp.png"
                      alt="WhatsApp icon"
                      width={20}
                      height={20}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="pt-2 sm:pt-4">
              <p className="text-xs sm:text-sm text-muted-foreground">
                🚀 Now offering Home & Secured Loans from Top Govt & Private Banks
              </p>
            </div>
          </AnimatedSection>

          {/* Right Side - Image */}
          <AnimatedSection variant="slideInRight" className="relative order-first lg:order-last">
            <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
              <Image
                src="/images/hero/original-a7c149d43c8a3d25a99463557e409824.gif"
                alt="Home loan services - Professional financial solutions for your dream home"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

