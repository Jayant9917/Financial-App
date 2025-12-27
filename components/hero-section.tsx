'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { NumberTicker } from '@/components/ui/number-ticker';

export function HeroSection() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // If we're on a different page, navigate to home first, then scroll
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      // If we're already on home page, just scroll
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-6 sm:py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <AnimatedSection variant="slideInLeft" className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Shivay Finance and<br />
                  Services
                </h1>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary mt-2 sm:mt-3 md:mt-4">
                  Your Trusted Home 
                  <br /> Loan Partner 
                </h2>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                Get your dream home with our hassle-free home loan services. 
                Quick approvals, competitive rates, and flexible repayment plans.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="group text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-6 h-auto min-h-[48px] sm:min-h-[56px] bg-white border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700 hover:text-blue-700 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg font-medium flex items-center"
              >
                <a href="tel:+918197222439" className="flex items-center">
                  <div className="mr-2 h-4 w-4 sm:h-5 sm:w-5 relative">
                    <Image
                      src="/images/usedIcons/phone.png"
                      alt="Phone icon"
                      width={20}
                      height={20}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="hidden sm:inline">+91 8197222439</span>
                  <span className="sm:hidden">Call</span>
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="group text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-6 h-auto min-h-[48px] sm:min-h-[56px] bg-white border-2 border-slate-200 hover:border-green-500 hover:bg-green-50 text-slate-700 hover:text-green-700 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg font-medium flex items-center"
              >
                <a
                  href="https://wa.me/918197222439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <div className="mr-2 h-4 w-4 sm:h-5 sm:w-5 relative">
                    <Image
                      src="/images/usedIcons/whatsapp.png"
                      alt="WhatsApp icon"
                      width={20}
                      height={20}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="pt-2 sm:pt-4">
              <p className="text-xs sm:text-sm text-muted-foreground">
                🚀 Now offering Home & Secured Loans from Top Govt & Private Banks
              </p>
            </div>
          </AnimatedSection>

          {/* Right Side - Image */}
          <AnimatedSection variant="slideInRight" className="relative order-first lg:order-last">
            <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
              <Image
                src="/images/hero/original-a7c149d43c8a3d25a99463557e409824.gif"
                alt="Professional home loan services in Indore, Burhanpur, Khandwa, Bhopal, Delhi, Pune, Bangalore, Noida, Ghaziabad, Dehradun, Raver - Shivay Finance"
                width={800}
                height={600}
                className="object-contain w-full h-full"
                style={{ width: 'auto', height: 'auto' }}
                priority
                loading="eager"
                quality={85}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                unoptimized
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

