import { useTranslation } from "../context/TranslationContext";
import { motion } from "motion/react";
import { GraduationCap, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { HistoricalDivider, SectionDivider } from "./HistoricalDivider";

export function ScholarshipPage() {
  const { language } = useTranslation();
  const isEnglish = language === "en";

  const eligibility = isEnglish
    ? [
        {
          title: "Academic Excellence",
          description:
            "Candidates should demonstrate a strong academic record throughout their studies.",
        },
        {
          title: "Financial Need",
          description:
            "Priority will be given to students facing significant financial barriers to education.",
        },
        {
          title: "Community Impact",
          description:
            "We seek individuals committed to giving back to their communities and creating positive change.",
        },
        {
          title: "Character & Values",
          description:
            "Demonstrated strong moral character and values are essential.",
        },
      ]
    : [
        {
          title: "ਵਿਦਿਅਕ ਪ੍ਰਾਪਤੀਆਂ",
          description:
            "ਉਮੀਦਵਾਰਾਂ ਨੇ ਆਪਣੀ ਪੜ੍ਹਾਈ ਦੌਰਾਨ ਚੰਗਾ ਅਕਾਦਮਿਕ ਪ੍ਰਦਰਸ਼ਨ ਕੀਤਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
        },
        {
          title: "ਆਰਥਿਕ ਲੋੜ",
          description:
            "ਆਰਥਿਕ ਮੁਸ਼ਕਲਾਂ ਦਾ ਸਾਹਮਣਾ ਕਰ ਰਹੇ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਪਹਿਲ ਦਿੱਤੀ ਜਾਵੇਗੀ।",
        },
        {
          title: "ਭਾਈਚਾਰੇ ਲਈ ਯੋਗਦਾਨ",
          description:
            "ਅਸੀਂ ਉਨ੍ਹਾਂ ਵਿਅਕਤੀਆਂ ਨੂੰ ਤਰਜੀਹ ਦਿੰਦੇ ਹਾਂ ਜੋ ਆਪਣੇ ਭਾਈਚਾਰੇ ਦੀ ਮਦਦ ਕਰਨਾ ਅਤੇ ਚੰਗਾ ਬਦਲਾਅ ਲਿਆਉਣਾ ਚਾਹੁੰਦੇ ਹਨ।",
        },
        {
          title: "ਚਰਿੱਤਰ ਅਤੇ ਕਦਰਾਂ-ਕੀਮਤਾਂ",
          description:
            "ਮਜ਼ਬੂਤ ਚਰਿੱਤਰ ਅਤੇ ਚੰਗੀਆਂ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਨੂੰ ਮਹੱਤਵ ਦਿੱਤਾ ਜਾਵੇਗਾ।",
        },
      ];

  const applicationSteps = isEnglish
    ? [
        {
          title: "Application Open",
          description: "Applications only open in November each year.",
        },
        {
          title: "Initial Application",
          description:
            "Complete the application form including academic records and a personal statement.",
        },
        {
          title: "Review",
          description:
            "Our selection committee reviews each application based on academic performance, financial need, character, and reference check.",
        },
        {
          title: "Interviews",
          description:
            "Shortlisted candidates may be invited for an interview to discuss their education, goals, and future plans.",
        },
        {
          title: "Final Selection",
          description:
            "Successful applicants will be notified and awarded the scholarship. Recipients will become part of our growing community of supported students.",
        },
      ]
    : [
        {
          title: "ਅਰਜ਼ੀਆਂ ਖੁੱਲ੍ਹਣ ਦਾ ਸਮਾਂ",
          description: "ਅਰਜ਼ੀਆਂ ਹਰ ਸਾਲ ਸਿਰਫ਼ ਨਵੰਬਰ ਮਹੀਨੇ ਵਿੱਚ ਖੁੱਲ੍ਹਦੀਆਂ ਹਨ।",
        },
        {
          title: "ਅਰਜ਼ੀ",
          description:
            "ਅਰਜ਼ੀ ਫਾਰਮ ਭਰੋ ਅਤੇ ਆਪਣੀ ਪੜ੍ਹਾਈ ਨਾਲ ਸਬੰਧਤ ਰਿਕਾਰਡ ਅਤੇ ਨਿੱਜੀ ਬਿਆਨ ਦਰਜ ਕਰੋ।",
        },
        {
          title: "ਸਮੀਖਿਆ",
          description:
            "ਸਾਡੀ ਚੋਣ ਕਮੇਟੀ ਹਰ ਅਰਜ਼ੀ ਨੂੰ ਪੜ੍ਹਾਈ ਵਿੱਚ ਪ੍ਰਦਰਸ਼ਨ, ਆਰਥਿਕ ਲੋੜ, ਚਰਿੱਤਰ ਅਤੇ ਸਿਫ਼ਾਰਸ਼ਾਂ ਦੇ ਆਧਾਰ ’ਤੇ ਸਮੀਖਿਆ ਕਰਦੀ ਹੈ।",
        },
        {
          title: "ਇੰਟਰਵਿਊ",
          description:
            "ਚੁਣੇ ਗਏ ਉਮੀਦਵਾਰਾਂ ਨੂੰ ਇੰਟਰਵਿਊ ਲਈ ਬੁਲਾਇਆ ਜਾ ਸਕਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਉਨ੍ਹਾਂ ਦੀ ਪੜ੍ਹਾਈ, ਟੀਚਿਆਂ ਅਤੇ ਭਵਿੱਖ ਦੀਆਂ ਯੋਜਨਾਵਾਂ ਬਾਰੇ ਗੱਲਬਾਤ ਕੀਤੀ ਜਾਵੇਗੀ।",
        },
        {
          title: "ਅਰਜ਼ੀ ਦਾ ਨਤੀਜਾ",
          description:
            "ਚੁਣੇ ਗਏ ਵਿਦਿਆਰਥੀ ਨੂੰ ਸੂਚਿਤ ਕੀਤਾ ਜਾਵੇਗਾ ਅਤੇ ਵਜ਼ੀਫ਼ਾ ਪ੍ਰਦਾਨ ਕੀਤਾ ਜਾਵੇਗਾ। ਵਜ਼ੀਫ਼ਾ ਪ੍ਰਾਪਤ ਕਰਨ ਵਾਲਾ ਵਿਦਿਆਰਥੀ ਸਾਡੇ ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਵਿਦਿਆਰਥੀਆਂ ਦੇ ਭਾਈਚਾਰੇ ਦਾ ਹਿੱਸਾ ਬਣੇਗਾ।",
        },
      ];

  return (
    <div className="bg-white">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-16 px-6 lg:px-12 bg-gradient-to-b from-black to-gray-900 text-white border-b-2 border-white/10"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <GraduationCap className="w-12 h-12 mx-auto mb-4" />
            <h1
              className="mb-4"
              style={{
                fontFamily: isEnglish
                  ? "'Cormorant Garamond', serif"
                  : "sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              {isEnglish ? "Scholarship Program" : "ਵਜ਼ੀਫ਼ਾ ਪ੍ਰੋਗਰਾਮ"}
            </h1>
            <div className="w-24 h-px bg-white/30 mx-auto mb-4" />
            <p
              className="text-lg text-gray-300 max-w-2xl mx-auto italic"
              style={{
                fontFamily: isEnglish
                  ? "'Cormorant Garamond', serif"
                  : "sans-serif",
              }}
            >
              {isEnglish
                ? "Supporting talented students who will shape a brighter future."
                : "ਹੋਣਹਾਰ ਵਿਦਿਆਰਥੀਆਂ ਦਾ ਸਾਥ, ਜੋ ਇੱਕ ਰੌਸ਼ਨ ਭਵਿੱਖ ਸਿਰਜਣਗੇ"}
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-center mb-6 md:mb-8"
              style={{
                fontFamily: isEnglish
                  ? "'Cormorant Garamond', serif"
                  : "sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              {isEnglish
                ? "Comrade Gurmail Singh Hunjan and Comrade Joginder Singh Scholarship Program"
                : "ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਸਿੰਘ ਹੂੰਝਣ ਅਤੇ ਕਾਮਰੇਡ ਜੋਗਿੰਦਰ ਸਿੰਘ ਵਜ਼ੀਫ਼ਾ ਪ੍ਰੋਗਰਾਮ"}
            </h2>
            <div
              className="space-y-4"
              style={{
                fontFamily: isEnglish
                  ? "'Work Sans', sans-serif"
                  : "sans-serif",
              }}
            >
              {isEnglish ? (
                <>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Our scholarship program supports deserving students who are
                    committed to pursuing their education but may face financial
                    challenges. We provide financial assistance to help reduce
                    the burden of education and enable students to focus on
                    achieving their academic goals.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    We believe that every deserving student should have the
                    opportunity to learn, grow, and build a better future.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    This scholarship program currently supports civil
                    engineering students at Guru Nanak Dev Engineering College
                    in Ludhiana, Punjab.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    ਸਾਡਾ ਵਜ਼ੀਫ਼ਾ ਪ੍ਰੋਗਰਾਮ ਉਨ੍ਹਾਂ ਯੋਗ ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਸਹਾਇਤਾ ਕਰਦਾ
                    ਹੈ ਜੋ ਆਪਣੀ ਸਿੱਖਿਆ ਜਾਰੀ ਰੱਖਣ ਲਈ ਵਚਨਬੱਧ ਹਨ, ਪਰ ਆਰਥਿਕ ਮੁਸ਼ਕਲਾਂ
                    ਦਾ ਸਾਹਮਣਾ ਕਰ ਰਹੇ ਹਨ। ਅਸੀਂ ਸਿੱਖਿਆ ਦੇ ਖਰਚੇ ਦਾ ਬੋਝ ਘਟਾਉਣ ਅਤੇ
                    ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਆਪਣੇ ਵਿਦਿਅਕ ਟੀਚਿਆਂ ਦੀ ਪ੍ਰਾਪਤੀ ਵੱਲ ਧਿਆਨ
                    ਕੇਂਦਰਿਤ ਕਰਨ ਲਈ ਵਿੱਤੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ।
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    ਸਾਡਾ ਵਿਸ਼ਵਾਸ ਹੈ ਕਿ ਹਰ ਯੋਗ ਵਿਦਿਆਰਥੀ ਨੂੰ ਸਿੱਖਣ, ਅੱਗੇ ਵਧਣ ਅਤੇ
                    ਇੱਕ ਬਿਹਤਰ ਭਵਿੱਖ ਬਣਾਉਣ ਦਾ ਮੌਕਾ ਮਿਲਣਾ ਚਾਹੀਦਾ ਹੈ।
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    ਇਹ ਵਜ਼ੀਫ਼ਾ ਪ੍ਰੋਗਰਾਮ ਇਸ ਸਮੇਂ ਲੁਧਿਆਣਾ, ਪੰਜਾਬ ਸਥਿਤ ਗੁਰੂ ਨਾਨਕ ਦੇਵ
                    ਇੰਜੀਨੀਅਰਿੰਗ ਕਾਲਜ ਦੇ ਸਿਵਲ ਇੰਜੀਨੀਅਰਿੰਗ ਦੇ ਵਿਦਿਆਰਥੀਆਂ ਦੀ
                    ਸਹਾਇਤਾ ਕਰਦਾ ਹੈ।
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <HistoricalDivider />

      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-center text-xl md:text-2xl mb-6 md:mb-8"
              style={{
                fontFamily: isEnglish
                  ? "'Cormorant Garamond', serif"
                  : "sans-serif",
              }}
            >
              {isEnglish
                ? "Eligibility & Requirements"
                : "ਯੋਗਤਾ ਅਤੇ ਲੋੜੀਂਦੀਆਂ ਸ਼ਰਤਾਂ"}
            </h2>
            <div
              className="grid md:grid-cols-2 gap-6 md:gap-8"
              style={{
                fontFamily: isEnglish
                  ? "'Work Sans', sans-serif"
                  : "sans-serif",
              }}
            >
              {eligibility.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-black pl-4 md:pl-6"
                >
                  <h3 className="text-base md:text-lg mb-2 md:mb-3 uppercase tracking-wider text-xs md:text-sm">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-center mb-6 md:mb-8"
              style={{
                fontFamily: isEnglish
                  ? "'Cormorant Garamond', serif"
                  : "sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              {isEnglish ? "Application Process" : "ਅਰਜ਼ੀ ਦੀ ਪ੍ਰਕਿਰਿਆ"}
            </h2>
            <p
              className="text-sm md:text-base text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-6 md:mb-8 px-4"
              style={{
                fontFamily: isEnglish
                  ? "'Work Sans', sans-serif"
                  : "sans-serif",
              }}
            >
              {isEnglish
                ? "Our application process is simple and transparent. Each application is carefully reviewed to identify students who meet the scholarship criteria and show strong potential."
                : "ਸਾਡੀ ਅਰਜ਼ੀ ਦੀ ਪ੍ਰਕਿਰਿਆ ਸਧਾਰਨ ਅਤੇ ਪਾਰਦਰਸ਼ੀ ਹੈ। ਹਰ ਅਰਜ਼ੀ ਦੀ ਧਿਆਨ ਨਾਲ ਸਮੀਖਿਆ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਤਾਂ ਜੋ ਵਜ਼ੀਫ਼ੇ ਦੀਆਂ ਸ਼ਰਤਾਂ ਪੂਰੀਆਂ ਕਰਨ ਵਾਲੇ ਅਤੇ ਚੰਗੀ ਸੰਭਾਵਨਾ ਰੱਖਣ ਵਾਲੇ ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਚੋਣ ਕੀਤੀ ਜਾ ਸਕੇ।"}
            </p>

            <div className="space-y-4 md:space-y-6 border-l-2 border-black/20 pl-6 md:pl-8 ml-3 md:ml-4 mb-8 md:mb-10">
              {applicationSteps.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute -left-[29px] md:-left-[37px] top-1 w-3 h-3 bg-black border-2 border-white" />
                  <h3
                    className="text-base md:text-lg mb-2"
                    style={{
                      fontFamily: isEnglish
                        ? "'Cormorant Garamond', serif"
                        : "sans-serif",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-700 text-xs md:text-sm leading-relaxed"
                    style={{
                      fontFamily: isEnglish
                        ? "'Work Sans', sans-serif"
                        : "sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white hover:bg-gray-800 transition-colors group text-sm uppercase tracking-wider"
                style={{
                  fontFamily: isEnglish
                    ? "'Work Sans', sans-serif"
                    : "sans-serif",
                }}
              >
                {isEnglish ? "Start Your Application" : "ਆਪਣੀ ਅਰਜ਼ੀ ਸ਼ੁਰੂ ਕਰੋ"}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-center mb-4 md:mb-6"
              style={{
                fontFamily: isEnglish
                  ? "'Cormorant Garamond', serif"
                  : "sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              {isEnglish ? "Other Ways We Can Help" : "ਹੋਰ ਸਹਾਇਤਾ"}
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6 md:mb-8" />
            <p
              className="text-sm md:text-base text-gray-700 leading-relaxed"
              style={{
                fontFamily: isEnglish
                  ? "'Work Sans', sans-serif"
                  : "sans-serif",
              }}
            >
              {isEnglish
                ? "If you need support beyond our scholarship program, please contact us. We are happy to discuss your needs and explore other ways we may be able to help."
                : "ਜੇ ਤੁਹਾਨੂੰ ਵਜ਼ੀਫ਼ਾ ਪ੍ਰੋਗਰਾਮ ਤੋਂ ਇਲਾਵਾ ਕਿਸੇ ਹੋਰ ਸਹਾਇਤਾ ਦੀ ਲੋੜ ਹੈ, ਤਾਂ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ। ਅਸੀਂ ਤੁਹਾਡੀ ਲੋੜ ਨੂੰ ਸਮਝ ਕੇ ਸੰਭਵ ਤੌਰ ’ਤੇ ਹੋਰ ਤਰੀਕਿਆਂ ਨਾਲ ਮਦਦ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਾਂਗੇ।"}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
