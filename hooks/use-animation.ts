'use client';

/**
 * Custom hook for animation utilities
 */

import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useAnimationOnScroll() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return { ref, isInView };
}

