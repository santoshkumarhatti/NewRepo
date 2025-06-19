
import { AnimatedSection } from '@/components/shared/animated-section';
import { SectionTitle } from '@/components/shared/section-title';
import { CourseCard } from './course-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { courses } from '@/lib/courses';

export function TopCoursesSection() {
  return (
    <AnimatedSection id="courses" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Explore Our Top Courses"
          subtitle="Handpicked courses designed to equip you with the most in-demand skills for today's and tomorrow's job market."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.slice(0, 6).map((course, index) => (
             <AnimatedSection 
              key={index} 
              as="div" 
              animation="fadeInUp"
              delay={`delay-${index * 100}`}
            >
              <CourseCard 
                title={course.title}
                description={course.description}
                imageUrl={course.imageUrl}
                imageHint={course.imageHint}
                category={course.category}
                courseUrl={`/courses/${course.slug}`}
              />
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="/courses">
              View All Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
