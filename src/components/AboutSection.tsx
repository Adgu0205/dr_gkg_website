import { MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Me Tile - Takes 2 columns (bigger) */}
          <div className="lg:col-span-2 card-gradient rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-lg font-source leading-relaxed text-muted-foreground">
              Over 23 years of experience in business development, marketing, and strategic innovation across Nutraceuticals,
              Functional Foods & Wellness, Food Fortification, Rice and Flour Fortification, Beverages (RTD/RTM),
              Pharmaceuticals, Phyto-ceutical, Phytopharmaceuticals and Nutri-cosmetics, with a strong track record in both
              domestic and global markets (US, EU, UK, GCC, APAC).
              <br />
              Led and managed teams in R&D, Business Development, Sales, Project Management, and Scientific Affairs,
              providing guidance, training, and support to achieve organizational goals. Skilled in working with cross-functional
              teams to deliver complete solutions from concept development to commercialization. Successfully launched 120+
              products across multiple categories worldwide.
              <br />
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-montserrat font-bold">23+</span>
              </div>
              <div>
                <p className="font-montserrat font-semibold text-foreground">Years Experience</p>
                <p className="text-sm text-muted-foreground">In Academic/Industrial Research and Business Development</p>
              </div>
            </div>
          </div>

          {/* Based In Tile - Takes 1 column (smaller) */}
          <div className="lg:col-span-1 card-gradient rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
              Based In
            </h2>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-xl font-montserrat font-semibold text-foreground">
                    Vadodara, Gujarat
                  </p>
                  <p className="text-muted-foreground font-source">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;