import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/structured-data';
import { generateFinancialServiceSchema } from '@/lib/structured-data';
import { SITE_CONFIG } from '@/lib/constants';
import { Navbar } from '@/components/navbar';
import { ServicesSection } from '@/components/services-section';
import { Footer } from '@/components/footer';

export const metadata = generatePageMetadata({
  title: 'Home Loan Services in Indore, Burhanpur, Khandwa | DSA Services',
  description: 'Home Loan DSA Services in Indore, Burhanpur & Khandwa. Home Loan, LAP, Mortgage Loan, Balance Transfer & Top-Up Loan with quick approvals and competitive rates from top banks.',
  path: '/services',
});

export default function ServicesPage() {
  const structuredData = [
    generateFinancialServiceSchema(
      'Home Loan Services',
      'Comprehensive home loan solutions including Home Loan, LAP, Mortgage Loan, Balance Transfer, and Top-Up Loan with competitive rates and flexible repayment options.',
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

