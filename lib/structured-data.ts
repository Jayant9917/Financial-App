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
    areaServed?: string;
    availableLanguage?: string;
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

export interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  geo?: {
    '@type': string;
    latitude?: string;
    longitude?: string;
  };
  areaServed: string[];
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
    '@type': 'Organization',
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
  areaServed: string = 'IN'
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

/**
 * Generate local business structured data for location-specific SEO
 */
export function generateLocalBusinessSchema(
  data: Partial<LocalBusinessSchema>
): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name || 'Shivay Finance and Services',
    description: data.description || 'Professional home loan services in Indore, Bhopal, Delhi, Pune, Bangalore, Noida, Ghaziabad, Dehradun, Burhanpur, Khandwa, and Raver',
    url: data.url || 'https://yourdomain.com',
    telephone: data.telephone || '+91-8197222439',
    address: data.address || {
      '@type': 'PostalAddress',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      addressCountry: 'IN',
    },
    geo: data.geo,
    areaServed: data.areaServed || ['Indore', 'Bhopal', 'Delhi', 'Pune', 'Bangalore', 'Noida', 'Ghaziabad', 'Dehradun', 'Burhanpur', 'Khandwa', 'Raver', 'Madhya Pradesh', 'India'],
    serviceType: data.serviceType || 'Home Loan DSA Services',
  };
}

/**
 * Generate city-specific structured data for local SEO
 */
export function generateCitySpecificSchema(
  cityName: string,
  stateName: string,
  coordinates: { lat: string; lng: string }
): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Shivay Finance and Services',
    description: `Best Home Loan DSA and Mortgage Loan services in ${cityName}, ${stateName}. Quick approvals, competitive rates from top banks.`,
    url: 'https://shivayfinanceandservices.com',
    telephone: '+91-8197222439',
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityName,
      addressRegion: stateName,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: coordinates.lat,
      longitude: coordinates.lng,
    },
    areaServed: [cityName, stateName, 'India'],
    serviceType: 'Home Loan DSA Services, Mortgage Loan Services',
  };
}

/**
 * Generate multiple city schemas for all service areas
 */
export function generateAllCitySchemas(): LocalBusinessSchema[] {
  const cities = [
    { name: 'Indore', state: 'Madhya Pradesh', lat: '22.7196', lng: '75.8577' },
    { name: 'Bhopal', state: 'Madhya Pradesh', lat: '23.2599', lng: '77.4126' },
    { name: 'Delhi', state: 'Delhi', lat: '28.7041', lng: '77.1025' },
    { name: 'Pune', state: 'Maharashtra', lat: '18.5204', lng: '73.8567' },
    { name: 'Bangalore', state: 'Karnataka', lat: '12.9716', lng: '77.5946' },
    { name: 'Noida', state: 'Uttar Pradesh', lat: '28.5355', lng: '77.3910' },
    { name: 'Ghaziabad', state: 'Uttar Pradesh', lat: '28.6692', lng: '77.4538' },
    { name: 'Dehradun', state: 'Uttarakhand', lat: '30.3165', lng: '78.0322' },
    { name: 'Burhanpur', state: 'Madhya Pradesh', lat: '21.8256', lng: '76.0481' },
    { name: 'Khandwa', state: 'Madhya Pradesh', lat: '21.8256', lng: '76.0481' },
    { name: 'Raver', state: 'Maharashtra', lat: '21.2584', lng: '76.0567' },
  ];

  return cities.map(city => 
    generateCitySpecificSchema(city.name, city.state, { lat: city.lat, lng: city.lng })
  );
}

