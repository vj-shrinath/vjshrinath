
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, User, Building } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const recommendations = [
  {
    text: "During this period, we found him very dedicated and responsible towards his duty. He possesses extraordinary interpersonal skills and knowledge, which helped him complete all his tasks on time. He is a true team player and has performed several tasks and hands-on during this course period, which includes Java programming along with several pieces of training at HopeConflict. He is our respectable candidate, and we wish him good luck in his future endeavors.",
    author: 'Ganesh R. Awasthi',
    title: 'Chief Executive Officer',
    company: 'HopeConflict E-Learning and IT Solutions',
    url: 'https://drive.google.com/file/d/1N910necY-P8yBLRnmzX0inmiH6R21ZGP/view?usp=sharing',
  },
];

export default function RecommendationsSection() {
  return (
    <section id="recommendations" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="What others say about me.">Recommendations</SectionTitle>
        <div className="max-w-4xl mx-auto">
          {recommendations.map((rec, index) => (
            <Card key={index} className="shadow-xl rounded-lg overflow-hidden">
              <CardHeader className="bg-primary/5 p-6">
                <Quote className="h-10 w-10 text-accent" />
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-foreground font-body leading-relaxed italic mb-6">
                  "{rec.text}"
                </p>
                <div className="flex items-center">
                  <div className="flex-grow">
                    <p className="font-bold text-primary text-xl font-headline flex items-center">
                      <User className="mr-2 h-5 w-5" /> {rec.author}
                    </p>
                    <p className="text-muted-foreground flex items-center">
                      <Building className="mr-2 h-4 w-4" /> {rec.title}, {rec.company}
                    </p>
                  </div>
                </div>
              </CardContent>
              {rec.url && (
                <CardFooter className="bg-muted/30 p-4 flex justify-end">
                    <Button asChild variant="outline" size="sm">
                        <Link href={rec.url} target="_blank" rel="noopener noreferrer">
                        View Original
                        </Link>
                    </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
