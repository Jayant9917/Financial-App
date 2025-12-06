'use client';

import Image from 'next/image';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, TrendingUp, RefreshCw, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Home Loan',
    description: 'Get the best home loan rates with flexible repayment options for your dream home.',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    gradient: 'from-blue-50 to-blue-100',
  },
  {
    icon: TrendingUp,
    title: 'LAP | Mortgage Loan',
    description: 'Loan Against Property with competitive interest rates and quick processing.',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    gradient: 'from-green-50 to-green-100',
  },
  {
    icon: RefreshCw,
    title: 'Balance Transfer',
    description: 'Transfer your existing home loan to us and save on interest rates.',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    gradient: 'from-purple-50 to-purple-100',
  },
  {
    icon: ArrowUpRight,
    title: 'Top-Up Loan',
    description: 'Get additional funds on your existing home loan for renovation or other needs.',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    gradient: 'from-orange-50 to-orange-100',
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden group border-0 shadow-md">
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} service illustration`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4">
                      <div className={`h-14 w-14 rounded-xl ${service.iconBg} flex items-center justify-center shadow-lg`}>
                        <Icon className={`h-7 w-7 ${service.iconColor}`} />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold mt-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
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

