
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

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
    <Card className="flex flex-col bg-card shadow-lg rounded-lg w-80 md:w-96 h-full">
      <CardContent className="p-6 flex-grow">
        <p
          className="text-foreground text-sm mb-4"
        >
          {quote}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-4 mt-auto border-t border-border flex items-center space-x-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint}
          />
        </div>
        <div>
          <p className="font-semibold text-primary text-base">{name}</p>
          <p className="text-muted-foreground text-sm">{role}, {country}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
