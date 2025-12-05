import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';
import { generateWebSiteSchema, generateOrganizationSchema } from '@/lib/structured-data';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = generatePageMetadata({
  title: 'Home Loan Financial Services',
  description: 'Professional home loan services and financial solutions for your dream home. Get competitive rates, expert advice, and fast approval.',
  path: '/',
});

export default function Home() {
  const structuredData = [
    generateWebSiteSchema(SITE_CONFIG.name, SITE_CONFIG.url),
    generateOrganizationSchema({
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
    }),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Home Loan Financial Services
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Professional home loan services and financial solutions for your dream home
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/loan-calculator"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Calculate Loan
            </a>
            <a
              href="/apply-now"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Apply Now
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
