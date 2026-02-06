'use client';

import { useState } from 'react';
import { AnimatedSection } from '@/components/animated-section';
import { EMICalculator } from '@/components/emi-calculator';
import { LoanApplicationForm } from '@/components/loan-application-form';
import { Button } from '@/components/ui/button';
import { Calculator, FileText, ArrowRight } from 'lucide-react';

export function ApplyNowSection() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'application'>('calculator');

  return (
    <section id="apply-now" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Apply for Your Home Loan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your EMI and apply for a home loan in just a few simple steps
          </p>
        </AnimatedSection>

        {/* Tab Navigation */}
        <AnimatedSection className="flex justify-center mb-8" variant="fadeInUp">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
            <Button
              variant={activeTab === 'calculator' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-200 ${
                activeTab === 'calculator'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Calculator className="h-4 w-4" />
              EMI Calculator
            </Button>
            <Button
              variant={activeTab === 'application' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('application')}
              className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-200 ${
                activeTab === 'application'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <FileText className="h-4 w-4" />
              Application Form
            </Button>
          </div>
        </AnimatedSection>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto">
          <AnimatedSection 
            key={activeTab}
            variant="fadeInUp"
            className="transition-all duration-300"
          >
            {activeTab === 'calculator' ? (
              <div className="space-y-6">
                <EMICalculator />
                
                {/* CTA to Application Form */}
                <AnimatedSection className="text-center mt-8" variant="fadeInUp" delay={0.2}>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-3">Ready to Apply?</h3>
                    <p className="mb-4 text-blue-100">
                      Now that you know your EMI, take the next step and apply for your home loan
                    </p>
                    <Button
                      onClick={() => setActiveTab('application')}
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
                    >
                      Fill Application Form
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
            ) : (
              <div className="space-y-6">
                <LoanApplicationForm />
                
                {/* Back to Calculator */}
                <AnimatedSection className="text-center mt-8" variant="fadeInUp" delay={0.2}>
                  <Button
                    onClick={() => setActiveTab('calculator')}
                    variant="outline"
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
                  >
                    <Calculator className="mr-2 h-4 w-4" />
                    Back to EMI Calculator
                  </Button>
                </AnimatedSection>
              </div>
            )}
          </AnimatedSection>
        </div>

        {/* Trust Indicators */}
        <AnimatedSection className="mt-16" variant="fadeInUp" delay={0.3}>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Instant EMI Calculation</h4>
              <p className="text-sm text-gray-600">
                Get accurate EMI estimates in seconds with our advanced calculator
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quick Application Process</h4>
              <p className="text-sm text-gray-600">
                Simple form with instant submission and quick response from our team
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Approval</h4>
              <p className="text-sm text-gray-600">
                Get loan approval within 2-3 working days with minimal documentation
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
