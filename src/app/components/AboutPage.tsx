import { useTranslation } from "../context/TranslationContext";
import { motion } from "motion/react";
import { SectionDivider } from "./HistoricalDivider";

export function AboutPage() {
  const { language } = useTranslation();
  const isEnglish = language === "en";

  const introduction = isEnglish
    ? [
        "We are a dedicated organisation committed to providing support and opportunities to deserving and financially disadvantaged students to pursue their education. We firmly believe that education is not only a means of transforming an individual’s life, but also a foundation for building a better and more equitable society.",
        "Our mission is to provide financial assistance to students who are talented, hardworking, and eager to pursue higher education, but face financial challenges that may prevent them from achieving their dreams.",
        "We strive to ensure that no deserving student’s education is interrupted simply because of financial hardship. Through our support, we encourage students to achieve their goals, develop their potential, and make a meaningful contribution to society.",
        "We believe that today’s students are the builders of tomorrow’s society. Providing a student with the opportunity to receive an education is not only an investment in an individual, but also a way of strengthening the future of a family, a community, and society as a whole.",
        "With this vision, we are committed to building a future where talent and hard work are given the opportunity to flourish, and financial barriers do not stand in the way of a student’s dreams.",
      ]
    : [
        "ਅਸੀਂ ਇੱਕ ਸਮਰਪਿਤ ਸੰਗਠਨ ਹਾਂ, ਜਿਸਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਯੋਗ ਅਤੇ ਲੋੜਵੰਦ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਸਿੱਖਿਆ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਸਹਾਇਤਾ ਅਤੇ ਮੌਕੇ ਪ੍ਰਦਾਨ ਕਰਨਾ ਹੈ। ਸਾਡਾ ਪੱਕਾ ਵਿਸ਼ਵਾਸ ਹੈ ਕਿ ਸਿੱਖਿਆ ਸਿਰਫ਼ ਵਿਅਕਤੀ ਦੇ ਜੀਵਨ ਨੂੰ ਬਦਲਣ ਦਾ ਸਾਧਨ ਨਹੀਂ, ਸਗੋਂ ਇੱਕ ਬਿਹਤਰ ਅਤੇ ਸਮਾਨਤਾਪੂਰਨ ਸਮਾਜ ਦੀ ਨੀਂਹ ਵੀ ਹੈ।",
        "ਸਾਡਾ ਮਕਸਦ ਉਨ੍ਹਾਂ ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਆਰਥਿਕ ਸਹਾਇਤਾ ਕਰਨਾ ਹੈ ਜੋ ਪ੍ਰਤਿਭਾਸ਼ਾਲੀ, ਮਿਹਨਤੀ ਅਤੇ ਉੱਚ ਸਿੱਖਿਆ ਪ੍ਰਾਪਤ ਕਰਨ ਦੇ ਇੱਛੁਕ ਹਨ, ਪਰ ਆਰਥਿਕ ਮੁਸ਼ਕਲਾਂ ਕਾਰਨ ਆਪਣੇ ਸੁਪਨਿਆਂ ਨੂੰ ਪੂਰਾ ਕਰਨ ਵਿੱਚ ਰੁਕਾਵਟਾਂ ਦਾ ਸਾਹਮਣਾ ਕਰ ਰਹੇ ਹਨ।",
        "ਅਸੀਂ ਯਤਨਸ਼ੀਲ ਹਾਂ ਕਿ ਕਿਸੇ ਵੀ ਯੋਗ ਵਿਦਿਆਰਥੀ ਦੀ ਸਿੱਖਿਆ ਸਿਰਫ਼ ਆਰਥਿਕ ਕਮੀ ਕਾਰਨ ਨਾ ਰੁਕੇ। ਸਾਡੀ ਸਹਾਇਤਾ ਰਾਹੀਂ ਅਸੀਂ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਆਪਣੇ ਟੀਚੇ ਹਾਸਲ ਕਰਨ, ਆਪਣੀ ਸਮਰੱਥਾ ਨੂੰ ਵਿਕਸਿਤ ਕਰਨ ਅਤੇ ਸਮਾਜ ਵਿੱਚ ਆਪਣਾ ਯੋਗਦਾਨ ਪਾਉਣ ਲਈ ਉਤਸ਼ਾਹਿਤ ਕਰਦੇ ਹਾਂ।",
        "ਅਸੀਂ ਮੰਨਦੇ ਹਾਂ ਕਿ ਅੱਜ ਦੇ ਵਿਦਿਆਰਥੀ ਹੀ ਕੱਲ੍ਹ ਦੇ ਸਮਾਜ ਦੇ ਨਿਰਮਾਤਾ ਹਨ। ਇੱਕ ਵਿਦਿਆਰਥੀ ਨੂੰ ਸਿੱਖਿਆ ਪ੍ਰਾਪਤ ਕਰਨ ਦਾ ਮੌਕਾ ਦੇਣਾ ਸਿਰਫ਼ ਇੱਕ ਵਿਅਕਤੀ ਦੀ ਮਦਦ ਕਰਨਾ ਨਹੀਂ, ਬਲਕਿ ਇੱਕ ਪਰਿਵਾਰ, ਇੱਕ ਭਾਈਚਾਰੇ ਅਤੇ ਪੂਰੇ ਸਮਾਜ ਦੇ ਭਵਿੱਖ ਨੂੰ ਮਜ਼ਬੂਤ ਕਰਨਾ ਹੈ।",
        "ਇਸੇ ਸੋਚ ਨਾਲ ਅਸੀਂ ਇੱਕ ਅਜਿਹੇ ਭਵਿੱਖ ਦੀ ਸਿਰਜਣਾ ਲਈ ਵਚਨਬੱਧ ਹਾਂ, ਜਿੱਥੇ ਯੋਗਤਾ ਅਤੇ ਮਿਹਨਤ ਨੂੰ ਮੌਕਾ ਮਿਲੇ ਅਤੇ ਆਰਥਿਕ ਰੁਕਾਵਟਾਂ ਕਿਸੇ ਵਿਦਿਆਰਥੀ ਦੇ ਸੁਪਨਿਆਂ ਦੇ ਰਾਹ ਵਿੱਚ ਰੁਕਾਵਟ ਨਾ ਬਣਨ।",
      ];

  const values = isEnglish
    ? [
        {
          title: "Our Mission",
          description:
            "We are committed to empowering deserving students through education and scholarship opportunities.",
        },
        {
          title: "Our Vision",
          description:
            "We envision a world where education is accessible to all deserving students.",
        },
        {
          title: "Our Values",
          description:
            "Helping others with honesty and compassion, without discrimination based on caste, creed, colour, religion, or region.",
        },
      ]
    : [
        {
          title: "ਸਾਡਾ ਮਕਸਦ",
          description:
            "ਯੋਗ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਸਿੱਖਿਆ ਤੇ ਵਜ਼ੀਫੇ ਰਾਹੀਂ ਸ਼ਕਤੀਸ਼ਾਲੀ ਬਣਾਉਣਾ ਅਤੇ ਉਹਨਾਂ ਦੇ ਸੁਪਨਿਆਂ ਨੂੰ ਪੂਰਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨਾ।",
        },
        {
          title: "ਸਾਡਾ ਸੁਪਨਾ",
          description:
            "ਇੱਕ ਅਜਿਹੀ ਦੁਨੀਆਂ ਜਿੱਥੇ ਹਰ ਯੋਗ ਵਿਦਿਆਰਥੀ ਨੂੰ ਸਿੱਖਿਆ ਤੱਕ ਪਹੁੰਚ ਹੋਵੇ ਅਤੇ ਉਹ ਆਪਣੀ ਪੂਰੀ ਸਮਰੱਥਾ ਨਾਲ ਵਿਕਸਤ ਹੋ ਸਕੇ।",
        },
        {
          title: "ਸਾਡੀਆਂ ਕਦਰਾਂ-ਕੀਮਤਾਂ",
          description:
            "ਜਾਤ-ਪਾਤ, ਧਰਮ, ਰੰਗ, ਮਜ਼ਹਬ ਜਾਂ ਖੇਤਰ ਦੇ ਕਿਸੇ ਵੀ ਭੇਦਭਾਵ ਤੋਂ ਬਿਨਾਂ, ਇਮਾਨਦਾਰੀ ਅਤੇ ਹਮਦਰਦੀ ਨਾਲ ਦੂਜਿਆਂ ਦੀ ਮਦਦ ਕਰਨਾ।",
        },
      ];

  const howWeHelp = isEnglish
    ? [
        "Our organisation runs scholarship program to support students in their education. We provide the assistance they need throughout their studies.",
        "We provide students with financial assistance, proper guidance, and opportunities to build valuable connections, helping them succeed in their studies and achieve their goals.",
        "Through our initiatives, we have helped students pursue their educational dreams. Our aim is to encourage students to build a better future and make a positive contribution to their communities.",
      ]
    : [
        "ਸਾਡੀ ਸੰਸਥਾ ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਸਿੱਖਿਆ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਵਜ਼ੀਫ਼ਾ ਪ੍ਰੋਗਰਾਮ ਚਲਾਉਂਦੀ ਹੈ। ਅਸੀਂ ਉਨ੍ਹਾਂ ਦੀ ਪੜ੍ਹਾਈ ਦੌਰਾਨ ਲੋੜੀਂਦੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ।",
        "ਅਸੀਂ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਵਿੱਤੀ ਸਹਾਇਤਾ, ਸਹੀ ਮਾਰਗਦਰਸ਼ਨ ਅਤੇ ਚੰਗੇ ਸੰਪਰਕ ਬਣਾਉਣ ਵਿੱਚ ਸਹਾਇਤਾ ਦਿੰਦੇ ਹਾਂ, ਤਾਂ ਜੋ ਉਹ ਆਪਣੀ ਪੜ੍ਹਾਈ ਵਿੱਚ ਸਫਲ ਹੋ ਸਕਣ ਅਤੇ ਆਪਣੇ ਟੀਚੇ ਪ੍ਰਾਪਤ ਕਰ ਸਕਣ।",
        "ਸਾਡੀਆਂ ਪਹਿਲਕਦਮੀਆਂ ਰਾਹੀਂ ਅਸੀਂ ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਉਨ੍ਹਾਂ ਦੇ ਵਿਦਿਅਕ ਸੁਪਨਿਆਂ ਨੂੰ ਪੂਰਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕੀਤੀ ਹੈ। ਸਾਡਾ ਉਦੇਸ਼ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਇੱਕ ਬਿਹਤਰ ਭਵਿੱਖ ਬਣਾਉਣ ਅਤੇ ਆਪਣੇ ਭਾਈਚਾਰੇ ਵਿੱਚ ਯੋਗਦਾਨ ਪਾਉਣ ਲਈ ਉਤਸ਼ਾਹਿਤ ਕਰਨਾ ਹੈ।",
      ];

  return (
    <div className="bg-white">
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
              fontFamily: isEnglish
                ? "'Cormorant Garamond', serif"
                : "sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            {isEnglish ? "About Us" : "ਸਾਡੇ ਬਾਰੇ"}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-1 bg-black mx-auto mb-4"
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg italic text-gray-600"
            style={{
              fontFamily: isEnglish
                ? "'Cormorant Garamond', serif"
                : "sans-serif",
            }}
          >
            {isEnglish
              ? "Chanan Da Chaanan - Empowering deserving students through education and scholarship opportunities"
              : "ਚੰਨਣ ਦਾ ਚਾਨਣ - ਯੋਗ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਸਿੱਖਿਆ ਤੇ ਵਜ਼ੀਫੇ ਰਾਹੀਂ ਸ਼ਕਤੀਸ਼ਾਲੀ ਬਣਾਉਣਾ"}
          </motion.p>
        </div>
      </motion.section>

      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <div
            className="space-y-4"
            style={{
              fontFamily: isEnglish ? "'Work Sans', sans-serif" : "sans-serif",
            }}
          >
            {introduction.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm md:text-base text-gray-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p
            className="mt-8 text-center text-xl md:text-2xl italic"
            style={{
              fontFamily: isEnglish
                ? "'Cormorant Garamond', serif"
                : "sans-serif",
            }}
          >
            {isEnglish
              ? "Investing in Education — Investing in the Future."
              : "ਸਿੱਖਿਆ ਵਿੱਚ ਨਿਵੇਸ਼ — ਭਵਿੱਖ ਵਿੱਚ ਨਿਵੇਸ਼।"}
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {values.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-l-2 border-black pl-6"
              >
                <h2
                  className="text-xl md:text-2xl mb-4"
                  style={{
                    fontFamily: isEnglish
                      ? "'Cormorant Garamond', serif"
                      : "sans-serif",
                  }}
                >
                  {item.title}
                </h2>
                <div className="w-12 h-px bg-black mb-4" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12 mb-12 md:mb-20">
        <div className="container mx-auto max-w-4xl">
          <h2
            className="text-center text-2xl md:text-3xl mb-8"
            style={{
              fontFamily: isEnglish
                ? "'Cormorant Garamond', serif"
                : "sans-serif",
            }}
          >
            {isEnglish ? "How we help" : "ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ"}
          </h2>
          <div
            className="space-y-4"
            style={{
              fontFamily: isEnglish ? "'Work Sans', sans-serif" : "sans-serif",
            }}
          >
            {howWeHelp.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm md:text-base text-gray-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
