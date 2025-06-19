import { Navbar } from '@/components/landing/navbar';
import { HeroSection } from '@/components/landing/hero-section';
import { ProblemSection } from '@/components/landing/problem-section';
import { WhyChooseUsSection } from '@/components/landing/why-choose-us-section';
import { TopCoursesSection } from '@/components/landing/top-courses-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { InstructorsSection } from '@/components/landing/instructors-section';
import { FaqSection } from '@/components/landing/faq-section';
import { FinalCtaSection } from '@/components/landing/final-cta-section';
import { Footer } from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <WhyChooseUsSection />
        <TopCoursesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <InstructorsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
