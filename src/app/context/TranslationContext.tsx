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
    'home.quote': '"Education is the most powerful weapon which you can use to change the world"',
    'home.established': 'Est. 1995',
    'home.historicalOverview': 'Historical Overview',
    'home.keyMilestones': 'Key Milestones',
    'home.photographicArchives': 'Photographic Archives',
    'home.theFounders': 'Biography',
    'home.livingLegacy': 'The Living Legacy',
    'home.continueLegacy': 'Continue the Legacy',
    'home.exploreScholarships': 'Explore Scholarships',

    // About Page
    'about.title': 'About Us',
    'about.subtitle': 'Chanan Da Chaanan - Building futures through education',
    'about.mission': 'Our Mission',
    'about.vision': 'Our Vision',
    'about.values': 'Our Values',
    'about.whatWeDo': 'What We Do',

    // Scholarship Page
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
  },
  pa: {
    // Navigation (Punjabi translations)
    'nav.biography': 'ਜੀਵਨੀ',
    'nav.biographyOverview': 'ਸੰਖੇਪ',
    'nav.founder1': 'ਸੰਸਥਾਪਕ 1 ਜੀਵਨੀ',
    'nav.founder2': 'ਸੰਸਥਾਪਕ 2 ਜੀਵਨੀ',
    'nav.about': 'ਸਾਡੇ ਬਾਰੇ',
    'nav.scholarship': 'ਸਕਾਲਰਸ਼ਿਪ',
    'nav.apply': 'ਅਪਲਾਈ ਕਰੋ',

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
    'home.quote': '"ਸਿੱਖਿਆ ਸਭ ਤੋਂ ਸ਼ਕਤੀਸ਼ਾਲੀ ਹਥਿਆਰ ਹੈ ਜਿਸ ਨਾਲ ਤੁਸੀਂ ਦੁਨੀਆਂ ਨੂੰ ਬਦਲ ਸਕਦੇ ਹੋ"',
    'home.established': 'ਸਥਾਪਿਤ 1995',
    'home.historicalOverview': 'ਇਤਿਹਾਸਕ ਸੰਖੇਪ',
    'home.keyMilestones': 'ਮੁੱਖ ਮੀਲਪੱਥਰ',
    'home.photographicArchives': 'ਫੋਟੋ ਆਰਕਾਈਵਜ਼',
    'home.theFounders': 'ਸੰਸਥਾਪਕ',
    'home.livingLegacy': 'ਜੀਵੰਤ ਵਿਰਾਸਤ',
    'home.continueLegacy': 'ਵਿਰਾਸਤ ਜਾਰੀ ਰੱਖੋ',
    'home.exploreScholarships': 'ਸਕਾਲਰਸ਼ਿਪਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ',

    // About Page
    'about.title': 'ਸਾਡੇ ਬਾਰੇ',
    'about.subtitle': 'ਚਾਨਣ ਦੇ ਚੰਨਣ - ਸਿੱਖਿਆ ਰਾਹੀਂ ਭਵਿੱਖ ਬਣਾਉਣਾ',
    'about.mission': 'ਸਾਡਾ ਮਿਸ਼ਨ',
    'about.vision': 'ਸਾਡੀ ਦ੍ਰਿਸ਼ਟੀ',
    'about.values': 'ਸਾਡੀਆਂ ਕਦਰਾਂ',
    'about.whatWeDo': 'ਅਸੀਂ ਕੀ ਕਰਦੇ ਹਾਂ',

    // Scholarship Page
    'scholarship.title': 'ਸਕਾਲਰਸ਼ਿਪ ਪ੍ਰੋਗਰਾਮ',
    'scholarship.subtitle': 'ਉੱਤਮ ਵਿਦਿਆਰਥੀਆਂ ਵਿੱਚ ਨਿਵੇਸ਼ ਜੋ ਕੱਲ੍ਹ ਨੂੰ ਆਕਾਰ ਦੇਣਗੇ',
    'scholarship.aboutProgram': 'ਪ੍ਰੋਗਰਾਮ ਬਾਰੇ',
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
  }
};

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pa' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

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
