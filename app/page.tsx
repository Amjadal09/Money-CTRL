import HeroSection from '@/components/landing/hero-section';
import FeaturesSection from '@/components/landing/features-section';
import DashboardPreview from '@/components/landing/dashboard-preview';
import PricingSection from '@/components/landing/pricing-section';
import CTASection from '@/components/landing/cta-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <PricingSection />
      <CTASection />
    </main>
  );
}