
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';
import { TrustBadgeIcon } from '@/components/icons/trust-badge-icon'; 

export function FinalCtaSection() {
  return (
    <AnimatedSection id="final-cta" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Secure Your Future — Before It’s Too Late
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-primary-foreground/90">
          Join the 20,000+ professionals who’ve already taken control and future-proofed their careers with PrimeLeapInstitute.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center space-x-2 text-primary-foreground/80">
            <TrustBadgeIcon className="h-7 w-7 text-green-400" />
            <span>Trusted by Professionals</span>
          </div>
          <div className="flex items-center space-x-2 text-primary-foreground/80">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-green-400 lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            <span>30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
