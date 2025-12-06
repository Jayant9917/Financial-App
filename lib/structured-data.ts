/**
 * Structured Data (JSON-LD) for SEO
 * Use this to add structured data to pages for better SEO
 */

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    '@type': string;
    telephone: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[];
}

export interface WebSiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  potentialAction: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}

export interface FinancialServiceSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: string;
  serviceType: string;
}

/**
 * Generate organization structured data
 */
export function generateOrganizationSchema(
  data: Partial<OrganizationSchema>
): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: data.name || 'Shivay Finance and Services',
    url: data.url || 'https://yourdomain.com',
    logo: data.logo,
    description: data.description,
    contactPoint: data.contactPoint,
    sameAs: data.sameAs || [],
  };
}

/**
 * Generate website structured data with search action
 */
export function generateWebSiteSchema(
  siteName: string,
  siteUrl: string
): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate financial service structured data
 */
export function generateFinancialServiceSchema(
  serviceName: string,
  description: string,
  providerName: string,
  areaServed: string = 'US'
): FinancialServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: serviceName,
    description,
    provider: {
      '@type': 'Organization',
      name: providerName,
    },
    areaServed,
    serviceType: 'Home Loan',
  };
}

