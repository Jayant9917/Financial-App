'use client';

import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Clock, DollarSign, Users } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Quick Approvals',
    description: 'Fast processing and quick loan approval within days, not weeks.',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    cardBg: 'bg-blue-50/50',
    borderColor: 'border-blue-200',
  },
  {
    icon: DollarSign,
    title: 'Low-Interest Rates',
    description: 'Competitive interest rates from top banks to make your home affordable.',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    cardBg: 'bg-green-50/50',
    borderColor: 'border-green-200',
  },
  {
    icon: CheckCircle2,
    title: 'Flexible Repayment Plans',
    description: 'Choose from various repayment options that suit your financial situation.',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    cardBg: 'bg-purple-50/50',
    borderColor: 'border-purple-200',
  },
  {
    icon: Users,
    title: 'Trusted by Thousands',
    description: 'Join thousands of satisfied customers who have achieved their dream home.',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    cardBg: 'bg-orange-50/50',
    borderColor: 'border-orange-200',
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
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
                <Card className={`h-full text-center hover:shadow-xl transition-all duration-300 border-2 ${feature.borderColor} ${feature.cardBg} hover:scale-105`}>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className={`h-20 w-20 rounded-full ${feature.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-10 w-10 ${feature.iconColor}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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

