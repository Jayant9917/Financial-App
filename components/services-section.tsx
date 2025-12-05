'use client';

import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, TrendingUp, RefreshCw, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Home Loan',
    description: 'Get the best home loan rates with flexible repayment options for your dream home.',
  },
  {
    icon: TrendingUp,
    title: 'LAP | Mortgage Loan',
    description: 'Loan Against Property with competitive interest rates and quick processing.',
  },
  {
    icon: RefreshCw,
    title: 'Balance Transfer',
    description: 'Transfer your existing home loan to us and save on interest rates.',
  },
  {
    icon: ArrowUpRight,
    title: 'Top-Up Loan',
    description: 'Get additional funds on your existing home loan for renovation or other needs.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive home loan solutions tailored to meet your financial needs
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedItem key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>

        {/* Additional Services */}
        <AnimatedSection className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full">
            <span className="text-2xl">🏠</span>
            <span className="text-sm font-medium">
              HOME LOAN • LAP | MORTGAGE LOAN • BALANCE TRANSFER • TOP-UP LOAN
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

