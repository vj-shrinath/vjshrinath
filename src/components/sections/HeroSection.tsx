
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-indigo-50 dark:from-gray-900 dark:to-indigo-900 relative overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-5">
        {/* Subtle background pattern or abstract shapes */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsla(var(--primary), 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8 transform transition-all duration-1000 ease-out hover:scale-105">
          <Image
            src="/profile-photo.jpeg"
            alt="Vijay Gopal Shrinath"
            width={200}
            height={200}
            className="rounded-full mx-auto shadow-2xl border-4 border-accent object-cover"
            data-ai-hint="professional portrait"
            priority
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary font-headline animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Vijay Gopal Shrinath
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-10 max-w-2xl mx-auto font-body animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Web Developer & Digital Marketer | Building Scalable Web Solutions & Driving Digital Growth
        </p>
        <div className="space-x-4 animate-fade-in mb-24" style={{ animationDelay: '0.6s' }}> {/* Added mb-24 for more space */}
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105 shadow-lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 transition-transform duration-300 hover:scale-105 shadow-lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <Link href="#projects" aria-label="Scroll to projects">
          <ArrowDown className="h-8 w-8 text-primary" />
        </Link>
      </div>
    </section>
  );
}

