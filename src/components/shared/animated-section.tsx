"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight';
  delay?: string; 
  threshold?: number;
  once?: boolean;
}

export function AnimatedSection({
  as: Component = 'section',
  children,
  className,
  animation = 'fadeInUp',
  delay = '',
  threshold = 0.1,
  once = true,
  ...props
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once, animation]);

  const animationClasses = {
    fadeIn: isVisible ? 'animate-fadeIn' : 'opacity-0',
    fadeInUp: isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10',
    fadeInLeft: isVisible ? 'animate-fadeInLeft' : 'opacity-0 -translate-x-10',
    fadeInRight: isVisible ? 'animate-fadeInRight' : 'opacity-0 translate-x-10',
  };
  
  return (
    <Component
      ref={sectionRef}
      className={cn(
        'transition-all duration-700 ease-out',
        delay,
        animationClasses[animation],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
