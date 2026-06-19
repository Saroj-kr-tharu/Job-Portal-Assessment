import {
  CTABanner,
  FeaturesGrid,
  HeroSection,
  HowItWorks,
  JobTypeShowcase,
  SectionDivider,
  StatsStrip,
  Testimonials,
  TrustBar,
} from "../components/Homepage";

interface HomepageProps {
  onGetStarted?: () => void;
}

export default function Homepage({ onGetStarted }: HomepageProps) {
  const handleGetStarted = () => {
    if (onGetStarted) onGetStarted();
  };

  return (
    <div className="min-h-screen w-full" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* 1. Hero — headline + CTA + pipeline visual */}
      <HeroSection onGetStarted={handleGetStarted} />

      {/* 2. Stats — social proof numbers */}
      <StatsStrip />

      {/* 3. Trust — companies students have applied to */}
      <TrustBar />

      <SectionDivider />

      {/* 4. How it works — 4-step flow */}
      <HowItWorks />

      <SectionDivider />

      {/* 5. Features — 6-feature grid */}
      <FeaturesGrid />

      <SectionDivider />

      {/* 6. Job categories — what people track */}
      <JobTypeShowcase />

      <SectionDivider />

      {/* 7. Testimonials — student stories */}
      <Testimonials />

      {/* 8. CTA — bottom conversion banner */}
      <CTABanner onGetStarted={handleGetStarted} />
    </div>
  );
}
