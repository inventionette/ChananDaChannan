import { motion } from "motion/react";
import { useParams, Navigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const loremMed1 = "Comrade Gurmail Singh Hunjan was born on 15 November 1951 in Pandher Kheri, Ludhiana, Punjab, India. Raised in a politically active family, his father, Comrade Chanan Singh Barola, was a respected freedom fighter who instilled in him the values of justice, equality, and commitment to working class. His mother was Jaswant Kaur. His father joined India’s freedom struggle, starting with the Indian National Congress and later became a communist after meeting other revolutionaries in the prison. He often shared how Nehru’s books, Glimpses of World History and The Discovery of India, shaped his views. During the partition in 1947, Comrade Barola and his friends risked their lives to help Muslim families reach Malerkotla safely. These actions revealed the secular and humanitarian values that later defined Comrade Hunjan. Comrade Hunjan began his education in Maloud and attended Government College in Malerkotla before earning a Master’s in Political Science at Arya College, Ludhiana. He excelled in sports, especially Kabaddi, which drew large crowds in local tournaments. His real passion, though, was public life and activism.";

const loremBody1 = "He soon became a regional leader of the influential All India Students’ Federation (AISF). His involvement deepened in the student movement after the firing incident at the Moga Agitation in 1972 through close relationships with Comrade Kartar Singh Buwani and Comrade Bant Singh Brar. After his studies, Comrade Hunjan briefly worked at a Cooperative Bank before committing fully to the Communist Party of India (CPI). He became Assistant Secretary of the Ludhiana district unit, served on the Punjab State Council, and actively grew the All India Youth Federation (AIYF) in rural Ludhiana by engaging youth in sports and social work.";

const loremClose1 = "In the early 1980s, he went to Germany to enhance his political skills. Long before drug addiction became a major issue in Punjab, he warned that young people without positive activities could fall into harmful habits.";

const loremMed2 = "Building strong partnerships, Comrade Gulzar Singh Goria, from the same village, remembered working with him for about 22 years. Comrade Gulzar Singh Pandher, ex-employee of Punjab Agriculture University, initially disagreed with Comrade Hunjan’s ideas. However, Hunjan’s magnetic personality greatly influenced him, and they became close comrades. After many discussions, Pandher came to share Hunjan’s beliefs and joined the student organisation. Comrade Hunjan also served as the elected village head (Sarpanch) for over ten years. During his term, he achieved several tangible improvements: he secured grants to build a sports ground and provide equipment, increasing youth participation in sports; established a library named after Saheed-e-Azam Bhagat Singh, enhancing educational resources for villagers; upgraded the drainage system, which reduced flooding; created a common cremation ground for all families; and improved sanitation by building public toilets. He also obtained a grant for a local dispensary, improving villagers’ access to healthcare, which was constructed after his death. These achievements made a significant impact on the village’s progress and overall well-being.";

const loremBody2 = "He focused his politics entirely on organising workers, farmers, and rural labourers across Ludhiana, especially in Ahmedgarh, Maloud, and Dehlon. He brought loaders (palledars), labourers, and farm workers into strong unions, built local committees, resolved grievances with officials, and held educational camps on their rights. His honest leadership motivated many to support the Communist Party, as they trusted him.";

const loremClose2 = "Comrade Hunjan was deeply influenced by Marxism and believed in scientific, progressive thinking. He admired Saheed-e-Azam Bhagat Singh and his ideology. He said India had enough resources for self-reliance, but became dependent on foreign powers. He often criticised capitalism and imperialism, arguing that they increased inequality and harmed citizens in developing countries. He believed foreign interests fuelled internal conflicts to weaken countries seeking independent development.";

const loremMed3 = "In the 1980s, as Punjab faced terrorism and extremism, Comrade Hunjan openly opposed Khalistani militancy and helped safeguard secular community ties. With comrades, he organised meetings across Ludhiana, inviting progressive voices like Comrades Satpal Dang and Jagjit Singh Anand to defend peace. The progressive slogan, 'Na Hindu Raj na Khalistan, jug jug jive Hindustan.' echoed their commitment. Despite the dangers faced by political activists at the time, Comrade Hunjan continued to visit villages to unite people against terrorism and for peace. Dr Arun Mitra remembered him stressing that patriots had suffered greatly for India’s independence, and that preserving India’s freedom at any cost remained a vital duty for all.";

const loremBody3 = "Tragically, his courage came at a high price. On the morning of 14 May 1989, Comrade Gurmail Singh Hunjan was killed in his village, Pandher Kheri, by Khalistani terrorists. His gunman, Comrade Joginder Singh, also fought bravely and lost his life. Just a few months earlier, after many death threats, he was given security protection. Friends and comrades had even started raising money to buy him a vehicle for his safety. Despite the risks and advice to move to a safer location, he never stepped away from public life or gave up his principles.";

const loremClose3 = "He was killed early in the morning on the village outskirts while going to relieve himself, a routine practice in Punjab. Despite threats, he refused to build a personal toilet, believing it would be seen as a misuse of public funds, demonstrating his firm ethics and strong moral stand against corruption. He truly lived by the saying, “Caesar's wife should not only be honest, but must also appear to be”.";

const loremMed4 = "To honour his legacy, every year on 14 May, people gather in Pandher Kheri to remember Comrades Gurmail Singh Hunjan and Joginder Singh. These events unite comrades, family, and younger generations for speeches, cultural performances, and discussions on current issues, keeping alive the push for justice and unity. Colleagues saw Comrade Hunjan as a rare leader who stood by his principles. He insisted that political ideals must be proven through action. His tireless, honest work built a powerful grassroots movement, and his loss was deeply felt by those he inspired. His death and the violence in Punjab deeply affected his family. His wife raised their two sons through her determination and family support. They went on to succeed as engineers abroad. The family now honours Comrade Hunjan’s legacy with educational scholarships for deserving students, believing peace and education are the true way forward.";

const loremBody4 = "Today, decades after his death, Comrade Hunjan’s legacy still matters. Punjab still feels the aftereffects of terrorism and extremism, and new forms of communal politics and social division threaten the country’s democratic and secular values. His life reminds us that courage and integrity can last through hard times. Ordinary people can make a difference by building inclusive communities, standing up against injustice, and keeping Hunjan's spirit alive.";

const loremClose4 = "His fight was not only against terrorism, but also against exploitation, inequality, hatred, and injustice. Though his life ended early, his principles inspire those working for a united and peaceful society. Let us honour his memory by coming together for justice and unity, and standing up against all forces that try to divide us. Each of us has a role to play. Comrade Gurmail Singh Hunjan was a leader for the people. He lived, worked, and gave his life for the unity, integrity, and humanity of Punjab and India.";

const loremMed = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const loremClose = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.";


interface Chapter {
  title: string;
  heroParagraph: string;
  heroImage: string;
  photos: { url: string; alt: string; caption: string }[];
  bodyParagraph: string;
  testimonial?: { quote: string; attribution: string };
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
        heroImage: "./public/image/biography1/germany.jpg",
        heroParagraph: loremMed1,
        photos: [
          { url: "./public/image/biography1/earlylife4.jpeg", alt: "Description of image", caption: "Description" },
          { url: "./public/image/biography1/redo.jpeg", alt: "Description of image", caption: "Description" },
          { url: "./public/image/biography1/earlylife3.jpg", alt: "Description of image", caption: "Description" },
        ],
        bodyParagraph: loremBody1,
        closingParagraph: loremClose1,
      },
      {
        title: "Activism",
        heroImage: "./public/image/biography1/tajmahal.jpg",
        heroParagraph: loremMed2,
        photos: [
          { url: "./public/image/biography1/activism1.jpeg", alt: "Description of image", caption: "Description" },
          { url: "./public/image/biography1/activism2.jpeg", alt: "Description of image", caption: "Description" },
          { url: "./public/image/biography1/activism3.jpeg", alt: "Description of image", caption: "Description" },
        ],
        bodyParagraph: loremBody2,
        testimonial: {
          quote: "With Comrade Hunjan's guidance, I became a leader in the Bharatiya Khet Mazdoor Union, which fights for rural workers' rights. His dedication sustained us during hard times. He always matched his words with actions. — Comrade Gulzar Singh",
          attribution: ""
        },
        closingParagraph: loremClose2,
      },
      {
        title: "1980s",
        heroParagraph: loremMed3,
        heroImage: "./public/image/biography1/main.jpeg",
        photos: [
          { url: "./public/image/biography1/1980s.jpeg", alt: "Description of image", caption: "Description" },
          { url: "./public/image/biography1/1980s2.jpeg", alt: "Description of image", caption: "Description" },
          { url: "./public/image/biography1/1980s3.jpeg", alt: "Description of image", caption: "Description" },
        ],
        bodyParagraph: loremBody3,
        testimonial: {
          quote:
            "Gurmain was a hero — giver, devotee, and warrior — all three live forever. He was born of the people, lived for the people, and became a martyr for the people. — Comrade Chanan Singh Barola, father of Comrade Gurmail. ",
          attribution: "",
        },
        closingParagraph: loremClose3,
      },
      {
        title: "Legacy",
        heroParagraph: loremMed4,
        heroImage: "./public/image/biography1/creamation.jpeg",
        photos: [
          { url: "./public/image/biography1/legacy.jpeg", alt: "Description of image", caption: "Description" },
          { url: "./public/image/biography1/legacy3.jpeg", alt: "Description of image", caption: "Description" },
          { url: "./public/image/biography1/legacy2.jpeg", alt: "Description of image", caption: "Description" },
        ],
        bodyParagraph: loremBody4,
        testimonial: {
          quote:
            "His voice could never be silenced by bullets. — Comrade Gulzar Singh Pandher",
          attribution: "",
        },
        closingParagraph: loremClose4,
      },
    ],
  },
  {
    id: "founder-2",
    name: "Name of Pjerson",
    years: "1938–2020",
    role: "Co-Founder & Academic Director",
    chapters: [
      {
        title: "Beginnings",
        heroParagraph: loremMed,
        heroImage: "", // Optional hero image for this chapter
        photos: [
          { url: "", alt: "Early portrait", caption: "Early portrait, 1950" },
          { url: "", alt: "School days", caption: "School days, 1953" },
          { url: "", alt: "College entrance", caption: "College, 1958" },
        ],
        bodyParagraph: loremMed,
        closingParagraph: loremClose,
      },
      {
        title: "Academic Years",
        heroParagraph: loremMed,
        heroImage: "", // Optional hero image for this chapter
        photos: [
          { url: "", alt: "At university", caption: "University, 1962" },
          { url: "", alt: "Research work", caption: "Research, 1965" },
          { url: "", alt: "Graduation ceremony", caption: "Graduation, 1966" },
        ],
        bodyParagraph: loremMed,
        testimonial: {
          quote:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          attribution: "— Colleague, 1970",
        },
        closingParagraph: loremClose,
      },
      {
        title: "Teaching",
        heroParagraph: loremMed,
        heroImage: "", // Optional hero image for this chapter
        photos: [
          { url: "", alt: "In classroom", caption: "Classroom, 1972" },
          { url: "", alt: "Faculty meeting", caption: "Faculty, 1978" },
          { url: "", alt: "With students", caption: "Students, 1985" },
        ],
        bodyParagraph: loremMed,
        closingParagraph: loremClose,
      },
      {
        title: "Legacy",
        heroParagraph: loremMed,
        heroImage: "", // Optional hero image for this chapter
        photos: [
          { url: "", alt: "Scholarship founding", caption: "Founding, 1995" },
          { url: "", alt: "Recognition ceremony", caption: "Recognition, 2005" },
          { url: "", alt: "Final years", caption: "Final years, 2018" },
        ],
        bodyParagraph: loremMed,
        testimonial: {
          quote:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
          attribution: "— Student, 2021",
        },
        closingParagraph: loremClose,
      },
    ],
  },
];

