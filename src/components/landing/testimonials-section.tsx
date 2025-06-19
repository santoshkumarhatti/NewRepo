
"use client";

import { AnimatedSection } from '@/components/shared/animated-section';
import { SectionTitle } from '@/components/shared/section-title';
import { TestimonialCard } from './testimonial-card';

const testimonials = [
  {
    quote: "I felt stuck in my old job. PrimeLeapInstitute's AI course opened up a whole new career path for me. The mentorship was invaluable!",
    name: "Sarah L.",
    role: "Data Analyst",
    country: "USA",
    imageUrl: "https://placehold.co/100x100.png",
    imageHint: "professional woman"
  },
  {
    quote: "The Digital Marketing bootcamp was incredibly comprehensive. I landed a promotion within 3 months of completing the course. Highly recommend!",
    name: "John B.",
    role: "Marketing Manager",
    country: "UK",
    imageUrl: "https://placehold.co/100x100.png",
    imageHint: "professional man"
  },
  {
    quote: "As a non-tech person, I was hesitant. But the instructors made complex topics easy to understand. I'm now confidently using new productivity tools.",
    name: "Emily K.",
    role: "Project Coordinator",
    country: "Canada",
    imageUrl: "https://placehold.co/100x100.png",
    imageHint: "smiling person"
  },
   {
    quote: "PrimeLeapInstitute helped me pivot my career into tech. The job assistance and lifetime access to materials are fantastic perks.",
    name: "Michael P.",
    role: "Software Developer",
    country: "Australia",
    imageUrl: "https://placehold.co/100x100.png",
    imageHint: "developer"
  }
];

export function TestimonialsSection() {
  const displayedTestimonials = testimonials.slice(0, 3);

  return (
    <AnimatedSection id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Success Stories from Our Students"
          subtitle="Hear from professionals who transformed their careers with PrimeLeapInstitute."
        />
        <div className="max-w-2xl mx-auto space-y-8">
          {displayedTestimonials.map((testimonial, index) => (
             <AnimatedSection
                key={index}
                as="div"
                className="w-full" 
                animation="fadeInUp"
                delay={`delay-${index * 100}`}
              >
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
