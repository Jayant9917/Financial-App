'use client';

import Image from 'next/image';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, TrendingUp, RefreshCw, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Home,
    title: 'Home Loan',
    description: 'Get the best home loan rates with flexible repayment options for your dream home.',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    image: '/images/our-services/loanimg1.png',
    gradient: 'from-blue-50 to-blue-100',
  },
  {
    icon: TrendingUp,
    title: 'Mortgage Loan',
    description: 'Loan Against Property with competitive interest rates and quick processing.',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    image: '/images/our-services/loanimg2.jpg',
    gradient: 'from-green-50 to-green-100',
  },
  {
    icon: RefreshCw,
    title: 'Balance Transfer',
    description: 'Transfer your existing home loan to us and save on interest rates.',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    image: '/images/our-services/loanimg3.jpg',
    gradient: 'from-purple-50 to-purple-100',
  },
  {
    icon: ArrowUpRight,
    title: 'Top-Up Loan',
    description: 'Get additional funds on your existing home loan for renovation or other needs.',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    image: '/images/our-services/loanimg4.jpg',
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden group border-0 shadow-md rounded-xl p-0">
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                    <div className="absolute inset-0 scale-110 origin-center">
                      <Image
                        src={service.image}
                        alt={`${service.title} service illustration`}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardHeader className="pb-1 px-6">
                    <CardTitle className="text-xl font-bold mt-1 flex items-center gap-3">
                      <motion.div 
                        className={`h-11 w-11 rounded-lg ${service.iconBg} flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow duration-300`}
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200, 
                          damping: 15,
                          delay: index * 0.1 
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Icon className={`h-5 w-5 ${service.iconColor}`} />
                        </motion.div>
                      </motion.div>
                      <span>{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
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

