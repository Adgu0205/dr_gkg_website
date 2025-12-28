import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, Users, Award } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    title: "RAGA Associates",
    period: "2025 – Current",
    description: "Working Independently with various companies as Senior Advisor for strategic product innovation, business development, strategic alliances and business expansion for global market.",
    icon: Briefcase
  },
  {
    id: 2,
    title: "Vice President – Product Development & Strategy",
    period: "2023 – 2025",
    description: "Experienced leader in Nutra & Pharma specialty ingredients with expertise in new product initiatives, advanced formulation technologies, and technology commercialization. Skilled in managing scientific teams, cross-functional collaborations, IP, licensing, and strategic alliances to drive innovation, revenue growth, and business expansion.",
    icon: Briefcase,
    achievements: ["Played key role in business expansion at Sudeep Nutrition", "Pioneered advanced encapsulation & liposomal technology ", "Built industry–academia collaborations"]
  },
  {
    id: 3,
    title: "Senior General Manager (R&D)",
    period: "2019 – 2023",
    description: "Extensive experience in leading the end-to-end lifecycle of Nutraceutical, Ayurceutical, Pharmaceutical, and Functional Food products — from concept design, formulation, and regulatory compliance to commercialization. Skilled in strategic techno-commercial leadership, market/competitive analysis, licensing, acquisitions, and partnerships with leading global brands, delivering innovative and compliant products across multiple formats (powders, gummies, tablets, sprays, nutrition products, etc.).",
    icon: Briefcase,
    achievements: ["Successfully developed & commercialized 80+ products in 4.5 years", "Pioneered phytopharmaceutical product for Neurodegeneration (US-patented, CDSCO/DCGI submitted, FSSAI & AYUSH approved)", "Directed strategic techno-commercial initiatives — regulatory filings, vendor selection, cost optimization, and IP/licensing negotiations"]
  },
  {
    id: 4,
    title: "General Manager (R&D)",
    period: "2016 – 2017",
    description: "Directed a team of formulation and analytical scientists in Nutraceuticals and Dietary Supplements, driving innovative product development, application studies, and industry collaborations. Partnered with global MNCs to deliver value-added formulations from R&D to commercialization.",
    icon: Briefcase,
    achievements: ["Directed application studies including food fortification, sensory evaluation, and stability testing", "\tLed development of value-added nutraceutical formulations using innovative technologies"]
  }
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !timelineRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const viewportHeight = window.innerHeight;

      // Check if section is in view
      if (sectionTop <= viewportHeight && sectionTop + sectionHeight >= 0) {
        // Calculate progress through the section (0 to 1)
        const progress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight)));

        // Update scroll progress for timeline fill
        setScrollProgress(progress);

        // Update active experience based on scroll progress
        const newActiveIndex = Math.floor(progress * experienceData.length);
        setActiveIndex(Math.min(newActiveIndex, experienceData.length - 1));
      } else if (sectionTop > viewportHeight) {
        // Section is below viewport - reset progress
        setScrollProgress(0);
      } else if (sectionTop + sectionHeight < 0) {
        // Section is above viewport - full progress
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-4">
            Experience Journey
          </h2>
          <p className="text-xl text-muted-foreground font-source max-w-2xl mx-auto">
            A comprehensive timeline of pharmaceutical innovation and leadership
          </p>
        </div>

        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 w-1 h-full bg-border transform -translate-x-1/2">
            <div
              ref={timelineRef}
              className="w-full bg-gradient-primary transition-all duration-500 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experienceData.map((experience, index) => {
              const IconComponent = experience.icon;
              const isActive = index <= activeIndex;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={experience.id}
                  className={`relative flex items-center ${isLeft ? 'lg:justify-start' : 'lg:justify-end'} justify-start`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 lg:left-1/2 top-0 lg:top-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full border-4 border-background flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-gradient-primary shadow-glow scale-110' : 'bg-muted'
                      }`}>
                      <IconComponent className={`w-6 h-6 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full lg:w-1/2 pl-20 lg:pl-0 ${isLeft ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className={`card-gradient rounded-2xl p-6 lg:p-8 hover-lift timeline-item ${isActive ? 'active' : ''} ${isLeft ? 'ml-auto' : 'mr-auto'
                      }`}>
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-primary font-montserrat font-semibold">
                          {experience.period}
                        </span>
                      </div>

                      <h3 className="text-xl lg:text-2xl font-montserrat font-bold text-foreground mb-4">
                        {experience.title}
                      </h3>

                      <p className="text-muted-foreground font-source leading-relaxed mb-6 text-sm lg:text-base">
                        {experience.description}
                      </p>

                      {experience.achievements && (
                        <div className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                              <span className="text-sm text-muted-foreground font-source">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Statistics Tile */}
          <div className="flex justify-center mt-16">
            <div className="text-center card-gradient rounded-xl p-6">
              <div className="text-3xl font-montserrat font-bold text-primary mb-2">10</div>
              <p className="text-muted-foreground font-source">Experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;