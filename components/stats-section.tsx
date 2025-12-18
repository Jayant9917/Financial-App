'use client';

import { NumberTicker } from '@/components/ui/number-ticker';
import { AnimatedSection } from './animated-section';

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Years in Business */}
          <AnimatedSection 
            variant="fadeIn" 
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              <NumberTicker 
                value={5} 
                suffix="+" 
                delay={200}
                className="text-4xl md:text-5xl font-bold text-blue-600"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-800">Years in Business</h3>
            <p className="mt-2 text-sm md:text-base text-slate-600">Trusted by clients since 2019</p>
          </AnimatedSection>

          {/* Loans Disbursed */}
          <AnimatedSection 
            variant="fadeIn" 
            delay={0.2}
            className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
              <NumberTicker 
                value={30} 
                suffix="+ Cr" 
                delay={400}
                className="text-4xl md:text-5xl font-bold text-green-600"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-800">Loans Disbursed</h3>
            <p className="mt-2 text-sm md:text-base text-slate-600">Helping dreams come true</p>
          </AnimatedSection>

          {/* Loans Done */}
          <AnimatedSection 
            variant="fadeIn" 
            delay={0.4}
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
              <NumberTicker 
                value={500} 
                suffix="+" 
                delay={600}
                className="text-4xl md:text-5xl font-bold text-purple-600"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-800">Loans Done</h3>
            <p className="mt-2 text-sm md:text-base text-slate-600">Satisfied customers and counting</p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
