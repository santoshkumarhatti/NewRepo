
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  country: string; // e.g., "USA", "UK", "Canada", "Australia"
  imageUrl: string;
  imageHint: string;
}

export function TestimonialCard({ quote, name, role, country, imageUrl, imageHint }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between bg-card shadow-lg p-6 rounded-lg">
      <CardContent className="p-0">
        <Quote className="h-8 w-8 text-primary/50 mb-4" />
        <p className="text-foreground italic mb-6 text-md break-words">&ldquo;{quote}&rdquo;</p>
      </CardContent>
      <div className="flex items-center mt-auto">
        <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 shrink-0">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint}
          />
        </div>
        <div>
          <p className="font-semibold text-primary text-lg">{name}</p>
          <p className="text-muted-foreground text-sm">{role}, {country}</p>
        </div>
      </div>
    </Card>
  );
}
