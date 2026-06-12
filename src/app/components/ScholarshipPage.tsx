import { motion } from "motion/react";
import { GraduationCap, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import {
  HistoricalDivider,
  SectionDivider,
} from "./HistoricalDivider";

export function ScholarshipPage() {
  const pastScholars = [
    {
      name: "Name of Person",
      year: "2023",
      field: "Bachelor of (Degree)",
      university: "University Name",
      photo: "",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      name: "Name of Person",
      year: "2022",
      field: "Bachelor of (Degree)",
      university: "University Name",
      photo: "",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    },
    {
      name: "Name of Person",
      year: "2021",
      field: "Bachelor of (Degree)",
      university: "University Name",
      photo: "",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud.",
    },
    {
      name: "Name of Person",
      year: "2020",
      field: "Master of (Degree)",
      university: "University Name",
      photo: "",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      name: "Name of Person",
      year: "2019",
      field: "PhD",
      university: "University Name",
      photo: "",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sunt in culpa qui officia deserunt mollit.",
    },
    {
      name: "Name of Person",
      year: "2018",
      field: "Bachelor in (Degree)",
      university: "University Name",
      photo: "",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Compact Hero */}
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
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              Scholarship{" "}
              <span className="italic">Program</span>
            </h1>
            <div className="w-24 h-px bg-white/30 mx-auto mb-4"></div>
            <p
              className="text-lg text-gray-300 max-w-2xl mx-auto italic"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Investing in exceptional students who will shape
              tomorrow
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Program Overview - Narrative */}
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
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              About the <span className="italic">Program</span>
            </h2>

            <div
              className="prose prose-lg max-w-none"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4 first-letter:text-4xl first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim
                id est laborum. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam. Eaque
                ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <HistoricalDivider />

      {/* Eligibility & Requirements - Narrative Format */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-center text-xl md:text-2xl mb-6 md:mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Eligibility &{" "}
              <span className="italic">Requirements</span>
            </h3>

            <div
              className="grid md:grid-cols-2 gap-6 md:gap-8"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              <div className="border-l-2 border-black pl-4 md:pl-6">
                <h4 className="text-base md:text-lg mb-2 md:mb-3 uppercase tracking-wider text-xs md:text-sm">
                  Academic Excellence
                </h4>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                  Candidates must demonstrate exceptional
                  academic achievement throughout their
                  educational journey.
                </p>
              </div>

              <div className="border-l-2 border-black pl-4 md:pl-6">
                <h4 className="text-base md:text-lg mb-2 md:mb-3 uppercase tracking-wider text-xs md:text-sm">
                  Financial Need
                </h4>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Priority is given to
                  students facing significant financial barriers
                  to education.
                </p>
              </div>

              <div className="border-l-2 border-black pl-4 md:pl-6">
                <h4 className="text-base md:text-lg mb-2 md:mb-3 uppercase tracking-wider text-xs md:text-sm">
                  Community Impact
                </h4>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat.
                  We seek individuals committed to giving back
                  to their communities and creating positive
                  change.
                </p>
              </div>

              <div className="border-l-2 border-black pl-4 md:pl-6">
                <h4 className="text-base md:text-lg mb-2 md:mb-3 uppercase tracking-wider text-xs md:text-sm">
                  Character & Leadership
                </h4>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt
                  mollit anim. Demonstrated leadership qualities
                  and strong moral character are essential
                  criteria.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Past Scholars - Compact Grid */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-10 text-center"
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Our <span className="italic">Scholars</span>
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <p
              className="text-gray-600 max-w-3xl mx-auto text-xs md:text-sm px-4"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {pastScholars.map((scholar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.05,
                  duration: 0.5,
                }}
                className="bg-white border-2 border-black overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={scholar.photo}
                    alt={scholar.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3
                      className="text-xl"
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                      }}
                    >
                      {scholar.name}
                    </h3>
                    <span
                      className="text-xs bg-black text-white px-2 py-1"
                      style={{
                        fontFamily: "'Work Sans', sans-serif",
                      }}
                    >
                      {scholar.year}
                    </span>
                  </div>
                  <p
                    className="text-xs uppercase tracking-wide text-gray-500 mb-1"
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    {scholar.field}
                  </p>
                  <p
                    className="text-xs text-gray-600 mb-3 italic"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {scholar.university}
                  </p>
                  <div className="w-10 h-px bg-black mb-3"></div>
                  <p
                    className="text-xs text-gray-700 leading-relaxed italic"
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    "{scholar.testimonial}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Application Process - Timeline Style */}
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
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Application{" "}
              <span className="italic">Process</span>
            </h2>

            <div className="mb-8 md:mb-10">
              <p
                className="text-sm md:text-base text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-6 md:mb-8 px-4"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. The
                selection process is rigorous and designed to
                identify the most promising candidates.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 border-l-2 border-black/20 pl-6 md:pl-8 ml-3 md:ml-4 mb-8 md:mb-10">
              {[
                {
                  step: "Initial Application",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Submit your completed application form along with all required documentation including academic transcripts and personal statement.",
                },
                {
                  step: "Document Review",
                  desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our committee carefully reviews each submission for academic merit and potential impact.",
                },
                {
                  step: "Interviews",
                  desc: "Ut enim ad minim veniam, quis nostrud exercitation. Selected candidates participate in personal interviews to discuss their goals and aspirations.",
                },
                {
                  step: "Final Selection",
                  desc: "Duis aute irure dolor in reprehenderit in voluptate. Award recipients are notified and invited to join our distinguished community of scholars.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.5,
                  }}
                  className="relative"
                >
                  <div className="absolute -left-[29px] md:-left-[37px] top-1 w-3 h-3 bg-black border-2 border-white"></div>
                  <div>
                    <h4
                      className="text-base md:text-lg mb-2"
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                      }}
                    >
                      {item.step}
                    </h4>
                    <p
                      className="text-gray-700 text-xs md:text-sm leading-relaxed"
                      style={{
                        fontFamily: "'Work Sans', sans-serif",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white hover:bg-gray-800 transition-colors group text-sm uppercase tracking-wider"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Begin Your Application
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Sponsorship - Narrative */}
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
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Support Our{" "}
              <span className="italic">Mission</span>
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6 md:mb-8"></div>

            <div
              className="prose max-w-none mb-6 md:mb-8"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Your generous contribution directly impacts a
                student's educational journey and helps build a
                brighter future for our community.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Every dollar you
                contribute goes directly to student support,
                with 95% of donations funding scholarships and
                5% covering essential administrative costs.
              </p>
            </div>

            <div className="text-center mb-8 md:mb-10">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white hover:bg-gray-800 transition-colors group text-sm uppercase tracking-wider"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Interested in Sponsoring? Find Out More
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-black text-white p-6 md:p-8 text-center shadow-2xl">
              <h3
                className="text-xl md:text-2xl mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Your Impact{" "}
                <span className="italic">Matters</span>
              </h3>
              <div className="w-16 h-px bg-white/30 mx-auto mb-3 md:mb-4"></div>
              <p
                className="text-gray-300 text-xs md:text-sm max-w-2xl mx-auto px-4"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Every contribution, regardless of size, makes a
                tangible difference in a student's life.
                Together, we are building a legacy of
                educational opportunity and community
                empowerment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}