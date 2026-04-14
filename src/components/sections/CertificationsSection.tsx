
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const certifications = [
   {
    title: 'Front End Web Development Ultimate Guide',
    issuer: 'Udemy',
    date: 'August 2025',
    url: 'https://www.udemy.com/certificate/UC-d06e131f-872d-4046-9428-2e816ad66451/',
  },
  {
    title: 'Web Development Internship',
    issuer: 'Prodigy InfoTech',
    date: 'March 2025',
    url: 'https://drive.google.com/file/d/1Od3fzOmCW-nIgdp-6IszARvlrARHbTl5/view?usp=sharing',
  },
  {
    title: 'JAVA Language Course',
    issuer: 'HopeConflict E-learning and IT Solutions Pvt. Ltd.',
    date: 'January 2025',
    url: 'https://drive.google.com/file/d/1NDo_lHz-IJC6DHhqsATOZl7tmc8uLVe2/view?usp=sharing',
  },
  {
    title: 'HTML, JavaScript, & Bootstrap - Certification Course',
    issuer: 'Udemy & YouAccel Training',
    date: 'November 2020',
    url: 'https://www.udemy.com/certificate/UC-962a9b85-4207-439b-bc1c-0b4d121baacf/',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="My certifications and professional development.">Certifications</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-start">
                  <BadgeCheck className="h-8 w-8 text-accent mr-3 flex-shrink-0" />
                  <span className="text-xl font-headline text-primary">{cert.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground font-semibold">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
                {cert.url !== '#' && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                      View Credential
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
