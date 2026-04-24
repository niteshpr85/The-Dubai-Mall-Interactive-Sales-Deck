'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Mail, MapPin, Store } from 'lucide-react';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import { useReducedMotion } from '../hooks/useReducedMotion';

const CTA_CARDS = [
  {
    icon: Store,
    title: 'Retail Leasing',
    description: 'From flagship stores to pop-up concepts. Find your place in the world\'s most visited destination.',
    action: 'Start Leasing Conversation',
    email: 'leasing@thedubaimall.com',
    subject: 'Retail Leasing Inquiry',
  },
  {
    icon: Mail,
    title: 'Sponsorship',
    description: 'Partner with a global platform. Reach 80M+ visitors through integrated brand experiences.',
    action: 'Explore Partnerships',
    email: 'partnerships@thedubaimall.com',
    subject: 'Sponsorship Inquiry',
  },
  {
    icon: Calendar,
    title: 'Event Booking',
    description: 'Book a venue that commands attention. From product launches to full-scale productions.',
    action: 'Reserve Your Date',
    email: 'events@thedubaimall.com',
    subject: 'Event Venue Booking',
  },
];

export default function CTASection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="cta" className="section bg-dm-black relative overflow-hidden py-24">
      {/* Background */}
      <ImageWithSkeleton
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop"
        alt="The Dubai Mall exterior"
        className="absolute inset-0 opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dm-black via-dm-black/95 to-dm-black" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.8 },
              })}
          className="text-center mb-16"
        >
          <span className="text-dm-gold text-sm uppercase tracking-[0.3em] mb-4 block">
            Your Place Is Here
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Be Part of Something
            <br />
            <span className="gold-text">Extraordinary</span>
          </h2>
          <p className="text-dm-text-secondary text-lg max-w-2xl mx-auto">
            The world&apos;s most ambitious brands, events, and experiences
            choose The Dubai Mall. The question is not if you should be here.
            It is when.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {CTA_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              {...(prefersReducedMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 40 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.6, delay: index * 0.15 },
                  })}
              className="group p-8 rounded-2xl bg-dm-surface border border-white/5 hover:border-dm-gold/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-dm-gold/10 flex items-center justify-center mb-6 group-hover:bg-dm-gold/20 transition-colors">
                <card.icon size={28} className="text-dm-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-dm-text-secondary leading-relaxed mb-8">
                {card.description}
              </p>
              <a
                href={`mailto:${card.email}?subject=${encodeURIComponent(card.subject)}`}
                className="inline-flex items-center gap-2 text-dm-gold font-medium hover:gap-3 transition-all"
              >
                {card.action}
                <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <motion.div
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: true },
                transition: { duration: 0.8 },
              })}
          className="text-center pt-12 border-t border-white/5"
        >
          <div className="flex items-center justify-center gap-2 text-dm-text-secondary mb-4">
            <MapPin size={16} className="text-dm-gold" />
            <span className="text-sm">Downtown Dubai, United Arab Emirates</span>
          </div>
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} The Dubai Mall. All rights reserved.
          </p>
          <p className="text-white/20 text-xs mt-2">
            This is a demonstration project built for portfolio purposes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

