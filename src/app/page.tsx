'use client';

import React from 'react';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { BookShowcase } from '@/components/landing/BookShowcase';
import { Benefits } from '@/components/landing/Benefits';
import { AIPromptTool } from '@/components/landing/AIPromptTool';
import { Testimonials } from '@/components/landing/Testimonials';
import { Pricing } from '@/components/landing/Pricing';
import { FAQ } from '@/components/landing/FAQ';
import { Footer } from '@/components/landing/Footer';
import { WhereToUse } from '@/components/landing/WhereToUse';
import { SocialProofNotifications } from '@/components/social-proof-notifications';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <SocialProofNotifications />
      <Header />
      <main className="flex-grow">
        <Hero />
        <BookShowcase />
        <Benefits />
        <WhereToUse />
        <AIPromptTool />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
