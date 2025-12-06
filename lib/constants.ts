/**
 * Application constants
 * Centralized location for all constants used across the application
 */

export const SITE_CONFIG = {
  name: 'Shivay Finance and Services',
  description: 'Professional home loan services and financial solutions for your dream home',
  // Set NEXT_PUBLIC_SITE_URL environment variable in production
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  // OG image for social media sharing - create this file in /public when ready
  ogImage: '/og-image.jpg',
  links: {
    // Update with actual social media links when available
    twitter: undefined, // Add Twitter handle when available
    instagram: 'https://www.instagram.com/shivayfinance/', // From footer
  },
} as const;


