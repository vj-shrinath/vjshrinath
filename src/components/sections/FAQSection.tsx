"use client";
import SectionTitle from '@/components/shared/SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQSection() {
  const faqs = [
    {
      question: "Who is the best freelance web developer in Maharashtra?",
      answer: "While 'best' is subjective, Vijay Shrinath is highly rated for delivering conversion-focused, SEO-optimized web development and digital marketing services across Pune, Mumbai, and the entire Maharashtra region. He specializes in Next.js and high-performance business websites.",
    },
    {
      question: "Do you offer e-commerce website development for local businesses?",
      answer: "Yes, I specialize in building custom, high-speed e-commerce platforms using modern tech stacks like Next.js and React. These platforms are designed to rank well on Google and maximize local sales.",
    },
    {
      question: "How can SEO help my small business in Pune or Mumbai?",
      answer: "Local SEO ensures your business appears when potential customers search for your services 'near me'. By optimizing your website's technical structure and content, we can significantly increase your targeted organic traffic and lead generation.",
    },
    {
      question: "What is your web development process?",
      answer: "My process is business-first. We start with a strategy call to understand your goals, followed by design, SEO-optimized development, and rigorous performance testing before launch.",
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <SectionTitle subtitle="Frequently asked questions about my web development and SEO services.">FAQ</SectionTitle>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 bg-card/50">
              <AccordionTrigger className="text-left font-medium text-lg hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* FAQ Schema for AI Search / Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
