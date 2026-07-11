import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface GalleryImage {
  url: string;
  alt: string;
  caption: string;
  year?: string;
}

interface ImageCarouselProps {
  images: GalleryImage[];
  autoplayInterval?: number; // Set to 0 to disable autoplay
  className?: string;
}

export function ImageCarousel({ 
  images, 
  autoplayInterval = 5000,
  className = "" 
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent((next + images.length) % images.length);
    },
    [current, images.length]
  );

  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  // Reset autoplay on manual interaction
  const resetAutoplay = useCallback(() => {
    // Clear existing interval
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    
    // Only set up autoplay if interval is greater than 0
    if (autoplayInterval > 0) {
      autoplayRef.current = setInterval(() => {
        setDirection(1);
        setCurrent((c) => (c + 1) % images.length);
      }, autoplayInterval);
    }
  }, [images.length, autoplayInterval]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [resetAutoplay]);

  const handlePrev = () => { 
    prev(); 
    if (autoplayInterval > 0) resetAutoplay(); 
  };
  
  const handleNext = () => { 
    next(); 
    if (autoplayInterval > 0) resetAutoplay(); 
  };
  
  const handleDot = (i: number) => { 
    go(i); 
    if (autoplayInterval > 0) resetAutoplay(); 
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? handleNext() : handlePrev();
    }
    touchStartX.current = null;
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className={`w-full max-w-3xl mx-auto select-none ${className}`}>
      {/* Slide container - Changed aspect ratio to 4:5 for square/portrait images */}
      <div
        className="relative overflow-hidden bg-gray-100 border border-black/15 shadow-md"
        style={{ aspectRatio: "7/6" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.32, 0, 0.68, 0] }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={images[current].url}
              alt={images[current].alt}
              className="w-full h-full object-cover grayscale"
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
              <p
                className="text-white text-sm font-medium"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {images[current].caption}
                {images[current].year && (
                  <span className="ml-2 text-white/60 text-xs">· {images[current].year}</span>
                )}
              </p>
              <p
                className="text-white/70 text-xs mt-0.5 leading-relaxed"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {images[current].alt}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrow buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white border border-black/10 flex items-center justify-center shadow-sm transition-all hover:scale-105 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4 text-black" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white border border-black/10 flex items-center justify-center shadow-sm transition-all hover:scale-105 z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4 text-black" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300 rounded-full focus:outline-none"
            style={{
              width: i === current ? "20px" : "8px",
              height: "8px",
              backgroundColor: i === current ? "#000" : "#d1d5db",
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <p
        className="text-center text-xs text-gray-400 mt-2"
        style={{ fontFamily: "'Work Sans', sans-serif" }}
      >
        {current + 1} / {images.length}
      </p>
    </div>
  );
}