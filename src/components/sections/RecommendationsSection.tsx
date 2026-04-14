"use client";
import SectionTitle from '@/components/shared/SectionTitle';
import { Quote, User, Building, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

const recommendations = [
  {
    text: "During this period, we found him very dedicated and responsible towards his duty. He possesses extraordinary interpersonal skills and knowledge, which helped him complete all his tasks on time. He is a true team player and has performed several tasks and hands-on during this course period, which includes Java programming along with several pieces of training at HopeConflict. He is our respectable candidate, and we wish him good luck in his future endeavors.",
    author: 'Ganesh R. Awasthi',
    title: 'Chief Executive Officer',
    company: 'HopeConflict E-Learning and IT Solutions',
    url: 'https://drive.google.com/file/d/1N910necY-P8yBLRnmzX0inmiH6R21ZGP/view?usp=sharing',
  },
];

export default function RecommendationsSection() {
  return (
    <section id="recommendations" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Client and mentor testimonials.">Recommendations</SectionTitle>
        
        <div className="max-w-4xl mx-auto">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 rounded-[2rem] glass-dark border border-white/5 shadow-2xl overflow-hidden"
            >
              <Quote className="absolute top-8 right-8 h-16 w-16 text-primary/10 -rotate-12" />
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-white/90 font-sans leading-relaxed italic mb-10">
                  "{rec.text}"
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/10 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
                      <User className="text-white h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white font-headline">{rec.author}</h4>
                      <p className="text-primary text-sm font-semibold flex items-center gap-2">
                        <Building className="h-4 w-4" /> {rec.title} @ {rec.company}
                      </p>
                    </div>
                  </div>

                  {rec.url && (
                    <Button asChild variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-white/70 hover:text-white">
                      <Link href={rec.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> View Original
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
