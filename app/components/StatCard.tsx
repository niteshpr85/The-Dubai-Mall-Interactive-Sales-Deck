'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
  isInView: boolean;
}

export default function StatCard({
  value,
  suffix = '',
  prefix = '',
  label,
  delay = 0,
  isInView,
}: StatCardProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (value - startValue) * easeOut);
      
      countRef.current = current;
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="text-4xl md:text-6xl lg:text-7xl font-display font-bold gold-text mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm md:text-base text-dm-text-secondary uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
}

