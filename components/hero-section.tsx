'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-6 sm:py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <AnimatedSection variant="slideInLeft" className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Shivay Finance and Services
                <span className="block text-primary mt-1 sm:mt-2">
                  Making Finance Simple, Fast & Transparent
                </span>
              </h1>
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
              <Button asChild size="lg" className="group text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 h-auto min-h-[48px] sm:min-h-[56px]">
                <Link href="/apply-now">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-6 h-auto min-h-[48px] sm:min-h-[56px]">
                <a href="tel:+918197222439">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">+91 8197222439</span>
                  <span className="sm:hidden">Call</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-6 h-auto min-h-[48px] sm:min-h-[56px]">
                <a
                  href="https://wa.me/918197222439"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  WhatsApp
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

