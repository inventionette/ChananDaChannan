import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Play } from "lucide-react";
import { useTranslation } from "../context/TranslationContext";

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
    // memories of light moments videos 1 to 4
    youtubeUrl: "https://youtu.be/Hw8fj3kyCco?si=L9arah5VcONL0BH9",
    title: "Comrade Gurmail Hunjan - Memories of Light Moments - 1/4",
    description: "",
    year: "",
  },
  {
    youtubeUrl: "https://youtu.be/7mJjBX3Icok?si=SbdKJtvl2rdEaflT",
    title: "Comrade Gurmail Hunjan - Memories of Light Moments - 2/4",
    description: "",
    year: "",
  },
  {
    youtubeUrl: "https://youtu.be/HsgVn0zcFVw?si=RNq334uNEeKhj04D",
    title: "Comrade Gurmail Hunjan - Memories of Light Moments - 3/4",
    description: "",
    year: "",
  },
  {
    youtubeUrl: "https://youtu.be/TfS7dHiDnJE?si=VJqaw8WpB5ernK_w",
    title: "Comrade Gurmail Hunjan - Memories of Light Moments - 4/4",
    description: "",
    year: "",
  },

  // end of memories of lights dropdown section 



  // start of section called cremation from 1 to 6 videos
  {
    youtubeUrl: "https://youtu.be/sU6vAk5OP1I",
    title: "Comrade Gurmail Hunjan - Addressing a Rally",
    description: "",
    year: "",
  },
  {
    youtubeUrl: "https://youtu.be/A5aszCuU0oI",
    title: "Comrade Gurmail Hunjan and Joginder Singh - Cremation - 1/6",
    description: "",
    year: "",
  },
  {
    youtubeUrl: "https://youtu.be/Ivm5IaTEd7g",
    title: "Comrade Gurmail Hunjan and Joginder Singh - Cremation - 2/6",
    description: "",
    year: "",
  },
  {
    youtubeUrl: "https://youtu.be/DzpDiAHIaOQ",
    title: "Comrade Gurmail Hunjan and Joginder Singh - Cremation - 3/6",
    description: "",
    year: "",
  },
  {
    youtubeUrl: "https://youtu.be/OoPaNks1IxA",
    title: "Comrade Gurmail Hunjan and Joginder Singh - Cremation - 4/6",
    description: "",
    year: "",
  },
  {
    youtubeUrl: "https://youtu.be/_OMXpuBludU",
    title: "Comrade Gurmail Hunjan and Joginder Singh - Cremation - 5/6",
    description: "",
    year: "",
  },
  {
    youtubeUrl: "https://youtu.be/X730ghDeB_U",
    title: "Comrade Gurmail Hunjan and Joginder Singh - Cremation - 6/6",
    description: "",
    year: "",
    // end of cremation dropdown section videos 1 to 6
  },



  // start of final tribute ceremony videos 1 to 25
  {
    youtubeUrl: "https://youtu.be/y6-r2235dmc",
    title: "Comrade Gurmail Hunjan and Joginder - Final Tribute Ceremony - 1/25 - Opening Comrade Kartar Bowani",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/vWxtJfdlb3s",
    title: "Comrade Gurmail Hunjan and Joginder - Final Tribute Ceremony - 2/25",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/Mo5XStqDUtI",
    title: "Comrade Gurmail Hunjan and Joginder - Final Tribute Ceremony - 3/25 - Comrade Bharat Parkash",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/tekUCejr5T8",
    title: "Comrade Gurmail Hunjan and Joginder - Final Tribute Ceremony - 4/25 - Beant Singh",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/YSAI87_vfPs",
    title: "Comrade Gurmail Hunjan and Joginder - Final Tribute Ceremony - 5/25 - Comrade Piara Singh Deosi",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/2kSt1xfRXoo",
    title: "Comrade Gurmail Hunjan and Joginder - Final Tribute Ceremony - 6/25 - Comrade Rashpal Singh",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/r1HJH7qLlMM",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 7/25 Comrade Bant Singh Brar",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/YW1f9GozalM",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 8/25 - Comrade Joginder Dayal",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/7-E7uzYyUCU",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 9/25 - Comrade Tulsi Ram",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/3k3QDAOKThE",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 10/25 - Prof Jagmohan Singh",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/yG1n6jqOXrE",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 11/25 - Comrade Bhupinder Sambar",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/70a_G63mp8Y",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 12/25 - Comrade Namdhari Subha Mela Singh",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/bQqm4UburxU",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 13/25 - Comrade Kuldip Singh",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/vTtnsCDfons",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 14/25 - Comrade Ruldu Khan",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/Tz7QjS86hVA",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 15/25 - Comrade Sukhinder Singh",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/YshCWmXqDPQ",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 16/25 - Comrade Bhan Singh Bhaura",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/NNXPgWCd7oM",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 17/25 - Comrade O P Mehta",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/mcg7FzdtD1Q",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 18/25 - Comrade Urmila Anand",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/7qsgwERwO6o",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 19/25 - Com Dr Shanti Lal Thapar Freedom Fighter",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/zPq8jcinf8E",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 20/25 - Comrade Karamjit Kaur",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/Y-gjjzguliE",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 21/25 - Comrade Darshan Singh Boparai",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/XtljW8Xq2aI",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 22/25 - Comrade Kartar Singh Bowani",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/ha4sq1i0n34",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 23/25 - Comrade Jagjit Singh Aanad",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/ro41N5SFSd4",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 24/25 - Comrade Chanan Singh Barola",
    description: "",
    year: ""
  },
  {
    youtubeUrl: "https://youtu.be/F4MVvS6OPWE",
    title: "Comrade Gurmail Hunjan - Final Tribute Ceremony - 25/25 - Closing by Comrade Bharat Parkash",
    description: "",
    year: ""

    // end of final tribute ceremony videos 1 t0 25
  },
  

];

