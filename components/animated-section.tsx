'use client';

/**
 * Animated Section Component
 * Wrapper component for sections with fade-in-up animation
 */

import { motion } from 'framer-motion';
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
} from '@/lib/animations';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
  stagger?: boolean;
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  variant = 'fadeInUp',
  stagger = false,
}: AnimatedSectionProps) {
  const variants = {
    fadeIn,
    fadeInUp,
    fadeInDown,
    slideInLeft,
    slideInRight,
    scaleIn,
  };

  if (stagger) {
    return (
      <motion.section
        className={className}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <motion.section
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
}

/**
 * Animated Item Component
 * For use with AnimatedSection when stagger is true
 */
export function AnimatedItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

