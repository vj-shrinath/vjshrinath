import SectionTitle from '@/components/shared/SectionTitle';
import SkillBadge from '@/components/shared/SkillBadge';
import { skillsData } from '@/data/portfolio';

const SkillCategory = ({ title, skills }: { title: string, skills: typeof skillsData.frontend }) => (
  <div className="mb-12">
    <h3 className="text-3xl font-semibold text-center mb-8 font-headline text-primary/80">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {skills.map((skill, index) => (
        <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.05 + 0.1}s` }}>
          <SkillBadge {...skill} />
        </div>
      ))}
    </div>
  </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-indigo-50 dark:bg-indigo-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Technologies I work with.">My Skills</SectionTitle>
        <SkillCategory title="Frontend Development" skills={skillsData.frontend} />
        <SkillCategory title="Backend Development" skills={skillsData.backend} />
        <SkillCategory title="Databases" skills={skillsData.databases} />
        <SkillCategory title="Developer Tools & Methodologies" skills={skillsData.tools} />
        <SkillCategory title="Digital Marketing" skills={skillsData.digitalMarketing} />
      </div>
    </section>
  );
}
