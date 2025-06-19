
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { getCourseBySlug, Course } from '@/lib/courses';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: 'Course Not Found - FutureProof Academy',
    }
  }

  return {
    title: `${course.title} - FutureProof Academy`,
    description: course.description.substring(0, 160), // Use a snippet for meta description
  }
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-secondary"> {/* Added padding top */}
        <div className="container mx-auto px-4">
          <article className="bg-background p-6 md:p-10 rounded-lg shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                  src={course.imageUrl.replace('400x250', '800x450')} // Larger image for detail page
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={course.imageHint}
                />
              </div>
              <div>
                <Badge variant="secondary" className="mb-3 text-sm">{course.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{course.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  This is a more detailed placeholder description. For a real application, this would be much longer and provide comprehensive information about the course content, learning outcomes, prerequisites, instructor details, and more. 
                  <br/><br/>
                  {course.description}
                </p>
                
                {/* Placeholder for more course details like modules, duration, price etc. */}
                <div className="mb-8 space-y-2">
                  <p><span className="font-semibold">Duration:</span> 8 Weeks (Self-Paced)</p>
                  <p><span className="font-semibold">Skill Level:</span> All Levels</p>
                  <p><span className="font-semibold">Certificate:</span> Included</p>
                </div>

                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg w-full md:w-auto" asChild>
                  <Link href={`/checkout?courseId=${course.slug}`}>
                    Buy Now <ShoppingCart className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-primary mb-4">What you'll learn</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Fundamental concepts of {course.category}.</li>
                <li>Practical skills applicable in real-world scenarios.</li>
                <li>How to use industry-standard tools and techniques.</li>
                <li>Strategies for {course.title.toLowerCase().includes('marketing') ? 'effective marketing campaigns' : course.title.toLowerCase().includes('ai') ? 'building AI models' : 'achieving your goals'}.</li>
                <li>And much more!</li>
              </ul>
            </div>

          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
