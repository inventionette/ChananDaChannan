import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { HistoricalDivider, SectionDivider } from "./HistoricalDivider";
import { useTranslation } from "../context/TranslationContext";

export function HomePage() {
  const { language, t } = useTranslation();
  const story =
    language === "en"
      ? "Chanan Da Channan is a tribute to the life, ideals, and legacy of Comrade Chanan Singh Barola and Comrade Gurmail Singh Hunjan. It seeks to preserve their memories, celebrate their contributions, and share the values that inspired their life's journeys. We believe the true value of a life lies in its contribution to society. Inspired by equality, compassion, honesty, and selfless service, we aim to keep alive a legacy that encourages future generations to work toward a fair and equal society. Through photographs, personal memories, and stories, we document important moments from Comrade Gurmail Singh Hunjan's life. We also highlight the importance of education and scholarship opportunities in helping deserving students overcome financial barriers and achieve their aspirations. By preserving history, sharing experiences, and supporting educational opportunities, we seek to inspire people to carry forward the values of humanity, social responsibility, equity, and equality. Our aim is to turn remembrance into inspiration and ideals into meaningful action. A legacy lives on not only through the memories we preserve, but also through the positive difference we make in the lives of others."
      : "ਚੰਨਣ ਦਾ ਚਾਨਣ ਕਾਮਰੇਡ ਚੰਨਣ ਸਿੰਘ ਬਰੋਲਾ ਅਤੇ ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਸਿੰਘ ਹੂੰਝਣ ਦੇ ਜੀਵਨ, ਆਦਰਸ਼ਾਂ ਅਤੇ ਵਿਰਾਸਤ ਨੂੰ ਸਮਰਪਿਤ ਹੈ। ਇਹ ਉਨ੍ਹਾਂ ਦੀਆਂ ਯਾਦਾਂ ਨੂੰ ਸੰਭਾਲਣ, ਉਨ੍ਹਾਂ ਦੇ ਯੋਗਦਾਨਾਂ ਦਾ ਸਨਮਾਨ ਕਰਨ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਜੀਵਨ-ਸਫ਼ਰ ਤੋਂ ਪ੍ਰੇਰਿਤ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਨੂੰ ਸਾਂਝਾ ਕਰਨ ਦਾ ਯਤਨ ਕਰਦਾ ਹੈ। ਸਾਡਾ ਵਿਸ਼ਵਾਸ ਹੈ ਕਿ ਜੀਵਨ ਦਾ ਅਸਲ ਮੁੱਲ ਸਮਾਜ ਲਈ ਉਸਦੇ ਯੋਗਦਾਨ ਵਿੱਚ ਹੈ। ਬਰਾਬਰੀ, ਹਮਦਰਦੀ, ਇਮਾਨਦਾਰੀ ਅਤੇ ਨਿਸ਼ਕਾਮ ਸੇਵਾ ਦੇ ਸਿਧਾਂਤਾਂ ਤੋਂ ਪ੍ਰੇਰਿਤ ਹੋ ਕੇ, ਅਸੀਂ ਅਜਿਹੀ ਵਿਰਾਸਤ ਨੂੰ ਜਿਉਂਦਾ ਰੱਖਣਾ ਚਾਹੁੰਦੇ ਹਾਂ ਜੋ ਆਉਣ ਵਾਲੀਆਂ ਪੀੜ੍ਹੀਆਂ ਨੂੰ ਨਿਆਂਪੂਰਨ ਅਤੇ ਬਰਾਬਰੀ ਵਾਲਾ ਸਮਾਜ ਬਣਾਉਣ ਲਈ ਉਤਸ਼ਾਹਿਤ ਕਰੇ। ਤਸਵੀਰਾਂ, ਨਿੱਜੀ ਯਾਦਾਂ ਅਤੇ ਕਹਾਣੀਆਂ ਰਾਹੀਂ ਅਸੀਂ ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਸਿੰਘ ਹੂੰਝਣ ਦੇ ਜੀਵਨ ਦੇ ਮਹੱਤਵਪੂਰਨ ਪਲ ਦਰਜ ਕਰਦੇ ਹਾਂ। ਅਸੀਂ ਯੋਗ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਆਰਥਿਕ ਰੁਕਾਵਟਾਂ ਪਾਰ ਕਰਕੇ ਆਪਣੇ ਸੁਪਨੇ ਪੂਰੇ ਕਰਨ ਵਿੱਚ ਮਦਦ ਲਈ ਸਿੱਖਿਆ ਅਤੇ ਵਜ਼ੀਫ਼ਿਆਂ ਦੇ ਮੌਕਿਆਂ ਦੀ ਮਹੱਤਤਾ ਵੀ ਉਜਾਗਰ ਕਰਦੇ ਹਾਂ। ਇਤਿਹਾਸ ਸੰਭਾਲ ਕੇ, ਤਜਰਬੇ ਸਾਂਝੇ ਕਰਕੇ ਅਤੇ ਸਿੱਖਿਆ ਦੇ ਮੌਕਿਆਂ ਨੂੰ ਸਹਾਰਾ ਦੇ ਕੇ, ਅਸੀਂ ਲੋਕਾਂ ਨੂੰ ਮਨੁੱਖਤਾ, ਸਮਾਜਿਕ ਜ਼ਿੰਮੇਵਾਰੀ ਅਤੇ ਬਰਾਬਰੀ ਦੀਆਂ ਕਦਰਾਂ ਨੂੰ ਅੱਗੇ ਲਿਜਾਣ ਲਈ ਪ੍ਰੇਰਿਤ ਕਰਦੇ ਹਾਂ। ਸਾਡਾ ਉਦੇਸ਼ ਯਾਦਾਂ ਨੂੰ ਪ੍ਰੇਰਣਾ ਅਤੇ ਆਦਰਸ਼ਾਂ ਨੂੰ ਅਰਥਪੂਰਨ ਕਾਰਜ ਵਿੱਚ ਬਦਲਣਾ ਹੈ। ਵਿਰਾਸਤ ਸਿਰਫ਼ ਸੰਭਾਲੀਆਂ ਯਾਦਾਂ ਰਾਹੀਂ ਹੀ ਨਹੀਂ, ਸਗੋਂ ਹੋਰਨਾਂ ਦੇ ਜੀਵਨ ਵਿੱਚ ਲਿਆਂਦੇ ਸਕਾਰਾਤਮਕ ਬਦਲਾਅ ਰਾਹੀਂ ਵੀ ਜਿਉਂਦੀ ਰਹਿੰਦੀ ਹੈ।";
  const milestones = [
    {
      year: "1918",
      event: "Comrade Chanan Singh Barola was born",
      eventPa: "ਕਾਮਰੇਡ ਚੰਨਣ ਸਿੰਘ ਬਰੋਲਾ ਦਾ ਜਨਮ ਹੋਇਆ",
    },
    {
      year: "1942",
      event: "Comrade Barola joined India's freedom movement through the Quit India Movement",
      eventPa: "ਕਾਮਰੇਡ ਬਰੋਲਾ ਨੇ ਭਾਰਤ ਛੱਡੋ ਅੰਦੋਲਨ ਰਾਹੀਂ ਆਜ਼ਾਦੀ ਦੀ ਲਹਿਰ ਵਿੱਚ ਹਿੱਸਾ ਲਿਆ",
    },
    {
      year: "1951",
      event: "Comrade Gurmail Singh Hunjan was born",
      eventPa: "ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਸਿੰਘ ਹੂੰਝਣ ਦਾ ਜਨਮ ਹੋਇਆ",
    },
    {
      year: "1972",
      event: "Comrade Barola was elected village head (sarpanch)",
      eventPa: "ਕਾਮਰੇਡ ਬਰੋਲਾ ਪਿੰਡ ਦੇ ਸਰਪੰਚ ਚੁਣੇ ਗਏ",
    },
    {
      year: "1977",
      event: "Comrade Hunjan graduated with a Master's in Political Science",
      eventPa: "ਕਾਮਰੇਡ ਹੂੰਝਣ ਨੇ ਰਾਜਨੀਤਿਕ ਵਿਗਿਆਨ ਵਿੱਚ ਮਾਸਟਰ ਡਿਗਰੀ ਪ੍ਰਾਪਤ ਕੀਤੀ",
    },
    {
      year: "1982",
      event: "Comrade Hunjan became village head (sarpanch)",
      eventPa: "ਕਾਮਰੇਡ ਹੂੰਝਣ ਪਿੰਡ ਦੇ ਸਰਪੰਚ ਬਣੇ",
    },
    {
      year: "1983",
      event: "Comrade Hunjan became assistant secretary of the CPI in Ludhiana district",
      eventPa: "ਕਾਮਰੇਡ ਹੂੰਝਣ ਲੁਧਿਆਣਾ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਸੀ.ਪੀ.ਆਈ. ਦੇ ਸਹਾਇਕ ਸਕੱਤਰ ਬਣੇ",
    },
    {
      year: "1989",
      event: "Comrade Hunjan was killed by Khalistani terrorists",
      eventPa: "ਕਾਮਰੇਡ ਹੂੰਝਣ ਖਾਲਿਸਤਾਨੀ ਅੱਤਵਾਦੀਆਂ ਵੱਲੋਂ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ",
    },
    {
      year: "2000",
      event: "Comrade Barola passed away",
      eventPa: "ਕਾਮਰੇਡ ਬਰੋਲਾ ਦਾ ਦੇਹਾਂਤ ਹੋਇਆ",
    },
    {
      year: "2011",
      event: "The scholarship program began informally",
      eventPa: "ਵਜ਼ੀਫ਼ਾ ਪ੍ਰੋਗਰਾਮ ਗੈਰ-ਰਸਮੀ ਤੌਰ 'ਤੇ ਸ਼ੁਰੂ ਹੋਇਆ",
    },
  ];

  const founders = [
    {
      name: "Comrade Gurmail Hunjan",
      years: "1951-1989",
      role: "People's Leader",
      biography: [
        "Comrade Gurmail Singh Hunjan was a people's leader. He lived, worked, and gave his life for the unity, integrity, and humanity of Punjab and India.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Compact Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-16 md:py-20 px-6 lg:px-12 bg-gradient-to-b from-gray-100 to-white border-b-2 border-black/10"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1 }}
          >
            {language === 'en' ? (
              <>Chanan Da <span className="italic">Chaanan</span></>
            ) : (
              <>ਚੰਨਣ ਦਾ <span className="italic">ਚਾਨਣ</span></>
            )}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-32 h-1 bg-black mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto italic"
            style={{ fontFamily: language === 'en' ? "'Cormorant Garamond', serif" : "sans-serif" }}
          >
            {t('home.quote')}
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-center mb-6 md:mb-8" style={{ fontFamily: language === 'en' ? "'Cormorant Garamond', serif" : "sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              {language === 'en' ? (
                <>Our <span className="italic">Story</span></>
              ) : (
                <>ਸਾਡੀ <span className="italic">ਕਹਾਣੀ</span></>
              )}
            </h2>

            <div className="prose prose-lg max-w-none" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed first-letter:text-4xl first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1">
                {story}
              </p>
            </div>

          </motion.div>

          <HistoricalDivider />

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 md:mt-12"
          >
            <h3 className="text-center text-xl md:text-2xl mb-6 md:mb-8" style={{ fontFamily: language === 'en' ? "'Cormorant Garamond', serif" : "sans-serif" }}>
              {language === 'en' ? (
                <>Key <span className="italic">Milestones</span></>
              ) : (
                <>ਮੁੱਖ <span className="italic">ਮੀਲਪੱਥਰ</span></>
              )}
            </h3>
            <div className="space-y-4 md:space-y-6 border-l-2 border-black/20 pl-6 md:pl-8 ml-3 md:ml-4">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute -left-[29px] md:-left-[37px] top-1 w-3 h-3 bg-black border-2 border-white"></div>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                    <span className="text-lg md:text-xl font-serif italic md:min-w-[60px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {milestone.year}
                    </span>
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                      {language === "en" ? milestone.event : milestone.eventPa}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Founders Section - Overview Cards */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-12 text-center"
          >
            <h2 className="mb-4" style={{ fontFamily: language === 'en' ? "'Cormorant Garamond', serif" : "sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              {language === 'en' ? (
                <>The <span className="italic">Biography</span></>
              ) : (
                <>ਜੀਵਨੀ</>
              )}
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
          </motion.div>

          <div className="flex justify-center">
            {founders.map((founder, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-white shadow-xl p-10 md:p-12 border-t-4 border-black w-full max-w-3xl mx-auto"
              >
                {/* Details */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {language === 'en' ? founder.name : 'ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਹੂੰਝਣ'}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    {founder.role}
                  </p>
                  <p className="text-sm italic text-gray-600" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {founder.years}
                  </p>
                  <div className="w-16 h-0.5 bg-black mt-3"></div>
                </div>

                {/* Excerpt */}
                <p className="text-sm text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  {founder.biography[0].substring(0, 150)}...
                </p>

                {/* Read More Button */}
                <Link
                  to={`/biography/founder-${idx + 1}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors group text-sm uppercase tracking-wider"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {t('common.readFullBio')}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Legacy Section - Compact */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-center text-xl md:text-2xl mb-4 md:mb-6" style={{ fontFamily: language === 'en' ? "'Cormorant Garamond', serif" : "sans-serif" }}>
              {language === 'en' ? (
                <>The Living <span className="italic">Legacy</span></>
              ) : (
                <>ਜੀਵੰਤ <span className="italic">ਵਿਰਾਸਤ</span></>
              )}
            </h3>
            <div className="prose max-w-none" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {language === "en"
                  ? "The legacy of Comrade Chanan Singh Barola and Comrade Gurmail Singh Hunjan lives on through the values they stood for and the lives they touched. Through scholarships and educational support, we aim to carry forward their commitment to equality, selfless service, and a brighter future for deserving students. Their ideals continue to inspire future generations to learn, grow, and contribute to society."
                  : "ਕਾਮਰੇਡ ਚੰਨਣ ਸਿੰਘ ਬਰੋਲਾ ਅਤੇ ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਸਿੰਘ ਹੂੰਝਣ ਦੀ ਵਿਰਾਸਤ ਉਨ੍ਹਾਂ ਦੇ ਸਿਧਾਂਤਾਂ ਅਤੇ ਉਨ੍ਹਾਂ ਵੱਲੋਂ ਪ੍ਰਭਾਵਿਤ ਕੀਤੀਆਂ ਜ਼ਿੰਦਗੀਆਂ ਰਾਹੀਂ ਅੱਜ ਵੀ ਜਿਉਂਦੀ ਹੈ। ਵਜ਼ੀਫ਼ਿਆਂ ਅਤੇ ਸਿੱਖਿਆਈ ਸਹਾਇਤਾ ਰਾਹੀਂ, ਅਸੀਂ ਬਰਾਬਰੀ, ਨਿਸ਼ਕਾਮ ਸੇਵਾ ਅਤੇ ਯੋਗ ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਉਜਲੇ ਭਵਿੱਖ ਪ੍ਰਤੀ ਉਨ੍ਹਾਂ ਦੀ ਵਚਨਬੱਧਤਾ ਨੂੰ ਅੱਗੇ ਵਧਾਉਣ ਦਾ ਯਤਨ ਕਰਦੇ ਹਾਂ। ਉਨ੍ਹਾਂ ਦੇ ਆਦਰਸ਼ ਆਉਣ ਵਾਲੀਆਂ ਪੀੜ੍ਹੀਆਂ ਨੂੰ ਸਿੱਖਣ, ਅੱਗੇ ਵਧਣ ਅਤੇ ਸਮਾਜ ਵਿੱਚ ਯੋਗਦਾਨ ਪਾਉਣ ਲਈ ਪ੍ਰੇਰਿਤ ਕਰਦੇ ਰਹਿੰਦੇ ਹਨ।"}
              </p>
            </div>
            <div className="text-center mt-6 md:mt-8">
              <Link
                to="/scholarship"
                className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors group text-sm uppercase tracking-wider"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {t('home.exploreScholarships')}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
