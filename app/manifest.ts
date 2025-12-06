import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shivay Finance and Services - Home Loan Solutions',
    short_name: 'Shivay Finance',
    description: 'Get your dream home with hassle-free home loan services. Quick approvals, competitive rates from top banks (HDFC, SBI, ICICI, Axis, Bank of Baroda), and flexible repayment plans. Apply now for Home Loan, LAP, Mortgage Loan, Balance Transfer & Top-Up Loan.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    scope: '/',
    background_color: '#ffffff',
    theme_color: '#1e40af', // Blue theme matching logo
    categories: ['finance', 'business', 'lifestyle'],
    lang: 'en',
    dir: 'ltr',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    screenshots: [],
    shortcuts: [
      {
        name: 'Apply for Loan',
        short_name: 'Apply',
        description: 'Quick loan application',
        url: '/apply-now',
        icons: [
          {
            src: '/icon',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get in touch with us',
        url: '/contact',
        icons: [
          {
            src: '/icon',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'Our Services',
        short_name: 'Services',
        description: 'View all our loan services',
        url: '/services',
        icons: [
          {
            src: '/icon',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
    ],
  };
}

