import { Logo } from '@/components/logo';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-muted-foreground text-sm">
              Empowering professionals to thrive in the age of AI. Upskill today for a secure tomorrow.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#courses" className="text-muted-foreground hover:text-primary text-sm">Top Courses</Link></li>
              <li><Link href="#why-us" className="text-muted-foreground hover:text-primary text-sm">Why Choose Us</Link></li>
              <li><Link href="#faq" className="text-muted-foreground hover:text-primary text-sm">FAQs</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Prime Leap Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
