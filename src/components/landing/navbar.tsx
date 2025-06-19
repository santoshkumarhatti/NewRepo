"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#problem', label: 'The Problem' },
  { href: '#why-us', label: 'Why Us?' },
  { href: '#courses', label: 'Courses' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 shadow-lg backdrop-blur-sm py-3" : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground ml-4">
            <Link href="#final-cta">
              Start Learning <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
              <Link href="#final-cta" onClick={() => setIsMenuOpen(false)}>
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
