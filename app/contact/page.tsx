import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';
import { generateOrganizationSchema } from '@/lib/structured-data';
import { SITE_CONFIG } from '@/lib/constants';
import { Navbar } from '@/components/navbar';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Contact Us - Shivay Finance and Services',
  description: 'Get in touch with our home loan experts. Call us at +91 8197222439, WhatsApp us, or fill out our contact form. We are here to help you with all your home loan needs.',
  path: '/contact',
});

export default function ContactPage() {
  const structuredData = [
    generateOrganizationSchema({
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8197222439',
        contactType: 'Customer Service',
        email: 'contact@homeloans.com',
      },
    }),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <Navbar />
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about home loans? We are here to help. Get in touch with 
                our experts and take the first step towards your dream home.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <AnimatedSection variant="fadeInUp" delay={0.1}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-blue-600" />
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
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-green-600" />
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
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Send us an email
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection variant="fadeInUp" delay={0.4}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-orange-600" />
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

            <div className="max-w-2xl mx-auto">
              <AnimatedSection>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we will get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" placeholder="+91 1234567890" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What can we help you with?" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your home loan requirements..."
                          rows={5}
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

