"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about-me' },
  { label: 'Contact', href: '#contact' },
];

const DownloadResumeButton = dynamic(() => import('@/components/resume/DownloadResumeButton'), { ssr: false });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={cn(
      "fixed top-4 left-0 right-0 z-50 transition-all duration-500 px-4",
      isScrolled ? "translate-y-0" : "translate-y-2"
    )}>
      <div className={cn(
        "container mx-auto max-w-7xl rounded-full transition-all duration-500 border border-white/5",
        isScrolled ? "glass-dark shadow-2xl py-2" : "bg-transparent py-4"
      )}>
        <div className="flex items-center justify-between px-6">
          <Link href="/" className="flex items-center space-x-2 text-xl font-headline font-black text-white group" onClick={closeMenu}>
            <div className="p-2 rounded-xl bg-primary/20 group-hover:bg-primary/40 transition-colors">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <span className="hidden sm:block tracking-tight">Vijay<span className="text-primary">.</span>S</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-white/10">
              <DownloadResumeButton />
            </div>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white hover:bg-white/5 rounded-full">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-4 glass-dark rounded-3xl border border-white/10 p-6 shadow-2xl"
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-6 py-4 text-lg font-medium text-white hover:bg-primary/20 rounded-2xl transition-all"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/5 flex justify-center">
                <DownloadResumeButton />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
