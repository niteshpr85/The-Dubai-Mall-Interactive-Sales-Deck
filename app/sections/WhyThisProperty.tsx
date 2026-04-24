'use client';

import { motion } from 'framer-motion';
import { Globe, MapPin, Quote, TrendingUp, Users } from 'lucide-react';
import StatCard from '../components/StatCard';
import { useInView } from '../hooks/useInView';
import { useReducedMotion } from '../hooks/useReducedMotion';

const STATS = [
  { value: 1200, suffix: '+', label: 'Retail Stores', delay: 0 },
  { value: 80, suffix: 'M+', label: 'Annual Visitors', delay: 150 },
  { value: 22, suffix: 'M', label: 'Square Feet', delay: 300 },
  { value: 200, suffix: '+', label: 'Dining Options', delay: 450 },
];

const HIGHLIGHTS = [
  {
    icon: MapPin,
    title: 'Unmatched Location',
    description: 'At the foot of the Burj Khalifa, connected to the Dubai Metro, and 15 minutes from Dubai International Airport.',
  },
  {
    icon: Users,
    title: 'Global Audience',
    description: '80+ million annual visitors from every continent. The crossroads of East and West, luxury and accessibility.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Growth',
    description: 'Consistent double-digit YoY foot traffic growth. The anchor of Downtown Dubai, a $20B+ development.',
  },
  {
    icon: Globe,
    title: 'Regional Reach',
    description: 'Primary shopping destination for the entire MENA region. A launchpad for brands entering Gulf markets.',
  },
];

const TESTIMONIALS = [
  {
    quote: "Our Dubai Mall flagship generates 3x the revenue per square foot compared to our next best location globally. The foot traffic is unmatched.",
    author: "Regional Director",
    company: "Global Luxury Fashion House",
    metric: "3x Revenue / Sq Ft",
  },
  {
    quote: "We chose The Dubai Mall for our Middle East debut because it's the only venue that guarantees both volume and the right audience.",
    author: "VP of Retail Expansion",
    company: "Premium Electronics Brand",
    metric: "Middle East Debut",
  },
];

export default function WhyThisProperty() {
  const prefersReducedMotion = useReducedMotion();
  const { ref: statsRef, isInView: statsInView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const { ref: highlightsRef, isInView: highlightsInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const { ref: testimonialsRef, isInView: testimonialsInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  const headerMotion = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.8 } };

  return (
    <section id="why" className="section bg-dm-black py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div {...headerMotion} className="text-center mb-20">
          <span className="text-dm-gold text-sm uppercase tracking-[0.3em] mb-4 block">
            The Destination
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Why This Property
          </h2>
          <p className="text-dm-text-secondary text-lg max-w-2xl mx-auto">
            Numbers tell part of the story. The rest is felt the moment you step inside.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24">
          {STATS.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
              isInView={statsInView}
            />
          ))}
        </div>

        {/* Highlights Grid */}
        <div ref={highlightsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-24">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.title}
              {...(prefersReducedMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 40 },
                    animate: highlightsInView ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.6, delay: index * 0.1 },
                  })}
              className="group p-8 rounded-2xl bg-dm-surface border border-white/5 hover:border-dm-gold/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-dm-gold/10 flex items-center justify-center mb-6 group-hover:bg-dm-gold/20 transition-colors">
                <item.icon size={24} className="text-dm-gold" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-dm-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div ref={testimonialsRef}>
          <motion.div
            {...(prefersReducedMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 20 },
                  animate: testimonialsInView ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8 },
                })}
            className="text-center mb-12"
          >
            <span className="text-dm-gold text-sm uppercase tracking-[0.3em] mb-4 block">
              From Our Partners
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white">
              Trusted by World-Class Brands
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.company}
                {...(prefersReducedMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 30 },
                      animate: testimonialsInView ? { opacity: 1, y: 0 } : {},
                      transition: { duration: 0.6, delay: index * 0.15 },
                    })}
                className="p-8 rounded-2xl bg-dm-surface border border-white/5 hover:border-dm-gold/20 transition-all duration-500"
              >
                <Quote size={24} className="text-dm-gold/40 mb-4" />
                <p className="text-white/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium text-sm">{t.author}</p>
                    <p className="text-dm-text-secondary text-xs">{t.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-dm-gold/10 text-dm-gold text-xs font-semibold rounded-full">
                    {t.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

