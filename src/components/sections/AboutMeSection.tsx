"use client";

import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';
import { aboutMeText } from '@/data/portfolio';


export default function AboutMeSection() {
  return (
    <section id="about-me" className="py-20 bg-indigo-50 dark:bg-indigo-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="A little bit about my journey and passion.">About Me</SectionTitle>

        <Card className="max-w-4xl mx-auto shadow-xl rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline flex items-center"><User className="mr-2 h-6 w-6 text-accent" /> Vijay Gopal Shrinath</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-foreground whitespace-pre-line font-body leading-relaxed text-lg space-y-4">
              {aboutMeText.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