const galleryVideoSections = [
  {
    title: "Memories of Light Moments",
    titlePa: "ਯਾਦਗਾਰ ਪਲ",
    videos: galleryVideos.filter(
      (video) =>
        video.title.includes("Memories of Light Moments") ||
        video.title.includes("Addressing a Rally")
    ),
  },
  {
    title: "Cremation",
    titlePa: "ਅੰਤਿਮ ਸੰਸਕਾਰ",
    videos: galleryVideos.filter((video) => video.title.includes("Cremation")),
  },
  {
    title: "Final Tribute Ceremony",
    titlePa: "ਸ਼ਰਧਾਂਜਲੀ ਸਮਾਗਮ",
    videos: galleryVideos.filter((video) => video.title.includes("Final Tribute Ceremony")),
  },
];

const finalTributeSpeakers: Record<number, string> = {
  1: "ਕਾਮਰੇਡ ਕਰਤਾਰ ਸਿੰਘ ਬੁਆਣੀ ਦਾ ਆਰੰਭਕ ਭਾਸ਼ਣ",
  3: "ਕਾਮਰੇਡ ਭਰਤ ਪ੍ਰਕਾਸ਼",
  4: "ਬੇਅੰਤ ਸਿੰਘ",
  5: "ਕਾਮਰੇਡ ਪਿਆਰਾ ਸਿੰਘ ਦਿਓਸੀ",
  6: "ਕਾਮਰੇਡ ਰਸ਼ਪਾਲ ਸਿੰਘ",
  7: "ਕਾਮਰੇਡ ਬੰਤ ਸਿੰਘ ਬਰਾੜ",
  8: "ਕਾਮਰੇਡ ਜੋਗਿੰਦਰ ਦਿਆਲ",
  9: "ਕਾਮਰੇਡ ਤੁਲਸੀ ਰਾਮ",
  10: "ਪ੍ਰੋ: ਜਗਮੋਹਨ ਸਿੰਘ",
  11: "ਕਾਮਰੇਡ ਭੁਪਿੰਦਰ ਸਾਂਬਰ",
  12: "ਕਾਮਰੇਡ ਨਾਮਧਾਰੀ ਸੁਭਾ ਮੇਲਾ ਸਿੰਘ",
  13: "ਕਾਮਰੇਡ ਕੁਲਦੀਪ ਸਿੰਘ",
  14: "ਕਾਮਰੇਡ ਰੁਲਦੂ ਖਾਨ",
  15: "ਕਾਮਰੇਡ ਸੁਖਿੰਦਰ ਸਿੰਘ",
  16: "ਕਾਮਰੇਡ ਭਾਨ ਸਿੰਘ ਬੌਰਾ",
  17: "ਕਾਮਰੇਡ ਓ ਪੀ ਮਹਿਤਾ",
  18: "ਕਾਮਰੇਡ ਉਰਮਿਲਾ ਆਨੰਦ",
  19: "ਕਾਮਰੇਡ ਡਾ. ਸ਼ਾਂਤੀ ਲਾਲ ਥਾਪਰ ਆਜ਼ਾਦੀ ਘੁਲਾਟੀਏ",
  20: "ਕਾਮਰੇਡ ਕਰਮਜੀਤ ਕੌਰ",
  21: "ਕਾਮਰੇਡ ਦਰਸ਼ਨ ਸਿੰਘ ਬੋਪਾਰਾਏ",
  22: "ਕਾਮਰੇਡ ਕਰਤਾਰ ਸਿੰਘ ਬੁਆਣੀ",
  23: "ਕਾਮਰੇਡ ਜਗਜੀਤ ਸਿੰਘ ਆਨੰਦ",
  24: "ਕਾਮਰੇਡ ਚੰਨਣ ਸਿੰਘ ਬਰੋਲਾ",
  25: "ਸਮਾਪਤੀ ਕਾਮਰੇਡ ਭਰਤ ਪ੍ਰਕਾਸ਼",
};

