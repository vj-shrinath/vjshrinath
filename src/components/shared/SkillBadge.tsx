"use client";
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  color?: string;
}

export default function SkillBadge({ name, Icon, level, color }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-6 rounded-2xl glass-dark border border-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 group cursor-default"
    >
      <div className="relative">
        <div 
          className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"
          style={{ backgroundColor: color || 'hsl(var(--primary))' }}
        />
        <Icon 
          className="h-12 w-12 relative z-10 transition-transform duration-500 group-hover:rotate-12" 
          style={{ color: color || 'hsl(var(--foreground))' }} 
          aria-hidden="true" 
        />
      </div>
      
      <div className="text-center">
        <h3 className="text-sm font-bold font-sans text-white/90 group-hover:text-white transition-colors">{name}</h3>
        {level && <p className="text-[10px] uppercase tracking-tighter text-muted-foreground mt-1 font-semibold">{level}</p>}
      </div>
    </motion.div>
  );
}
