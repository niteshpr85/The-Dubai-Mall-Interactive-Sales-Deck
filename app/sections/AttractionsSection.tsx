'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Fish, Gamepad2, Snowflake, Ticket } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const ATTRACTIONS = [
  {
    id: 'aquarium',
    title: 'Dubai Aquarium',
    subtitle: 'Underwater Wonder',
    description: 'One of the world\'s largest suspended aquariums. 33,000 aquatic animals across 140 species. A 270-degree walkthrough tunnel. The centerpiece that stops every visitor in their tracks.',
    stat: '33,000',
    statLabel: 'Aquatic Animals',
    icon: Fish,
    image: 'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'icerink',
    title: 'Olympic Ice Rink',
    subtitle: 'Cool in the Desert',
    description: 'An Olympic-sized ice skating experience in the heart of the desert. Hosts international ice shows, hockey tournaments, and daily public skating that draws families year-round.',
    stat: 'Olympic',
    statLabel: 'Regulation Size',
    icon: Snowflake,
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'vrpark',
    title: 'VR Park',
    subtitle: 'The Future of Fun',
    description: 'Two levels of immersive virtual and augmented reality experiences. From thrill rides to interactive gaming, this is where technology meets entertainment at scale.',
    stat: '2 Levels',
    statLabel: 'of VR/AR',
    icon: Gamepad2,
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'candy',
    title: 'Candylicious',
    subtitle: 'Pure Joy',
    description: 'The largest candy store in the world. A visual spectacle and experiential retail destination that generates as much social media coverage as any anchor tenant.',
    stat: '10,000',
    statLabel: 'Sq Ft of Sweetness',
    icon: Ticket,
    image: 'https://images.unsplash.com/photo-1582058993794-4e6c23e1b2b7?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function AttractionsSection() {
  const [activeAttraction, setActiveAttraction] = useState(0);
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  const current = ATTRACTIONS[activeAttraction];

  return (
    <section id="attractions" className="section bg-dm-surface py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-dm-gold text-sm uppercase tracking-[0.3em] mb-4 block">
            Beyond Shopping
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Attractions & <span className="gold-text">Entertainment</span>
          </h2>
          <p className="text-dm-text-secondary text-lg max-w-2xl mx-auto">
            This is what separates a mall from a destination. Four major attractions
            that drive repeat visits, extend dwell time, and create memories.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${current.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dm-black/80 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-dm-gold text-sm uppercase tracking-widest mb-2 block">
                    {current.subtitle}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white">
                    {current.title}
                  </h3>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-2xl font-bold gold-text">{current.stat}</div>
                  <div className="text-xs text-dm-text-secondary uppercase">{current.statLabel}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Selector Cards */}
          <div className="space-y-3">
            {ATTRACTIONS.map((attraction, index) => (
              <motion.button
                key={attraction.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveAttraction(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeAttraction === index
                    ? 'bg-dm-black border-dm-gold/40'
                    : 'bg-dm-black/30 border-white/5 hover:border-white/10'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    activeAttraction === index ? 'bg-dm-gold/20' : 'bg-white/5'
                  }`}>
                    <attraction.icon size={20} className={activeAttraction === index ? 'text-dm-gold' : 'text-white/40'} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`font-display text-lg font-semibold transition-colors ${
                        activeAttraction === index ? 'text-white' : 'text-white/60'
                      }`}>
                        {attraction.title}
                      </h4>
                      <ArrowRight size={16} className={`transition-all ${
                        activeAttraction === index ? 'text-dm-gold translate-x-0 opacity-100' : 'text-white/20 -translate-x-2 opacity-0'
                      }`} />
                    </div>
                    <AnimatePresence>
                      {activeAttraction === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-dm-text-secondary text-sm leading-relaxed mt-2"
                        >
                          {attraction.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

