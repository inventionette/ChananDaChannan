import { motion } from "motion/react";
import { Play } from "lucide-react";

interface GalleryImage {
  url: string;
  alt: string;
  caption: string;
  year?: string;
}

interface GalleryVideo {
  youtubeUrl: string;
  title: string;
  description: string;
  year?: string;
}

const galleryImages: GalleryImage[] = [
  { 
    url: "", 
    alt: "Description of the image", 
    caption: "Description of the image", 
    year: "1995" 
  },
  { 
    url: "", 
    alt: "Description of the image", 
    caption: "Description of the image", 
    year: "1996" 
  },
  { 
    url: "", 
    alt: "Description of the image", 
    caption: "Description of the image", 
    year: "1998" 
  },
  { 
    url: "", 
    alt: "Description of the image", 
    caption: "Description of the image", 
    year: "2000" 
  },
];

const galleryVideos: GalleryVideo[] = [
  {
    youtubeUrl: "https://youtu.be/Hw8fj3kyCco?si=L9arah5VcONL0BH9",
    title: "Description",
    description: "Description",
    year: "1995",
  },
  {
    youtubeUrl: "https://youtu.be/7mJjBX3Icok?si=SbdKJtvl2rdEaflT",
    title: "Description",
    description: "Description",
    year: "2002",
  },
  {
    youtubeUrl: "https://youtu.be/HsgVn0zcFVw?si=RNq334uNEeKhj04D",
    title: "Description",
    description: "Description",
    year: "2010",
  },
  {
    youtubeUrl: "https://youtu.be/TfS7dHiDnJE?si=VJqaw8WpB5ernK_w",
    title: "Description",
    description: "Description",
    year: "2020",
  },
  {
    youtubeUrl: "https://youtu.be/sU6vAk5OP1I?si=RO-tstIo8wDo5c_D",
    title: "Description",
    description: "Description",
    year: "1995",
  }
];

function PhotoGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative overflow-hidden bg-gray-100 border border-black/15"
        >
          <div className="aspect-[4/3]">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
            <p
              className="text-white text-sm font-medium"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {image.caption}
              {image.year && (
                <span className="ml-2 text-white/60 text-xs">· {image.year}</span>
              )}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function VideoCard({ video }: { video: GalleryVideo }) {
  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(video.youtubeUrl);
  const thumbnailUrl = videoId 
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : '';

  return (
    <div className="group border border-black/15 bg-white hover:shadow-md transition-shadow duration-300">
      {/* Thumbnail with link */}
      <a
        href={video.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-video bg-gray-100 overflow-hidden cursor-pointer"
      >
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={video.title}
            className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400 text-sm">Video unavailable</span>
          </div>
        )}
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
          <div className="w-14 h-14 bg-white/90 flex items-center justify-center shadow-md rounded-full group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-black fill-black ml-1" />
          </div>
        </div>
        {/* YouTube branding */}
        <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded font-medium">
          YouTube
        </div>
      </a>
      
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

      {/* Photo Grid Section */}
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
            <PhotoGrid images={galleryImages} />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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