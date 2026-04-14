"use client";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[100svh] flex items-center justify-center relative overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-12 group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-primary/50 to-accent/50">
              <Image
                src="/profile-photo.jpeg"
                alt="Vijay Shrinath - Professional Freelance Full Stack Web Developer"
                width={180}
                height={180}
                className="rounded-full border-4 border-background object-cover shadow-2xl"
                priority
              />
            </div>
            {/* Soft decorative ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-primary/30 rounded-full pointer-events-none" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Building Digital Experiences
            </h2>
            <h1 className="text-5xl md:text-8xl font-black mb-6 font-headline tracking-tight">
              <span className="text-foreground">Vijay </span>
              <span className="text-gradient">Shrinath</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Full Stack Web Developer crafting high-performance, 
              visually stunning digital solutions through code and creativity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button asChild size="lg" className="h-14 px-8 text-lg font-medium rounded-full bg-primary hover:bg-primary/90 shadow-[0_10px_40px_-10px_rgba(var(--primary),0.5)] transition-all hover:scale-105">
              <Link href="#projects">Explore Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-medium rounded-full border-primary/20 hover:bg-primary/5 backdrop-blur-sm transition-all hover:scale-105">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center gap-6 text-muted-foreground"
          >
            <a href="https://github.com/vj-shrinath" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/vjshrinath" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@shrinath.com" className="hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}

