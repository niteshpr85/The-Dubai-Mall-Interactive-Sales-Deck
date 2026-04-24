'use client';

import ErrorBoundary from './components/ErrorBoundary';
import FloatingCTA from './components/FloatingCTA';
import Navigation from './components/Navigation';
import AttractionsSection from './sections/AttractionsSection';
import CTASection from './sections/CTASection';
import DiningSection from './sections/DiningSection';
import EventsSection from './sections/EventsSection';
import HeroSection from './sections/HeroSection';
import LuxurySection from './sections/LuxurySection';
import RetailSection from './sections/RetailSection';
import WhyThisProperty from './sections/WhyThisProperty';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <FloatingCTA />

      <ErrorBoundary sectionName="Hero">
        <HeroSection />
      </ErrorBoundary>
      <ErrorBoundary sectionName="Why This Property">
        <WhyThisProperty />
      </ErrorBoundary>
      <ErrorBoundary sectionName="Retail">
        <RetailSection />
      </ErrorBoundary>
      <ErrorBoundary sectionName="Luxury">
        <LuxurySection />
      </ErrorBoundary>
      <ErrorBoundary sectionName="Dining">
        <DiningSection />
      </ErrorBoundary>
      <ErrorBoundary sectionName="Attractions">
        <AttractionsSection />
      </ErrorBoundary>
      <ErrorBoundary sectionName="Events">
        <EventsSection />
      </ErrorBoundary>
      <ErrorBoundary sectionName="Contact">
        <CTASection />
      </ErrorBoundary>
    </main>
  );
}

