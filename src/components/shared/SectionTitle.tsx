"use client";
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  subtitle?: string;
}

export default function SectionTitle({ children, subtitle, className, ...props }: SectionTitleProps) {
  return (
    <div className={cn("mb-16 text-center space-y-4", className)} {...props}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tight">
          {children}
        </h2>
        <div className="flex justify-center mt-4">
          <div className="h-1.5 w-12 bg-primary rounded-full" />
          <div className="ml-1 h-1.5 w-1.5 bg-accent rounded-full animate-pulse" />
        </div>
      </motion.div>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
