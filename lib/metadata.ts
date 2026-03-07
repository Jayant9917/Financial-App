import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  path?: string;
  keywords?: string[];
}

// Location-specific keywords for local SEO
const LOCATION_KEYWORDS = [
  'Home loan',
  'Home loan in Indore',
  'Home loan in Khandwa',
  'Home loan in Bhopal',
  'Home loan DSA',
  'DSA',
  'Indore',
  'Khandwa',
  'Bhopal',
  'Home loan Indore',
  'Home loan Khandwa',
  'Home loan Bhopal',
  'DSA Indore',
  'DSA Khandwa',
  'DSA Bhopal',
  'Loan DSA',
  'Home loan agent',
  'Home loan broker',
  'Best home loan Indore',
  'Best home loan Khandwa',
  'Best home loan Bhopal',
  'Personal loan Bhopal',
  'Personal loan Indore',
  'Personal loan Khandwa',
  'Business loan Bhopal',
  'Business loan Indore',
  'Business loan Khandwa',
  'Loan against property Bhopal',
  'Loan against property Indore',
  'Loan against property Khandwa',
  'Mortgage loan Indore',
  'Mortgage loan Khandwa',
  'Mortgage loan Bhopal',
  'Mortgage loan in Indore',
  'Mortgage loan in Khandwa',
  'Mortgage loan in Bhopal',
  'Best mortgage loan Indore',
  'Best mortgage loan Khandwa',
  'Best mortgage loan Bhopal',
  'House purchase loan Indore',
  'House purchase loan Khandwa',
  'House purchase loan Bhopal',
  'Flat purchase loan Indore',
  'Flat purchase loan Khandwa',
  'Flat purchase loan Bhopal',
  'House construction loan Indore',
  'House construction loan Khandwa',
  'House construction loan Bhopal',
  'Plot purchase loan Indore',
  'Plot purchase loan Khandwa',
  'Plot purchase loan Bhopal',
  'Plot construction loan Indore',
  'Plot construction loan Khandwa',
  'Plot construction loan Bhopal',
  'Home loan takeover Indore',
  'Home loan takeover Khandwa',
  'Home loan takeover Bhopal',
  'Mortgage loan takeover Indore',
  'Mortgage loan takeover Khandwa',
  'Mortgage loan takeover Bhopal',
  'Balance transfer Indore',
  'Balance transfer Khandwa',
  'Balance transfer Bhopal',
  'Top up loan Indore',
  'Top up loan Khandwa',
  'Top up loan Bhopal',
];

/**
 * Generate SEO-optimized metadata for pages with location-specific keywords
 */
export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  path = '',
  keywords = [],
}: GenerateMetadataProps): Metadata {
  const pageTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.name;
  const pageDescription = description || SITE_CONFIG.description;
  const pageImage = image || SITE_CONFIG.ogImage;
  const pageUrl = `${SITE_CONFIG.url}${path}`;
  
  // Combine custom keywords with location keywords
  const allKeywords = [
    ...keywords,
    ...LOCATION_KEYWORDS,
    'Home Loan',
    'Mortgage Loan',
    'Balance Transfer',
    'Top-Up Loan',
    'LAP',
    'Loan Against Property',
  ].join(', ');

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: allKeywords,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: SITE_CONFIG.links.twitter,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // Add geo-location meta tags for better local SEO
    other: {
      'geo.region': 'IN',
      'geo.placename': 'Indore, Khandwa, Bhopal',
      'geo.position': '22.7196,75.8577;21.8256,76.0481;23.2599,77.4126',
      'ICBM': '22.7196,75.8577,21.8256,76.0481,23.2599,77.4126',
      'language': 'en',
      'coverage': 'Worldwide',
      'target': 'India',
      'distribution': 'Global',
      'rating': 'General',
      'revisit-after': '7 days',
      'author': 'Shivay Finance and Services',
      'publisher': 'Shivay Finance and Services',
      'category': 'Financial Services, Home Loans, Personal Loans, Business Loans',
      'service-type': 'Financial Services',
      'area-served': 'Indore, Khandwa, Bhopal',
    },
    // Add verification codes when available for Google Search Console, Bing, etc.
    // verification: {
    //   google: 'your-google-verification-code',
    //   bing: 'your-bing-verification-code',
    // },
  };
}