function PhotoRow({ photos }: { photos: { url: string; alt: string; caption: string }[] }) {
  return (
    <div className="mt-8 mb-4">
      {/* Desktop: 43column grid */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <div key={i}>
            <div className="aspect-[4/3] bg-gray-100 border border-black/20 overflow-hidden">
              <ImageWithFallback
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p
              className="mt-2 text-xs text-gray-500 italic text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {photo.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: responsive single-column grid */}

      <div className="md:hidden grid grid-cols-1 gap-4 pb-3">
        {photos.map((photo, i) => (
          <div key={i} className="w-full">
            <div className="aspect-[4/3] bg-gray-100 border border-black/20 overflow-hidden">
              <ImageWithFallback
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <p
              className="mt-2 text-xs text-gray-500 italic text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {photo.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

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
        {attribution}
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
          const heroImage = chapter.heroImage || chapter.photos[0]?.url || "";
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

            {/* 3-Photo Row */}
            <div className="px-4 md:px-6 lg:px-12">
              <div className="container mx-auto max-w-5xl">
                <PhotoRow photos={chapter.photos} />
              </div>
            </div>

            {/* Body paragraph */}
            <div className="px-4 md:px-6 lg:px-12 pt-6 md:pt-8">
              <div className="container mx-auto max-w-5xl">
                <p
                  className="text-sm md:text-base text-gray-700 leading-relaxed"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {chapter.bodyParagraph}
                </p>
              </div>
            </div>

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

            {/* Closing paragraph */}
            <div className="px-4 md:px-6 lg:px-12 pt-4 pb-6 md:pb-8">
              <div className="container mx-auto max-w-5xl">
                <p
                  className="text-sm md:text-base text-gray-700 leading-relaxed"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {chapter.closingParagraph}
                </p>
              </div>
            </div>
            </motion.article>
          );
        })}
      </div>

      <div className="h-16 md:h-24" />
    </div>
  );
}
