
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { BookShowcase } from '@/components/landing/BookShowcase';
import { WhereToUse } from '@/components/landing/WhereToUse';
import { Benefits } from '@/components/landing/Benefits';
import { Testimonials } from '@/components/landing/Testimonials';
import { Pricing } from '@/components/landing/Pricing';
import { FAQ } from '@/components/landing/FAQ';
import { Footer } from '@/components/landing/Footer';
import { AIPromptTool } from '@/components/landing/AIPromptTool';
import { SocialProofNotifications } from '@/components/landing/SocialProofNotifications';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <SocialProofNotifications />
      <main>
        <Hero />
        <BookShowcase />
        <WhereToUse />
        <Benefits />
        <AIPromptTool />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
