import { FileText, Calendar, ExternalLink } from 'lucide-react';

const publicationsData = [
  {
    id: 1,
    title: "Multicomposite ultrathin capsules for sustained ocular delivery of Ciprofloxacin hydrochloride",
    year: "2004",
    journal: "J. Pharm. Pharmaceut. Sci",
    doi: "https://pubmed.ncbi.nlm.nih.gov/15367382/"
  },
  {
    id: 2,
    title: "Galactose grafted chylomicron mimicking emulsion: Evaluation for specificity against HepG-2 and MCF-7 cell line",
    year: "2009",
    journal: "J. Pharm. Pharmacol",
    doi: "https://pubmed.ncbi.nlm.nih.gov/19222902/"
  },
  {
    id: 3,
    title: "Investigations on cellular interaction of Polyelectrolyte based nano-walled reservoir using MCF-7 cell lines: A novel chemotherapeutic approach",
    year: "2009",
    journal: "J. Pharm. Pharmacol",
    doi: "https://pubmed.ncbi.nlm.nih.gov/19958581/"
  },
  {
    id: 4,
    title: "Development and Performance Evaluation of Amphotericin B Transfersomes against Resistant and Sensitive Clinical Isolates of Visceral Leishmaniasis",
    year: "2010",
    journal: "Journal of Biomedical Nanotechnology",
    doi: "https://pubmed.ncbi.nlm.nih.gov/21179947/"
  },
  {
    id: 5,
    title: "Emerging trend in Nano-engineered Polyelectrolyte based Surrogate carriers for Delivery of Bioactives",
    year: "2010",
    journal: "Expert Opin. Drug Deliv",
    doi: "https://pubmed.ncbi.nlm.nih.gov/20716016/"
  },
  {
    id: 6,
    title: "Templated Ultrathin Polyelectrolyte Microreservoir for Delivery of Proteins: Fabrication and Performance Evaluation",
    year: "2011",
    journal: "AAPS Pharmascitech",
    doi: "https://pubmed.ncbi.nlm.nih.gov/21286881/"
  },
  {
    id: 7,
    title: "Ciprofloxacin surf-plexes in sub-micron emulsions: A novel approach to improve payload efficiency and antimicrobial efficacy",
    year: "2011",
    journal: "International Journal of Pharmaceutics",
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0378517311001554"
  },
  {
    id: 8,
    title: "In vivo efficacy studies of layer-by-layer nano-matrix bearing kaempferol for the conditions of osteoporosis: A study in ovariectomized rat model.",
    year: "2012",
    journal: "Eur J Pharm Biopharm",
    doi: "https://pubmed.ncbi.nlm.nih.gov/22926146/"
  },
  {
    id: 9,
    title: "Osteogenic efficacy enhancement of kaempferol through an engineered layer-by-layer matrix: a study in ovariectomized rats.",
    year: "2013",
    journal: "Nanomedicine",
    doi: "https://pubmed.ncbi.nlm.nih.gov/23311987/"
  },
  {
    id: 10,
    title: "Development of docetaxel nanocapsules for improving in vitro cytotoxicity and cellular uptake in MCF-7 cells.",
    year: "2015",
    journal: "Taylor and Francis",
    doi: "10.3109/03639045.2014.900000"
  },
  {
    id: 11,
    title: "Vitamin B12 functionalized layer by layer calcium phosphate nanoparticles: A mucoadhesive and pH responsive carrier for improved oral delivery of insulin",
    year: "2015",
    journal: "Elsevier, Acta Biomaterialia",
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S1742706115302555?via%3Dihub"
  }
];

