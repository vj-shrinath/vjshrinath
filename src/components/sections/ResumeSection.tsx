"use client";
import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import Link from 'next/link';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <SectionTitle subtitle="Professional history and qualifications.">My Resume</SectionTitle>
        
        <div className="max-w-xl mx-auto p-10 rounded-[2.5rem] glass-dark border border-white/5 shadow-2xl">
          <FileText className="h-16 w-16 text-primary/40 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Interested in a deep dive into my professional journey? 
            Download the latest version of my resume below.
          </p>
          <Button asChild size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-white/90 font-bold transition-all hover:scale-105">
            <Link href="https://drive.google.com/uc?export=download&id=1-dzaN-gkwBTJhpG9H_2bL_5RXvRBUug_" target="_blank" download>
              <Download className="mr-3 h-5 w-5" />
              Download PDF
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
