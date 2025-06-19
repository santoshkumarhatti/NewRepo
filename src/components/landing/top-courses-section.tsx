import { AnimatedSection } from '@/components/shared/animated-section';
import { SectionTitle } from '@/components/shared/section-title';
import { CourseCard } from './course-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const courses = [
  {
    title: "AI & Machine Learning Fundamentals",
    description: "Master the basics of AI and ML, and understand how they're shaping industries. No prior coding experience required.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "AI machine learning",
    category: "Artificial Intelligence",
    courseUrl: "#"
  },
  {
    title: "Digital Marketing Pro Bootcamp",
    description: "Become a certified digital marketing expert. Learn SEO, SEM, social media marketing, content strategy, and analytics.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "digital marketing computer",
    category: "Marketing",
    courseUrl: "#"
  },
  {
    title: "Remote Work & Productivity Mastery",
    description: "Optimize your remote work setup, boost productivity, and master tools for efficient online collaboration.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "remote work productivity",
    category: "Productivity",
    courseUrl: "#"
  },
  {
    title: "Cybersecurity Essentials for Professionals",
    description: "Protect yourself and your organization from cyber threats. Learn essential cybersecurity concepts and practices.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "cybersecurity shield",
    category: "Tech",
    courseUrl: "#"
  },
  {
    title: "Data Science for Business Decisions",
    description: "Unlock the power of data. Learn to analyze data, derive insights, and make informed business decisions.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "data science chart",
    category: "Data Science",
    courseUrl: "#"
  },
  {
    title: "Web Development Foundations",
    description: "Build modern, responsive websites from scratch. Learn HTML, CSS, JavaScript, and popular frameworks.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "web development code",
    category: "Development",
    courseUrl: "#"
  }
];

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
              <CourseCard {...course} />
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="#">
              View All Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
