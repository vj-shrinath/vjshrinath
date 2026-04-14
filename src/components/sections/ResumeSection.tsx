import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle subtitle="Download my professional resume.">My Resume</SectionTitle>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Interested in learning more about my qualifications and experience? Download my resume for a detailed overview.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105 shadow-lg">
          <Link href="https://drive.google.com/uc?export=download&id=1-dzaN-gkwBTJhpG9H_2bL_5RXvRBUug_" target="_blank" download>
            <Download className="mr-2 h-5 w-5" />
            Download Resume (PDF)
          </Link>
        </Button>
      </div>
    </section>
  );
}
