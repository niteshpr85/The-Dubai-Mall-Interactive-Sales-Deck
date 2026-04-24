'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToWhy = () => {
    const element = document.getElementById('why');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, delay: 0.3 },
      };

  return (
    <section id="hero" className="section relative">
      {/* Background Image with loading skeleton */}
      <ImageWithSkeleton
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop"
        alt="The Dubai Mall exterior at night"
        className="absolute inset-0"
        overlay
        overlayClassName="video-overlay"
      />

      {/* Animated particles/dust effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-dm-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div {...motionProps}>
          <span className="inline-block px-4 py-2 mb-6 text-xs uppercase tracking-[0.3em] text-dm-gold border border-dm-gold/30 rounded-full">
            A Global Destination
          </span>
        </motion.div>

        <motion.h1
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1.2, delay: 0.6 },
              })}
          className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[0.95] mb-8"
        >
          The Dubai
          <br />
          <span className="gold-text">Mall</span>
        </motion.h1>

        <motion.p
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 1 },
              })}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The world&apos;s most visited shopping and entertainment destination.
          Where 80 million guests discover 1,200 stores, 200 restaurants,
          and experiences found nowhere else on Earth.
        </motion.p>

        <motion.div
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 1.4 },
              })}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToWhy}
            className="cta-button"
          >
            Explore the Destination
          </button>
          <a
            href="mailto:leasing@thedubaimall.com?subject=Property Inquiry"
            className="cta-button cta-button-outline"
          >
            Request a Private Tour
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        {...(prefersReducedMotion
          ? {}
          : {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 2 },
            })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/40">
          Scroll to explore
        </span>
        {!prefersReducedMotion && (
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} className="text-dm-gold" />
          </motion.div>
        )}
        {prefersReducedMotion && <ChevronDown size={20} className="text-dm-gold" />}
      </motion.div>
    </section>
  );
}

