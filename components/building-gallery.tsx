'use client';

import Image from 'next/image';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import { motion } from 'framer-motion';

const buildingImages = [
  {
    src: '/images/building images/analog-landscape-city-with-buildings.jpg',
    alt: 'Modern city skyline representing dream homes and properties',
    title: 'Dream Properties'
  },
  {
    src: '/images/building images/pexels-expect-best-79873-323780.jpg',
    alt: 'Contemporary building financed through our home loan solutions',
    title: 'Home Loan Solutions'
  },
  {
    src: '/images/building images/sean-pollock-PhYq704ffdA-unsplash.jpg',
    alt: 'Property investment opportunities with our mortgage loans',
    title: 'Property Investment'
  }
];

export function BuildingGallery() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Finance Your Dream Property
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From home loans to property financing, we help you turn your dream property into reality with competitive rates and quick approvals
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="space-y-8 md:space-y-12">
          {/* Featured Image - Large */}
          <AnimatedItem>
            <motion.div 
              className="relative group rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src={buildingImages[0].src}
                  alt={buildingImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-white mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {buildingImages[0].title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-200 text-sm md:text-base max-w-md"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Your dream home is within reach with our tailored home loan solutions
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedItem>

          {/* Two Images Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {buildingImages.slice(1).map((image, index) => (
              <AnimatedItem key={index}>
                <motion.div 
                  className="relative group rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-[250px] md:h-[350px] w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        <motion.h3 
                          className="text-xl md:text-2xl font-bold text-white mb-1"
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {image.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-200 text-xs md:text-sm"
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {index === 0 ? 'Competitive rates for your perfect home' : 'Smart financing for your property investment'}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="mt-16 text-center">
          <motion.div 
            className="inline-flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ready to Finance Your Dream Property?
            </h3>
            <p className="text-gray-600 max-w-lg">
              Let us help you secure the perfect loan for your dream property. From home loans to mortgage financing, we've got you covered with quick approvals and competitive rates.
            </p>
            <motion.a
              href="/apply-now"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-medium shadow-lg hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
