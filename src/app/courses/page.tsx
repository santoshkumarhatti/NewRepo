
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { CourseCard } from '@/components/landing/course-card';
import { SectionTitle } from '@/components/shared/section-title';
import { courses } from '@/lib/courses';
import { AnimatedSection } from '@/components/shared/animated-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Courses - FutureProof Academy',
  description: 'Explore all courses offered by FutureProof Academy to upskill and secure your future.',
};

export default function AllCoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16"> {/* Added padding top to account for fixed navbar */}
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Courses"
            subtitle="Browse our comprehensive catalog of courses designed to equip you with in-demand skills."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <AnimatedSection
                key={course.slug}
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
