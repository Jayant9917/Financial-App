'use client';

import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <AnimatedSection variant="fadeInUp" delay={0.1}>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Speak directly with our loan experts
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+918197222439">+91 8197222439</a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection variant="fadeInUp" delay={0.2}>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Chat with us on WhatsApp
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
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
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Send us an email
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Contact Form</Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection variant="fadeInUp" delay={0.4}>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Schedule a visit to our office
                </CardDescription>
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

