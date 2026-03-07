import { generateMetadata as generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Contact Home Loan DSA in Indore, Khandwa, Bhopal | +91 8197222439',
  description: 'Contact Home Loan DSA in Indore, Khandwa, and Bhopal. Call +91 8197222439, WhatsApp us, or email us. Expert home loan guidance for all major cities.',
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

