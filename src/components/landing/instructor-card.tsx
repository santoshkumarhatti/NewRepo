import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Globe } from 'lucide-react';
import Link from 'next/link';

interface InstructorCardProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  imageHint: string;
  linkedinUrl?: string;
  websiteUrl?: string;
}

export function InstructorCard({ name, title, bio, imageUrl, imageHint, linkedinUrl, websiteUrl }: InstructorCardProps) {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="items-center pt-6">
        <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint}
          />
        </div>
        <CardTitle className="text-xl font-semibold text-primary">{name}</CardTitle>
        <CardDescription className="text-accent font-medium">{title}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-4">{bio}</p>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <div className="flex justify-center space-x-3">
          {linkedinUrl && (
            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn`}>
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          )}
          {websiteUrl && (
            <Link href={websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s Website`}>
              <Globe className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
