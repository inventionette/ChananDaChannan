import { motion } from "motion/react";
import { useTranslation } from "../context/TranslationContext";
import {
  SectionDivider,
  HistoricalDivider,
} from "./HistoricalDivider";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  const { language, } = useTranslation();

  return (
    <div className="bg-white">
      {/* Hero Section */}
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
              fontFamily:
                language === "en"
                  ? "'Cormorant Garamond', serif"
                  : "sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            {language === "en" ? (
              <>
                About <span className="italic">Us</span>
              </>
            ) : (
              <>
                ਸਾਡੇ <span className="italic">ਬਾਰੇ</span>
              </>
            )}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-1 bg-black mx-auto mb-4"
          ></motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg italic text-gray-600"
            style={{
              fontFamily:
                language === "en"
                  ? "'Cormorant Garamond', serif"
                  : "sans-serif",
            }}
          >
            {language === "en"
              ? "Chanan Da Channan - Building futures through education"
              : "ਚਾਨਣ ਦੇ ਚੰਨਣ - ਸਿੱਖਿਆ ਰਾਹੀਂ ਭਵਿੱਖ ਬਣਾਉਣਾ"}
          </motion.p>
        </div>
      </motion.section>

      {/* Introduction */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {language === "en" ? (
              <div
                className="prose max-w-none"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 first-letter:text-4xl first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </p>
              </div>
            ) : (
              <div
                className="prose max-w-none"
                style={{ fontFamily: "sans-serif" }}
              >
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  ਚਾਨਣ ਦੇ ਚੰਨਣ ਇੱਕ ਸੰਗਠਨ ਹੈ ਜੋ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ
                  ਉੱਚ ਸਿੱਖਿਆ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਸਮਰਪਿਤ
                  ਹੈ। ਅਸੀਂ ਮੰਨਦੇ ਹਾਂ ਕਿ ਸਿੱਖਿਆ ਸਮਾਜ ਨੂੰ ਬਦਲਣ ਦੀ
                  ਸ਼ਕਤੀ ਰੱਖਦੀ ਹੈ।
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  ਸਾਡਾ ਮਿਸ਼ਨ ਯੋਗ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਵਿੱਤੀ ਸਹਾਇਤਾ
                  ਪ੍ਰਦਾਨ ਕਰਨਾ ਹੈ ਤਾਂ ਜੋ ਉਹ ਆਪਣੇ ਸੁਪਨਿਆਂ ਨੂੰ ਪੂਰਾ
                  ਕਰ ਸਕਣ। ਅਸੀਂ ਭਵਿੱਖ ਦੇ ਨੇਤਾਵਾਂ ਨੂੰ ਤਿਆਰ ਕਰਨ ਲਈ
                  ਵਚਨਬੱਧ ਹਾਂ।
                </p>
              </div>
            )}
          </motion.div>

          {/* Organization Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8"
          >
            <div className="aspect-[16/9] md:aspect-[21/9] bg-gray-100 border-2 border-black/20 overflow-hidden shadow-xl">
              <ImageWithFallback
                src=""
                alt="Organization"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <p
              className="mt-2 text-xs text-gray-600 italic text-center"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {language === "en"
                ? "Our community and mission"
                : "ਸਾਡਾ ਭਾਈਚਾਰਾ ਅਤੇ ਮਿਸ਼ਨ"}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Mission, Vision, Values */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="border-l-2 border-black pl-6"
            >
              <h3
                className="text-xl md:text-2xl mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {language === "en" ? (
                  <>
                    Our <span className="italic">Mission</span>
                  </>
                ) : (
                  <>
                    ਸਾਡਾ <span className="italic">ਮਿਸ਼ਨ</span>
                  </>
                )}
              </h3>
              <div className="w-12 h-px bg-black mb-4"></div>
              <p
                className="text-sm md:text-base text-gray-700 leading-relaxed"
                style={{
                  fontFamily:
                    language === "en"
                      ? "'Work Sans', sans-serif"
                      : "sans-serif",
                }}
              >
                {language === "en"
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are committed to empowering students through education."
                  : "ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਸਿੱਖਿਆ ਰਾਹੀਂ ਸ਼ਕਤੀਸ਼ਾਲੀ ਬਣਾਉਣਾ ਅਤੇ ਉਹਨਾਂ ਦੇ ਸੁਪਨਿਆਂ ਨੂੰ ਪੂਰਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨਾ।"}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="border-l-2 border-black pl-6"
            >
              <h3
                className="text-xl md:text-2xl mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {language === "en" ? (
                  <>
                    Our <span className="italic">Vision</span>
                  </>
                ) : (
                  <>
                    ਸਾਡੀ{" "}
                    <span className="italic">ਦ੍ਰਿਸ਼ਟੀ</span>
                  </>
                )}
              </h3>
              <div className="w-12 h-px bg-black mb-4"></div>
              <p
                className="text-sm md:text-base text-gray-700 leading-relaxed"
                style={{
                  fontFamily:
                    language === "en"
                      ? "'Work Sans', sans-serif"
                      : "sans-serif",
                }}
              >
                {language === "en"
                  ? "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. We envision a world where education is accessible to all deserving students."
                  : "ਇੱਕ ਅਜਿਹੀ ਦੁਨੀਆਂ ਜਿੱਥੇ ਹਰ ਯੋਗ ਵਿਦਿਆਰਥੀ ਨੂੰ ਸਿੱਖਿਆ ਤੱਕ ਪਹੁੰਚ ਹੋਵੇ ਅਤੇ ਉਹ ਆਪਣੀ ਪੂਰੀ ਸਮਰੱਥਾ ਨਾਲ ਵਿਕਸਤ ਹੋ ਸਕੇ।"}
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="border-l-2 border-black pl-6"
            >
              <h3
                className="text-xl md:text-2xl mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {language === "en" ? (
                  <>
                    Our <span className="italic">Values</span>
                  </>
                ) : (
                  <>
                    ਸਾਡੀਆਂ <span className="italic">ਕਦਰਾਂ</span>
                  </>
                )}
              </h3>
              <div className="w-12 h-px bg-black mb-4"></div>
              <p
                className="text-sm md:text-base text-gray-700 leading-relaxed"
                style={{
                  fontFamily:
                    language === "en"
                      ? "'Work Sans', sans-serif"
                      : "sans-serif",
                }}
              >
                {language === "en"
                  ? "Duis aute irure dolor in reprehenderit in voluptate. We uphold integrity, excellence, and service in everything we do."
                  : "ਇਮਾਨਦਾਰੀ, ਉੱਤਮਤਾ, ਅਤੇ ਸੇਵਾ ਸਾਡੀਆਂ ਮੁੱਖ ਕਦਰਾਂ ਹਨ ਜੋ ਸਾਡੇ ਹਰ ਕੰਮ ਵਿੱਚ ਝਲਕਦੀਆਂ ਹਨ।"}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* What We Do */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12 mb-12 md:mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-center text-2xl md:text-3xl mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {language === "en" ? (
                <>
                  What We <span className="italic">Do</span>
                </>
              ) : (
                <>
                  ਅਸੀਂ ਕੀ{" "}
                  <span className="italic">ਕਰਦੇ ਹਾਂ</span>
                </>
              )}
            </h2>

            <div
              className="prose max-w-none"
              style={{
                fontFamily:
                  language === "en"
                    ? "'Work Sans', sans-serif"
                    : "sans-serif",
              }}
            >
              {language === "en" ? (
                <>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Our organization provides comprehensive
                    scholarship programs that support students
                    throughout their academic journey.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. We offer financial
                    assistance, mentorship programs, and
                    networking opportunities to help students
                    succeed.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Through our initiatives, we
                    have supported hundreds of students in
                    achieving their educational goals and
                    becoming leaders in their communities.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    ਸਾਡੀ ਸੰਸਥਾ ਵਿਆਪਕ ਸਕਾਲਰਸ਼ਿਪ ਪ੍ਰੋਗਰਾਮ ਪ੍ਰਦਾਨ
                    ਕਰਦੀ ਹੈ ਜੋ ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਪੂਰੀ ਅਕਾਦਮਿਕ ਯਾਤਰਾ
                    ਦੌਰਾਨ ਸਹਾਇਤਾ ਕਰਦੇ ਹਨ।
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    ਅਸੀਂ ਵਿੱਤੀ ਸਹਾਇਤਾ, ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰੋਗਰਾਮ, ਅਤੇ
                    ਨੈੱਟਵਰਕਿੰਗ ਮੌਕੇ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ ਤਾਂ ਜੋ
                    ਵਿਦਿਆਰਥੀ ਸਫਲ ਹੋ ਸਕਣ।
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    ਸਾਡੀਆਂ ਪਹਿਲਕਦਮੀਆਂ ਰਾਹੀਂ, ਅਸੀਂ ਸੈਂਕੜੇ
                    ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਉਹਨਾਂ ਦੇ ਵਿਦਿਅਕ ਟੀਚਿਆਂ ਨੂੰ
                    ਪ੍ਰਾਪਤ ਕਰਨ ਅਤੇ ਆਪਣੇ ਭਾਈਚਾਰਿਆਂ ਵਿੱਚ ਨੇਤਾ ਬਣਨ
                    ਵਿੱਚ ਸਹਾਇਤਾ ਕੀਤੀ ਹੈ।
                  </p>
                </>
              )}
            </div>
          </motion.div>

          <HistoricalDivider />

          {/* Impact Statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
          >
            {[
              {
                number: "300+",
                label:
                  language === "en" ? "Scholars" : "ਵਿਦਿਆਰਥੀ",
              },
              {
                number: "30+",
                label: language === "en" ? "Years" : "ਸਾਲ",
              },
              {
                number: "50+",
                label:
                  language === "en"
                    ? "Universities"
                    : "ਯੂਨੀਵਰਸਿਟੀਆਂ",
              },
              {
                number: "95%",
                label:
                  language === "en"
                    ? "Success Rate"
                    : "ਸਫਲਤਾ ਦਰ",
              },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="text-3xl md:text-4xl mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-xs uppercase tracking-wider text-gray-600"
                  style={{
                    fontFamily:
                      language === "en"
                        ? "'Work Sans', sans-serif"
                        : "sans-serif",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}