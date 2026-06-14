import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FounderPhoto {
  url: string;
  caption: string;
  year?: string;
}

interface FounderCarouselProps {
  name: string;
  years: string;
  role: string;
  photos: FounderPhoto[];
  biography: string[];
}

export function FounderCarousel({ name, years, role, photos, biography }: FounderCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="bg-white p-4 md:p-8 shadow-2xl">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Carousel Section */}
        <div className="relative">
          <div className="relative aspect-[3/4] bg-gray-100 border-2 border-black/20 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={photos[currentIndex].url}
                  alt={`${name} - ${photos[currentIndex].caption}`}
                  className="w-full h-full object-cover grayscale"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Slide Indicators */}
            {photos.length > 1 && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 transition-all ${
                      idx === currentIndex ? "bg-white w-6" : "bg-white/50"
                    }`}
                    aria-label={`Go to photo ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Caption */}
          <div className="mt-3 px-3 py-2 bg-gray-50 border-t border-black/10">
            <p className="text-xs text-gray-600" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              {photos[currentIndex].caption}
              {photos[currentIndex].year && (
                <span className="ml-2 text-gray-400">• {photos[currentIndex].year}</span>
              )}
            </p>
          </div>
        </div>

        {/* Biography Section */}
        <div>
          <div className="mb-4 md:mb-6">
            <h3 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {name}
            </h3>
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
              <span className="text-xs uppercase tracking-widest text-gray-500" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                {role}
              </span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-sm italic text-gray-600" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {years}
              </span>
            </div>
            <div className="w-16 h-0.5 bg-black"></div>
          </div>

          <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            {biography.map((paragraph, idx) => (
              <p key={idx} className="text-sm md:text-[15px] first-letter:text-3xl first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
