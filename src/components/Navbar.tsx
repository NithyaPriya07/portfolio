import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ theme, toggleTheme, activeSection, onNavClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Education & Exp' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background effect on scroll
      setScrolled(window.scrollY > 50);

      // Scroll Progress Indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'glass-navbar py-3 shadow-lg'
            : 'glass-navbar-light py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 h-[3px] w-full bg-gray-800/10 dark:bg-gray-200/10">
        <div
          className="h-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          id="logo-btn"
          onClick={() => onNavClick('hero')}
          className="group relative flex items-center gap-1.5 focus:outline-none"
        >
          <span className="h-9 w-9 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white font-bold text-lg shadow-md shadow-brand-purple/20 transition-transform group-hover:scale-105 duration-300">
            NP
          </span>
          <span className={`text-xl font-bold tracking-tight group-hover:opacity-80 transition-opacity ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
          }`}>
            Nithya<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Priya</span>
          </span>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => onNavClick(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative cursor-pointer ${
                activeSection === item.id
                  ? 'text-white'
                  : theme === 'dark'
                  ? 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full -z-10 shadow-md shadow-brand-purple/25"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Buttons (Toggle & CTA) */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
              theme === 'dark'
                ? 'bg-slate-900/40 border-slate-800 text-amber-400 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Quick CTA */}
          <button
            id="quick-cta-btn"
            onClick={() => onNavClick('contact')}
            className="flex items-center gap-1 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white text-sm font-semibold shadow-md shadow-brand-purple/20 hover:shadow-lg hover:shadow-brand-purple/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Hire Me
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-3">
          {/* Mobile Theme Toggle */}
          <button
            id="mobile-theme-toggle-btn"
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-amber-400'
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border transition-all ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
            }`}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Desktop-hamburger for smaller desktop screens */}
        <div className="hidden sm:flex lg:hidden items-center gap-3">
          <button
            id="tablet-theme-toggle"
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border transition-all ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-amber-400'
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            id="tablet-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2.5 rounded-xl border transition-all ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-slate-200'
                : 'bg-slate-100 border-slate-200 text-slate-800'
            }`}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`sm:hidden border-t mt-3 overflow-hidden ${
              theme === 'dark'
                ? 'bg-slate-950/95 border-slate-900 text-slate-200'
                : 'bg-white/95 border-slate-100 text-slate-800'
            }`}
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => {
                    onNavClick(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-2.5 px-4 rounded-xl text-base font-semibold transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white'
                      : 'hover:bg-slate-500/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                id="mobile-nav-cta"
                onClick={() => {
                  onNavClick('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-2 py-3 px-4 rounded-xl text-center bg-gradient-to-r from-brand-purple to-brand-blue text-white text-base font-bold shadow-md shadow-brand-purple/20"
              >
                Hire Me Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tablet Drawer (for screens that have lg hidden but sm visible) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="tablet-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`hidden sm:flex lg:hidden absolute top-full left-0 w-full border-b shadow-2xl overflow-hidden ${
              theme === 'dark'
                ? 'bg-slate-950/95 border-slate-900 text-slate-200'
                : 'bg-white/95 border-slate-200 text-slate-800'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 py-6 w-full grid grid-cols-4 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`tablet-nav-link-${item.id}`}
                  onClick={() => {
                    onNavClick(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-3 px-4 rounded-xl text-center text-sm font-semibold transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white'
                      : 'hover:bg-slate-500/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                id="tablet-nav-cta"
                onClick={() => {
                  onNavClick('contact');
                  setMobileMenuOpen(false);
                }}
                className="col-span-4 py-3.5 px-4 rounded-xl text-center bg-gradient-to-r from-brand-purple to-brand-blue text-white text-base font-bold shadow-md shadow-brand-purple/20"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
