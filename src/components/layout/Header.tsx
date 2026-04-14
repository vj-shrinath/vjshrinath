"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'About Me', href: '#about-me' },
  { label: 'Recommendations', href: '#recommendations' },
  { label: 'Contact', href: '#contact' },
];

import dynamic from 'next/dynamic';

const DownloadResumeButton = dynamic(() => import('@/components/resume/DownloadResumeButton'), { ssr: false });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? 'bg-background/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-headline font-bold text-primary hover:text-accent transition-colors" onClick={closeMenu}>
            <Code className="h-8 w-8" />
            <span>Vijay G. Shrinath</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "font-medium text-foreground hover:text-primary transition-colors duration-300 rounded-md",
                  item.label === 'Contact' ? 'bg-accent/80 text-accent-foreground px-3 py-1.5 hover:bg-accent hover:text-accent-foreground animate-pulse-light' : ''
                )}
              >
                {item.label}
              </Link>
            ))}
            <DownloadResumeButton />
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg py-4 animate-fade-in">
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "font-medium text-foreground hover:text-primary transition-colors duration-300 rounded-md",
                  item.label === 'Contact' ? 'bg-accent/80 text-accent-foreground px-3 py-1.5 hover:bg-accent hover:text-accent-foreground animate-pulse-light' : ''
                )}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <DownloadResumeButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
