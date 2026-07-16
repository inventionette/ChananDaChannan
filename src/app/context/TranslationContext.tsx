import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pa';

interface TranslationContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'site.brand': 'Chanan Da Chaanan',
    'nav.biography': 'Biography',
    'nav.biographyOverview': 'Overview',
    'nav.founder1': 'Comrade Gurmail Hunjan',
    'nav.founder2': 'Founder 2 Biography',
    'nav.about': 'About',
    'nav.scholarship': 'Scholarship',
    'nav.apply': 'Apply',

    // Common
    'common.readMore': 'Read More',
    'common.readFullBio': 'Read Full Biography',
    'common.learnMore': 'Learn More',
    'common.apply': 'Apply Now',
    'common.applyScholarship': 'Apply for Scholarship',
    'common.contact': 'Contact',
    'common.scholars': 'Scholars',
    'common.ourScholars': 'Our Scholars',
    'common.earlyLife': 'Early Life',
    'common.career': 'Career & Achievements',
    'common.legacy': 'Legacy & Impact',

    // Home Page
    'home.hero.title': 'Chanan Da Chaanan',
    'home.quote': '"Education is the most powerful weapon which you can use to change the world"',
    'home.established': 'Est. 1995',
    'home.historicalOverview': 'Historical Overview',
    'home.keyMilestones': 'Key Milestones',
    'home.photographicArchives': 'Photographic Archives',
    'home.theFounders': 'Biography',
    'home.livingLegacy': 'The Living Legacy',
    'home.continueLegacy': 'Continue the Legacy',
    'home.exploreScholarships': 'Explore Scholarships',

    // Gallery Page
    'gallery.hero.title': 'Gallery',
    'gallery.hero.subtitle': 'A visual record of the scholarship, its founders, and the lives it has shaped.',
    'gallery.photos.title': 'Photographs',
    'gallery.videos.title': 'Videos',
    'gallery.videoUnavailable': 'Video unavailable',
    'gallery.youtube': 'YouTube',

    // About Page
    'about.title': 'About Us',
    'about.subtitle': 'Chanan Da Chaanan - Building futures through education',
    'about.mission': 'Our Mission',
    'about.vision': 'Our Vision',
    'about.values': 'Our Values',
    'about.whatWeDo': 'What We Do',

    // Scholarship Page
    'scholarship.hero.title': 'Scholarship Program',
    'scholarship.title': 'Scholarship Program',
    'scholarship.subtitle': 'Investing in exceptional students who will shape tomorrow',
    'scholarship.aboutProgram': 'About Program',
    'scholarship.eligibility': 'Eligibility & Requirements',
    'scholarship.applicationProcess': 'Application Process',
    'scholarship.supportMission': 'Support Our Mission',
    'scholarship.yourImpact': 'Your Impact Matters',
    'scholarship.interestedSponsoring': 'Interested in Sponsoring? Find Out More',
    'scholarship.startApplication': 'Start Your Application',
    'scholarship.beginApplication': 'Begin Your Application',

    // Application Page
    'apply.title': 'Scholarship Application',
    'apply.subtitle': 'Take the first step toward your educational journey',
  
    // Biography Page - Hero Section
    'bio.hero.title': 'Comrade Gurmail Hunjan',
    'bio.hero.role': 'Remembering Comrade Gurmail Hunjan who fought relentlessly for the defence of integrity and sovereignty of the country',
    'bio.hero.years': '1951–1989',

    // Biography - Chapter Titles
    'bio.chapter.earlyLife': 'Early Life',
    'bio.chapter.activism': 'Activism',
    'bio.chapter.leadership': 'Leadership',
    'bio.chapter.assassination': 'Sacrifice and Martyrdom',

    // Biography - Early Life Content
    'bio.earlyLife.paragraph1': 'Comrade Gurmail Singh Hunjan was born on 15 November 1951 in Pandher Kheri, Ludhiana, Punjab, India. Raised in a politically active family, his father, Comrade Chanan Singh Barola, was a respected freedom fighter who instilled in him the values of justice, equality, and commitment to working class. His mother was Jaswant Kaur.',
    'bio.earlyLife.paragraph2': 'His father joined India\'s freedom struggle, starting with the Indian National Congress and later became a communist after meeting other revolutionaries in the prison. He often shared how Nehru\'s books, Glimpses of World History and The Discovery of India, shaped his views. During the partition in 1947, Comrade Barola and his friends risked their lives to help Muslim families reach Malerkotla safely. These actions revealed the secular and humanitarian values that later defined Comrade Hunjan.',
    'bio.earlyLife.paragraph3': 'Comrade Hunjan began his education in Maloud and attended Government College in Malerkotla before earning a Master\'s in Political Science at Arya College, Ludhiana. He excelled in sports, especially Kabaddi, which drew large crowds in local tournaments. His real passion, though, was in social and political activism. He soon became a regional leader of the influential All India Students\' Federation (AISF). His involvement deepened in the student movement after the firing incident at the Moga Agitation in 1972 through close relationships with Comrade Kartar Singh Buwani and Comrade Bant Singh Brar.',
    'bio.earlyLife.paragraph4': 'After his studies, Comrade Hunjan briefly worked at a Cooperative Bank before committing fully to the Communist Party of India (CPI). He became Assistant Secretary of the Ludhiana district unit, served on the Punjab State Council, and actively grew the All India Youth Federation (AIYF) in rural Ludhiana by engaging youth in sports and social work. In the early 1980s, he went to Germany to enhance his political skills. Long before drug addiction became a major issue in Punjab, he warned that young people without positive activities could fall into harmful habits.',

    // Biography - Activism Content
    'bio.activism.paragraph1': 'Those who knew him recalled his sharp mind, friendly nature, and ability to inspire others. Many young people who initially disagreed with him were eventually persuaded through thoughtful debates. His speeches, rooted in Marxist ideas and everyday struggles, influenced politically aware youth in rural Punjab.',
    'bio.activism.testimonial1': 'With Comrade Hunjan\'s guidance, I became a leader in the Bharatiya Khet Mazdoor Union, which fights for rural workers\' rights. His dedication sustained us during hard times. He always matched his words with actions.',
    'bio.activism.testimonial1.attribution': 'Comrade Gulzar Singh Goria',
    'bio.activism.paragraph2': 'Comrade Gulzar Singh Pandher, ex-employee of Punjab Agriculture University, initially disagreed with Comrade Hunjan\'s ideas. However, Hunjan\'s magnetic personality greatly influenced him, and they became close comrades. After many discussions, Pandher came to share Hunjan\'s beliefs and joined the student organisation.',

    // Biography - Leadership Content
    'bio.leadership.paragraph1': 'Comrade Hunjan also served as the elected village head (Sarpanch) for over ten years. During his term, he achieved several tangible improvements: he secured grants to build a sports ground and provide equipment, increasing youth participation in sports; established a library named after Saheed-e-Azam Bhagat Singh, enhancing educational resources for villagers; upgraded the drainage system, which reduced flooding; created a common cremation ground for all families; and improved sanitation by building public toilets. He also obtained a grant for a local dispensary, improving villagers\' access to healthcare, which was constructed after his death. These achievements made a significant impact on the village\'s progress and overall well-being.',
    'bio.leadership.paragraph2': 'He focused his politics entirely on organising workers, farmers, and rural labourers across Ludhiana, especially in Ahmedgarh, Maloud, and Dehlon. He brought loaders (palledars), labourers, and farm workers into strong unions, built local committees, resolved grievances with officials, and held educational camps on their rights. His honest leadership motivated many to support the Communist Party, as they trusted him.',
    'bio.leadership.paragraph3': 'Comrade Hunjan was deeply influenced by Marxism and believed in scientific, progressive thinking. He admired Saheed-e-Azam Bhagat Singh and his ideology. He said India had enough resources for self-reliance, but became dependent on foreign powers. He often criticised capitalism and imperialism, arguing that they increased inequality and harmed citizens in developing countries. He believed foreign interests fuelled internal conflicts to weaken countries seeking independent development.',
    
    // Biography - 1980s Punjab (Subsection)
    'bio.subsection.1980s.title': '1980s\' Punjab',
    'bio.subsection.1980s.paragraph1': 'In the 1980s, as Punjab faced terrorism and extremism, Comrade Hunjan openly opposed Khalistani militancy and helped safeguard secular community ties. With comrades, he organised meetings across Ludhiana, inviting progressive voices like Comrades Satpal Dang and Jagjit Singh Anand to defend peace. The secular and progressive slogan, "Na Hindu Raj na Khalistan, jug jug jive Hindustan," echoed their commitment.',
    'bio.subsection.1980s.paragraph2': 'Despite the dangers faced by political activists at the time, Comrade Hunjan continued to visit villages to unite people against terrorism and for peace. Dr Arun Mitra remembered him stressing that patriots had suffered greatly for India\'s independence, and that preserving India\'s freedom at any cost remained a vital duty for all.',
    
    // Biography - Assassination Content
    'bio.assassination.paragraph1': 'Tragically, his courage came at a high price. On the morning of 14 May 1989, Comrade Gurmail Singh Hunjan was killed in his village, Pandher Kheri, by Khalistani terrorists. His gunman, Comrade Joginder Singh, also fought bravely and lost his life. Just a few months earlier, after many death threats, he was given security protection. Friends and comrades had even started raising money to buy him a vehicle for his safety. Despite the risks and advice to move to a safer location, he never stepped away from public life or gave up his principles.',
    'bio.assassination.paragraph2': 'He was killed early in the morning on the village outskirts while going to relieve himself, a routine practice in Punjab. Despite threats, he refused to build a personal toilet, believing it would be seen as a misuse of public funds, demonstrating his firm ethics and strong moral stand against corruption. He truly lived by the saying, "Caesar\'s wife should not only be honest, but must also appear to be".',
    'bio.assassination.testimonial': '"Gurmail was a hero — giver, devotee, and warrior — all three live forever. He was born of the people, lived for the people, and became a martyr for the people."',
    'bio.assassination.testimonial.attribution': 'Comrade Chanan Singh Barola, father of Comrade Gurmail Singh Hunjan',

    // Biography - Legacy Content
    'bio.legacy.title': 'Legacy',
    'bio.legacy.paragraph1': 'To honour his legacy, every year on 14 May, people gather in Pandher Kheri to remember Comrades Gurmail Singh Hunjan and Joginder Singh. These events unite comrades, family, and younger generations for speeches, cultural performances, and discussions on current issues, keeping alive the push for justice and unity.',
    'bio.legacy.paragraph2': 'Colleagues saw Comrade Hunjan as a rare leader who stood by his principles. He insisted that political ideals must be proven through action. His tireless, honest work built a powerful grassroots movement, and his loss was deeply felt by those he inspired.',
    'bio.legacy.paragraph3': 'His death and the violence in Punjab deeply affected his family. His wife raised their two sons through her determination and support of family and his friends. They went on to succeed as engineers abroad. The family now honours Comrade Hunjan\'s legacy with educational scholarships for deserving students, believing peace and education are the true way forward.',
    'bio.legacy.paragraph4': 'Today, decades after his death, Comrade Hunjan\'s legacy still matters. Punjab still feels the aftereffects of terrorism and extremism, and new forms of communal politics and social division threaten the country\'s democratic and secular values. His life reminds us that courage and integrity can last through hard times. Ordinary people can make a difference by building inclusive communities, standing up against injustice and by keeping Hunjan\'s spirit alive.',
    'bio.legacy.paragraph5': 'His fight was not only against terrorism, but also against exploitation, inequality, hatred, and injustice. Though his life ended early, his principles inspire those working for a united and peaceful society. Let us honour his memory by coming together for justice and unity, and standing up against all forces that try to divide us. Each of us has a role to play.',
    'bio.legacy.paragraph6': 'Comrade Gurmail Singh Hunjan was a leader for the people. He lived, worked, and gave his life for the unity, integrity, and humanity of Punjab and India. As his father once said, his voice could never be silenced by bullets.',
  },
  pa: {
    // Navigation
    'site.brand': 'ਚੰਨਣ ਦਾ ਚਾਨਣ',
    'nav.biography': 'ਜੀਵਨੀ',
    'nav.biographyOverview': 'ਸੰਖੇਪ',
    'nav.founder1': 'ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਹੂੰਝਣ',
    'nav.founder2': 'ਸੰਸਥਾਪਕ 2 ਜੀਵਨੀ',
    'nav.about': 'ਸਾਡੇ ਬਾਰੇ',
    'nav.scholarship': 'ਵਜੀਫਾ',
    'nav.apply': 'ਬਿਨੇ ਪੱਤਰ',

    // Common
    'common.readMore': 'ਹੋਰ ਪੜ੍ਹੋ',
    'common.readFullBio': 'ਪੂਰੀ ਜੀਵਨੀ ਪੜ੍ਹੋ',
    'common.learnMore': 'ਹੋਰ ਜਾਣੋ',
    'common.apply': 'ਹੁਣੇ ਅਪਲਾਈ ਕਰੋ',
    'common.applyScholarship': 'ਸਕਾਲਰਸ਼ਿਪ ਲਈ ਅਪਲਾਈ ਕਰੋ',
    'common.contact': 'ਸੰਪਰਕ',
    'common.scholars': 'ਵਿਦਿਆਰਥੀ',
    'common.ourScholars': 'ਸਾਡੇ ਵਿਦਿਆਰਥੀ',
    'common.earlyLife': 'ਸ਼ੁਰੂਆਤੀ ਜੀਵਨ',
    'common.career': 'ਕਰੀਅਰ ਅਤੇ ਪ੍ਰਾਪਤੀਆਂ',
    'common.legacy': 'ਵਿਰਾਸਤ ਅਤੇ ਪ੍ਰਭਾਵ',

    // Home Page
    'home.hero.title': 'ਚੰਨਣ ਦਾ ਚਾਨਣ',
    'home.quote': '"ਸਿੱਖਿਆ ਸਭ ਤੋਂ ਸ਼ਕਤੀਸ਼ਾਲੀ ਹਥਿਆਰ ਹੈ ਜਿਸਨੂੰ ਤੁਸੀਂ ਦੁਨੀਆ ਬਦਲਣ ਲਈ ਵਰਤ ਸਕਦੇ ਹੋ"',
    'home.established': 'ਸਥਾਪਿਤ 1995',
    'home.historicalOverview': 'ਇਤਿਹਾਸਕ ਸੰਖੇਪ',
    'home.keyMilestones': 'ਮੁੱਖ ਮੀਲਪੱਥਰ',
    'home.photographicArchives': 'ਫੋਟੋ ਆਰਕਾਈਵਜ਼',
    'home.theFounders': 'ਜੀਵਨੀ',
    'home.livingLegacy': 'ਜੀਵੰਤ ਵਿਰਾਸਤ',
    'home.continueLegacy': 'ਵਿਰਾਸਤ ਜਾਰੀ ਰੱਖੋ',
    'home.exploreScholarships': 'ਵਜੀਫੇ ਦੀ ਪੜਚੋਲ ਕਰੋ',

    // Gallery Page
    'gallery.hero.title': 'ਯਾਦਾਂ',
    'gallery.hero.subtitle': 'ਇਸ ਸਕਾਲਰਸ਼ਿਪ, ਇਸਦੇ ਸਥਾਪਕਾਂ ਅਤੇ ਇਸ ਦੇ ਰੂਪ ਵਿੱਚ ਆਏ ਜੀਵਨ ਦੀ ਦਿੱਖੀ ਰਿਕਾਰਡ।',
    'gallery.photos.title': 'ਫੋਟੋ',
    'gallery.videos.title': 'ਵਿਡੀਓ',
    'gallery.videoUnavailable': 'ਵਿਡੀਓ ਉਪਲਬਧ ਨਹੀਂ',
    'gallery.youtube': 'ਯੂਟੀਯੂਬ',

    // About Page
    'about.title': 'ਸਾਡੇ ਬਾਰੇ',
    'about.subtitle': 'ਚੰਨਣ ਦਾ ਚਾਨਣ - ਸਿੱਖਿਆ ਰਾਹੀਂ ਭਵਿੱਖ ਬਣਾਉਣਾ',
    'about.mission': 'ਸਾਡਾ ਮਿਸ਼ਨ',
    'about.vision': 'ਸਾਡੀ ਦ੍ਰਿਸ਼ਟੀ',
    'about.values': 'ਸਾਡੀਆਂ ਕਦਰਾਂ',
    'about.whatWeDo': 'ਅਸੀਂ ਕੀ ਕਰਦੇ ਹਾਂ',

    // Scholarship Page
    'scholarship.hero.title': 'ਵਜੀਫਾ ਪ੍ਰੋਗਰਾਮ',
    'scholarship.title': 'ਵਜੀਫਾ ਪ੍ਰੋਗਰਾਮ',
    'scholarship.subtitle': 'ਉੱਤਮ ਵਿਦਿਆਰਥੀਆਂ ਵਿੱਚ ਨਿਵੇਸ਼ ਜੋ ਕੱਲ੍ਹ ਨੂੰ ਆਕਾਰ ਦੇਣਗੇ',
    'scholarship.aboutProgram': 'ਵਜੀਫਾ ਬਾਰੇ ਜਾਣਕਾਰੀ',
    'scholarship.eligibility': 'ਯੋਗਤਾ ਅਤੇ ਲੋੜਾਂ',
    'scholarship.applicationProcess': 'ਅਰਜ਼ੀ ਪ੍ਰਕਿਰਿਆ',
    'scholarship.supportMission': 'ਸਾਡੇ ਮਿਸ਼ਨ ਦਾ ਸਮਰਥਨ ਕਰੋ',
    'scholarship.yourImpact': 'ਤੁਹਾਡਾ ਪ੍ਰਭਾਵ ਮਾਇਨੇ ਰੱਖਦਾ ਹੈ',
    'scholarship.interestedSponsoring': 'ਸਪਾਂਸਰ ਕਰਨ ਵਿੱਚ ਦਿਲਚਸਪੀ? ਹੋਰ ਜਾਣੋ',
    'scholarship.startApplication': 'ਆਪਣੀ ਅਰਜ਼ੀ ਸ਼ੁਰੂ ਕਰੋ',
    'scholarship.beginApplication': 'ਆਪਣੀ ਅਰਜ਼ੀ ਸ਼ੁਰੂ ਕਰੋ',

    // Application Page
    'apply.title': 'ਸਕਾਲਰਸ਼ਿਪ ਅਰਜ਼ੀ',
    'apply.subtitle': 'ਆਪਣੀ ਵਿਦਿਅਕ ਯਾਤਰਾ ਵੱਲ ਪਹਿਲਾ ਕਦਮ ਚੁੱਕੋ',

    // Biography Page - Hero Section
    'bio.hero.title': 'ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਹੂੰਝਣ',
    'bio.hero.role': 'ਦੇਸ਼ ਦੀ ਅਖੰਡਤਾ ਅਤੇ ਪ੍ਰਭੂਸੱਤਾ ਦੀ ਰੱਖਿਆ ਲਈ ਅਣਥੱਕ ਲੜਾਈ ਲੜਨ ਵਾਲੇ ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਹੂੰਝਣ ਨੂੰ ਯਾਦ ਕਰਦੇ ਹੋਏ',
    'bio.hero.years': '1951–1989',

    // Biography - Chapter Titles
    'bio.chapter.earlyLife': 'ਮੁੱਢਲਾ ਜੀਵਨ',
    'bio.chapter.activism': 'ਸਰਗਰਮੀਆਂ',
    'bio.chapter.leadership': 'ਲੋਕਾਂ ਦੀ ਅਗਵਾਹੀ',
    'bio.chapter.assassination': 'ਕੁਰਬਾਨੀ ਤੇ ਸ਼ਹਾਦਤ',

    // Biography - Early Life Content
    'bio.earlyLife.paragraph1': 'ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਸਿੰਘ ਹੂੰਝਣ ਦਾ ਜਨਮ 15 ਨਵੰਬਰ 1951 ਨੂੰ ਪੰਧੇਰ ਖੇੜੀ, ਲੁਧਿਆਣਾ, ਪੰਜਾਬ, ਭਾਰਤ ਵਿੱਚ ਹੋਇਆ । ਰਾਜਨੀਤਿਕ ਤੌਰ ਤੇ ਸਰਗਰਮ ਪਰਿਵਾਰ ਵਿੱਚ ਪਲੇ-ਬੜੇ, ਉਨ੍ਹਾਂ ਦੇ ਪਿਤਾ ਕਾਮਰੇਡ ਚੰਨਣ ਸਿੰਘ ਬਰੋਲਾ ਇਕ ਮਾਣਯੋਗ ਆਜ਼ਾਦੀ ਘੁਲਾਟੀਏ ਸਨ, ਜਿਨ੍ਹਾਂ ਤੋਂ ਉਨ੍ਹਾਂ ਨੂੰ ਇਨਸਾਫ, ਬਰਾਬਰੀ ਅਤੇ ਮਜ਼ਦੂਰ ਵਰਗ ਪ੍ਰਤੀ ਵਚਨਬੱਧਤਾ ਦੀ ਗੁੜ੍ਹਤੀ ਮਿਲੀ । ਉਨ੍ਹਾਂ ਦੀ ਮਾਤਾ ਦਾ ਨਾਮ ਜਸਵੰਤ ਕੌਰ ਸੀ ।',
    'bio.earlyLife.paragraph2': 'ਉਨ੍ਹਾਂ ਦੇ ਪਿਤਾ ਨੇ ਭਾਰਤ ਦੀ ਆਜ਼ਾਦੀ ਦੀ ਲੜਾਈ ਵਿੱਚ ਹਿੱਸਾ ਲਿਆ---ਸ਼ੁਰੂਆਤ ਭਾਰਤੀ ਰਾਸ਼ਟਰੀ ਕਾਂਗਰਸ ਨਾਲ ਕੀਤੀ ਅਤੇ ਜੇਲ੍ਹ ਵਿੱਚ ਹੋਰ ਇਨਕਲਾਬੀਆਂ ਨਾਲ ਮੁਲਾਕਾਤ ਤੋਂ ਬਾਅਦ ਕਮਿਊਨਿਸਟ ਬਣ ਗਏ । ਉਹ ਅਕਸਰ ਸਾਂਝਾ ਕਰਦੇ ਸਨ ਕਿ ਨੇਹਰੂ ਦੀਆਂ ਕਿਤਾਬਾਂ, Glimpses of World History ਅਤੇ The Discovery of India, ਨੇ ਉਨ੍ਹਾਂ ਦੇ ਵਿਚਾਰ ਘੜੇ । 1947 ਦੀ ਵੰਡ ਦੌਰਾਨ, ਕਾਮਰੇਡ ਬਰੋਲਾ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਸਾਥੀਆਂ ਨੇ ਆਪਣੀਆਂ ਜਾਨਾਂ ਖ਼ਤਰੇ ਵਿੱਚ ਪਾ ਕੇ ਮੁਸਲਮਾਨ ਪਰਿਵਾਰਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਮਲੇਰਕੋਟਲਾ ਪਹੁੰਚਾਇਆ । ਇਹ ਕਦਮ ਉਨ੍ਹਾਂ ਦੀ ਧਰਮਨਿਰਪੱਖਤਾ ਅਤੇ ਮਨੁੱਖਤਾਵਾਦੀ ਸੋਚ ਨੂੰ ਦਰਸਾਉਂਦੇ ਸਨ ਜਿਨ੍ਹਾਂ ਨੇ ਬਾਅਦ ਵਿੱਚ ਕਾਮਰੇਡ ਹੂੰਝਣ ਦੀ ਹਸਤੀ ਨੂੰ ਪਰਭਾਸ਼ਿਤ ਕੀਤਾ ।',
    'bio.earlyLife.paragraph3': 'ਕਾਮਰੇਡ ਹੂੰਝਣ ਨੇ ਆਪਣੀ ਪੜ੍ਹਾਈ ਮਲੌਦ ਤੋਂ ਸ਼ੁਰੂ ਕੀਤੀ ਅਤੇ ਮਲੇਰਕੋਟਲਾ ਦੇ ਸਰਕਾਰੀ ਕਾਲਜ ਵਿੱਚ ਪੜ੍ਹੇ । ਇਸ ਤੋਂ ਬਾਅਦ ਲੁਧਿਆਣਾ ਦੇ ਆਰਿਆ ਕਾਲਜ ਤੋਂ ਰਾਜਨੀਤਿਕ ਵਿਗਿਆਨ ਵਿੱਚ ਮਾਸਟਰ ਡਿਗਰੀ ਪ੍ਰਾਪਤ ਕੀਤੀ । ਉਹ ਖੇਡਾਂ ਵਿੱਚ ਖ਼ਾਸ ਤੌਰ ਤੇ ਕਬੱਡੀ ਵਿੱਚ ਚਮਕੇ, ਜਿਨ੍ਹਾਂ ਕਰਕੇ ਸਥਾਨਕ ਟੂਰਨਾਮੈਂਟਾਂ ਵਿੱਚ ਵੱਡੀ ਭੀੜ ਜੁੱਟਦੀ ਸੀ । ਹਾਲਾਂਕਿ, ਉਨ੍ਹਾਂ ਦਾ ਅਸਲ ਸ਼ੌਂਕ ਸਮਾਜਿਕ ਅਤੇ ਰਾਜਨੀਤਿਕ ਸਰਗਰਮੀਆਂ ਵਿੱਚ ਸੀ । ਜਲਦੀ ਹੀ ਉਹ ਪ੍ਰਭਾਵਸ਼ਾਲੀ "ਆਲ ਇੰਡੀਆ ਸਟੂਡੈਂਟਸ ਫੈਡਰੇਸ਼ਨ" (AISF) ਦੇ ਖੇਤਰੀ ਨੇਤਾ ਬਣ ਗਏ । 1972 ਵਿੱਚ ਮੋਗਾ ਅੰਦੋਲਨ ਦੌਰਾਨ ਗੋਲੀਕਾਂਡ ਤੋਂ ਬਾਅਦ, ਕਾਮਰੇਡ ਕਰਤਾਰ ਸਿੰਘ ਬੁਆਣੀ ਅਤੇ ਕਾਮਰੇਡ ਬੰਤ ਸਿੰਘ ਬਰਾੜ ਨਾਲ ਨੇੜਲੀਆਂ ਸਾਂਝਾਂ ਰਾਹੀਂ ਵਿਦਿਆਰਥੀ ਅੰਦੋਲਨ ਵਿੱਚ ਉਨ੍ਹਾਂ ਦੀ ਭਾਗੀਦਾਰੀ ਹੋਰ ਡੂੰਘੀ ਹੋ ਗਈ ।',
    'bio.earlyLife.paragraph4': 'ਪੜ੍ਹਾਈ ਤੋਂ ਬਾਅਦ, ਕਾਮਰੇਡ ਹੂੰਝਣ ਨੇ ਕੁੱਝ ਸਮਾਂ ਕੋਆਪਰੇਟਿਵ ਬੈਂਕ ਵਿੱਚ ਕੰਮ ਕੀਤਾ, ਫਿਰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਭਾਰਤੀ ਕਮਿਊਨਿਸਟ ਪਾਰਟੀ (CPI) ਨਾਲ ਜੁੜ ਗਏ । ਉਹ ਲੁਧਿਆਣਾ ਜ਼ਿਲ੍ਹਾ ਇਕਾਈ ਦੇ ਅਸਿਸਟੈਂਟ ਸਕੱਤਰ ਬਣੇ, ਪੰਜਾਬ ਸੂਬਾ ਕੌਂਸਲ ਤੇ ਸੇਵਾ ਨਿਭਾਈ, ਅਤੇ ਲੁਧਿਆਣੇ ਦੇ ਪਿੰਡਾਂ ਵਿੱਚ ਨੌਜਵਾਨਾਂ ਨੂੰ ਖੇਡਾਂ ਅਤੇ ਸਮਾਜਿਕ ਕੰਮਾਂ ਨਾਲ ਜੋੜ ਕੇ ਆਲ ਇੰਡੀਆ ਯੂਥ ਫੈਡਰੇਸ਼ਨ (AIYF) ਨੂੰ ਸਰਗਰਮ ਤਰੀਕੇ ਨਾਲ ਵਧਾਇਆ । 1980 ਦੇ ਸ਼ੁਰੂਆਤੀ ਦਹਾਕੇ ਵਿੱਚ, ਉਹ ਆਪਣੀਆਂ ਰਾਜਨੀਤਿਕ ਹੁਨਰਾਂ ਨੂੰ ਨਿਖਾਰਨ ਲਈ ਜਰਮਨੀ ਗਏ । ਪੰਜਾਬ ਵਿੱਚ ਨਸ਼ੇ ਦੀ ਲਤ ਵੱਡੀ ਸਮੱਸਿਆ ਬਣਨ ਤੋਂ ਕਾਫ਼ੀ ਪਹਿਲਾਂ ਹੀ, ਉਨ੍ਹਾਂ ਨੇ ਚੇਤਾਵਨੀ ਦਿੱਤੀ ਸੀ ਕਿ ਜੇ ਨੌਜਵਾਨਾਂ ਕੋਲ ਸਕਾਰਾਤਮਕ ਗਤੀਵਿਧੀਆਂ ਨਾ ਹੋਣ ਤਾਂ ਉਹ ਘਾਤਕ ਆਦਤਾਂ ਵੱਲ ਵਧ ਸਕਦੇ ਹਨ ।',

    // Biography - Activism Content
    'bio.activism.paragraph1': 'ਜਿਨ੍ਹਾਂ ਲੋਕਾਂ ਨੇ ਉਸਨੂੰ ਜਾਣਿਆ, ਉਹ ਉਸਦੀ ਤੇਜ਼ ਦਿਮਾਗ਼ੀ ਸਮਝ, ਮਿੱਤਰਤਾਪੂਰਨ ਸੁਭਾਅ ਅਤੇ ਹੋਰਨਾਂ ਨੂੰ ਪ੍ਰੇਰਿਤ ਕਰਨ ਦੀ ਸਮਰੱਥਾ ਨੂੰ ਯਾਦ ਕਰਦੇ ਹਨ । ਕਈ ਨੌਜਵਾਨ, ਜੋ ਸ਼ੁਰੂ ਵਿੱਚ ਉਸ ਨਾਲ ਅਸਹਿਮਤ ਸਨ, ਸੋਚ-ਵਿਚਾਰ ਵਾਲੀਆਂ ਬਹਿਸਾਂ ਰਾਹੀਂ ਆਖਿਰਕਾਰ ਉਸਦੇ ਕਾਇਲ ਹੋ ਗਏ । ਉਸਦੇ ਭਾਸ਼ਣ, ਜੋ ਮਾਰਕਸਵਾਦੀ ਵਿਚਾਰਾਂ ਅਤੇ ਰੋਜ਼ਮਰਾ ਸੰਘਰਸ਼ਾਂ ਨਾਲ ਜੁੜੇ ਸਨ, ਪਿੰਡਾਂ ਦੇ ਰਾਜਨੀਤਿਕ ਸੁਚੇਤ ਨੌਜਵਾਨਾਂ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਦੇ ਸਨ ।',
    'bio.activism.testimonial1': 'ਕਾਮਰੇਡ ਹੂੰਝਣ ਦੀ ਰਹਿਨੁਮਾਈ ਨਾਲ, ਮੈਂ ਭਾਰਤੀ ਖੇਤ ਮਜ਼ਦੂਰ ਯੂਨੀਅਨ ਵਿੱਚ ਨੇਤਾ ਬਣਿਆ, ਜੋ ਪਿੰਡਾਂ ਦੇ ਮਜ਼ਦੂਰਾਂ ਦੇ ਹੱਕਾਂ ਲਈ ਲੜਦੀ ਹੈ । ਉਸਦੀ ਨਿਸ਼ਠਾ ਨੇ ਔਖੇ ਸਮਿਆਂ ਵਿੱਚ ਸਾਨੂੰ ਸੰਭਾਲਿਆ । ਉਹ ਹਮੇਸ਼ਾ ਜੋ ਕਹਿੰਦਾ ਸੀ ਉਹੀ ਕਰਦਾ ਤੇ ਉਸ ਦੀ ਕਿਹਣੀ ਤੇ ਕਰਨੀ ਵਿਚ ਫਰਕ ਨਹੀ ਸੀ ।',
    'bio.activism.testimonial1.attribution': 'ਕਾਮਰੇਡ ਗੁਲਜ਼ਾਰ ਸਿੰਘ ਗੋਰੀਆ',
    'bio.activism.paragraph2': 'ਪੰਜਾਬ ਐਗਰੀਕਲਚਰ ਯੂਨੀਵਰਸਿਟੀ ਦੇ ਸਾਬਕਾ ਕਰਮਚਾਰੀ ਕਾਮਰੇਡ ਗੁਲਜ਼ਾਰ ਸਿੰਘ ਪੰਧੇਰ ਸ਼ੁਰੂ ਵਿੱਚ ਕਾਮਰੇਡ ਹੂੰਝਣ ਦੇ ਵਿਚਾਰਾਂ ਨਾਲ ਅਸਹਿਮਤ ਸਨ । ਪਰੰਤੂ ਹੂੰਝਣ ਦੀ ਕਰਿਸ਼ਮਾਈ ਸ਼ਖਸੀਅਤ ਨੇ ਉਨ੍ਹਾਂ "ਤੇ ਡੂੰਘਾ ਅਸਰ ਕੀਤਾ ਅਤੇ ਉਹ ਨੇੜਲੇ ਸਾਥੀ ਬਣ ਗਏ । ਕਈ ਚਰਚਾਵਾਂ ਤੋਂ ਬਾਅਦ, ਪੰਧੇਰ ਹੂੰਝਣ ਦੇ ਵਿਚਾਰਾਂ ਨਾਲ ਸਾਂਝ ਪਾਉਣ ਲੱਗੇ ਅਤੇ ਵਿਦਿਆਰਥੀ ਸੰਗਠਨ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋ ਗਏ ।',

    // Biography - Leadership Content
    'bio.leadership.paragraph1': 'ਕਾਮਰੇਡ ਹੂੰਝਣ ਨੇ ਦਸ ਸਾਲਾਂ ਤੋਂ ਵੱਧ ਚੁਣੇ ਹੋਏ ਪਿੰਡ ਦੇ ਮੁਖੀ (ਸਰਪੰਚ) ਵਜੋਂ ਵੀ ਸੇਵਾ ਨਿਭਾਈ । ਆਪਣੇ ਕਾਰਜਕਾਲ ਦੌਰਾਨ ਉਨ੍ਹਾਂ ਨੇ ਪਿੰਡ ਦੇ ਵਿਕਾਸ ਲਈ ਕਈ ਠੋਸ ਕੰਮ ਕਰਵਾਏ । ਉਨ੍ਹਾਂ ਨੇ ਖੇਡ ਮੈਦਾਨ ਬਣਾਉਣ ਅਤੇ ਖੇਡਾਂ ਦਾ ਸਾਮਾਨ ਮੁਹੱਈਆ ਕਰਵਾਉਣ ਲਈ ਗ੍ਰਾਂਟ ਹਾਸਲ ਕੀਤੀ, ਜਿਸ ਨਾਲ ਨੌਜਵਾਨਾਂ ਦੀਆਂ ਖੇਡਾਂ ਵਿੱਚ ਭਾਗੀਦਾਰੀ ਵਧੀ । ਉਨ੍ਹਾਂ ਨੇ ਸ਼ਹੀਦ-ਏ-ਆਜ਼ਮ ਭਗਤ ਸਿੰਘ ਦੇ ਨਾਮ "ਤੇ ਇੱਕ ਲਾਇਬ੍ਰੇਰੀ ਸਥਾਪਿਤ ਕਰਵਾਈ, ਜਿਸ ਨਾਲ ਪਿੰਡ ਵਾਸੀਆਂ ਲਈ ਸਿੱਖਿਆ ਦੇ ਸਰੋਤਾਂ ਵਿੱਚ ਵਾਧਾ ਹੋਇਆ । ਉਨ੍ਹਾਂ ਨੇ ਪਿੰਡ ਦੀ ਨਿਕਾਸੀ ਪ੍ਰਣਾਲੀ ਵਿੱਚ ਸੁਧਾਰ ਕਰਵਾਇਆ, ਜਿਸ ਨਾਲ ਪਾਣੀ ਖੜ੍ਹਨ ਅਤੇ ਹੜ੍ਹਾਂ ਦੀ ਸਮੱਸਿਆ ਘੱਟ ਹੋਈ । ਉਨ੍ਹਾਂ ਨੇ ਸਾਰੇ ਪਰਿਵਾਰਾਂ ਲਈ ਇੱਕ ਸਾਂਝਾ ਸ਼ਮਸ਼ਾਨ ਘਾਟ ਬਣਵਾਇਆ ਅਤੇ ਜਨਤਕ ਪਖਾਨਿਆਂ ਦਾ ਨਿਰਮਾਣ ਕਰਵਾ ਕੇ ਸਫ਼ਾਈ ਪ੍ਰਬੰਧ ਨੂੰ ਬਿਹਤਰ ਬਣਾਇਆ । ਇਸ ਤੋਂ ਇਲਾਵਾ, ਉਨ੍ਹਾਂ ਨੇ ਪਿੰਡ ਵਿੱਚ ਇੱਕ ਡਿਸਪੈਂਸਰੀ ਲਈ ਵੀ ਗ੍ਰਾਂਟ ਪ੍ਰਾਪਤ ਕੀਤੀ, ਜਿਸ ਨਾਲ ਪਿੰਡ ਵਾਸੀਆਂ ਦੀ ਸਿਹਤ ਸੇਵਾਵਾਂ ਤੱਕ ਪਹੁੰਚ ਵਿੱਚ ਸੁਧਾਰ ਆਇਆ । ਭਾਵੇਂ ਇਸ ਡਿਸਪੈਂਸਰੀ ਦਾ ਨਿਰਮਾਣ ਉਨ੍ਹਾਂ ਦੇ ਦੇਹਾਂਤ ਤੋਂ ਬਾਅਦ ਹੋਇਆ, ਪਰ ਇਹ ਵੀ ਉਨ੍ਹਾਂ ਦੀ ਹੀ ਪਹਿਲ ਦਾ ਨਤੀਜਾ ਸੀ । ਉਨ੍ਹਾਂ ਦੀਆਂ ਇਹ ਪ੍ਰਾਪਤੀਆਂ ਪਿੰਡ ਦੇ ਵਿਕਾਸ ਅਤੇ ਲੋਕਾਂ ਦੀ ਸਮੁੱਚੀ ਭਲਾਈ ਲਈ ਬਹੁਤ ਮਹੱਤਵਪੂਰਨ ਸਾਬਤ ਹੋਈਆਂ ।',
    'bio.leadership.paragraph2': 'ਉਨ੍ਹਾਂ ਨੇ ਆਪਣੀ ਪੂਰੀ ਰਾਜਨੀਤੀ ਲੁਧਿਆਣਾ ਜ਼ਿਲ੍ਹੇ, ਖ਼ਾਸ ਕਰਕੇ ਅਹਿਮਦਗੜ੍ਹ, ਮਲੌਦ ਅਤੇ ਡੇਹਲੋਂ ਖੇਤਰਾਂ ਵਿੱਚ ਮਜ਼ਦੂਰਾਂ, ਕਿਸਾਨਾਂ ਅਤੇ ਪਿੰਡਾਂ ਦੇ ਮਜ਼ਦੂਰਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਨ "ਤੇ ਕੇਂਦਰਿਤ ਕੀਤੀ । ਉਨ੍ਹਾਂ ਨੇ ਲੋਡਰਾਂ (ਪੱਲੇਦਾਰਾਂ), ਮਜ਼ਦੂਰਾਂ ਅਤੇ ਖੇਤ ਮਜ਼ਦੂਰਾਂ ਨੂੰ ਮਜ਼ਬੂਤ ਯੂਨੀਅਨਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤਾ, ਸਥਾਨਕ ਕਮੇਟੀਆਂ ਬਣਾਈਆਂ, ਅਧਿਕਾਰੀਆਂ ਨਾਲ ਸ਼ਿਕਾਇਤਾਂ ਦਾ ਨਿਪਟਾਰਾ ਕੀਤਾ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਹੱਕਾਂ ਬਾਰੇ ਸਿੱਖਿਆ ਮੁਹਿੰਮ ਚਲਾਈ । ਉਨ੍ਹਾਂ ਦੀ ਇਮਾਨਦਾਰ ਅਗਵਾਹੀ ਨੇ ਬਹੁਤ ਸਾਰੇ ਲੋਕਾਂ ਨੂੰ ਕਮਿਊਨਿਸਟ ਪਾਰਟੀ ਦਾ ਸਮਰਥਨ ਕਰਨ ਲਈ ਪ੍ਰੇਰਿਤ ਕੀਤਾ, ਕਿਉਂਕਿ ਉਹ ਉਨ੍ਹਾਂ "ਤੇ ਭਰੋਸਾ ਕਰਦੇ ਸਨ ।',
    'bio.leadership.paragraph3': 'ਕਾਮਰੇਡ ਹੂੰਝਣ ਮਾਰਕਸਵਾਦੀ ਵਿਚਾਰਧਾਰਾ ਤੋਂ ਡੂੰਘੇ ਤੌਰ "ਤੇ ਪ੍ਰਭਾਵਿਤ ਸਨ ਅਤੇ ਵਿਗਿਆਨਕ ਤੇ ਪ੍ਰਗਤੀਸ਼ੀਲ ਸੋਚ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਰੱਖਦੇ ਸਨ । ਉਹ ਸ਼ਹੀਦ-ਏ-ਆਜ਼ਮ ਭਗਤ ਸਿੰਘ ਅਤੇ ਉਨ੍ਹਾਂ ਦੀ ਵਿਚਾਰਧਾਰਾ ਦੇ ਪ੍ਰਸ਼ੰਸਕ ਸਨ । ਉਨ੍ਹਾਂ ਦਾ ਮੰਨਣਾ ਸੀ ਕਿ ਭਾਰਤ ਕੋਲ ਆਤਮਨਿਰਭਰ ਬਣਨ ਲਈ ਹਰ ਤਰ੍ਹਾਂ ਦੇ ਕੁਦਰਤੀ ਅਤੇ ਮਨੁੱਖੀ ਸਰੋਤ ਮੌਜੂਦ ਹਨ, ਪਰ ਫਿਰ ਵੀ ਦੇਸ਼ ਵਿਦੇਸ਼ੀ ਤਾਕਤਾਂ "ਤੇ ਨਿਰਭਰ ਹੋ ਗਿਆ । ਉਹ ਅਕਸਰ ਪੂੰਜੀਵਾਦ ਅਤੇ ਸਾਮਰਾਜਵਾਦ ਦੀ ਆਲੋਚਨਾ ਕਰਦੇ ਹੋਏ ਕਹਿੰਦੇ ਸਨ ਕਿ ਇਹ ਪ੍ਰਣਾਲੀਆਂ ਅਸਮਾਨਤਾ ਨੂੰ ਵਧਾਉਂਦੀਆਂ ਹਨ ਅਤੇ ਵਿਕਾਸਸ਼ੀਲ ਦੇਸ਼ਾਂ ਦੇ ਆਮ ਲੋਕਾਂ ਦੇ ਹਿੱਤਾਂ ਨੂੰ ਨੁਕਸਾਨ ਪਹੁੰਚਾਉਂਦੀਆਂ ਹਨ । ਉਨ੍ਹਾਂ ਦਾ ਵਿਸ਼ਵਾਸ ਸੀ ਕਿ ਵਿਦੇਸ਼ੀ ਤਾਕਤਾਂ ਸੁਤੰਤਰ ਵਿਕਾਸ ਦਾ ਰਾਹ ਅਪਣਾਉਣ ਵਾਲੇ ਦੇਸ਼ਾਂ ਨੂੰ ਕਮਜ਼ੋਰ ਕਰਨ ਲਈ ਉਨ੍ਹਾਂ ਦੇ ਅੰਦਰੂਨੀ ਟਕਰਾਵਾਂ ਨੂੰ ਹੋਰ ਭੜਕਾਉਂਦੀਆਂ ਹਨ ।',
    
    // Biography - 1980s Punjab (Subsection)
    'bio.subsection.1980s.title': '1980 ਦੇ ਦਹਾਕੇ ਦਾ ਪੰਜਾਬ',
    'bio.subsection.1980s.paragraph1': '1980 ਦੇ ਦਹਾਕੇ ਵਿੱਚ, ਜਦੋਂ ਪੰਜਾਬ ਦਹਿਸ਼ਤਗਰਦੀ ਅਤੇ ਅੱਤਵਾਦ ਦਾ ਸਾਹਮਣਾ ਕਰ ਰਿਹਾ ਸੀ, ਕਾਮਰੇਡ ਹੂੰਝਣ ਨੇ ਖੁੱਲ੍ਹੇਆਮ ਖਾਲਿਸਤਾਨੀ ਹਿੰਸਾ ਦਾ ਵਿਰੋਧ ਕੀਤਾ ਅਤੇ ਧਰਮਨਿਰਪੱਖ ਸਮਾਜ ਦੀ ਰੱਖਿਆ ਵਿਚ ਯੋਗਦਾਨ ਪਾਇਆ । ਸਾਥੀਆਂ ਨਾਲ ਮਿਲ ਕੇ, ਉਸ ਨੇ ਲੁਧਿਆਣੇ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਥਾਵਾਂ "ਤੇ ਮੀਟਿੰਗਾਂ ਕਰਵਾਈਆਂ ਅਤੇ ਅਮਨ ਦੀ ਹਿਮਾਇਤ ਕਰਨ ਲਈ ਕਾਮਰੇਡ ਸਤਪਾਲ ਡਾਂਗ ਅਤੇ ਜਗਜੀਤ ਸਿੰਘ ਆਨੰਦ ਵਰਗੀਆਂ ਅਗਾਂਹਵਧੂ ਆਵਾਜ਼ਾਂ ਨੂੰ ਸੱਦਾ ਦਿੱਤਾ । ਧਰਮਨਿਰਪੱਖ ਤੇ ਅਗਾਂਹਵਧੂ ਨਾਅਰਾ, "ਨਾ ਹਿੰਦੂ ਰਾਜ ਨਾ ਖਾਲਿਸਤਾਨ, ਜੁਗ ਜੁਗ ਜੀਵੇ ਹਿੰਦੁਸਤਾਨ," ਉਨ੍ਹਾਂ ਦੀ ਵਚਨਬੱਧਤਾ ਦੀ ਗੂੰਜ ਸੀ ।',
    'bio.subsection.1980s.paragraph2': 'ਉਸ ਸਮੇਂ ਰਾਜਨੀਤਿਕ ਕਰਾਂਤੀਕਾਰੀਆਂ ਨੂੰ ਦਰਪੇਸ਼ ਖ਼ਤਰਿਆਂ ਦੇ ਬਾਵਜੂਦ, ਕਾਮਰੇਡ ਹੂੰਝਣ ਪਿੰਡਾਂ ਵਿੱਚ ਜਾਂਦਾ ਰਿਹਾ ਤਾਂ ਜੋ ਲੋਕਾਂ ਨੂੰ ਦਹਿਸ਼ਤਗਰਦੀ ਦੇ ਵਿਰੋਧ ਅਤੇ ਅਮਨ ਲਈ ਇਕਜੁੱਟ ਕਰ ਸਕੇ । ਡਾ. ਅਰੁਣ ਮਿੱਤਰਾ ਨੇ ਯਾਦ ਕੀਤਾ ਕਿ ਉਸਦਾ ਅਟੁੱਟ ਵਿਸ਼ਵਾਸ ਸੀ ਕਿ ਦੇਸ਼ਭਗਤਾਂ ਨੇ ਭਾਰਤ ਦੀ ਆਜ਼ਾਦੀ ਲਈ ਵੱਡੀਆਂ ਕੁਰਬਾਨੀਆਂ ਦਿੱਤੀਆਂ ਹਨ ਅਤੇ ਦੇਸ਼ ਦੀ ਆਜ਼ਾਦੀ ਨੂੰ ਹਰ ਕੀਮਤ "ਤੇ ਕਾਇਮ ਰੱਖਣਾ ਹਰੇਕ ਦਾ ਫ਼ਰਜ਼ ਹੈ ।',
    
    // Biography - Assassination Content
    'bio.assassination.paragraph1': 'ਬਦਕਿਸਮਤੀ ਨਾਲ, ਉਸਦੀ ਹਿੰਮਤ ਦੀ ਕੀਮਤ ਬਹੁਤ ਵੱਡੀ ਨਿਕਲੀ । 14 ਮਈ 1989 ਦੀ ਸਵੇਰ ਨੂੰ, ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਸਿੰਘ ਹੂੰਝਣ ਨੂੰ ਉਸਦੇ ਪਿੰਡ ਪੰਧੇਰ ਖੇੜੀ ਵਿੱਚ ਖਾਲਿਸਤਾਨੀ ਦਹਿਸ਼ਤਗਰਦਾਂ ਨੇ ਮਾਰ ਦਿੱਤਾ । ਉਸਦਾ ਗਨਮੈਨ, ਕਾਮਰੇਡ ਜੁਗਿੰਦਰ ਸਿੰਘ, ਵੀ ਬਹਾਦਰੀ ਨਾਲ ਲੜਦਾ ਹੋਇਆ ਸ਼ਹੀਦ ਹੋਇਆ । ਕੁਝ ਮਹੀਨੇ ਪਹਿਲਾਂ ਹੀ, ਕਈ ਧਮਕੀਆਂ ਮਿਲਣ ਤੋਂ ਬਾਅਦ, ਉਸਨੂੰ ਸੁਰੱਖਿਆ ਦਿੱਤੀ ਗਈ ਸੀ । ਦੋਸਤਾਂ ਅਤੇ ਸਾਥੀਆਂ ਨੇ ਉਸਦੀ ਸੁਰੱਖਿਆ ਲਈ ਵਾਹਨ ਖਰੀਦਣ ਵਾਸਤੇ ਪੈਸਾ ਇਕੱਠਾ ਕਰਨਾ ਵੀ ਸ਼ੁਰੂ ਕਰ ਦਿੱਤਾ ਸੀ । ਖ਼ਤਰਿਆਂ ਕਾਰਣ ਸੁਰੱਖਿਅਤ ਥਾਂ ਤੇ ਜਾ ਬਸਣ ਦੀ ਸਲਾਹ ਦੇ ਬਾਵਜੂਦ, ਉਹ ਕਦੇ ਵੀ ਜਨਤਕ ਜੀਵਨ ਤੋਂ ਪਿੱਛੇ ਨਾ ਹਟਿਆ ਅਤੇ ਨਾ ਹੀ ਆਪਣੇ ਅਸੂਲ ਛੱਡੇ ।',
    'bio.assassination.paragraph2': 'ਉਸਨੂੰ ਸਵੇਰੇ ਪਿੰਡ ਦੇ ਬਾਹਰ ਪ੍ਰਕਿਰਿਆ ਕਰਨ ਗਿਆਂ ਮਾਰ ਦਿੱਤਾ ਗਿਆ । ਧਮਕੀਆਂ ਦੇ ਬਾਵਜੂਦ, ਉਸ ਨੇ ਨਿੱਜੀ ਪਖਾਨਾ ਬਣਾਉਣ ਤੋਂ ਇਨਕਾਰ ਕਰ ਦਿੱਤਾ, ਕਿਉਂਕਿ ਉਹ ਮੰਨਦਾ ਸੀ ਕਿ ਇਸਨੂੰ ਸਰਕਾਰੀ ਫੰਡਾਂ ਦੀ ਗਲਤ ਵਰਤੋਂ ਸਮਝਿਆ ਜਾਵੇਗਾ --- ਇਹ ਉਸਦੀ ਪੱਕੀ ਨੈਤਿਕਤਾ ਅਤੇ ਭ੍ਰਿਸ਼ਟਾਚਾਰ ਖ਼ਿਲਾਫ਼ ਉਸਦੇ ਮਜ਼ਬੂਤ ਨੈਤਿਕ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ । ਉਹ ਸੱਚਮੁੱਚ ਇਸ ਕਹਾਵਤ "ਤੇ ਚੱਲਦਾ ਸੀ: "ਰਾਜਾ ਸਿਰਫ਼ ਇਮਾਨਦਾਰ ਹੀ ਨਹੀਂ, ਸਗੋਂ ਇਮਾਨਦਾਰ ਦਿਖਣਾ ਵੀ ਚਾਹੀਦਾ ਹੈ ।"',
    'bio.assassination.testimonial': '"ਗੁਰਮੇਲ ਇਕ ਸੂਰਮਾ ਸੀ --- ਦੇਣਹਾਰ, ਲੋਕ ਸੇਵਕ, ਤੇ ਯੋਧਾ --- ਉਹ ਇਹਨਾਂ ਤਿੰਨਾ ਰਾਹੀ ਸਦੀਆਂ ਤੱਕ ਜਿਉਂਦਾ ਰਹੇਗਾ । ਉਹ ਲੋਕਾਂ ਵਿਚੋਂ ਜਨਮਿਆ, ਲੋਕਾਂ ਲਈ ਜਿਉਇਆ ਅਤੇ ਲੋਕਾਂ ਲਈ ਹੀ ਸ਼ਹੀਦ ਹੋਇਆ ।"',
    'bio.assassination.testimonial.attribution': 'ਕਾਮਰੇਡ ਚੰਨਣ ਸਿੰਘ ਬਰੋਲਾ, ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਸਿੰਘ ਹੂੰਝਣ ਦੇ ਪਿਤਾ',

    // Biography - Legacy Content
    'bio.legacy.title': 'ਵਿਰਾਸਤ',
    'bio.legacy.paragraph1': 'ਉਸਨੂੰ ਯਾਦ ਕਰਦਿਆਂ, ਹਰ ਸਾਲ 14 ਮਈ ਨੂੰ ਲੋਕ ਪੰਧੇਰ ਖੇੜੀ ਵਿੱਚ ਇਕੱਠੇ ਹੁੰਦੇ ਹਨ ਤਾਂ ਜੋ ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਸਿੰਘ ਹੂੰਝਣ ਅਤੇ ਜੋਗਿੰਦਰ ਸਿੰਘ ਦੀ ਸੋਚ ਤੇ ਪਹਿਰਾ ਦੇ ਸਕਣ । ਇਹ ਸਮਾਗਮ ਉਸਦੇ ਸਾਥੀਆਂ, ਪਰਿਵਾਰ ਅਤੇ ਨਵੀਂ ਪੀੜ੍ਹੀ ਨੂੰ ਜੋੜਦੇ ਹਨ । ਇਸ ਵਿੱਚ ਭਾਸ਼ਣ, ਸੱਭਿਆਚਾਰਕ ਪ੍ਰਦਰਸ਼ਨ ਅਤੇ ਮੌਜੂਦਾ ਮੁੱਦਿਆਂ "ਤੇ ਚਰਚਾਵਾਂ ਹੁੰਦੀਆਂ ਹਨ, ਜੋ ਇਨਸਾਫ਼ ਅਤੇ ਏਕਤਾ ਲਈ ਸੰਘਰਸ਼ ਨੂੰ ਲਗਾਤਾਰ ਜਿਉਂਦਾ ਰੱਖਦੇ ਹਨ ।',
    'bio.legacy.paragraph2': 'ਸਾਥੀਆਂ ਨੇ ਕਾਮਰੇਡ ਹੂੰਝਣ ਨੂੰ ਇੱਕ ਵਿਰਲੇ ਨੇਤਾ ਵਜੋਂ ਦੇਖਿਆ, ਜੋ ਆਪਣੇ ਸਿਧਾਂਤਾਂ "ਤੇ ਅਟੱਲ ਰਹਿੰਦਾ ਸੀ । ਉਹ ਜ਼ੋਰ ਦੇ ਕੇ ਕਹਿੰਦਾ ਸੀ ਕਿ ਰਾਜਨੀਤਿਕ ਆਦਰਸ਼ਾਂ ਨੂੰ ਲੋਕ ਸੇਵਾ ਰਾਹੀਂ ਸਾਬਤ ਕਰਨਾ ਲਾਜ਼ਮੀ ਹੈ । ਉਸ ਦੀ ਅਥੱਕ ਤੇ ਇਮਾਨਦਾਰ ਮਿਹਨਤ ਨੇ ਇਕ ਮਜ਼ਬੂਤ ਜਨ-ਲਹਿਰ ਖੜ੍ਹੀ ਕੀਤੀ । ਜਿਨ੍ਹਾਂ ਨੂੰ ਉਸ ਨੇ ਪ੍ਰੇਰਿਤ ਕੀਤਾ, ਉਹ ਉਸ ਦੀ ਕਮੀ ਨੂੰ ਗਹਿਰਾਈ ਨਾਲ ਮਹਿਸੂਸ ਕਰਦੇ ਸਨ ।',
    'bio.legacy.paragraph3': 'ਉਸ ਦੀ ਮੌਤ ਅਤੇ ਪੰਜਾਬ ਵਿੱਚ ਹਿੰਸਾ ਨੇ ਉਸਦੇ ਪਰਿਵਾਰ ਤੇ ਡੂੰਘਾ ਅਸਰ ਕੀਤਾ । ਉਸ ਦੀ ਪਤਨੀ ਨੇ ਆਪਣੇ ਦ੍ਰਿੜ ਨਿਸ਼ਚੇ, ਪਰਿਵਾਰ ਦੇ ਸਹਾਰੇ ਅਤੇ ਕਾਮਰੇਡ ਹੂੰਝਣ ਦੇ ਸਾਥੀਆ ਦੇ ਦਿਖਾਏ ਮਾਰਗਦਰਸ਼ਣ ਨਾਲ ਦੋ ਪੁੱਤਰਾਂ ਦੀ ਪਰਵਰਿਸ਼ ਕੀਤੀ । ਉਹ ਅੱਗੇ ਚੱਲ ਕੇ ਵਿਦੇਸ਼ਾਂ ਵਿੱਚ ਇੰਜੀਨੀਅਰਾਂ ਵਜੋਂ ਕਾਮਯਾਬ ਹੋਏ । ਪਰਿਵਾਰ ਹੁਣ ਯੋਗ ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਸਿੱਖਿਆ ਲਈ ਵਜੀਫੇ ਰਾਹੀਂ ਕਾਮਰੇਡ ਹੂੰਝਣ ਦੀ ਵਿਰਾਸਤ ਨੂੰ ਅੱਗੇ ਵਧਾ ਰਿਹਾ ਹੈ, ਕਿਉਂਕਿ ਉਹ ਮੰਨਦੇ ਹਨ ਕਿ ਅਗਾਂਹਵੱਧਣ ਦਾ ਅਸਲੀ ਰਸਤਾ ਅਮਨ ਅਤੇ ਸਿੱਖਿਆ ਹੀ ਹੈ ।',
    'bio.legacy.paragraph4': 'ਅੱਜ, ਉਸ ਦੀ ਮੌਤ ਤੋਂ ਦਹਾਕਿਆਂ ਬਾਅਦ ਵੀ, ਕਾਮਰੇਡ ਹੂੰਝਣ ਦੀ ਵਿਰਾਸਤ ਅਰਥਪੂਰਣ ਹੈ । ਪੰਜਾਬ ਅਜੇ ਵੀ ਦਹਿਸ਼ਤਗਰਦੀ ਅਤੇ ਅੱਤਵਾਦ ਦੇ ਪਿੱਛੇ ਛੱਡੇ ਅਸਰ ਨੂੰ ਮਹਿਸੂਸ ਕਰਦਾ ਹੈ, ਅਤੇ ਵੰਡਪਾਊ ਰਾਜਨੀਤੀ ਤੇ ਸਮਾਜਿਕ ਵੰਡ ਦੇ ਨਵੇਂ ਰੂਪ ਦੇਸ਼ ਦੀ ਲੋਕਤਾਂਤਰਿਕ ਅਤੇ ਧਰਮਨਿਰਪੇਕ ਮੁੱਲਾਂ ਲਈ ਖ਼ਤਰਾ ਬਣੇ ਹੋਏ ਹਨ । ਉਸ ਦੀ ਜ਼ਿੰਦਗੀ ਸਾਨੂੰ ਯਾਦ ਦਿਵਾਉਦੀ ਹੈ ਕਿ ਹਿੰਮਤ ਅਤੇ ਇਖ਼ਲਾਕ ਮੁਸ਼ਕਲ ਸਮਿਆਂ ਵਿਚ ਵੀ ਕਾਇਮ ਰਹਿੰਦੇ ਹਨ । ਆਮ ਲੋਕ ਭਾਈਚਾਰਾ ਬਣਾਕੇ, ਬੇਇੰਨਸਾਫੀ ਦੇ ਵਿਰੁੱਧ ਖੜ੍ਹੇ ਹੋ ਕੇ ਅਤੇ ਹੂੰਝਣ ਦੀ ਰੂਹ ਨੂੰ ਜਿਉਂਦਾ ਰੱਖ ਕੇ ਸਮਾਜਿਕ ਤਬਦੀਲੀ ਲਿਆ ਸਕਦੇ ਹਨ ।',
    'bio.legacy.paragraph5': 'ਉਸ ਦੀ ਲੜਾਈ ਕੇਵਲ ਦਹਿਸ਼ਤਗਰਦੀ ਦੇ ਵਿਰੁੱਧ ਹੀ ਨਹੀਂ ਸੀ, ਸਗੋਂ ਸ਼ੋਸ਼ਣ, ਅਸਮਾਨਤਾ, ਨਫ਼ਰਤ ਅਤੇ ਬੇਇਨਸਾਫੀ ਦੇ ਵਿਰੁੱਧ ਵੀ ਸੀ । ਭਾਵੇਂ ਉਸਦੀ ਜ਼ਿੰਦਗੀ ਜਲਦੀ ਮੁਕ ਗਈ, ਪਰ ਉਸਦੇ ਸਿਧਾਂਤ ਅੱਜ ਵੀ ਇਕਜੁੱਟ ਅਤੇ ਅਮਨਪ੍ਰਸਤ ਸਮਾਜ ਲਈ ਕੰਮ ਕਰਨ ਵਾਲਿਆਂ ਨੂੰ ਪ੍ਰੇਰਿਤ ਕਰਦੇ ਹਨ । ਆਓ ਅਸੀਂ ਉਸਦੀ ਯਾਦ ਦਾ ਸਤਿਕਾਰ ਕਰੀਏ, ਇਕੱਠੇ ਹੋ ਕੇ ਇਨਸਾਫ਼ ਅਤੇ ਏਕਤਾ ਲਈ ਖੜ੍ਹੇ ਹੋਈਏ, ਅਤੇ ਉਹਨਾਂ ਸਾਰੀਆਂ ਤਾਕਤਾਂ ਦੇ ਮੁਕਾਬਲੇ ਖੜ੍ਹੀਏ ਜੋ ਸਾਨੂੰ ਵੰਡਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦੀਆਂ ਹਨ । ਸਾਡੇ ਸਾਰਿਆ ਦਾ ਇਸ ਵਿੱਚ ਯੋਗਦਾਨ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ ।',
    'bio.legacy.paragraph6': 'ਕਾਮਰੇਡ ਗੁਰਮੇਲ ਸਿੰਘ ਹੂੰਝਣ ਲੋਕਾਂ ਦਾ ਨੇਤਾ ਸੀ । ਉਸ ਨੇ ਪੰਜਾਬ ਅਤੇ ਭਾਰਤ ਦੀ ਏਕਤਾ, ਅਖੰਡਤਾ ਅਤੇ ਇਨਸਾਨੀਅਤ ਲਈ ਜ਼ਿੰਦਗੀ ਜਿਉਂਈ, ਕੰਮ ਕੀਤਾ ਅਤੇ ਆਪਣੀ ਜਾਨ ਨਿਛਾਵਰ ਕਰ ਦਿੱਤੀ । ਜਿਵੇਂ ਉਸਦੇ ਪਿਤਾ ਕਹਿੰਦੇ ਸਨ, ਉਸਦੀ ਆਵਾਜ਼ ਨੂੰ ਗੋਲੀਆਂ ਕਦੇ ਚੁੱਪ ਨਹੀਂ ਕਰ ਸਕੀਆਂ ।',
  }
};

const getTranslation = (currentLanguage: Language, key: string): string => {
  return translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;
};

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pa' : 'en');
  };

  const t = (key: string): string => getTranslation(language, key);

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}