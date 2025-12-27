import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';
import { generateWebSiteSchema, generateOrganizationSchema, generateFinancialServiceSchema, generateLocalBusinessSchema } from '@/lib/structured-data';
import { SITE_CONFIG } from '@/lib/constants';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { WhyChooseUsSection } from '@/components/why-choose-us-section';
import { BanksSection } from '@/components/banks-section';
import { StatsSection } from '@/components/stats-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export const metadata = generatePageMetadata({
  title: 'Home Loan, Mortgage Loan & Property Loan in Indore, Bhopal, Delhi, Pune, Bangalore, Noida, Ghaziabad, Dehradun | DSA Services | Quick Approvals',
  description: 'Best Home Loan, Mortgage Loan & Property Loan DSA in Indore, Bhopal, Delhi, Pune, Bangalore, Noida, Ghaziabad, Dehradun, Burhanpur, Khandwa & Raver. House & Flat purchase, Construction, Plot purchase, Loan against property, Takeover, Balance transfer & Top-up loans. Quick approvals from top banks!',
  path: '/',
});

export default function Home() {
  const structuredData = [
    generateWebSiteSchema(SITE_CONFIG.name, SITE_CONFIG.url),
    generateOrganizationSchema({
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      logo: `${SITE_CONFIG.url}/images/logo/real-estate.webm`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8197222439',
        contactType: 'Customer Service',
        areaServed: 'Indore, Bhopal, Delhi, Pune, Bangalore, Noida, Ghaziabad, Dehradun, Burhanpur, Khandwa, Raver, Madhya Pradesh, India',
        availableLanguage: 'en',
      },
      sameAs: [
        'https://www.instagram.com/shivayfinaceandservices/',
      ],
    }),
    generateFinancialServiceSchema(
      'Home Loan, Mortgage Loan & Property Loan Services in Indore, Bhopal, Delhi, Pune, Bangalore, Noida, Ghaziabad, Dehradun',
      'Comprehensive home loan and property loan DSA services in Indore, Bhopal, Delhi, Pune, Bangalore, Noida, Ghaziabad, Dehradun, Burhanpur, Khandwa, and Raver. House & Flat purchase loans, House construction loans, Plot purchase + Construction loans, Loan against property, Home loan & Mortgage loan takeover, Balance transfer and Top-up loans with quick approvals and competitive rates from top banks.',
      SITE_CONFIG.name,
      'IN'
    ),
    generateLocalBusinessSchema({
      name: SITE_CONFIG.name,
      description: 'Home Loan, Mortgage Loan & Property Loan DSA Services in Indore, Bhopal, Delhi, Pune, Bangalore, Noida, Ghaziabad, Dehradun, Burhanpur, Khandwa, and Raver. House & Flat purchase, Construction, Plot purchase, Loan against property, Takeover, Balance transfer & Top-up loans. Quick approvals, competitive rates from top banks.',
      url: SITE_CONFIG.url,
      telephone: '+91-8197222439',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Indore',
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN',
      },
      areaServed: ['Indore', 'Bhopal', 'Delhi', 'Pune', 'Bangalore', 'Noida', 'Ghaziabad', 'Dehradun', 'Burhanpur', 'Khandwa', 'Raver', 'Madhya Pradesh', 'India'],
      serviceType: 'Home Loan DSA Services, Mortgage Loan Services, Property Loan Services, Construction Loan Services, Balance Transfer Services',
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
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
