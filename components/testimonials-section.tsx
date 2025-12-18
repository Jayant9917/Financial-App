'use client';

import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Home Owner, Indore',
    content: 'Shivay Finance made my home loan process incredibly smooth. Their team was professional and guided me at every step. Got the best interest rate in the market!',
    rating: 5,
    image: '/images/testimonial/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg',
    alt: 'Portrait of Rahul Sharma, satisfied home loan customer'
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'First-time Buyer, Khandwa',
    content: 'As a first-time home buyer, I was nervous about the loan process. The team at Shivay Finance explained everything clearly and helped me get approved quickly. Highly recommended!',
    rating: 5,
    image: '/images/testimonial/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg',
    alt: 'Portrait of Priya Patel, first-time home buyer'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Investor, Burhanpur',
    content: 'I\'ve worked with many loan providers, but Shivay Finance stands out for their transparency and customer service. They helped me secure multiple property loans with ease.',
    rating: 4,
    image: '/images/testimonial/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg',
    alt: 'Portrait of Vikram Singh, property investor'
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </AnimatedSection>

        <AnimatedSection 
          stagger 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <AnimatedItem key={testimonial.id}>
              <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300 border border-slate-100">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden bg-slate-100">
                      <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.alt}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            e.currentTarget.src = '/images/testimonial/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg';
                          }}
                        />
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4 flex-grow">{testimonial.content}</p>
                  
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
