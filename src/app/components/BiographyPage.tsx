import { motion } from "motion/react";
import { useParams, Navigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageCarousel } from "./ImageCarousel";

const BASE = "/ChananDaChannan/";

const loremMed1 = "Comrade Gurmail Singh Hunjan was born on 15 November 1951 in Pandher Kheri, Ludhiana, Punjab, India. Raised in a politically active family, his father, Comrade Chanan Singh Barola, was a respected freedom fighter who instilled in him the values of justice, equality, and commitment to working class. His mother was Jaswant Kaur. His father joined India's freedom struggle, starting with the Indian National Congress and later became a communist after meeting other revolutionaries in the prison. He often shared how Nehru's books, Glimpses of World History and The Discovery of India, shaped his views. During the partition in 1947, Comrade Barola and his friends risked their lives to help Muslim families reach Malerkotla safely. These actions revealed the secular and humanitarian values that later defined Comrade Hunjan. Comrade Hunjan began his education in Maloud and attended Government College in Malerkotla before earning a Master's in Political Science at Arya College, Ludhiana. He excelled in sports, especially Kabaddi, which drew large crowds in local tournaments. His real passion, though, was public life and activism.";

const loremBody1 = "He soon became a regional leader of the influential All India Students' Federation (AISF). His involvement deepened in the student movement after the firing incident at the Moga Agitation in 1972 through close relationships with Comrade Kartar Singh Buwani and Comrade Bant Singh Brar. After his studies, Comrade Hunjan briefly worked at a Cooperative Bank before committing fully to the Communist Party of India (CPI). He became Assistant Secretary of the Ludhiana district unit, served on the Punjab State Council, and actively grew the All India Youth Federation (AIYF) in rural Ludhiana by engaging youth in sports and social work.";

const loremClose1 = "In the early 1980s, he went to Germany to enhance his political skills. Long before drug addiction became a major issue in Punjab, he warned that young people without positive activities could fall into harmful habits.";

const loremMed2 = "Those who knew him recalled his sharp mind, friendly nature, and ability to inspire others. Many young people who initially disagreed with him were eventually persuaded through thoughtful debates. His speeches, rooted in Marxist ideas and everyday struggles, influenced politically aware youth in rural Punjab. Building strong partnerships, Comrade Gulzar Singh Goria, from the same village, remembered working with him for about 22 years. \"With Comrade Hunjan's guidance, I became a leader in the Bharatiya Khet Mazdoor Union, which fights for rural workers' rights. His dedication sustained us during hard times. He always matched words with actions.\" ";

const loremBody2 = "Comrade Gulzar Singh Pandher, ex-employee of Punjab Agriculture University, initially disagreed with Comrade Hunjan's ideas. However, Hunjan's magnetic personality greatly influenced him, and they became close comrades. After many discussions, Pandher came to share Hunjan's beliefs and joined the student organisation.";

const loremClose2 = "Comrade Hunjan was deeply influenced by Marxism and believed in scientific, progressive thinking. He admired Saheed-e-Azam Bhagat Singh and his ideology. He said India had enough resources for self-reliance, but became dependent on foreign powers. He often criticised capitalism and imperialism, arguing that they increased inequality and harmed citizens in developing countries. He believed foreign interests fuelled internal conflicts to weaken countries seeking independent development.";

const loremMed3 = "Comrade Hunjan also served as the elected village head (Sarpanch) for over ten years. During his term, he achieved several tangible improvements: he secured grants to build a sports ground and provide equipment, increasing youth participation in sports; established a library named after Saheed-e-Azam Bhagat Singh, enhancing educational resources for villagers; upgraded the drainage system, which reduced flooding; created a common cremation ground for all families; and improved sanitation by building public toilets. He also obtained a grant for a local dispensary, improving villagers' access to healthcare, which was constructed after his death. These achievements made a significant impact on the village's progress and overall well-being.";

const loremBody3 = "He focused his politics entirely on organising workers, farmers, and rural labourers across Ludhiana, especially in Ahmedgarh, Maloud, and Dehlon. He brought loaders (palledars), labourers, and farm workers into strong unions, built local committees, resolved grievances with officials, and held educational camps on their rights. His honest leadership motivated many to support the Communist Party, as they trusted him.";

// NEW: 1980s Punjab subsection paragraphs
const lorem1980sPunjab1 = "In the 1980s, as Punjab faced terrorism and extremism, Comrade Hunjan openly opposed Khalistani militancy and helped safeguard secular community ties. With comrades, he organised meetings across Ludhiana, inviting progressive voices like Comrades Satpal Dangand Jagjit Singh Anand to defend peace. The progressive slogan, 'Na Hindu Raj na Khalistan, jug jug jive Hindustan,' echoed their commitment. ";

