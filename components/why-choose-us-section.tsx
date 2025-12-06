'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Clock, DollarSign, Users } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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

// Mobile-optimized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  },
};

const iconVariants = {
  hidden: {
    scale: 0,
    rotate: -180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

export function WhyChooseUsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make the home loan process simple, transparent, and stress-free
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Card className={`h-full text-center border-2 ${feature.borderColor} ${feature.cardBg} overflow-hidden relative group`}>
                  {/* Animated background gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 ${feature.cardBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  
                  <CardContent className="pt-6 relative z-10">
                    <motion.div
                      className="mb-4 flex justify-center"
                      variants={iconVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                    >
                      <motion.div
                        className={`h-20 w-20 rounded-full ${feature.iconBg} flex items-center justify-center shadow-md`}
                        whileHover={{
                          scale: 1.15,
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 },
                        }}
                      >
                        <Icon className={`h-10 w-10 ${feature.iconColor}`} />
                      </motion.div>
                    </motion.div>
                    
                    <motion.h3
                      className="text-xl font-bold mb-3 text-foreground"
                      variants={textVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                    >
                      {feature.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-muted-foreground leading-relaxed"
                      variants={textVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                    >
                      {feature.description}
                    </motion.p>
                  </CardContent>
                  
                  {/* Decorative border animation */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${feature.borderColor.replace('border-', 'bg-')}`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

