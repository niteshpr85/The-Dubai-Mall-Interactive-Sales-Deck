'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Star, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const RETAIL_TIERS = [
  {
    title: 'Flagship Stores',
    count: '150+',
    description: 'Global brand flagships and first-to-market concepts. The largest Apple Store in the world. The Middle East\'s first Galen Weston flagship.',
    icon: Star,
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Mid-Market Powerhouses',
    count: '600+',
    description: 'High-volume, high-frequency retail across fashion, electronics, beauty, and lifestyle. The engine of daily foot traffic.',
    icon: ShoppingBag,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Emerging & Pop-Up',
    count: '450+',
    description: 'Trend-forward concepts, direct-to-consumer brands, and rotating pop-up activations that keep the experience fresh.',
    icon: Zap,
    color: 'from-purple-500/20 to-pink-500/20',
  },
];

export default function RetailSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="retail" className="section bg-dm-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dm-gold/5 to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-dm-gold text-sm uppercase tracking-[0.3em] mb-4 block">
              Retail Environment
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Where the
              <br />
              <span className="gold-text">World Shops</span>
            </h2>
            <p className="text-dm-text-secondary text-lg leading-relaxed mb-8">
              From the world&apos;s largest Apple Store to Middle East first-to-market
              concepts, The Dubai Mall is the definitive retail platform. Over
              1,200 stores across every category, price point, and experience.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {['Fashion', 'Electronics', 'Beauty', 'Home', 'Sports', 'Kids'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm text-white/70 border border-white/10 rounded-full hover:border-dm-gold/50 hover:text-dm-gold transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="mailto:leasing@thedubaimall.com?subject=Retail Leasing Inquiry"
              className="cta-button inline-flex"
            >
              Explore Leasing Opportunities
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Right Cards */}
          <div ref={ref} className="space-y-6">
            {RETAIL_TIERS.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group p-6 rounded-2xl bg-dm-surface border border-white/5 hover:border-dm-gold/30 transition-all duration-500 cursor-default"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center shrink-0`}>
                    <tier.icon size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-lg font-semibold text-white">
                        {tier.title}
                      </h3>
                      <span className="text-2xl font-bold gold-text">{tier.count}</span>
                    </div>
                    <p className="text-dm-text-secondary text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

