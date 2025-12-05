'use client';

import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Clock, DollarSign, Users } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Quick Approvals',
    description: 'Fast processing and quick loan approval within days, not weeks.',
  },
  {
    icon: DollarSign,
    title: 'Low-Interest Rates',
    description: 'Competitive interest rates from top banks to make your home affordable.',
  },
  {
    icon: CheckCircle2,
    title: 'Flexible Repayment Plans',
    description: 'Choose from various repayment options that suit your financial situation.',
  },
  {
    icon: Users,
    title: 'Trusted by Thousands',
    description: 'Join thousands of satisfied customers who have achieved their dream home.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make the home loan process simple, transparent, and stress-free
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedItem key={index}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}

