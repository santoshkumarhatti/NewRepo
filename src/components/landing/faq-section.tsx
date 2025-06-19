import { AnimatedSection } from '@/components/shared/animated-section';
import { SectionTitle } from '@/components/shared/section-title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can this platform help me change careers?",
    answer: "Absolutely! Many of our courses are designed for career changers, providing foundational knowledge and practical skills. Our job assistance resources can also support your transition."
  },
  {
    question: "What if I’m not tech-savvy? Can I still take these courses?",
    answer: "Yes! We offer beginner-friendly courses with no prerequisites. Our instructors are skilled at explaining complex topics clearly, and you'll have access to support communities."
  },
  {
    question: "Are the courses self-paced?",
    answer: "Most of our courses are self-paced, allowing you to learn on your own schedule. You'll have lifetime access to course materials, so you can revisit them anytime."
  },
  {
    question: "What kind of support do I get during the course?",
    answer: "You'll have access to instructor Q&A sessions, student forums, and dedicated support channels. Premium courses may include one-on-one mentorship opportunities."
  },
  {
    question: "Do I get a certificate upon completion?",
    answer: "Yes, upon successful completion of a course, you will receive a verifiable certificate from FutureProof Academy to showcase your new skills on your resume and LinkedIn profile."
  }
];

export function FaqSection() {
  return (
    <AnimatedSection id="faq" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Have questions? We've got answers. If you don't find what you're looking for, feel free to contact us."
        />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AnimatedSection 
                key={index} 
                as={AccordionItem} 
                value={`item-${index}`} 
                className="border-b border-border last:border-b-0 bg-background rounded-md mb-3 shadow-sm"
                animation="fadeInUp"
                delay={`delay-${index * 100}`}
              >
                <AccordionTrigger className="p-6 text-lg font-medium text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </AnimatedSection>
  );
}
