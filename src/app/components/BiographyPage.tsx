import { motion } from "motion/react";
import { useParams, Navigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionDivider } from "./HistoricalDivider";

interface Photo {
  url: string;
  caption: string;
  year?: string;
}

interface Testimonial {
  quote: string;
  name: string;
  title?: string;
}

interface BiographyBlock {
  text: string;
  photos?: Photo[];
  testimonial?: Testimonial;
}

interface Biography {
  id: string;
  name: string;
  years: string;
  role: string;
  mainPhoto: string;
  earlyLife: BiographyBlock[];
  career: BiographyBlock[];
  legacy: BiographyBlock[];
}

// ─── Inline Photo Grid ────────────────────────────────────────────────────────
function PhotoGrid({ photos }: { photos: Photo[] }) {
  const count = photos.length;
  const gridClass =
    count === 1
      ? "grid-cols-1"
      : count === 2
      ? "grid-cols-2"
      : "grid-cols-3";

  return (
    <div className={`grid ${gridClass} gap-2 md:gap-3 mt-4 mb-2`}>
      {photos.map((photo, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.08 }}
          className="group"
        >
          <div
            className={`bg-gray-100 border border-black/10 overflow-hidden shadow-sm ${
              count === 1 ? "aspect-[16/7]" : "aspect-[3/4]"
            }`}
          >
            <ImageWithFallback
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p
            className="mt-1.5 text-xs text-gray-500 text-center leading-snug"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            {photo.caption}
            {photo.year && (
              <span className="ml-1.5 text-gray-400">· {photo.year}</span>
            )}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Testimonial Block ────────────────────────────────────────────────────────
function TestimonialBlock({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative my-6 pl-5 border-l-4 border-black/20 bg-gray-50 py-4 pr-4"
    >
      {/* open-quote decoration */}
      <span
        className="absolute -top-2 left-3 text-5xl text-black/10 leading-none select-none"
        aria-hidden="true"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        "
      </span>
      <p
        className="text-sm md:text-base text-gray-700 leading-relaxed italic relative z-10"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 2vw, 1.125rem)" }}
      >
        {testimonial.quote}
      </p>
      <footer className="mt-3 flex items-center gap-2">
        <div className="w-6 h-px bg-black/30" />
        <div>
          <span
            className="block text-xs font-semibold uppercase tracking-widest text-gray-800"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            {testimonial.name}
          </span>
          {testimonial.title && (
            <span
              className="block text-xs text-gray-500 mt-0.5"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {testimonial.title}
            </span>
          )}
        </div>
      </footer>
    </motion.blockquote>
  );
}

// ─── Biography Block (paragraph + optional photos + optional testimonial) ────
function Block({ block }: { block: BiographyBlock }) {
  return (
    <div className="mb-6">
      <p
        className="text-sm md:text-base text-gray-700 leading-relaxed"
        style={{ fontFamily: "'Work Sans', sans-serif" }}
      >
        {block.text}
      </p>
      {block.photos && block.photos.length > 0 && (
        <PhotoGrid photos={block.photos} />
      )}
      {block.testimonial && (
        <TestimonialBlock testimonial={block.testimonial} />
      )}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const biographies: Biography[] = [
  {
    id: "founder-1",
    name: "Comrade Gurmail Hunjan",
    years: "1951–1989",
    role: "Freedom Fighter & Communist Leader",
    mainPhoto: "",

    earlyLife: [
      {
        text: "Comrade Gurmail Singh Hunjan was born on 15 November 1951 in Pandher Kheri, Ludhiana, Punjab, India. Raised in a politically active family, his father, Comrade Chanan Singh Barola, was a respected freedom fighter who instilled in him the values of justice, equality, and commitment to the working class. His mother was Jaswant Kaur.",
        photos: [
          { url: "", caption: "Caption Here", year: "c. Year" },
        ],
      },
      {
        text: "His father joined India's freedom struggle, starting with the Indian National Congress and later became a communist after meeting other revolutionaries in prison. He often shared how Nehru's books — Glimpses of World History and The Discovery of India — shaped his views. During the partition in 1947, Comrade Barola and his friends risked their lives to help Muslim families reach Malerkotla safely, revealing the secular and humanitarian values that would later define Comrade Hunjan.",
        photos: [
        { url: "", caption: "Caption Here", year: "c. Year" },
        ],
      },
      {
        text: "Comrade Hunjan began his education in Maloud and attended Government College in Malerkotla before earning a Master's in Political Science at Arya College, Ludhiana. He excelled in sports, especially Kabaddi, which drew large crowds in local tournaments. His real passion, though, was public life and activism. He became a regional leader of the influential All India Students' Federation (AISF), and his involvement deepened in the student movement after the firing incident at the Moga Agitation in 1972.",
        photos: [
         { url: "", caption: "Caption Here", year: "c. Year" },
        ],
      },
    ],

    career: [
      {
        text: "After his studies, Comrade Hunjan briefly worked at a Cooperative Bank before committing fully to the Communist Party of India (CPI). He became Assistant Secretary of the Ludhiana district unit, served on the Punjab State Council, and actively grew the All India Youth Federation (AIYF) in rural Ludhiana by engaging youth in sports and social work. In the early 1980s, he travelled to Germany to enhance his political skills. Long before drug addiction became a major issue in Punjab, he warned that young people without positive activities could fall into harmful habits.",
        photos: [
          { url: "", caption: "Caption Here", year: "c. Year" },
        ],
      },
      {
        text: "He also served as the elected village head (Sarpanch) for over ten years. During his term, he secured grants to build a sports ground, established a library named after Saheed-e-Azam Bhagat Singh, upgraded the drainage system, created a common cremation ground for all families, and improved sanitation through public facilities. He obtained a grant for a local dispensary that was constructed after his death — each achievement leaving a lasting mark on the village's progress and well-being.",
        photos: [
          { url: "", caption: "Caption Here", year: "c. Year" },
        ],
      },
      {
        text: "Building strong partnerships was central to his work. Comrade Gulzar Singh Goria, from the same village, remembered working with him for about 22 years across Ludhiana, especially in Ahmedgarh, Maloud, and Dehlon. He brought loaders, labourers, and farm workers into strong unions, built local committees, resolved grievances with officials, and held educational camps on their rights. His honest leadership motivated many to support the Communist Party, as they trusted him.",
        photos: [
          { url: "", caption: "Caption Here", year: "c. Year" },
        ],
        testimonial: {
          quote:
            "With Comrade Hunjan's guidance, I became a leader in the Bharatiya Khet Mazdoor Union, which fights for rural workers' rights. His dedication sustained us during hard times. He always matched words with actions.",
          name: "Comrade Gulzar Singh Goria",
          title: "Fellow Comrade & Colleague of 22 Years",
        },
      },
      {
        text: "Comrade Gulzar Singh Pandher, ex-employee of Punjab Agriculture University, initially disagreed with Comrade Hunjan's ideas. However, Hunjan's magnetic personality greatly influenced him, and they became close comrades. After many discussions, Pandher came to share Hunjan's beliefs and joined the student organisation. Those who knew him recalled his sharp mind, friendly nature, and ability to inspire — many who initially disagreed were eventually won over through thoughtful debate.",
        photos: [
          { url: "", caption: "Caption Here", year: "c. Year" },
        ],
        testimonial: {
          quote:
            "Hunjan's magnetic personality greatly influenced me. After many discussions, I came to share his beliefs and joined the student organisation.",
          name: "Comrade Gulzar Singh Pandher",
          title: "Ex-employee, Punjab Agriculture University",
        },
      },
      {
        text: "In the 1980s, as Punjab faced terrorism and extremism, Comrade Hunjan openly opposed Khalistani militancy and helped safeguard secular community ties. With comrades, he organised meetings across Ludhiana, inviting progressive voices like Comrades Satpal Dang and Jagjit Singh Anand to defend peace. The progressive slogan, \"Na Hindu Raj na Khalistan, jug jug jive Hindustan,\" echoed their commitment. Despite grave dangers, he continued to visit villages to unite people against terrorism and for peace.",
        photos: [
          { url: "", caption: "Caption Here", year: "c. Year" },
        ],
      },
    ],

    legacy: [
      {
        text: "Tragically, his courage came at a high price. On the morning of 14 May 1989, Comrade Gurmail Singh Hunjan was killed in his village, Pandher Kheri, by Khalistani terrorists. His gunman, Comrade Joginder Singh, also fought bravely and lost his life. Despite many death threats and advice to move to a safer location, he never stepped away from public life or gave up his principles. He refused even to build a personal toilet — believing it would be seen as a misuse of public funds — a final demonstration of his uncompromising ethics.",
        photos: [
          { url: "", caption: "Caption Here", year: "c. Year" },
        ],
        testimonial: {
          quote:
            "Patriots had suffered greatly for India's independence. Preserving India's freedom at any cost remains a vital duty for all.",
          name: "Dr Arun Mitra",
          title: "Colleague & Progressive Voice",
        },
      },
      {
        text: "His death shocked the region. Thousands attended his funeral. At the ceremony his father, Comrade Chanan Singh Barola, spoke words that have stayed with all who heard them.",
        photos: [
          { url: "", caption: "Caption Here", year: "c. Year" },
        ],
        testimonial: {
          quote:
            "Gurmail was a hero — giver, devotee, and warrior — all three live forever. He was born of the people, lived for the people, and became a martyr for the people.",
          name: "Comrade Chanan Singh Barola",
          title: "Father of Comrade Gurmail Singh Hunjan",
        },
      },
      {
        text: "Every year on 14 May, people gather in Pandher Kheri to remember Comrades Gurmail Singh Hunjan and Joginder Singh. These events unite comrades, family, and younger generations for speeches, cultural performances, and discussions on current issues, keeping alive the push for justice and unity. His family now honours his legacy with educational scholarships for deserving students, believing peace and education are the true way forward.",
        photos: [
          { url: "", caption: "Caption Here", year: "c. Year" },
        ],
      },
      {
        text: "Today, decades after his death, Comrade Hunjan's legacy still matters. His fight was not only against terrorism, but also against exploitation, inequality, hatred, and injustice. Though his life ended early, his principles continue to inspire those working for a united and peaceful society. As his father once said, his voice could never be silenced by bullets.",
        photos: [
        ],
      },
    ],
  },

  {
    id: "founder-2",
    name: "Coming Soon",
    years: "1938–2020",
    role: "Co-Founder & Academic Director",
    mainPhoto: "",
    earlyLife: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        photos: [
          { url: "", caption: "Early portrait", year: "1960" },
        ],
      },
    ],
    career: [
      {
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        photos: [
          { url: "", caption: "At university", year: "1985" },
        ],
      },
    ],
    legacy: [
      {
        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
        photos: [
          { url: "", caption: "Teaching moment", year: "2005" },
        ],
      },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export function BiographyPage() {
  const { id } = useParams();
  const biography = biographies.find((bio) => bio.id === id);

  if (!biography) {
    return <Navigate to="/" replace />;
  }

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
            {biography.name}
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
            className="text-sm uppercase tracking-widest text-gray-500 mb-2"
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

      {/* Body */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-12">
        <div className="container mx-auto max-w-3xl">

          {/* Main hero photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 md:mb-16"
          >
            <div className="aspect-[16/9] md:aspect-[21/9] bg-gray-100 border-2 border-black/20 overflow-hidden shadow-xl">
              <ImageWithFallback
                src={biography.mainPhoto}
                alt={biography.name}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </motion.div>

          {/* Early Life */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 md:mb-16"
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Early <span className="italic">Life</span>
            </h2>
            {biography.earlyLife.map((block, idx) => (
              <Block key={idx} block={block} />
            ))}
          </motion.div>

          <SectionDivider />

          {/* Career & Achievements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 md:mb-16"
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Career & <span className="italic">Achievements</span>
            </h2>
            {biography.career.map((block, idx) => (
              <Block key={idx} block={block} />
            ))}
          </motion.div>

          <SectionDivider />

          {/* Legacy */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 md:mb-16"
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Legacy & <span className="italic">Impact</span>
            </h2>
            {biography.legacy.map((block, idx) => (
              <Block key={idx} block={block} />
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
