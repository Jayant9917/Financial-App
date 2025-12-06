'use client';

import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help you with all your home loan needs
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <AnimatedSection variant="fadeInUp" delay={0.1}>
            <Card className="text-center hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="h-7 w-7 relative">
                      <Image
                        src="/images/usedIcons/phone.png"
                        alt="Phone icon"
                        width={28}
                        height={28}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="mb-4">
                  Speak directly with our loan experts
                </CardDescription>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full mt-auto bg-blue-50 border-2 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-200 font-medium rounded-xl py-2 px-4 flex items-center justify-center gap-2"
                >
                  <a href="tel:+918197222439" className="flex items-center gap-2">
                    <div className="h-5 w-5 relative">
                      <Image
                        src="/images/usedIcons/phone.png"
                        alt="Phone icon"
                        width={20}
                        height={20}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span>+91 8197222439</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection variant="fadeInUp" delay={0.2}>
            <Card className="text-center hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="h-7 w-7 relative">
                      <Image
                        src="/images/usedIcons/whatsapp.png"
                        alt="WhatsApp icon"
                        width={28}
                        height={28}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="mb-4">
                  Chat with us on WhatsApp
                </CardDescription>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full mt-auto bg-green-50 border-2 border-green-200 text-green-700 hover:bg-green-100 hover:border-green-300 shadow-sm hover:shadow-md transition-all duration-200 font-medium rounded-xl py-2 px-4 flex items-center justify-center gap-2"
                >
                  <a
                    href="https://wa.me/918197222439"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <div className="h-5 w-5 relative">
                      <Image
                        src="/images/usedIcons/whatsapp.png"
                        alt="WhatsApp icon"
                        width={20}
                        height={20}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span>Message Us</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection variant="fadeInUp" delay={0.3}>
            <Card className="text-center hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="h-14 w-14 rounded-full bg-purple-100 flex items-center justify-center">
                    <Mail className="h-7 w-7 text-purple-600" />
                  </div>
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="mb-4">
                  Send us an email
                </CardDescription>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full mt-auto bg-purple-50 border-2 border-purple-200 text-purple-700 hover:bg-purple-100 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-200 font-medium rounded-xl py-2 px-4 flex items-center justify-center gap-2"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>Contact Form</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
              <p className="mb-6 text-primary-foreground/90">
                Start your home loan application today and get one step closer to your dream home
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/apply-now">Apply Now</Link>
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}

