'use client';

import { motion } from 'framer-motion';
import { Crown, Diamond, Gem } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const LUXURY_BRANDS = [
  'Louis Vuitton', 'Chanel', 'Hermès', 'Cartier', 'Gucci',
  'Dior', 'Prada', 'Tiffany & Co.', 'Burberry', 'Van Cleef',
];

export default function LuxurySection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="luxury" className="section bg-dm-surface relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-dm-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-dm-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-dm-gold text-sm uppercase tracking-[0.3em] mb-4 block">
              The Pinnacle
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Fashion Avenue
            </h2>
            <p className="text-dm-text-secondary text-lg max-w-2xl mx-auto">
              A dedicated luxury precinct where the world&apos;s most prestigious
              houses present their collections to the most discerning clientele.
            </p>
          </motion.div>
        </div>

        {/* Luxury Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl overflow-hidden mb-16 aspect-[21/9]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2400&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dm-surface via-dm-surface/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="text-dm-gold text-sm uppercase tracking-widest mb-2 block">
                  150+ Luxury Houses
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-bold text-white">
                  The Most Prestigious Collection in the Middle East
                </h3>
              </div>
              <div className="flex gap-3">
                <Diamond size={24} className="text-dm-gold" />
                <Crown size={24} className="text-dm-gold" />
                <Gem size={24} className="text-dm-gold" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Brand Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {LUXURY_BRANDS.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-5 rounded-xl bg-dm-black border border-white/5 hover:border-dm-gold/30 text-center transition-all duration-300"
            >
              <span className="text-sm text-white/60 group-hover:text-dm-gold transition-colors font-display tracking-wide">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="mailto:luxury@thedubaimall.com?subject=Luxury Leasing Inquiry"
            className="cta-button cta-button-outline"
          >
            Inquire About Luxury Space
          </a>
        </motion.div>
      </div>
    </section>
  );
}

