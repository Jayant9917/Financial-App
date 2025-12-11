'use client';

import { useEffect } from 'react';
import { StructuredData } from '@/components/structured-data';
import { generateOrganizationSchema } from '@/lib/structured-data';
import { SITE_CONFIG } from '@/lib/constants';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function ContactPage() {
  useEffect(() => {
    // Open email client with pre-filled email
    window.location.href = 'mailto:Shivayfinanceandservices@gmail.com';
  }, []);
  const structuredData = [
    generateOrganizationSchema({
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8197222439',
        contactType: 'Customer Service',
        email: 'Shivayfinanceandservices@gmail.com',
      },
    }),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Opening Email Client...</h1>
          <p className="text-muted-foreground mb-6">
            If your email client doesn't open automatically, please click the link below:
          </p>
          <a 
            href="mailto:Shivayfinanceandservices@gmail.com"
            className="text-blue-600 hover:text-blue-700 underline text-lg"
          >
            Shivayfinanceandservices@gmail.com
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

