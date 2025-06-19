
import { Brain, ShieldCheck, UsersRound, Briefcase, Clock, TrendingUp } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "In-Demand Skills",
    description: "Learn the latest skills demanded by top employers in AI, tech, and digital industries."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "AI-Proof Careers",
    description: "Our courses are designed to help you build a resilient career path in the age of automation."
  },
  {
    icon: <UsersRound className="h-8 w-8 text-primary" />,
    title: "Expert Mentorship",
    description: "Get guidance and support from industry veterans and successful professionals."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Job Assistance",
    description: "We provide resources and support to help you land your dream job or advance your career."
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Lifetime Access",
    description: "Enjoy lifetime access to course materials, so you can learn at your own pace and revisit content anytime."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Flexible Learning",
    description: "Learn anytime, anywhere, on any device. Fit education into your busy schedule."
  }
];

export function WhyChooseUsSection() {
  return (
    <AnimatedSection id="why-us" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Why Prime Leap Institute?"
          subtitle="We're not just another online course platform. We are your partners in building a resilient and successful career in the rapidly evolving digital landscape."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              as={Card} 
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              animation="fadeInUp"
              delay={`delay-${index * 100}`}
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-3">
                {feature.icon}
                <CardTitle className="text-xl font-semibold text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
