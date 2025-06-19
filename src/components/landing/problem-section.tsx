import { AlertTriangle, BarChart3,Zap } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    icon: <BarChart3 className="h-10 w-10 text-destructive" />,
    value: "40%",
    description: "of current jobs could be automated by 2030."
  },
  {
    icon: <Zap className="h-10 w-10 text-destructive" />,
    description: "The pace of technological change is accelerating. If you’re not learning, you’re falling behind."
  }
];

export function ProblemSection() {
  return (
    <AnimatedSection id="problem" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="🚨 AI is Changing Everything"
          subtitle="The world of work is evolving faster than ever. Traditional roles are at risk, and new skills are becoming essential for survival and success."
          titleClassName="text-destructive"
        />
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {stats.map((stat, index) => (
            <AnimatedSection 
              key={index} 
              as={Card} 
              className="shadow-xl border-destructive/50"
              animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={index % 2 === 0 ? 'delay-0' : 'delay-200'}
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                {stat.icon}
                {stat.value && <CardTitle className="text-4xl font-bold text-destructive">{stat.value}</CardTitle>}
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground">{stat.description}</p>
              </CardContent>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection as="div" className="mt-12 text-center" animation="fadeInUp" delay="delay-400">
          <p className="text-xl md:text-2xl font-semibold text-primary">
            The time to act is <span className="text-accent underline">now</span>. Don't wait until it's too late to secure your career.
          </p>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
