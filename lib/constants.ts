/**
 * Application constants
 * Centralized location for all constants used across the application
 */

export const SITE_CONFIG = {
  name: 'Home Loan Financial Services',
  description: 'Professional home loan services and financial solutions for your dream home',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
  },
} as const;

export const API_ROUTES = {
  LOAN_CALCULATOR: '/api/loan-calculator',
  APPLY_LOAN: '/api/apply-loan',
  CONTACT: '/api/contact',
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  LOAN_CALCULATOR: '/loan-calculator',
  APPLY_NOW: '/apply-now',
} as const;

