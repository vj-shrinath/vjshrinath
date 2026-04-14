
"use client";
import { useState } from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import ProjectCard from '@/components/shared/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { softwareProjects, marketingProjects } from '@/data/portfolio';

const softwareCategories = ['All', 'Web', 'Android'];
const marketingCategories = ['All', 'Social Media', 'SEO', 'Graphics', 'Ads', 'Email Marketing'];

export default function ProjectsSection() {
  const [activeSoftwareCategory, setActiveSoftwareCategory] = useState('All');
  const [activeMarketingCategory, setActiveMarketingCategory] = useState('All');

  const filteredSoftwareProjects = activeSoftwareCategory === 'All'
    ? softwareProjects
    : softwareProjects.filter(project => project.category === activeSoftwareCategory);

  const filteredMarketingProjects = activeMarketingCategory === 'All'
    ? marketingProjects
    : marketingProjects.filter(project => project.category === activeMarketingCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="A selection of my recent work in Development and Marketing.">My Projects</SectionTitle>

        <Tabs defaultValue="software" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="software">Software Development</TabsTrigger>
              <TabsTrigger value="marketing">Digital Marketing</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="software">
            <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-y-2">
              {softwareCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveSoftwareCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSoftwareCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md transform scale-105'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSoftwareProjects.map((project, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="marketing">
            <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-y-2">
              {marketingCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveMarketingCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeMarketingCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md transform scale-105'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMarketingProjects.map((project, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}
