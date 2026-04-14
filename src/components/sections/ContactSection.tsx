"use client";
import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { Instagram, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ContactForm from '../shared/ContactForm';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle subtitle="Have a project in mind? Let's bring it to life.">Let's Connect</SectionTitle>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Details & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold font-headline text-white">Let's talk about your vision.</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm currently available for freelance work and open to new collaborations. 
                Whether you have a specific project or just a vague idea, my inbox is always open.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Email Me</p>
                  <a href="mailto:vjshrinath@outlook.com" className="text-lg text-white hover:text-primary transition-colors">vjshrinath@outlook.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  <Link href="https://wa.me/918668439274" target="_blank" className="p-3 rounded-full glass-dark hover:bg-primary/20 hover:text-primary transition-all">
                    <WhatsAppIcon />
                  </Link>
                  <Link href="https://instagram.com/vjshrinath" target="_blank" className="p-3 rounded-full glass-dark hover:bg-primary/20 hover:text-primary transition-all">
                    <Instagram size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-8 md:p-10 rounded-[2.5rem] glass-dark border border-white/5 shadow-2xl"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
