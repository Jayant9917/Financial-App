import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';
import { generateOrganizationSchema } from '@/lib/structured-data';
import { SITE_CONFIG } from '@/lib/constants';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AnimatedSection } from '@/components/animated-section';
import { CheckCircle2, TrendingUp, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = generatePageMetadata({
  title: 'About Us - Home Loan DSA in Indore, Bhopal, Delhi, Pune, Bangalore, Noida, Ghaziabad, Dehradun',
  description: 'Home Loan DSA in Indore, Bhopal, Delhi, Pune, Bangalore, Noida, Ghaziabad, Dehradun, Burhanpur, Khandwa & Raver. We make finance simple, fast, and transparent. Trusted by thousands of homeowners with quick approvals and competitive rates.',
  path: '/about',
});

export default function AboutPage() {
  const structuredData = [
    generateOrganizationSchema({
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8197222439',
        contactType: 'Customer Service',
      },
    }),
  ];

  const values = [
    {
      icon: CheckCircle2,
      title: 'Transparency',
      description: 'Clear terms, no hidden charges, and honest communication throughout the process.',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'Best-in-class service with competitive rates from top banks.',
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your dream home is our priority. We work tirelessly to make it happen.',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      icon: Award,
      title: 'Trusted Partner',
      description: 'Trusted by thousands of satisfied customers across the country.',
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
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
                About Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are dedicated to making home ownership accessible to everyone. 
                With years of experience and partnerships with top banks, we simplify 
                the home loan process for you.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection variant="slideInLeft">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  To make finance simple, fast, and transparent. We believe everyone 
                  deserves the opportunity to own their dream home, and we're here to 
                  make that dream a reality.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With our extensive network of partner banks and streamlined process, 
                  we ensure quick approvals, competitive rates, and a hassle-free experience 
                  for all our customers.
                </p>
              </AnimatedSection>
              <AnimatedSection variant="slideInRight">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Why We Exist</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span>Simplify the complex home loan process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span>Provide access to best rates from top banks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span>Ensure transparency and trust</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span>Support customers at every step</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
                    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className={`inline-flex h-16 w-16 rounded-full ${value.bg} items-center justify-center mb-4`}>
                        <Icon className={`h-8 w-8 ${value.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's help you achieve your dream of homeownership
              </p>
              <Button asChild size="lg" className="text-base px-8 py-6">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

