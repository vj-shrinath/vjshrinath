import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';

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
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full rounded-lg border-2 border-transparent hover:border-primary">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden relative">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            data-ai-hint={imageHint || "technology project"}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-bold mb-3 font-headline text-primary">{title}</CardTitle>
        <div className="mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="mr-2 mb-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground text-sm font-body leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="p-6 bg-muted/30 flex justify-between items-center">
        <div className="flex space-x-3">
          {liveUrl && (
            <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {repoUrl && (
            <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Code
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
