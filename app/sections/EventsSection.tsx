'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Calendar, Check, Mic, Sparkles, Users } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const PAST_EVENTS = [
  {
    title: 'Dubai Fashion Week',
    type: 'Fashion',
    attendees: '25,000+',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Apple Product Launch',
    type: 'Tech',
    attendees: '10,000+',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'NBA Pre-Season Activation',
    type: 'Sports',
    attendees: '15,000+',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Luxury Auto Showcase',
    type: 'Automotive',
    attendees: '8,000+',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
  },
];

const VENUES = [
  {
    name: 'The Dubai Mall Arena',
    capacity: '5,000',
    type: 'Indoor Arena',
    features: ['Full AV Production', 'Load-in Dock', 'VIP Suites'],
  },
  {
    name: 'Fashion Avenue Atrium',
    capacity: '2,500',
    type: 'Premium Atrium',
    features: ['Natural Light', 'Luxury Adjacent', 'Press Facilities'],
  },
  {
    name: 'Waterfront Promenade',
    capacity: '10,000',
    type: 'Outdoor Plaza',
    features: ['Burj Khalifa Views', 'Fountain Integration', 'Open Air'],
  },
  {
    name: 'Olympic Ice Rink',
    capacity: '1,800',
    type: 'Entertainment Venue',
    features: ['Olympic Size', 'Live Broadcast Ready', 'Unique Setting'],
  },
];

const SPONSORSHIP_TIERS = [
  {
    name: 'Platinum',
    price: 'AED 2M+',
    benefits: ['Naming Rights', 'Premium Placement', 'Year-Round Activation', 'VIP Hospitality'],
  },
  {
    name: 'Gold',
    price: 'AED 500K+',
    benefits: ['Logo Placement', 'Event Integration', 'Digital Exposure', 'Hospitality Access'],
  },
  {
    name: 'Silver',
    price: 'AED 100K+',
    benefits: ['Digital Presence', 'Event Access', 'Co-Branded Content', 'Guest Passes'],
  },
];

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<'events' | 'venues' | 'sponsorship'>('events');
  const [selectedVenue, setSelectedVenue] = useState<number | null>(null);
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="events" className="section bg-dm-black py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-dm-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-dm-gold text-sm uppercase tracking-[0.3em] mb-4 block">
            A Global Platform
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Events & <span className="gold-text">Experiences</span>
          </h2>
          <p className="text-dm-text-secondary text-lg max-w-2xl mx-auto">
            Not just a building. A stage. The Dubai Mall hosts fashion weeks,
            product launches, concerts, and brand activations that generate
            global headlines.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: 'events' as const, label: 'Past Events', icon: Sparkles },
            { id: 'venues' as const, label: 'Venues', icon: Mic },
            { id: 'sponsorship' as const, label: 'Sponsorship', icon: Calendar },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setSelectedVenue(null); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-dm-gold text-dm-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div ref={ref} className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {/* Events Tab */}
            {activeTab === 'events' && (
              <motion.div
                key="events"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {PAST_EVENTS.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-default"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${event.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dm-black via-dm-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-dm-gold text-xs uppercase tracking-widest mb-2 block">
                        {event.type}
                      </span>
                      <h3 className="font-display text-xl font-bold text-white mb-1">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-1 text-white/60 text-sm">
                        <Users size={14} />
                        {event.attendees} attendees
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Venues Tab */}
            {activeTab === 'venues' && (
              <motion.div
                key="venues"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {VENUES.map((venue, index) => (
                  <motion.div
                    key={venue.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedVenue(selectedVenue === index ? null : index)}
                    className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                      selectedVenue === index
                        ? 'bg-dm-surface border-dm-gold/40'
                        : 'bg-dm-surface/50 border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-white mb-1">
                          {venue.name}
                        </h3>
                        <span className="text-dm-text-secondary text-sm">{venue.type}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold gold-text">{venue.capacity}</div>
                        <div className="text-xs text-dm-text-secondary uppercase">Capacity</div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {selectedVenue === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="pt-4 border-t border-white/10">
                            <span className="text-xs text-dm-text-secondary uppercase tracking-wider mb-3 block">
                              Venue Features
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {venue.features.map((feature) => (
                                <span
                                  key={feature}
                                  className="flex items-center gap-1 px-3 py-1.5 bg-dm-gold/10 text-dm-gold text-xs rounded-full"
                                >
                                  <Check size={12} />
                                  {feature}
                                </span>
                              ))}
                            </div>
                            <a
                              href={`mailto:events@thedubaimall.com?subject=Venue Booking: ${venue.name}`}
                              className="cta-button mt-4 text-xs py-2 px-4"
                            >
                              Request Venue Tour
                              <ArrowRight size={14} />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Sponsorship Tab */}
            {activeTab === 'sponsorship' && (
              <motion.div
                key="sponsorship"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {SPONSORSHIP_TIERS.map((tier, index) => (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15 }}
                    className={`p-8 rounded-2xl border relative overflow-hidden ${
                      index === 0
                        ? 'bg-dm-gold/10 border-dm-gold/40'
                        : 'bg-dm-surface/50 border-white/5'
                    }`}
                  >
                    {index === 0 && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-dm-gold text-dm-black text-xs font-bold uppercase rounded-full">
                        Most Popular
                      </span>
                    )}
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <div className="text-3xl font-bold gold-text mb-6">{tier.price}</div>
                    <ul className="space-y-3 mb-8">
                      {tier.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3 text-sm text-dm-text-secondary">
                          <Check size={16} className="text-dm-gold shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:partnerships@thedubaimall.com?subject=${tier.name} Sponsorship Inquiry`}
                      className={`block text-center py-3 rounded-lg text-sm font-semibold transition-all ${
                        index === 0
                          ? 'bg-dm-gold text-dm-black hover:bg-dm-gold-light'
                          : 'border border-white/20 text-white hover:border-dm-gold hover:text-dm-gold'
                      }`}
                    >
                      Get Started
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

