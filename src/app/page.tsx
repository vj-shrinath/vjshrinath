import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ResumeSection from '@/components/sections/ResumeSection';
import AboutMeSection from '@/components/sections/AboutMeSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import RecommendationsSection from '@/components/sections/RecommendationsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <AboutMeSection />
        <RecommendationsSection />
        <ContactSection />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
}
