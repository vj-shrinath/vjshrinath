"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export default function ProjectCard({ title, description, imageUrl, imageHint, tags, liveUrl, repoUrl }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden glass-dark border border-white/5 hover:border-primary/50 transition-colors duration-500 shadow-2xl"
    >
      <div className="aspect-video overflow-hidden relative">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          data-ai-hint={imageHint || "technology project"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>
      
      <div className="p-6 flex-grow flex flex-col relative">
        <h3 className="text-2xl font-bold mb-3 font-headline text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="px-2 py-0 text-[10px] uppercase tracking-wider font-semibold bg-white/5 text-white/70 border-white/10 group-hover:border-primary/30 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <p className="text-muted-foreground text-sm font-sans leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="mt-6 pt-6 border-t border-white/5 flex gap-3">
          {liveUrl && (
            <Button asChild variant="secondary" size="sm" className="bg-primary/20 hover:bg-primary text-white border-none rounded-full px-4">
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-3.5 w-3.5" /> Demo
              </Link>
            </Button>
          )}
          {repoUrl && (
            <Button asChild variant="outline" size="sm" className="border-white/10 hover:border-primary hover:bg-primary/10 text-white/70 hover:text-white rounded-full px-4">
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-3.5 w-3.5" /> Code
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute -inset-px bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
