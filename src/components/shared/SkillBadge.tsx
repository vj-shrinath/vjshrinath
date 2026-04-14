import type { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillBadgeProps {
  name: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>; // Allow custom SVGs
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  color?: string; // Optional color for icon/text
}

export default function SkillBadge({ name, Icon, level, color }: SkillBadgeProps) {
  return (
    <Card className="p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center rounded-lg border-2 border-transparent hover:border-accent group">
      <CardContent className="p-0 flex flex-col items-center justify-center">
        <Icon 
          className="h-12 w-12 mb-3 transition-transform duration-300 group-hover:scale-110" 
          style={{ color: color || 'hsl(var(--primary))' }} 
          aria-hidden="true" 
        />
        <h3 className="text-lg font-semibold font-body text-foreground group-hover:text-primary transition-colors">{name}</h3>
        {level && <p className="text-xs text-muted-foreground mt-1">{level}</p>}
      </CardContent>
    </Card>
  );
}
