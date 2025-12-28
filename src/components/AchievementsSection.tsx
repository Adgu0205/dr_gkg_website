import { Award } from 'lucide-react';

const achievementsData = [
    {
        id: 1,
        text: "Life Member of Bioencapsulation Research Group, France."
    },
    {
        id: 2,
        text: "Participated as Key note speaker in to various conferences and exhibitions of international reputes."
    },
    {
        id: 3,
        text: "Received incentive awards by Director-CDRI for best publications (2013 and 2014)."
    },
    {
        id: 4,
        text: "Received many travel grants for international presentation (CSIR, DST, BRG France etc.)"
    },
    {
        id: 5,
        text: "Received Best Poster Awards in ICONTOX 2008."
    },
    {
        id: 6,
        text: "Initiated 2-3 startup for incubation in to AIC-CCMB Hyderabad and BITS Pilani Rajasthan."
    },
    {
        id: 7,
        text: "Received fellowship grant by UGC-JRF, ICMR-SRF and CSIR-RA for conducting research program."
    },
    {
        id: 8,
        text: "Participated in to various extramural research project as PI."
    },
    {
        id: 9,
        text: "Published paper in 18 International journals of reputes, magazine and having 8 patents (granted, Indian as well as International). Highlighted many relevant topics on to media and journals."
    },
    {
        id: 10,
        text: "Strongly believe in industry-academia-collaborations. Signed MOU with IMS BHU, SRM University Chennai, Adesh University, Bhatinda, BITS Pilani, RJ, DPSARU, Delhi, UPES Dehradun, IIIM Jammu, NII New Delhi, NIPER Mohali, Jamia Hamdard, New Delhi, CCMB, Hyderabad."
    },
    {
        id: 11,
        text: "International collaboration with Optibiotix UK, GLN Labs (A subsidiary of IMAC USA), Vitonnix, UK."
    },
    {
        id: 12,
        text: "Worked as guest faculty in NIPER Raebareli for guiding master student for their dissertation."
    },
    {
        id: 13,
        text: "Member of Expert \"Nominating committee of Council of Expert\" (NC-CoE) USP, USA (Cycle: 2025-30)."
    }
];

const AchievementsSection = () => {
    const firstTwelve = achievementsData.slice(0, 12);
    const lastAchievement = achievementsData[12];

    return (
        <section className="py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-4">
                        Achievements
                    </h2>
                    <p className="text-xl text-muted-foreground font-source max-w-2xl mx-auto">
                        Recognition and milestones in pharmaceutical research and innovation
                    </p>
                </div>

                {/* First 12 Achievements Grid - 2 columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {firstTwelve.map((achievement) => (
                        <div
                            key={achievement.id}
                            className="card-gradient rounded-xl p-6 hover-lift"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                        <Award className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <p className="text-muted-foreground font-source leading-relaxed flex-1">
                                    {achievement.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Last Achievement - Centered */}
                <div className="flex justify-center">
                    <div className="card-gradient rounded-xl p-6 hover-lift max-w-2xl w-full">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                    <Award className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <p className="text-muted-foreground font-source leading-relaxed flex-1">
                                {lastAchievement.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
