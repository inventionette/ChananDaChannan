import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GalleryImage {
  url: string;
  alt: string;
  caption: string;
  year?: string;
}

interface GalleryVideo {
  thumbnailUrl: string;
  title: string;
  description: string;
  year?: string;
  duration?: string;
}

const galleryImages: GalleryImage[] = [
  { url: "", alt: "Community gathering at the founding ceremony", caption: "Founding Ceremony", year: "1995" },
  { url: "", alt: "First scholarship recipients with founders", caption: "First Scholars", year: "1996" },
  { url: "", alt: "Students in the college campus", caption: "GNDEC Campus", year: "1998" },
  { url: "", alt: "Annual award distribution event", caption: "Award Distribution", year: "2000" },
  { url: "", alt: "Founders addressing community members", caption: "Community Address", year: "2002" },
  { url: "", alt: "Group photograph of scholars and mentors", caption: "Scholars & Mentors", year: "2005" },
  { url: "", alt: "Cultural programme at the annual gathering", caption: "Annual Gathering", year: "2008" },
  { url: "", alt: "Memorial event honouring the founders", caption: "Memorial Event", year: "2019" },
];

const galleryVideos: GalleryVideo[] = [
  {
    thumbnailUrl: "",
    title: "Founding of the Scholarship",
    description: "A record of the founding ceremony and the vision behind the scholarship programme.",
    year: "1995",
    duration: "12:34",
  },
  {
    thumbnailUrl: "",
    title: "Interview with the Founders",
    description: "Rare interview footage discussing the importance of education for working-class families.",
    year: "2002",
    duration: "28:15",
  },
  {
    thumbnailUrl: "",
    title: "Scholar Stories",
    description: "Recipients share how the scholarship changed the course of their lives.",
    year: "2010",
    duration: "18:42",
  },
  {
    thumbnailUrl: "",
    title: "Memorial Documentary",
    description: "A short documentary produced to honour the legacy of both founders.",
    year: "2020",
    duration: "34:00",
  },
];

function ImageCarousel({ images }: { images: GalleryImage[] }) {
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
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
  }, [images.length]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [resetAutoplay]);

  const handlePrev = () => { prev(); resetAutoplay(); };
  const handleNext = () => { next(); resetAutoplay(); };
  const handleDot = (i: number) => { go(i); resetAutoplay(); };

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
    <div className="w-full max-w-3xl mx-auto select-none">
      {/* Slide container */}
      <div
        className="relative overflow-hidden bg-gray-100 border border-black/15 shadow-md"
        style={{ aspectRatio: "16/9" }}
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

function VideoCard({ video }: { video: GalleryVideo }) {
  return (
    <div className="group border border-black/15 bg-white hover:shadow-md transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <ImageWithFallback
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
          <div className="w-12 h-12 bg-white/90 flex items-center justify-center shadow-md">
            <Play className="w-5 h-5 text-black fill-black ml-0.5" />
          </div>
        </div>
        {video.duration && (
          <span
            className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            {video.duration}
          </span>
        )}
      </div>
      {/* Info */}
      <div className="p-4">
        <div className="flex items-baseline justify-between mb-1">
          <h4
            className="text-base font-medium"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
          >
            {video.title}
          </h4>
          {video.year && (
            <span
              className="text-xs text-gray-400 ml-3 flex-none"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {video.year}
            </span>
          )}
        </div>
        <p
          className="text-xs text-gray-600 leading-relaxed"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          {video.description}
        </p>
      </div>
    </div>
  );
}

export function GalleryPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-12 md:py-16 px-4 md:px-6 lg:px-12 bg-gradient-to-b from-gray-100 to-white border-b-2 border-black/10"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Photo & <span className="italic">Video</span> Gallery
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-0.5 bg-black mx-auto mb-4"
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm md:text-base text-gray-600 max-w-xl mx-auto"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            A visual record of the scholarship, its founders, and the lives it has shaped.
          </motion.p>
        </div>
      </motion.section>

      {/* Photo Carousel Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 md:mb-10">
              <h2
                className="text-2xl md:text-3xl mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Photographs
              </h2>
              <div className="w-12 h-0.5 bg-black" />
            </div>
            <ImageCarousel images={galleryImages} />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 md:px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="w-full h-px bg-black/10" />
        </div>
      </div>

      {/* Video Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 md:mb-10">
              <h2
                className="text-2xl md:text-3xl mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Videos
              </h2>
              <div className="w-12 h-0.5 bg-black" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {galleryVideos.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <VideoCard video={video} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
