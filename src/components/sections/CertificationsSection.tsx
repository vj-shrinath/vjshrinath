"use client";
import SectionTitle from '@/components/shared/SectionTitle';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

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
    <section id="certifications" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle subtitle="My professional certifications and achievements.">Certifications</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-1 rounded-3xl bg-gradient-to-tr from-white/5 to-white/10 hover:from-primary/20 hover:to-accent/20 transition-all duration-500 group"
            >
              <div className="h-full p-8 rounded-[22px] glass-dark border border-white/5 flex flex-col justify-between overflow-hidden relative">
                <div className="relative z-10 flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <BadgeCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-headline text-white leading-tight">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="font-semibold text-primary">{cert.issuer}</span>
                      <span className="text-white/20">•</span>
                      <span className="text-muted-foreground">{cert.date}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end relative z-10">
                  {cert.url !== '#' && (
                    <Button asChild variant="link" className="text-primary hover:text-white p-0 h-auto font-bold uppercase tracking-widest text-[10px]">
                      <Link href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Verify Credential <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  )}
                </div>
                
                {/* Decorative background number */}
                <span className="absolute bottom-[-20%] right-[-5%] text-9xl font-black text-white/[0.02] pointer-events-none group-hover:text-primary/[0.05] transition-colors italic">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
