
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  country: string;
}

export function TestimonialCard({ quote, name, role, country }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col bg-card shadow-lg rounded-lg">
      <CardContent className="p-6 flex-grow">
        {/*
          The `line-clamp-2` utility should handle truncating the text to two lines.
          The inline style for `minHeight` ensures the paragraph
          itself has enough space for two lines of `text-sm` (default line-height is 1.25rem).
        */}
        <p
          className="text-foreground text-sm line-clamp-2 mb-4"
          style={{ minHeight: 'calc(2 * 1.25rem)' }}
        >
          {quote}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-4 mt-auto border-t border-border">
        <div>
          <p className="font-semibold text-primary text-lg">{name}</p>
          <p className="text-muted-foreground text-sm">{role}, {country}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
