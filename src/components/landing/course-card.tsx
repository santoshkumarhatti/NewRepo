
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  courseUrl: string;
}

export function CourseCard({ title, description, imageUrl, imageHint, category, courseUrl }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <Badge variant="secondary" className="mb-2">{category}</Badge>
        <CardTitle className="text-xl font-semibold text-primary mb-2">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full text-primary hover:bg-primary/10">
          <Link href={courseUrl}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
