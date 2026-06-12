import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import { HistoricalDivider, SectionDivider } from "./HistoricalDivider";
import { useTranslation } from "../context/TranslationContext";

export function HomePage() {
  const { language, t } = useTranslation();
  const historicalPhotos = [
    { url: "", alt: "Historical photograph", caption: "Early days of education, circa 1950" },
    { url: "", alt: "Historical photograph", caption: "Students in classroom, 1960s" },
    { url: "", alt: "Historical photograph", caption: "Community gathering, 1970" },
  ];

  const founders = [
    {
      name: "Comrade Gurmail Hunjan",
      years: "1951-1989",
      role: "Freedom Fighter",
      photos: [
        { url: "", caption: "Portrait photograph", year: "1965" },
      ],
      biography: [
        "Comrade Gurmail Singh Hunjan was a leader for the people. He lived, worked, and gave his life for the unity, integrity, and humanity of Punjab and India.",
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
            Chanan Da <span className="italic">Channan</span>
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
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-sm uppercase tracking-widest text-gray-500 mb-8"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            {t('home.established')}
          </motion.p>
        </div>
      </motion.section>

      {/* Historical Overview - Compact */}
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
                <>Historical <span className="italic">Overview</span></>
              ) : (
                <>ਇਤਿਹਾਸਕ <span className="italic">ਸੰਖੇਪ</span></>
              )}
            </h2>

            <div className="prose prose-lg max-w-none" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4 first-letter:text-4xl first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </p>
            </div>

            {/* Historical Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 md:mt-8"
            >
              <div className="aspect-[16/9] md:aspect-[21/9] bg-gray-100 border-2 border-black/20 overflow-hidden">
                <ImageWithFallback
                  src="/public/images/main.jpeg"
                  alt="Historical photograph"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <p className="mt-2 text-xs text-gray-600 italic text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Historical documentation, circa 1995
              </p>
            </motion.div>
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
              {[
                { year: "1995", event: "Lorem ipsum dolor sit amet, consectetur adipiscing elit foundation established" },
                { year: "2000", event: "Sed do eiusmod tempor incididunt ut labore expansion program initiated" },
                { year: "2005", event: "Duis aute irure dolor milestone achievement recognized" },
                { year: "2010", event: "Excepteur sint occaecat cupidatat non proident partnership formed" },
                { year: "2015", event: "Nemo enim ipsam voluptatem quia celebration of two decades" },
                { year: "2020", event: "Neque porro quisquam est digital transformation completed" }
              ].map((milestone, idx) => (
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
                      {milestone.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Photo Gallery - More Compact */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-center text-xl md:text-2xl mb-6 md:mb-8" style={{ fontFamily: language === 'en' ? "'Cormorant Garamond', serif" : "sans-serif" }}>
              {language === 'en' ? (
                <>Photographic <span className="italic">Archives</span></>
              ) : (
                <>ਫੋਟੋ <span className="italic">ਆਰਕਾਈਵਜ਼</span></>
              )}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-3">
              {historicalPhotos.map((photo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-200 border-2 border-black/20">
                    <ImageWithFallback
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-600 italic text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {photo.caption}
                  </p>
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
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto px-4" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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
                {/* Portrait */}
                <div className="aspect-[4/5] bg-gray-100 border-2 border-black/20 overflow-hidden mb-6">
                  <ImageWithFallback
                    src={founder.photos[0].url}
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                {/* Details */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {founder.name}
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
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

      {/* Final CTA - Compact */}
      <section className="py-10 md:py-12 px-4 md:px-6 lg:px-12 bg-black text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: language === 'en' ? "'Cormorant Garamond', serif" : "sans-serif" }}>
            {language === 'en' ? (
              <>Continue the <span className="italic">Legacy</span></>
            ) : (
              <>ਵਿਰਾਸਤ <span className="italic">ਜਾਰੀ ਰੱਖੋ</span></>
            )}
          </h2>
          <div className="w-16 h-px bg-white/30 mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-300 mb-6 text-xs md:text-sm px-4" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            Join us in supporting the next generation of scholars
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors group text-sm uppercase tracking-wider"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            {t('common.apply')}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
