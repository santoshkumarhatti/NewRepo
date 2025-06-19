
"use client";

import { useRef, useEffect } from 'react';
import { AnimatedSection } from '@/components/shared/animated-section';
import { SectionTitle } from '@/components/shared/section-title';
import { TestimonialCard } from './testimonial-card';

const testimonials = [
  {
    quote: "I felt stuck in my old job. Prime Leap Institute's AI course opened up a whole new career path for me. The mentorship was invaluable!",
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
    quote: "Prime Leap Institute helped me pivot my career into tech. The job assistance and lifetime access to materials are fantastic perks.",
    name: "Michael P.",
    role: "Software Developer",
    country: "Australia",
    imageUrl: "https://placehold.co/100x100.png",
    imageHint: "developer"
  },
  {
    quote: "The instructors are top-notch, and the community is very supportive. I've learned so much and feel much more confident in my skills.",
    name: "Aisha R.",
    role: "UX Designer",
    country: "India",
    imageUrl: "https://placehold.co/100x100.png",
    imageHint: "designer woman"
  }
];

export function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 0.5; // Adjust for speed: lower is slower, higher is faster

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isHovering = false;

    const scrollContent = () => {
      if (!isHovering && container) {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth -1) {
          // Optional: Instant reset for a continuous loop effect,
          // or gradually scroll back. For now, simple reset.
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollSpeed;
        }
      }
      animationFrameId = requestAnimationFrame(scrollContent);
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    animationFrameId = requestAnimationFrame(scrollContent);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [scrollSpeed]);

  return (
    <AnimatedSection id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Success Stories from Our Students"
          subtitle="Hear from professionals who transformed their careers with Prime Leap Institute."
        />
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-4 no-scrollbar"
        >
          {testimonials.map((testimonial, index) => (
             <AnimatedSection
                key={index}
                as="div"
                animation="fadeInUp"
                delay={`delay-${index * 100}`}
                className="flex-shrink-0" 
              >
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