const lorem1980sPunjab2 = "Despite the dangers faced by political activists at the time, Comrade Hunjan continued to visit villages to unite people against terrorism and for peace. Dr Arun Mitra remembered him stressing that patriots had suffered greatly for India’s independence, and that preserving India’s freedom at any cost remained a vital duty for all.";

const loremClosewhat = "";

const loremMed4 = "Tragically, his courage came at a high price. On the morning of 14 May 1989, Comrade Gurmail Singh Hunjan was killed in his village, Pandher Kheri, by Khalistani terrorists. His gunman, Comrade Joginder Singh, also fought bravely and lost his life. Just a few months earlier, after many death threats, he was given security protection. Friends and comrades had even started raising money to buy him a vehicle for his safety. Despite the risks and advice to move to a safer location, he never stepped away from public life or gave up his principles.";

// NEW: Legacy subsection paragraphs (6 paragraphs)
const loremLegacy1 = "To honour his legacy, every year on 14 May, people gather in Pandher Kheri to remember Comrades Gurmail Singh Hunjan and Joginder Singh. These events unite comrades, family, and younger generations for speeches, cultural performances, and discussions on current issues, keeping alive the push for justice and unity.";

const loremLegacy2 = "Colleagues saw Comrade Hunjan as a rare leader who stood by his principles. He insisted that political ideals must be proven through action. His tireless, honest work built a powerful grassroots movement, and his loss was deeply felt by those he inspired.";

const loremLegacy3 = "His death and the violence in Punjab deeply affected his family. His wife raised their two sons through her determination and family support. They went on to succeed as engineers abroad. The family now honours Comrade Hunjan’s legacy with educational scholarships for deserving students, believing peace and education are the true way forward.";

const loremLegacy4 = "Today, decades after his death, Comrade Hunjan’s legacy still matters. Punjab still feels the aftereffects of terrorism and extremism, and new forms of communal politics and social division threaten the country’s democratic and secular values. His life reminds us that courage and integrity can last through hard times. Ordinary people can make a difference by building inclusive communities, standing up against injustice, and keeping Hunjan's spirit alive.";

const loremLegacy5 = "His fight was not only against terrorism, but also against exploitation, inequality, hatred, and injustice. Though his life ended early, his principles inspire those working for a united and peaceful society. Let us honour his memory by coming together for justice and unity, and standing up against all forces that try to divide us. Each of us has a role to play.";

const loremLegacy6 = "Comrade Gurmail Singh Hunjan was a leader for the people. He lived, worked, and gave his life for the unity, integrity, and humanity of Punjab and India. As his father once said, his voice could never be silenced by bullets.";

const loremClose4 = "Each of us has a role to play. Comrade Gurmail Singh Hunjan was a leader for the people. He lived, worked, and gave his life for the unity, integrity, and humanity of Punjab and India.";

const loremBody6 = "He was killed early in the morning on the village outskirts while going to relieve himself, a routine practice in Punjab. Despite threats, he refused to build a personal toilet, believing it would be seen as a misuse of public funds, demonstrating his firm ethics and strong moral stand against corruption. He truly lived by the saying, “Caesar's wife should not only be honest, but must also appear to be”. His death shocked the region. Thousands attended his funeral. At the ceremony, his father, Comrade Chanan Singh Barola, said:";

interface Chapter {
  title: string;
  heroParagraph: string;
  heroImage?: string; // Made optional for sections without hero image
  carouselImages: { url: string; alt: string; caption: string; year?: string }[];
  secondCarouselImages?: { url: string; alt: string; caption: string; year?: string }[];
  secondCarouselTitle?: string;
  bodyParagraph: string;
  testimonial?: { quote: string; attribution: string };
  // For 1980s Punjab subsection
  subsectionTitle?: string;
  subsectionParagraphs?: string[];
  // For Legacy subsection
  legacyParagraphs?: string[];
  closingParagraph: string;
}

interface BiographyData {
  id: string;
  name: string;
  years: string;
  role: string;
  chapters: Chapter[];
}

