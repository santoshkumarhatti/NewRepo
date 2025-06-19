
import { AnimatedSection } from '@/components/shared/animated-section';
import { SectionTitle } from '@/components/shared/section-title';
import { InstructorCard } from './instructor-card';

const instructors = [
  {
    name: "Dr. Alex Chen",
    title: "Lead AI Instructor, Ex-Google AI Researcher",
    bio: "Dr. Chen brings over 15 years of experience in AI and Machine Learning from Silicon Valley, passionate about making complex tech accessible.",
    imageUrl: "https://placehold.co/150x150/EFEFEF/AAAAAA.png",
    imageHint: "AI expert male",
    linkedinUrl: "#",
    websiteUrl: "#"
  },
  {
    name: "Maria Rodriguez",
    title: "Digital Marketing Strategist, Forbes 30 Under 30",
    bio: "Maria has led successful campaigns for Fortune 500 companies and startups alike, specializing in data-driven marketing strategies.",
    imageUrl: "https://placehold.co/150x150/E0E0E0/999999.png",
    imageHint: "marketing expert female",
    linkedinUrl: "#"
  },
  {
    name: "David Miller",
    title: "Productivity Coach & Remote Work Specialist",
    bio: "David helps professionals and teams optimize their workflows and thrive in remote environments, backed by years of practical experience.",
    imageUrl: "https://placehold.co/150x150/D0D0D0/888888.png",
    imageHint: "productivity coach male",
    websiteUrl: "#"
  }
];

export function InstructorsSection() {
  return (
    <AnimatedSection id="instructors" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Meet Our Expert Instructors"
          subtitle="Learn from industry leaders and seasoned professionals dedicated to your success."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
             <AnimatedSection
              key={index}
              as="div"
              animation="fadeInUp"
              delay={`delay-${index * 100}`}
            >
              <InstructorCard {...instructor} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
