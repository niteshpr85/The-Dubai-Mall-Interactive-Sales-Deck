'use client';

import { motion } from 'framer-motion';
import { ChefHat, Coffee, UtensilsCrossed, Wine } from 'lucide-react';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import { useInView } from '../hooks/useInView';
import { useReducedMotion } from '../hooks/useReducedMotion';

const DINING_CATEGORIES = [
  {
    title: 'Fine Dining',
    count: '35+',
    description: 'Michelin-caliber restaurants from world-renowned chefs. Private dining rooms with Burj Khalifa views.',
    icon: ChefHat,
  },
  {
    title: 'Casual & Fast-Casual',
    count: '120+',
    description: 'High-frequency dining that drives daily visits. Global chains and local concepts alike.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Cafés & Bakeries',
    count: '45+',
    description: 'Third-wave coffee, artisan pastries, and Instagram-worthy spots that keep guests lingering longer.',
    icon: Coffee,
  },
  {
    title: 'Lounge & Nightlife',
    count: '15+',
    description: 'After-hours destinations. Rooftop lounges, cocktail bars, and entertainment dining.',
    icon: Wine,
  },
];

export default function DiningSection() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="dining" className="section bg-dm-black relative overflow-hidden">
      <ImageWithSkeleton
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2400&auto=format&fit=crop"
        alt="Fine dining restaurant interior"
        className="absolute inset-0 opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dm-black via-dm-black/90 to-dm-black" />

      <div className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            {...(prefersReducedMotion
              ? {}
              : {
                  initial: { opacity: 0, x: -40 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true, amount: 0.3 },
                  transition: { duration: 0.8 },
                })}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <ImageWithSkeleton
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop"
                alt="Upscale restaurant dining experience"
                className="absolute inset-0"
                overlay
                overlayClassName="bg-gradient-to-t from-dm-black/80 to-transparent"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <span className="text-dm-gold text-sm uppercase tracking-widest mb-2 block">
                  Culinary Destination
                </span>
                <h3 className="font-display text-3xl font-bold text-white">
                  200+ Dining Experiences
                </h3>
              </div>
            </div>

            <motion.div
              {...(prefersReducedMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: 0.4 },
                  })}
              className="absolute -bottom-6 -right-6 md:right-8 bg-dm-surface border border-dm-gold/30 rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-3xl font-bold gold-text mb-1">200+</div>
              <div className="text-sm text-dm-text-secondary">Restaurants & Cafés</div>
            </motion.div>
          </motion.div>

          <div>
            <motion.div
              {...(prefersReducedMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.8 },
                  })}
              className="mb-10"
            >
              <span className="text-dm-gold text-sm uppercase tracking-[0.3em] mb-4 block">
                Dining & Lifestyle
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                A Culinary
                <br />
                <span className="gold-text">Destination</span>
              </h2>
              <p className="text-dm-text-secondary text-lg leading-relaxed">
                Food is not an afterthought here. It is a primary driver of visits,
                dwell time, and social sharing. From Michelin-starred experiences
                to high-frequency casual dining, The Dubai Mall feeds every appetite.
              </p>
            </motion.div>

            <div ref={ref} className="space-y-4">
              {DINING_CATEGORIES.map((category, index) => (
                <motion.div
                  key={category.title}
                  {...(prefersReducedMotion
                    ? {}
                    : {
                        initial: { opacity: 0, x: 30 },
                        animate: isInView ? { opacity: 1, x: 0 } : {},
                        transition: { duration: 0.5, delay: index * 0.1 },
                      })}
                  className="flex items-center gap-5 p-4 rounded-xl bg-dm-surface/50 border border-white/5 hover:border-dm-gold/20 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-dm-gold/10 flex items-center justify-center shrink-0 group-hover:bg-dm-gold/20 transition-colors">
                    <category.icon size={20} className="text-dm-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-medium">{category.title}</h4>
                      <span className="text-dm-gold font-semibold text-sm">{category.count}</span>
                    </div>
                    <p className="text-dm-text-secondary text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
