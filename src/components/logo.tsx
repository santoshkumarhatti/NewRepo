import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center space-x-2 text-2xl font-bold text-primary ${className}`}>
      <GraduationCap className="h-8 w-8" />
      <span className="font-headline">FutureProof Academy</span>
    </Link>
  );
}
