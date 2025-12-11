import { generateMetadata as generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Contact Home Loan DSA in Indore, Burhanpur, Khandwa | +91 8197222439',
  description: 'Contact Home Loan DSA in Indore, Burhanpur & Khandwa. Call +91 8197222439, WhatsApp us, or email us. Expert home loan guidance for Indore, Burhanpur, and Khandwa.',
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

