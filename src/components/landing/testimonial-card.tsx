
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  country: string; 
  imageUrl: string;
  imageHint: string;
}

export function TestimonialCard({ quote, name, role, country, imageUrl, imageHint }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col bg-card shadow-lg rounded-lg">
      <CardContent className="p-6 flex-grow"> 
        <Quote className="h-8 w-8 text-primary/50 mb-4" />
        <p className="text-foreground text-sm line-clamp-2">
          {quote}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-4 mt-auto border-t border-border"> 
        <div className="flex items-center">
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
      </CardFooter>
    </Card>
  );
}
