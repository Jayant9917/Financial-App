/**
 * Application constants
 * Centralized location for all constants used across the application
 */

export const SITE_CONFIG = {
  name: 'Shivay Finance and Services',
  description: 'Professional home loan services and financial solutions for your dream home in Indore, Burhanpur & Khandwa',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shivayfinanceandservices.com',
  ogImage: 'https://shivayfinanceandservices.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/ShivayFinance', // Update with your actual Twitter handle if available
    instagram: 'https://www.instagram.com/shivayfinance/',
    facebook: 'https://www.facebook.com/ShivayFinance', // Add if available
    linkedin: 'https://www.linkedin.com/company/shivay-finance', // Add if available
  },
} as const;


