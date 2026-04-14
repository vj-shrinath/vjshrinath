import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Link from 'next/link';

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black font-headline text-white mb-2">
              Vijay<span className="text-primary">.</span>S
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              Crafting high-quality digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center space-x-5">
              <Link href="https://github.com/vj-shrinath" target="_blank" className="p-3 rounded-full glass-dark hover:bg-primary/20 hover:text-primary transition-all duration-300">
                <Github size={20} />
              </Link>
              <Link href="https://linkedin.com/in/vjshrinath" target="_blank" className="p-3 rounded-full glass-dark hover:bg-primary/20 hover:text-primary transition-all duration-300">
                <Linkedin size={20} />
              </Link>
              <Link href="https://instagram.com/vjshrinath" target="_blank" className="p-3 rounded-full glass-dark hover:bg-primary/20 hover:text-primary transition-all duration-300">
                <Instagram size={20} />
              </Link>
              <Link href="https://wa.me/918668439274" target="_blank" className="p-3 rounded-full glass-dark hover:bg-primary/20 hover:text-primary transition-all duration-300">
                <WhatsAppIcon />
              </Link>
              <Link href="mailto:vjshrinath@outlook.com" className="p-3 rounded-full glass-dark hover:bg-primary/20 hover:text-primary transition-all duration-300">
                <Mail size={20} />
              </Link>
            </div>
            
            <div className="text-center md:text-right space-y-1">
              <p className="text-xs text-muted-foreground">
                &copy; {currentYear} Vijay Gopal Shrinath. All rights reserved.
              </p>
              <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest font-bold">
                Built with Next.js & Framer Motion
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
