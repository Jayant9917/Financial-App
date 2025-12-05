/**
 * Structured Data Component
 * Use this component to add JSON-LD structured data to pages
 */

import { OrganizationSchema, WebSiteSchema, FinancialServiceSchema } from '@/lib/structured-data';

interface StructuredDataProps {
  data: OrganizationSchema | WebSiteSchema | FinancialServiceSchema | Array<OrganizationSchema | WebSiteSchema | FinancialServiceSchema>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

