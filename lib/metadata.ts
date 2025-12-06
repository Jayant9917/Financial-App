import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  path?: string;
}

/**
 * Generate SEO-optimized metadata for pages
 */
export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  path = '',
}: GenerateMetadataProps): Metadata {
  const pageTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.name;
  const pageDescription = description || SITE_CONFIG.description;
  const pageImage = image || SITE_CONFIG.ogImage;
  const pageUrl = `${SITE_CONFIG.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
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
    // Add verification codes when available for Google Search Console, Bing, etc.
    // verification: {
    //   google: 'your-google-verification-code',
    //   bing: 'your-bing-verification-code',
    // },
  };
}

