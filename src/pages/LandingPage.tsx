import React from 'react';
import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GuideTeachesSection from '../components/GuideTeachesSection';
import IsRightForYouSection from '../components/IsRightForYouSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';
import WhyStudyingIsGameChangerSection from '../components/WhyStudyingIsGameChangerSection';
import HowInterlinkHelpsSection from '../components/HowInterlinkHelpsSection';

function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GuideTeachesSection />
      <TestimonialsSection />
      <WhyStudyingIsGameChangerSection />
      <HowInterlinkHelpsSection />
      <IsRightForYouSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default LandingPage;
