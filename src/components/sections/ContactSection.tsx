import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

// Simple inline SVG for WhatsApp icon as it is not in lucide-react
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
    <section id="contact" className="py-20 bg-indigo-50 dark:bg-indigo-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle subtitle="Have a project in mind? Let's talk.">Contact Me</SectionTitle>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          I am currently available for freelance work and open to discussing new projects. If you're looking for a dedicated developer to bring your ideas to life, I'd love to hear from you.
        </p>
        <div className="flex justify-center items-center flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105 shadow-lg">
                <Link href="mailto:vjshrinath@outlook.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                </Link>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#25D366]/90 transition-transform duration-300 hover:scale-105 shadow-lg">
                <Link href="https://wa.me/918668439274" target='_blank' rel='noopener noreferrer'>
                    <WhatsAppIcon className="mr-2 h-5 w-5" />
                    WhatsApp
                </Link>
            </Button>
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-transform duration-300 hover:scale-105 shadow-lg">
                <Link href="https://instagram.com/vjshrinath" target='_blank' rel='noopener noreferrer'>
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
