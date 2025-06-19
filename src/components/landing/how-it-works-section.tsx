
import { MousePointerSquareDashed, Laptop, BadgeCheck, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const steps = [
  {
    icon: <MousePointerSquareDashed className="h-10 w-10 text-primary" />,
    title: "Choose Your Course",
    description: "Browse our extensive catalog and select the course that aligns with your career goals."
  },
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: "Learn Anywhere, Anytime",
    description: "Access high-quality video lessons, practical exercises, and resources on any device."
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: "Get Certified & Recognized",
    description: "Complete your course, earn a valuable certificate, and showcase your new skills to employers."
  }
];

export function HowItWorksSection() {
  return (
    <AnimatedSection id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Simple Steps to Success"
          subtitle="Getting started on your upskilling journey with FutureProof Academy is easy. Follow these simple steps:"
        />
        <div className="relative grid md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <AnimatedSection
                as={Card}
                className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                animation="fadeInUp"
                delay={`delay-${index * 150}`}
              >
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="text-2xl font-semibold text-primary">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </AnimatedSection>
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center">
                   <AnimatedSection
                    as="div"
                    animation="fadeIn"
                    delay={`delay-${index * 150 + 100}`}
                   >
                    <ChevronRight className="h-12 w-12 text-primary/50" />
                   </AnimatedSection>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