const PublicationsSection = () => {
  // Split publications into 2 rows: 6 in first row, 5 in second row
  const row1 = publicationsData.slice(0, 6);
  const row2 = publicationsData.slice(6, 11);

  const openPublication = (doi: string) => {
    // Check if it's already a full URL or needs DOI prefix
    const url = doi.startsWith('http') ? doi : `https://doi.org/${doi}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Local marquee styles (self-contained, no external changes) */}
        <style>{`
          .marquee-wrapper { position: relative; overflow: hidden; }
          .marquee-track { display: flex; width: max-content; will-change: transform; animation: marquee var(--duration, 120s) linear infinite; }
          .marquee-track.marquee-reverse { animation-name: marquee-reverse; }
          .marquee-content { display: flex; align-items: stretch; gap: 1.5rem; flex-shrink: 0; }
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}</style>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-4">
            Research Publications
          </h2>
          <p className="text-xl text-muted-foreground font-source max-w-2xl mx-auto">
            11 peer-reviewed publications
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-primary rounded" />
              <span className="text-sm text-muted-foreground">Publications (11)</span>
            </div>
          </div>
        </div>

        {/* Publications - marquee rows */}
        <div className="space-y-8 mt-8">
          {/* First Row - marquee */}
          <div className="marquee-wrapper">
            <div className="marquee-track" style={{ ['--duration' as any]: '120s' }}>
              <div className="marquee-content">
                {row1.map((publication) => (
                  <button
                    key={`r1-${publication.id}`}
                    onClick={() => openPublication(publication.doi)}
                    className="group inline-flex items-stretch shrink-0 focus:outline-none w-[200px] h-[200px]"
                    aria-label={`Open publication: ${publication.title}`}
                  >
                    <div className="w-full h-full card-gradient border border-white/20 rounded-xl p-3 shadow-sm hover-lift text-left transition-all duration-300 flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-3 h-3 text-white" />
                        </div>
                        <div className="flex items-center gap-1 text-xs text-primary font-montserrat font-semibold">
                          <Calendar className="w-3 h-3" />
                          {publication.year}
                        </div>
                      </div>
                      <h3 className="font-montserrat font-semibold text-xs text-foreground leading-tight mb-2 flex-grow">
                        {publication.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-source line-clamp-2 mt-auto">
                        {publication.journal}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="marquee-content" aria-hidden="true">
                {row1.map((publication) => (
                  <button
                    key={`r1-dup-${publication.id}`}
                    onClick={() => openPublication(publication.doi)}
                    className="group inline-flex items-stretch shrink-0 focus:outline-none w-[200px] h-[200px]"
                    aria-label={`Open publication: ${publication.title}`}
                  >
                    <div className="w-full h-full card-gradient border border-white/20 rounded-xl p-3 shadow-sm hover-lift text-left transition-all duration-300 flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-3 h-3 text-white" />
                        </div>
                        <div className="flex items-center gap-1 text-xs text-primary font-montserrat font-semibold">
                          <Calendar className="w-3 h-3" />
                          {publication.year}
                        </div>
                      </div>
                      <h3 className="font-montserrat font-semibold text-xs text-foreground leading-tight mb-2 flex-grow">
                        {publication.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-source line-clamp-2 mt-auto">
                        {publication.journal}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row - marquee (reverse for contrast) */}
          <div className="marquee-wrapper">
            <div className="marquee-track marquee-reverse" style={{ ['--duration' as any]: '120s' }}>
              <div className="marquee-content">
                {row2.map((publication) => (
                  <button
                    key={`r2-${publication.id}`}
                    onClick={() => openPublication(publication.doi)}
                    className="group inline-flex items-stretch shrink-0 focus:outline-none w-[200px] h-[200px]"
                    aria-label={`Open publication: ${publication.title}`}
                  >
                    <div className="w-full h-full card-gradient border border-white/20 rounded-xl p-3 shadow-sm hover-lift text-left transition-all duration-300 flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-3 h-3 text-white" />
                        </div>
                        <div className="flex items-center gap-1 text-xs text-primary font-montserrat font-semibold">
                          <Calendar className="w-3 h-3" />
                          {publication.year}
                        </div>
                      </div>
                      <h3 className="font-montserrat font-semibold text-xs text-foreground leading-tight mb-2 flex-grow">
                        {publication.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-source line-clamp-2 mt-auto">
                        {publication.journal}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="marquee-content" aria-hidden="true">
                {row2.map((publication) => (
                  <button
                    key={`r2-dup-${publication.id}`}
                    onClick={() => openPublication(publication.doi)}
                    className="group inline-flex items-stretch shrink-0 focus:outline-none w-[200px] h-[200px]"
                    aria-label={`Open publication: ${publication.title}`}
                  >
                    <div className="w-full h-full card-gradient border border-white/20 rounded-xl p-3 shadow-sm hover-lift text-left transition-all duration-300 flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-3 h-3 text-white" />
                        </div>
                        <div className="flex items-center gap-1 text-xs text-primary font-montserrat font-semibold">
                          <Calendar className="w-3 h-3" />
                          {publication.year}
                        </div>
                      </div>
                      <h3 className="font-montserrat font-semibold text-xs text-foreground leading-tight mb-2 flex-grow">
                        {publication.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-source line-clamp-2 mt-auto">
                        {publication.journal}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="flex justify-center mt-16">
          <div className="text-center card-gradient rounded-xl p-6">
            <div className="text-3xl font-montserrat font-bold text-primary mb-2">11</div>
            <p className="text-muted-foreground font-source">Peer-Reviewed Publications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
