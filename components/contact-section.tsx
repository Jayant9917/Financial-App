'use client';

import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';

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
                    <Phone className="h-7 w-7 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="mb-4">
                  Speak directly with our loan experts
                </CardDescription>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <a href="tel:+918197222439">+91 8197222439</a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection variant="fadeInUp" delay={0.2}>
            <Card className="text-center hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="h-8 w-8 flex items-center justify-center">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-contain"
                        aria-label="WhatsApp"
                      >
                        <source src="/images/usedIcons/Whatsapp default state animation.webm" type="video/webm" />
                      </video>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="mb-4">
                  Chat with us on WhatsApp
                </CardDescription>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <a
                    href="https://wa.me/918197222439"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message Us
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
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href="/contact">Contact Form</Link>
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

