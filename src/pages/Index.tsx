import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import GallerySection from '../components/GallerySection';
import AchievementsSection from '../components/AchievementsSection';
import PatentsSection from '../components/PatentsSection';
import PublicationsSection from '../components/PublicationsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <GallerySection />
      <AchievementsSection />
      <PatentsSection />
      <PublicationsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-3 px-6 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-source text-sm">
            © 2025 reserved
          </p>
          <p className="text-muted-foreground font-source text-sm">
            Made by:{' '}
            <a
              href="https://theadityagupta.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-300 font-semibold"
            >
              Aditya Gupta
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
