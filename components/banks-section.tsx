'use client';

import Image from 'next/image';
import { AnimatedSection } from '@/components/animated-section';
import { LogoLoop } from '@/components/LogoLoop';
import type { LogoItem } from '@/components/LogoLoop';

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
    <section id="banks" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-3xl">🏦</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Partner Banks
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tie-ups with Bank of Baroda, HDFC Bank, Union Bank, Bandhan Bank, BOI, Axis & more
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="relative">
              <LogoLoop
                logos={banks}
                speed={100}
                direction="left"
                logoHeight={80}
                gap={64}
                pauseOnHover={true}
                fadeOut={false}
                scaleOnHover={true}
                ariaLabel="Partner bank logos"
                className="py-8"
                renderItem={(item, key) => {
                  if ('src' in item) {
                    return (
                      <div className="flex items-center justify-center px-6 py-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 h-24 min-w-[140px]">
                        <Image
                          src={item.src}
                          alt={item.alt || item.title || 'Bank logo'}
                          width={item.width || 120}
                          height={item.height || 60}
                          className="object-contain max-h-16 w-auto transition-all duration-300"
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
      </div>
    </section>
  );
}

