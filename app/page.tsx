import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';
import { generateWebSiteSchema, generateOrganizationSchema, generateFinancialServiceSchema } from '@/lib/structured-data';
import { SITE_CONFIG } from '@/lib/constants';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { WhyChooseUsSection } from '@/components/why-choose-us-section';
import { BanksSection } from '@/components/banks-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export const metadata = generatePageMetadata({
  title: 'Shivay Finance and Services - Quick Approvals & Low Interest Rates',
  description: 'Get your dream home with our hassle-free home loan services. Quick approvals, competitive rates from top banks, and flexible repayment plans. Apply now for Home Loan, LAP, Mortgage Loan, Balance Transfer & Top-Up Loan.',
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
        areaServed: 'IN',
        availableLanguage: 'en',
      },
    }),
    generateFinancialServiceSchema(
      'Home Loan Services',
      'Professional home loan services including Home Loan, LAP, Mortgage Loan, Balance Transfer, and Top-Up Loan with quick approvals and competitive rates.',
      SITE_CONFIG.name,
      'IN'
    ),
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
