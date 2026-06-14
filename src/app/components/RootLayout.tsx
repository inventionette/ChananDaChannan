import { Outlet, Link, useLocation } from "react-router";
import { Mail, Phone, Languages, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "../context/TranslationContext";

export function RootLayout() {
  const location = useLocation();
  const { language, toggleLanguage, t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [biographyDropdownOpen, setBiographyDropdownOpen] = useState(false);
  const [mobileBiographyOpen, setMobileBiographyOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileBiographyOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/about", label: t("nav.about") },
    { to: "/scholarship", label: t("nav.scholarship") },
    { to: "/apply", label: t("nav.apply") },
  ];

  const biographyLinks = [
    { to: "/biography/founder-1", labelKey: "nav.founder1" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Navigation Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white border-b border-black/10 backdrop-blur-sm bg-white/95 shadow-sm"
      >
        <nav className="container mx-auto px-4 md:px-6 lg:px-12 py-4 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <Link to="/" className="group">
              <motion.h1
                className="text-3xl tracking-tight hover:tracking-wide transition-all duration-300"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
                whileHover={{ scale: 1.02 }}
              >
                Chanan Da Channan{" "}
              </motion.h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Biography Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setBiographyDropdownOpen(true)}
                onMouseLeave={() => setBiographyDropdownOpen(false)}
              >
                <Link
                  to="/"
                  className="flex items-center gap-1 group"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  <span className="uppercase tracking-wider text-sm font-medium transition-colors duration-300 group-hover:text-gray-600">
                    {t("nav.biography")}
                  </span>
                  <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:text-gray-600" style={{ transform: biographyDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </Link>
                {(location.pathname === "/" || location.pathname.startsWith("/biography")) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {biographyDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-0 bg-white border border-black/10 shadow-lg min-w-[200px] z-50"
                    >
                      <Link
                        to="/"
                        className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors border-b border-black/5"
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        {t("nav.biographyOverview")}
                      </Link>
                      {biographyLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors border-b border-black/5 last:border-b-0"
                          style={{ fontFamily: "'Work Sans', sans-serif" }}
                        >
                          {t(link.labelKey)}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Regular Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative group"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  <span className="uppercase tracking-wider text-sm font-medium transition-colors duration-300 group-hover:text-gray-600">
                    {link.label}
                  </span>
                  {location.pathname === link.to && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}

              {/* Translation Button - Desktop */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors text-xs"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
                aria-label="Toggle language"
              >
                <Languages className="w-3 h-3" />
                {language === "en" ? "ਪੰ" : "EN"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 transition-colors rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={
                mobileMenuOpen ? "Close menu" : "Open menu"
              }
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { rotate: 45, y: 10 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-black origin-center"
                ></motion.span>
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { opacity: 0 }
                      : { opacity: 1 }
                  }
                  className="w-full h-0.5 bg-black"
                ></motion.span>
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { rotate: -45, y: -10 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-black origin-center"
                ></motion.span>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
<AnimatePresence>
  {mobileMenuOpen && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="md:hidden fixed inset-0 bg-black/20 z-40"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Dropdown Panel */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
        className="md:hidden absolute left-0 right-0 bg-white z-50 shadow-lg border-t border-black/10"
      >
        <div className="container mx-auto px-4 py-6 flex flex-col items-center gap-4">
          {/* Biography with Submenu */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="w-full text-center"
          >
            <button
              onClick={() => setMobileBiographyOpen(!mobileBiographyOpen)}
              className="flex items-center justify-center gap-2 w-full text-lg uppercase tracking-wider font-medium hover:text-gray-600 transition-colors py-2"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {t("nav.biography")}
              <ChevronDown
                className="w-4 h-4 transition-transform duration-300"
                style={{ transform: mobileBiographyOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {/* Biography Submenu */}
            <AnimatePresence>
              {mobileBiographyOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden bg-gray-50 mt-2 rounded"
                >
                  <Link
                    to="/"
                    className="block text-base py-2 px-4 hover:bg-gray-100 transition-colors border-b border-black/5"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {t("nav.biographyOverview")}
                  </Link>
                  {biographyLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block text-base py-2 px-4 hover:bg-gray-100 transition-colors border-b border-black/5 last:border-b-0"
                      style={{ fontFamily: "'Work Sans', sans-serif" }}
                    >
                      {t(link.labelKey)}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="h-px bg-black/10 mt-2"></div>
          </motion.div>

          {/* Regular Nav Links */}
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx + 1) * 0.05 }}
              className="w-full text-center"
            >
              <Link
                to={link.to}
                className="block text-lg uppercase tracking-wider font-medium hover:text-gray-600 transition-colors py-2"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {link.label}
              </Link>
              <div className="h-px bg-black/10"></div>
            </motion.div>
          ))}

          {/* Translation Button - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (navLinks.length + 1) * 0.05 }}
            className="mt-2 w-full flex justify-center"
          >
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-3 px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors text-sm"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4" />
              {language === "en" ? "Switch to ਪੰਜਾਬੀ" : "Switch to English"}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Brand Section */}
            <div>
              <h3
                className="text-2xl md:text-3xl mb-3 md:mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Chanan Da Channan{" "}
              </h3>
              <p
                className="text-sm md:text-base text-gray-400 leading-relaxed"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Empowering future leaders through education and
                scholarship opportunities.
              </p>
            </div>

            {/* Contact Info */}
            <div
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              <h4 className="uppercase tracking-wider text-xs md:text-sm font-semibold mb-3 md:mb-4">
                {t("common.contact")}
              </h4>
              <div className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
                <div className="flex items-center gap-2 md:gap-3 hover:text-white transition-colors cursor-pointer">
                  <Mail className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  <span className="break-all">
                    info@chanandachannan.com
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 hover:text-white transition-colors cursor-pointer">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center text-xs md:text-sm text-gray-500"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            <p>
              &copy; 2026 Chanan Da Channan. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}