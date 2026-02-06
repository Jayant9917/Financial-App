import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import { Navbar } from '@/components/navbar';
import { ApplyNowSection } from '@/components/apply-now-section';
import { Footer } from '@/components/footer';

export const metadata = generatePageMetadata({
  title: 'Apply Now - Home Loan Application | EMI Calculator | Shivay Finance and Services',
  description: 'Apply for home loans with Shivay Finance and Services. Use our EMI calculator to estimate monthly payments and submit your loan application online. Quick approvals and competitive rates.',
  path: '/apply-now',
});

export default function ApplyNowPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ApplyNowSection />
      </main>
      <Footer />
    </>
  );
}
