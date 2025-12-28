import { Linkedin, FileText } from 'lucide-react';
import MovingMolecules from './MovingMolecules';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900" />

      {/* Moving Molecules Animation */}
      <MovingMolecules />

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6">
        {/* Left - Portrait */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-1">
          <div className="w-full max-w-[21rem] h-auto aspect-[3/4] lg:h-[30rem] bg-gradient-card rounded-2xl shadow-card hover-lift border border-white/20 overflow-hidden">
            <img
              src="/dr.jpg"
              alt="Dr. Girish Kumar Gupta - Professional Portrait"
              className="w-full h-full object-contain object-top"
            />
          </div>
        </div>

        {/* Right - Info */}
        <div className="text-center lg:text-left space-y-6 order-1 lg:order-2">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4 leading-tight">
              Dr. Girish Kumar Gupta
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-source font-light leading-relaxed">
              Innovator | Techno-Entrepreneur | FR&D Thought Leader | Key Note
              Speaker | Member of Nominating Committee for Council of Experts-USP,
              USA (Cycle: 2025-30).
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/dr-girish-kumar-gupta-15a9587/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
              <span className="text-white font-source">LinkedIn</span>
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift"
            >
              <FileText className="w-5 h-5 text-white group-hover:text-secondary transition-colors" />
              <span className="text-white font-source">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;