import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = Array.from({ length: 15 }, (_, i) => `/gallery/photo-${i + 1}.jpg`);

const GallerySection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % photos.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const getVisibleIndices = () => {
        const indices = [];
        for (let i = -2; i <= 2; i++) {
            let index = (activeIndex + i) % photos.length;
            if (index < 0) index += photos.length;
            indices.push({ index, offset: i });
        }
        return indices;
    };

    const visiblePhotos = getVisibleIndices();

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % photos.length);
    };

    return (
        <section className="py-24 px-6 bg-background overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-4">
                        Gallery
                    </h2>
                    <p className="text-xl text-muted-foreground font-source max-w-2xl mx-auto">
                        Glimpses of the journey and milestones
                    </p>
                </div>

                <div
                    className="relative h-[400px] flex items-center justify-center"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {visiblePhotos.map(({ index, offset }) => {
                        // Determine styles based on offset
                        // offset -2: Leftmost, blur
                        // offset -1: Left, clear, bigger
                        // offset 0: Center, clear, biggest
                        // offset 1: Right, clear, bigger
                        // offset 2: Rightmost, blur

                        let xTranslate = '0%';
                        let scale = 1;
                        let zIndex = 0;
                        let blur = 'blur(0px)';
                        let opacity = 1;

                        if (offset === 0) {
                            scale = 1.3;
                            zIndex = 20;
                            blur = 'blur(0px)';
                        } else if (Math.abs(offset) === 1) {
                            xTranslate = offset > 0 ? '100%' : '-100%';
                            scale = 1.0;
                            zIndex = 10;
                            blur = 'blur(0px)';
                        } else if (Math.abs(offset) === 2) {
                            xTranslate = offset > 0 ? '180%' : '-180%';
                            scale = 0.7;
                            zIndex = 5;
                            blur = 'blur(4px)';
                            opacity = 0.7;
                        }

                        return (
                            <div
                                key={`${index}-${offset}`}
                                className="absolute transition-all duration-700 ease-in-out cursor-pointer"
                                style={{
                                    transform: `translateX(${xTranslate}) scale(${scale})`,
                                    zIndex,
                                    filter: blur,
                                    opacity
                                }}
                                onClick={() => {
                                    if (offset !== 0) {
                                        setActiveIndex((prev) => (prev + offset + photos.length) % photos.length);
                                    }
                                }}
                            >
                                <div className="w-48 h-36 sm:w-64 sm:h-48 md:w-80 md:h-60 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                                    <img
                                        src={photos[index]}
                                        alt={`Gallery photo ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 gap-2">
                    {photos.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-primary w-6' : 'bg-primary/20 hover:bg-primary/40'
                                }`}
                            onClick={() => setActiveIndex(idx)}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center mt-4 gap-4">
                    <button
                        onClick={handlePrev}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20 hover-lift"
                    >
                        <ChevronLeft className="w-6 h-6 text-foreground" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20 hover-lift"
                    >
                        <ChevronRight className="w-6 h-6 text-foreground" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default GallerySection;
