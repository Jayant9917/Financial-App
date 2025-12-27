'use client';

import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import { Star, User } from 'lucide-react';
import Image from 'next/image';
// Function to generate a random date within the past year
const getRandomDate = () => {
  const now = new Date();
  const pastYear = new Date(now);
  pastYear.setFullYear(pastYear.getFullYear() - 1);
  
  // Get a random time between now and 1 year ago
  const randomTime = pastYear.getTime() + Math.random() * (now.getTime() - pastYear.getTime());
  const randomDate = new Date(randomTime);
  
  // Calculate time difference in months and years
  const diffInMonths = (now.getMonth() - randomDate.getMonth() + 12 * (now.getFullYear() - randomDate.getFullYear()));
  
  if (diffInMonths < 1) {
    const diffInDays = Math.floor((now.getTime() - randomDate.getTime()) / (1000 * 60 * 60 * 24));
    if (diffInDays <= 1) return '1 day ago';
    return `${diffInDays} days ago`;
  } else if (diffInMonths < 12) {
    return diffInMonths === 1 ? '1 month ago' : `${diffInMonths} months ago`;
  } else {
    const years = Math.floor(diffInMonths / 12);
    return years === 1 ? '1 year ago' : `${years} years ago`;
  }
};

const testimonials = [
  {
    id: 1,
    name: 'Ritik Chourasiya',
    role: 'Client',
    content: '"A first class service, although this was a time consuming process due to hold ups both with the Registry office and the freeholders, I was happy with all the help given and it was a very professional service, I highly recommend this company."',
    rating: 5,
    timestamp: '2 months ago',
  },
  {
    id: 2,
    name: 'Adarsh Kushwaha',
    role: 'Client',
    content: '"Very cooperative, value for money, understand your choice and show accordingly... No waste of time at all. The team is very helpful, take full commission but give perfect service."',
    rating: 5,
    timestamp: '3 weeks ago',
  },
  {
    id: 3,
    name: 'Akash Shrivas',
    role: 'Client',
    content: '"Shivay Finance provided exceptional service throughout my home loan process. Their team was extremely professional, responsive, and went above and beyond to ensure I got the best possible deal. "',
    rating: 5,
    timestamp: '5 days ago',
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
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4 flex-grow">{testimonial.content}</p>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-slate-500">{testimonial.timestamp || getRandomDate()}</span>
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
