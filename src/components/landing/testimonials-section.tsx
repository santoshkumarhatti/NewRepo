
"use client";

import { AnimatedSection } from '@/components/shared/animated-section';
import { SectionTitle } from '@/components/shared/section-title';
import { TestimonialCard } from './testimonial-card';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


const testimonials = [
  {
    quote: "I felt stuck in my old job. FutureProof Academy's AI course opened up a whole new career path for me. The mentorship was invaluable!",
    name: "Sarah L.",
    role: "Data Analyst",
    country: "USA",
  },
  {
    quote: "The Digital Marketing bootcamp was incredibly comprehensive. I landed a promotion within 3 months of completing the course. Highly recommend!",
    name: "John B.",
    role: "Marketing Manager",
    country: "UK",
  },
  {
    quote: "As a non-tech person, I was hesitant. But the instructors made complex topics easy to understand. I'm now confidently using new productivity tools.",
    name: "Emily K.",
    role: "Project Coordinator",
    country: "Canada",
  },
   {
    quote: "FutureProof Academy helped me pivot my career into tech. The job assistance and lifetime access to materials are fantastic perks.",
    name: "Michael P.",
    role: "Software Developer",
    country: "Australia",
  }
];

export function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Success Stories from Our Students"
          subtitle="Hear from professionals who transformed their careers with FutureProof Academy."
        />
        <div className="relative">
          <ScrollArea className="w-full whitespace-nowrap pb-4">
            <div className="flex w-max space-x-6">
              {testimonials.map((testimonial, index) => (
                 <AnimatedSection
                    key={index}
                    as="div"
                    className="w-[350px] md:w-[400px]" // Card width
                    animation="fadeInUp"
                    delay={`delay-${index * 100}`}
                  >
                    <TestimonialCard {...testimonial} />
                  </AnimatedSection>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </AnimatedSection>
  );
}
