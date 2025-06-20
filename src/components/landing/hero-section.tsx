"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-[-2]">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQvOMtMDRcZkBdELvHS4UpMlVbrMrPxnDsewRNiVlclJBGy3jCPQINUOPT&s=10"
          alt="AI in workplace and people learning online"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          data-ai-hint="AI workplace learning"
        />
      </div>
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90 z-[-1]"></div> {/* Overlay */}
      
      <AnimatedSection as="div" className="container mx-auto px-4 text-center relative z-10" animation="fadeInUp">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 font-headline">
          Don’t Let AI Replace You <br className="hidden sm:inline" />— Upskill Today
        </h1>
        <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-10">
          Thousands are future-proofing their careers with in-demand skills. Are you ready to join them?
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
          <a href="#courses">
            Start Learning Now <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </AnimatedSection>
    </section>
  );
}
