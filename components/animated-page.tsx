'use client';

/**
 * Animated Page Component
 * Wrapper for page-level animations with page transitions
 */

import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/animations';
import { ReactNode } from 'react';

interface AnimatedPageProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedPage({ children, className = '' }: AnimatedPageProps) {
  return (
    <motion.div
      className={className}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

