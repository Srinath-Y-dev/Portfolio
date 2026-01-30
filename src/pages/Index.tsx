import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import SmoothScroll from '@/components/SmoothScroll';

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-obsidian">
        {/* Custom cursor - only on desktop */}
        <div className="hidden md:block">
          <CustomCursor />
        </div>
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main content */}
        <main>
          <HeroSection />
          <div className="section-divider" />
          <AboutSection />
          <SkillsSection />
          <div className="section-divider" />
          <ProjectsSection />
          <EducationSection />
          <div className="section-divider" />
          <ContactSection />
        </main>
      </div>
    </SmoothScroll>
  );
};

export default Index;
