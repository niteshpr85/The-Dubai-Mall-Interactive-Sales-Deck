'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail, Calendar, Store } from 'lucide-react';

const CTA_OPTIONS = [
  {
    id: 'leasing',
    label: 'Retail Leasing',
    icon: Store,
    email: 'leasing@thedubaimall.com',
    subject: 'Retail Leasing Inquiry',
  },
  {
    id: 'sponsorship',
    label: 'Sponsorship',
    icon: Mail,
    email: 'partnerships@thedubaimall.com',
    subject: 'Partnership Inquiry',
  },
  {
    id: 'events',
    label: 'Book an Event',
    icon: Calendar,
    email: 'events@thedubaimall.com',
    subject: 'Event Booking Inquiry',
  },
];

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmail = (email: string, subject: string) => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 mb-2 w-64 bg-dm-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="p-4 border-b border-white/10">
              <p className="text-sm font-medium text-white">How can we help?</p>
              <p className="text-xs text-dm-text-secondary mt-1">Choose your interest</p>
            </div>
            {CTA_OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => handleEmail(option.email, option.subject)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-left"
              >
                <option.icon size={18} className="text-dm-gold" />
                <span className="text-sm text-white">{option.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-colors ${
          isOpen
            ? 'bg-white text-dm-black'
            : 'bg-dm-gold text-dm-black hover:bg-dm-gold-light'
        }`}
        aria-label="Contact options"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}

