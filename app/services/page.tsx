import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';
import { generateFinancialServiceSchema } from '@/lib/structured-data';
import { SITE_CONFIG } from '@/lib/constants';
import { Navbar } from '@/components/navbar';
import { ServicesSection } from '@/components/services-section';
import { Footer } from '@/components/footer';

export const metadata = generatePageMetadata({
  title: 'Home Loan, Mortgage Loan & Property Loan Services in Indore, Bhopal, Delhi, Pune, Bangalore, Noida, Ghaziabad, Dehradun | DSA Services',
  description: 'Home Loan, Mortgage Loan & Property Loan DSA Services in Indore, Bhopal, Delhi, Pune, Bangalore, Noida, Ghaziabad, Dehradun, Burhanpur, Khandwa & Raver. House & Flat purchase, Construction, Plot purchase, Loan against property, Takeover, Balance transfer & Top-up loans with quick approvals.',
  path: '/services',
});

export default function ServicesPage() {
  const structuredData = [
    generateFinancialServiceSchema(
      'Complete Property Loan Services',
      'Comprehensive property loan solutions including House & Flat purchase loans, House construction loans, Plot purchase + Construction loans, Loan against property, Home loan & Mortgage loan takeover, Balance transfer and Top-up loans with competitive rates and flexible repayment options.',
      SITE_CONFIG.name
    ),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <Navbar />
      <main className="pt-20">
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}