function getPunjabiVideoTitle(title: string): string {
  const memoriesEpisode = title.match(/Memories of Light Moments - (\d\/4)$/)?.[1];
  if (memoriesEpisode) {
    return `ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਹੂੰਝਣ ਦੇ ਯਾਦਗਾਰ ਪਲ – ${memoriesEpisode}`;
  }

  if (title === "Comrade Gurmail Hunjan - Addressing a Rally") {
    return "ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਹੂੰਝਣ ਇੱਕ ਜਨਤਕ ਰੈਲੀ ਨੂੰ ਸੰਬੋਧਨ ਕਰਦੇ ਹੋਏ";
  }

  const cremationEpisode = title.match(/Cremation - (\d\/6)$/)?.[1];
  if (cremationEpisode) {
    return `ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਹੂੰਝਣ ਅਤੇ ਜੋਗਿੰਦਰ ਸਿੰਘ ਦਾ ਸਸਕਾਰ – ${cremationEpisode}`;
  }

  const tributeEpisode = title.match(/Final Tribute Ceremony - (\d+)\/25/)?.[1];
  if (tributeEpisode) {
    const episode = Number(tributeEpisode);
    const speaker = finalTributeSpeakers[episode];
    const episodeLabel = `${episode}/25`;
    return `ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਹੂੰਝਣ ਅਤੇ ਜੋਗਿੰਦਰ ਸਿੰਘ ਦਾ ਅੰਤਿਮ ਸ਼ਰਧਾਂਜਲੀ ਸਮਾਗਮ - ${episodeLabel}${speaker ? ` - ${speaker}` : ""}`;
  }

  return title;
}

function PhotoGrid({ images }: { images: GalleryImage[] }) {
  const { language } = useTranslation();

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
              alt={language === "en" ? image.alt : "ਤਸਵੀਰ ਦਾ ਵੇਰਵਾ"}
              className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
            <p
              className="text-white text-sm font-medium"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {language === "en" ? image.caption : "ਤਸਵੀਰ ਦਾ ਵੇਰਵਾ"}
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

function VideoSectionDropdown({
  section,
}: {
  section: { title: string; titlePa: string; videos: GalleryVideo[] };
}) {
  const [open, setOpen] = useState(true);
  const { language } = useTranslation();

  return (
    <div className="mb-4 border border-black/10 bg-white shadow-sm">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50"
        onClick={() => setOpen((prev) => !prev)}
        style={{ fontFamily: "'Work Sans', sans-serif" }}
      >
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-gray-600">
          {language === "en" ? section.title : section.titlePa}
        </span>
        <ChevronDown
          className="w-4 h-4 text-gray-600 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-black/10 grid grid-cols-1 sm:grid-cols-2 gap-6 px-5 py-5">
              {section.videos.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                >
                  <VideoCard video={video} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function VideoCard({ video }: { video: GalleryVideo }) {
  const { language, t } = useTranslation();
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
            alt={language === "en" ? video.title : getPunjabiVideoTitle(video.title)}
            className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400 text-sm">{t("gallery.videoUnavailable")}</span>
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
          {t("gallery.youtube")}
        </div>
      </a>
      
      {/* Info */}
      <div className="p-4">
        <div className="flex items-baseline justify-between mb-1">
          <h4
            className="text-base font-medium"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
          >
            {language === "en" ? video.title : getPunjabiVideoTitle(video.title)}
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
  const { t } = useTranslation();

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
            {t("gallery.hero.title")}
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
            {t("gallery.hero.subtitle")}
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
                {t("gallery.photos.title")}
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
                {t("gallery.videos.title")}
              </h2>
              <div className="w-12 h-0.5 bg-black" />
            </div>
            <div className="space-y-3">
              {galleryVideoSections.map((section) => (
                <VideoSectionDropdown key={section.title} section={section} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}