'use client';

import Image from 'next/image';
import { AnimatedSection } from '@/components/animated-section';
import { LogoLoop } from '@/components/LogoLoop';
import type { LogoItem } from '@/components/LogoLoop';
import { Building2, Shield, TrendingUp } from 'lucide-react';

const banks: LogoItem[] = [
  { 
    src: '/icons/Bank of Baroda_idILUIUEgx_1.png',
    alt: 'Bank of Baroda logo - Partner bank for home loans',
    title: 'Bank of Baroda',
    width: 120,
    height: 60
  },
  { 
    src: '/icons/HDFC Bank_idca3-DO88_0.png',
    alt: 'HDFC Bank logo - Partner bank for home loans',
    title: 'HDFC Bank',
    width: 120,
    height: 60
  },
  { 
    src: '/icons/State Bank of India_id95r1JSPJ_1.png',
    alt: 'State Bank of India logo - Partner bank for home loans',
    title: 'State Bank of India',
    width: 120,
    height: 60
  },
  { 
    src: '/icons/Bandhan Bank_id_RMN4OVg_1.png',
    alt: 'Bandhan Bank logo - Partner bank for home loans',
    title: 'Bandhan Bank',
    width: 120,
    height: 60
  },
  { 
    src: '/icons/Punjab National Bank_idZvHwYdUU_1.png',
    alt: 'Punjab National Bank logo - Partner bank for home loans',
    title: 'Punjab National Bank',
    width: 120,
    height: 60
  },
  { 
    src: '/icons/Axis Bank_idJBXQBHwi_1.png',
    alt: 'Axis Bank logo - Partner bank for home loans',
    title: 'Axis Bank',
    width: 120,
    height: 60
  },
  { 
    src: '/icons/ICICI Bank_Logo_1.png',
    alt: 'ICICI Bank logo - Partner bank for home loans',
    title: 'ICICI Bank',
    width: 120,
    height: 60
  },
  { 
    src: '/icons/IndusInd Bank_idjlufWfcE_1.png',
    alt: 'IndusInd Bank logo - Partner bank for home loans',
    title: 'IndusInd Bank',
    width: 120,
    height: 60
  },
];

export function BanksSection() {
  return (
    <section id="banks" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Partner Banks
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We have strategic partnerships with leading financial institutions to offer you the best home loan solutions
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-green-600" />
              <span>Trusted Partners</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span>Competitive Rates</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4 text-purple-600" />
              <span>8+ Partner Banks</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-12">
          <div className="w-full">
            <div className="relative">
              {/* Subtle gradient overlays for seamless loop - hidden on mobile */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/20 to-transparent z-10 pointer-events-none"></div>
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/20 to-transparent z-10 pointer-events-none"></div>
              
              <LogoLoop
                logos={banks}
                speed={150}
                direction="left"
                logoHeight={90}
                gap={48}
                pauseOnHover={true}
                fadeOut={false}
                scaleOnHover={true}
                ariaLabel="Partner bank logos"
                className="py-6"
                renderItem={(item, key) => {
                  if ('src' in item) {
                    return (
                      <div className="flex items-center justify-center px-8 py-6 bg-white rounded-xl border border-slate-200/80 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-28 min-w-[160px] group">
                        <Image
                          src={item.src}
                          alt={item.alt || item.title || 'Bank logo'}
                          width={item.width || 120}
                          height={item.height || 60}
                          className="object-contain max-h-14 w-auto transition-all duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Additional info */}
        <AnimatedSection className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Tie-ups with <span className="font-semibold text-foreground">Bank of Baroda</span>,{' '}
            <span className="font-semibold text-foreground">HDFC Bank</span>,{' '}
            <span className="font-semibold text-foreground">State Bank of India</span>,{' '}
            <span className="font-semibold text-foreground">ICICI Bank</span>,{' '}
            <span className="font-semibold text-foreground">Axis Bank</span>,{' '}
            <span className="font-semibold text-foreground">Punjab National Bank</span>,{' '}
            <span className="font-semibold text-foreground">Bandhan Bank</span>,{' '}
            <span className="font-semibold text-foreground">IndusInd Bank</span> & more
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

