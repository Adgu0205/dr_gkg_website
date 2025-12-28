import { useState } from 'react';
import { FileText, Calendar } from 'lucide-react';

const patentsData = [
  {
    id: 1,
    title: "An anti-tubercular formulation of 4-alkoxy phenyl cyclopropyl alkanols",
    year: "2009",
    description: ""
  },
  {
    id: 2,
    title: "Controlled Release Micro-capsule for Osteogenic Action",
    year: "2010",
    description: ""
  },
  {
    id: 3,
    title: "Modified Release Composition of Water Soluble Vitamins and a Process for Its Preparation",
    year: "2013",
    description: ""
  },
  {
    id: 4,
    title: "Controlled Release Micro-Capsule For Osteogenic Action",
    year: "2013",
    description: "The present invention relates to a microcapsule for controlled release of flavanoid compound and a process for preparation thereof. The microcapsule comprising a core particle consisting of a calcium salt, Pluronic F68 [poly (ethylene oxide-co-polypropylene co-polypropylene oxide), block poly oxyethylene-polypropylene block copolymer], loaded with a flavanoid compound, the resulting core particle having a plurality of alternate layers of cationic and anionic polyelectrolytes adsorbed thereon and an outer layer formed by a bile salt, wherein the flavanoid is ranging between 10 to 96% by weight. The present invention relates to a microcapsule for controlled release of flavanoid compound and a process for preparation thereof. The microcapsule comprising a core particle consisting of a calcium salt, Pluronic F68 [poly (ethylene oxide-co-polypropylene co-polypropylene oxide), block poly oxyethylene-polypropylene block copolymer], loaded with a flavanoid compound, the resulting core particle having a plurality of alternate layers of cationic and anionic polyelectrolytes adsorbed thereon and an outer layer formed by a bile salt, wherein the flavanoid is ranging between 10 to 96% by weight. ",
  },
  {
    id: 5,
    title: "Controlled Release Micro-capsule for Osteogenic Action",
    year: "2013",
    description: ""
  },
  {
    id: 6,
    title: "Compositions of Curcuminoids and Process for Preparing Same",
    year: "2023",
    description: "The present invention relates to compositions of Curcuminoids. The present invention specifically relates to powder compositions of Curcuminoids or its metabolites and methods for preparation thereof. The present invention more specifically related to a water soluble powder composition and process for the preparation of Curcuminoids or its metabolites thereof."
  },
  {
    id: 7,
    title: "A SYNERGISTIC HERBAL IMMUNO-MODULATORY FORMULATION",
    year: "2023",
    description: "The present invention describes a herbal formulation for the management of immuno-modulatory activity acting synergistically in vitro. The herbal formulation comprising of a fermented sea buckthorn pulp powder in the concentration range of 25 mg to 100 mg, a nano-solubilized curcuminoid powder(20%) in the concentration range of 125 mg to 500 mg, a pine bark extract (95%) in the concentration range of 25 to 100mg, and an at least one pharmaceutically accepted excipient. In an embodiment of the present invention, the herbal formulation has been evaluated in vitro using cell lines, wherein the cell lines are mammalian cell lines. In another aspect of the invention, the cell types for the desired cell lines are selected from, but not limited to dendritic cells, macrophages, and B cells."
  },
  {
    id: 8,
    title: "A COMPOSITION FOR PREVENTION AND MANAGEMENT OF NEURODEGENERATIVE DISORDER",
    year: "2024",
    description: "The present invention relates to a composition for use in the management of theneurodegenerative disorder. The said composition comprises of Bacoside A3 in therange of 0.5083 mg to 1.5248 mg, Diosgenin in the range of 0.0549mg to 0.1646 mg,Quercetin in the range of 0.0103mg to 0.0308mg, Vitamin C in the range of 0.0439mgto 0.1316mg, Gallic Acid in the range of 0.0914mg to 0.2742mg, Omega 3 fatty acidsin the range of 0.0134mg - 0.0402mg, Luteolin in the range of 0.0019 mg to 0.0057mg,Beta-sitosterol in the range of 0.0081mg to 0.0242mg, Folic Acid in the range of 0.0119mg to 0.0357mg, and a pharmaceutically acceptable carrier and/or diluent. Herein, theabove-listed constituents are the active compounds separated chromatographically fromthe hydro-alcoholic extracts."
  }
];

const PatentsSection = () => {
  const openPatent = (title: string, year: string) => {
    const query = encodeURIComponent(`${title} ${year} patent`);
    const url = `https://patents.google.com/?q=${query}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Split patents into 2 rows with 4 patents each
  const row1 = patentsData.slice(0, 4);
  const row2 = patentsData.slice(4, 8);

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-4">
            Patent Portfolio
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-primary rounded" />
              <span className="text-sm text-muted-foreground">Granted Patents (8)</span>
            </div>
          </div>
        </div>

        {/* Patents Grid - 2 rows with 4 patents each */}
        <div className="space-y-8 mt-8">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {row1.map((patent) => (
              <button
                key={patent.id}
                onClick={() => openPatent(patent.title, patent.year)}
                className="group inline-flex items-stretch shrink-0 focus:outline-none"
                aria-label={`Open patent: ${patent.title}`}
              >
                <div className="w-full card-gradient border border-white/20 rounded-xl p-4 shadow-sm hover-lift text-left transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-primary font-montserrat font-semibold">
                      <Calendar className="w-3 h-3" />
                      {patent.year}
                    </div>
                  </div>
                  <h3 className="font-montserrat font-semibold text-sm text-foreground leading-tight line-clamp-2">
                    {patent.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground font-source leading-relaxed line-clamp-2">
                    {patent.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {row2.map((patent) => (
              <button
                key={patent.id}
                onClick={() => openPatent(patent.title, patent.year)}
                className="group inline-flex items-stretch shrink-0 focus:outline-none"
                aria-label={`Open patent: ${patent.title}`}
              >
                <div className="w-full card-gradient border border-white/20 rounded-xl p-4 shadow-sm hover-lift text-left transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-primary font-montserrat font-semibold">
                      <Calendar className="w-3 h-3" />
                      {patent.year}
                    </div>
                  </div>
                  <h3 className="font-montserrat font-semibold text-sm text-foreground leading-tight line-clamp-2">
                    {patent.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground font-source leading-relaxed line-clamp-2">
                    {patent.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="flex justify-center mt-16">
          <div className="text-center card-gradient rounded-xl p-6">
            <div className="text-3xl font-montserrat font-bold text-primary mb-2">8</div>
            <p className="text-muted-foreground font-source">Granted Patents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatentsSection;