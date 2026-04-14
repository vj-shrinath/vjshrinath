import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Link from 'next/link';

// Simple inline SVG for WhatsApp icon as it is not in lucide-react
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
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
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="https://github.com/vj-shrinath" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors">
            <Github size={28} />
          </Link>
          <Link href="https://www.linkedin.com/in/vijay-shrinath" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
            <Linkedin size={28} />
          </Link>
          <Link href="https://instagram.com/vjshrinath" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
            <Instagram size={28} />
          </Link>
          <Link href="https://wa.me/918668439274" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-accent transition-colors">
            <WhatsAppIcon />
          </Link>
          <Link href="mailto:vjshrinath@outlook.com" aria-label="Email" className="hover:text-accent transition-colors">
            <Mail size={28} />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Vijay Gopal Shrinath. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with Next.js and Tailwind CSS. Hosted on Firebase.
        </p>
      </div>
    </footer>
  );
}
