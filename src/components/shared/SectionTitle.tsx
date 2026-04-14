import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  subtitle?: string;
}

export default function SectionTitle({ children, subtitle, className, ...props }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2
        className={cn("text-4xl md:text-5xl font-bold text-primary mb-2 font-headline", className)}
        {...props}
      >
        {children}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground font-body">{subtitle}</p>}
      <div className="mt-4 h-1 w-20 bg-accent mx-auto rounded-full"></div>
    </div>
  );
}