const biographies: BiographyData[] = [
  {
    id: "founder-1",
    name: "Comrade Gurmail Hunjan",
    years: "1951–1989",
    role: "Remembering Comrade Gurmail Hunjan who fought relentlessly for the defence of integrity and sovereignty of the country",
    chapters: [
      {
        title: "Early Life",
        heroImage: BASE + "/image/biography1/germany.jpg",
        heroParagraph: loremMed1,
        carouselImages: [
          { url: BASE + "/image/biography1/e2.jpg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/e3.jpg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/e4.jpg", alt: "Description of image", caption: "Description" },
        ],
        secondCarouselImages: [
          { url: BASE + "/image/biography1/g1.jpg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g2.jpg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g3.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g4.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g5.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g6.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g7.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g8.jpg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g9.jpg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g10.JPG", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g11.jpg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g12.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g13.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g14.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g15.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/g16.jpg", alt: "Description of image", caption: "Description" },
        ],
        bodyParagraph: loremBody1,
        closingParagraph: loremClose1,
      },
      {
        title: "Activism",
        heroImage: BASE + "/image/biography1/head.JPEG",
        heroParagraph: loremMed2,
        carouselImages: [
          { url: BASE + "/image/biography1/a2.jpg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/a3.jpg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/a4.jpg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/a5.JPEG", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/a6.JPEG", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/a7.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/a8.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/a9.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/a10.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/a11.jpeg", alt: "Description of image", caption: "Description" },
        ],
        bodyParagraph: loremBody2,
        testimonial: {
          quote: "With Comrade Hunjan's guidance, I became a leader in the Bharatiya Khet Mazdoor Union, which fights for rural workers' rights. His dedication sustained us during hard times. He always matched his words with actions.",
          attribution: "Comrade Gulzar Singh"
        },
        closingParagraph: loremClose2,
      },
      {
        title: "Leadership",
        heroImage: BASE + "/image/biography1/headlead.jpeg",
        heroParagraph: loremMed3,
        carouselImages: [
          { url: BASE + "/image/biography1/l2.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/l3.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/l4.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/l5.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/l6.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/l7.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/l8.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/l9.jpeg", alt: "Description of image", caption: "Description" },
        ],
        bodyParagraph: loremBody3,
        // ✅ NEW: 1980s Punjab subsection
        subsectionTitle: "1980s Punjab",
        subsectionParagraphs: [lorem1980sPunjab1, lorem1980sPunjab2],
        closingParagraph: loremClosewhat,
      },
      {
        title: "Assassination",
        heroImage: BASE + "/image/biography1/headassassin.jpeg",
        heroParagraph: loremMed4,
        carouselImages: [
          { url: BASE + "/image/biography1/a2.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/a3.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/a4.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/a5.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/as6.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/as7.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/as8.jpeg", alt: "Description of image", caption: "Description" },
          { url: BASE + "/image/biography1/as9.jpeg", alt: "Description of image", caption: "Description" },
        ],
        bodyParagraph: loremBody6,
        testimonial: {
          quote: "“Gurmail was a hero — giver, devotee, and warrior — all three live forever. He was born of the people, lived for the people, and became a martyr for the people.”",
          attribution: "Comrade Chanan Singh Barola, father of Comrade Gurmail Singh Hunjan"
        },
        // ✅ NEW: Legacy subsection with 6 paragraphs
        legacyParagraphs: [
          loremLegacy1,
          loremLegacy2,
          loremLegacy3,
          loremLegacy4,
          loremLegacy5,
          loremLegacy6
        ],
        closingParagraph: loremClose4,
      },
    ],
  },
];

function TestimonialBlock({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <div className="my-10 md:my-14 border-t border-b border-black/15 py-8 md:py-10 text-center max-w-2xl mx-auto">
      <p
        className="text-xl md:text-2xl italic text-gray-800 leading-relaxed mb-4"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <p
        className="text-xs uppercase tracking-widest text-gray-500"
        style={{ fontFamily: "'Work Sans', sans-serif" }}
      >
        — {attribution}
      </p>
    </div>
  );
}

export function BiographyPage() {
  const { id } = useParams();
  const biography = biographies.find((bio) => bio.id === id);

  if (!biography) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white">
      {/* Name Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-12 md:py-16 px-4 md:px-6 lg:px-12 bg-gradient-to-b from-gray-100 to-white border-b-2 border-black/10"
      >
        <div className="container mx-auto max-w-5xl text-center">
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
            {biography.name}
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
            className="text-xs uppercase tracking-widest text-gray-500 mb-2"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            {biography.role}
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg italic text-gray-600"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {biography.years}
          </motion.p>
        </div>
      </motion.section>

      {/* Chapters */}
      <div>
        {biography.chapters.map((chapter, chapterIdx) => {
          const heroImage = chapter.heroImage || chapter.carouselImages[0]?.url || "";
          return (
            <motion.article
              key={chapterIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Chapter Divider + Title */}
              <div className="px-4 md:px-6 lg:px-12 pt-14 md:pt-20 pb-8 md:pb-10">
                <div className="container mx-auto max-w-5xl">
                  <div className="w-full h-px bg-black/25 mb-6 md:mb-8" />
                  <h2
                    className="leading-none"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(3rem, 9vw, 6.5rem)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {chapter.title}
                  </h2>
                </div>
              </div>

              {/* Hero: image (left) + opening paragraph (right) */}
              <div className="px-4 md:px-6 lg:px-12 pb-6">
                <div className="container mx-auto max-w-5xl">
                  {/* Desktop two-column */}
                  <div className="hidden md:grid grid-cols-[2fr_3fr] gap-10 items-start">
                    <div className="aspect-[3/4] bg-gray-100 border border-black/20 overflow-hidden shadow-md">
                      <ImageWithFallback
                        src={heroImage}
                        alt={`${biography.name} — ${chapter.title}`}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <p
                      className="text-base text-gray-700 leading-relaxed pt-2 first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1"
                      style={{ fontFamily: "'Work Sans', sans-serif" }}
                    >
                      {chapter.heroParagraph}
                    </p>
                  </div>

                  {/* Mobile stacked */}
                  <div className="md:hidden space-y-5">
                    <div className="aspect-[4/3] bg-gray-100 border border-black/20 overflow-hidden shadow-sm">
                      <ImageWithFallback
                        src={heroImage}
                        alt={`${biography.name} — ${chapter.title}`}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <p
                      className="text-sm text-gray-700 leading-relaxed first-letter:text-4xl first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1"
                      style={{ fontFamily: "'Work Sans', sans-serif" }}
                    >
                      {chapter.heroParagraph}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body paragraph after hero */}
              <div className="px-4 md:px-6 lg:px-12 pb-6">
                <div className="container mx-auto max-w-5xl">
                  <p
                    className="text-sm md:text-base text-gray-700 leading-relaxed"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {chapter.bodyParagraph}
                  </p>
                </div>
              </div>

              {/* FIRST CAROUSEL */}
              <div className="px-4 md:px-6 lg:px-12">
                <div className="container mx-auto max-w-5xl">
                  {chapter.carouselImages && chapter.carouselImages.length > 0 && (
                    <ImageCarousel 
                      images={chapter.carouselImages} 
                      autoplayInterval={5000}
                      className="max-w-5xl"
                    />
                  )}
                </div>
              </div>

              {/* Closing paragraph between first and second carousel */}
              <div className="px-4 md:px-6 lg:px-12 pt-6 pb-6">
                <div className="container mx-auto max-w-5xl">
                  <p
                    className="text-sm md:text-base text-gray-700 leading-relaxed"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {chapter.closingParagraph}
                  </p>
                </div>
              </div>

              {/* SECOND CAROUSEL - Only for sections that have it */}
              {chapter.secondCarouselImages && chapter.secondCarouselImages.length > 0 && (
                <div className="px-4 md:px-6 lg:px-12 mt-10">
                  <div className="container mx-auto max-w-5xl">
                    {chapter.secondCarouselTitle && (
                      <h3 
                        className="text-xl md:text-2xl mb-6 text-center"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {chapter.secondCarouselTitle}
                      </h3>
                    )}
                    <ImageCarousel 
                      images={chapter.secondCarouselImages} 
                      autoplayInterval={5000}
                      className="max-w-5xl"
                    />
                  </div>
                </div>
              )}

              {/* ✅ NEW: 1980s Punjab subsection */}
              {chapter.subsectionTitle && chapter.subsectionParagraphs && (
                <div className="px-4 md:px-6 lg:px-12 mt-8">
                  <div className="container mx-auto max-w-5xl">
                    <h3 
                      className="text-2xl md:text-3xl mb-6"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {chapter.subsectionTitle}
                    </h3>
                    {chapter.subsectionParagraphs.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 last:mb-0"
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {chapter.testimonial && (
                <div className="px-4 md:px-6 lg:px-12">
                  <div className="container mx-auto max-w-5xl">
                    <TestimonialBlock
                      quote={chapter.testimonial.quote}
                      attribution={chapter.testimonial.attribution}
                    />
                  </div>
                </div>
              )}

              {/* ✅ NEW: Legacy subsection with 6 paragraphs */}
              {chapter.legacyParagraphs && (
                <div className="px-4 md:px-6 lg:px-12 mt-8">
                  <div className="container mx-auto max-w-5xl">
                    <h3 
                      className="text-2xl md:text-3xl mb-6"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Legacy
                    </h3>
                    {chapter.legacyParagraphs.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 last:mb-0"
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </motion.article>
          );
        })}
      </div>

      <div className="h-16 md:h-24" />
    </div>
  );
}