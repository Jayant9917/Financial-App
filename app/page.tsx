import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';
import { generateWebSiteSchema, generateOrganizationSchema, generateFinancialServiceSchema, generateLocalBusinessSchema } from '@/lib/structured-data';
import { SITE_CONFIG } from '@/lib/constants';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { WhyChooseUsSection } from '@/components/why-choose-us-section';
import { BanksSection } from '@/components/banks-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export const metadata = generatePageMetadata({
  title: 'Home Loan in Indore, Burhanpur, Khandwa | DSA Services | Quick Approvals',
  description: 'Best Home Loan DSA in Indore, Burhanpur & Khandwa. Get quick approvals, low interest rates from top banks (HDFC, SBI, ICICI, Axis). Home Loan, LAP, Mortgage Loan, Balance Transfer & Top-Up Loan services. Apply now!',
  path: '/',
});

export default function Home() {
  const structuredData = [
    generateWebSiteSchema(SITE_CONFIG.name, SITE_CONFIG.url),
    generateOrganizationSchema({
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      logo: `${SITE_CONFIG.url}/images/logo/real estate.webm`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8197222439',
        contactType: 'Customer Service',
        areaServed: 'Indore, Burhanpur, Khandwa, Madhya Pradesh, India',
        availableLanguage: 'en',
      },
      sameAs: [
        'https://www.instagram.com/shivayfinaceandservices/',
      ],
    }),
    generateFinancialServiceSchema(
      'Home Loan Services in Indore, Burhanpur, Khandwa',
      'Professional home loan DSA services in Indore, Burhanpur, and Khandwa. Home Loan, LAP, Mortgage Loan, Balance Transfer, and Top-Up Loan with quick approvals and competitive rates from top banks.',
      SITE_CONFIG.name,
      'IN'
    ),
    generateLocalBusinessSchema({
      name: SITE_CONFIG.name,
      description: 'Home Loan DSA Services in Indore, Burhanpur, and Khandwa. Quick approvals, competitive rates from top banks.',
      url: SITE_CONFIG.url,
      telephone: '+91-8197222439',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Indore',
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN',
      },
      areaServed: ['Indore', 'Burhanpur', 'Khandwa', 'Madhya Pradesh', 'India'],
      serviceType: 'Home Loan DSA Services',
    }),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <BanksSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
