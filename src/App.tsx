import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeSection, setActiveSection] = useState('hero');
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVisible, setCursorVisible] = useState(false);

  // Set initial loading and dark theme body class
  useEffect(() => {
    // Mimic preloading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Initial root setup
    document.documentElement.classList.add('dark');
    
    return () => clearTimeout(timer);
  }, []);

  // Theme Toggler
  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
      return nextTheme;
    });
  };

  // Click scroll handler
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  // Scrollspy observer
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'timeline', 'certificates', 'resume', 'contact'];
    
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          rootMargin: '-30% 0px -60% 0px', // Trigger near center screen
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [loading]);

  // Track cursor position (only for desktops with pointers)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="app-container"
      className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden ${
        theme === 'dark' ? 'bg-mesh-dark text-slate-100' : 'bg-mesh-light text-slate-800'
      }`}
    >
      {/* Background Decorative Geometrics */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] border-[0.5px] border-slate-200/10 dark:border-white/5 pointer-events-none rotate-12 z-0" />
      <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] border-[0.5px] border-slate-200/10 dark:border-white/5 pointer-events-none -rotate-12 z-0" />

      {/* Desktop Custom Follower Cursor */}
      {cursorVisible && (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-110">
          {/* Outer ring */}
          <div
            className="absolute h-8 w-8 rounded-full border border-brand-purple/40 mix-blend-difference transition-transform duration-200 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          />
          {/* Inner core */}
          <div
            className="absolute h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          />
        </div>
      )}

      {/* Loading preloader Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-100"
          >
            <Loader theme={theme} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Stage Content */}
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Sticky Header Navbar */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />

        {/* Content Segments */}
        <Hero theme={theme} onNavClick={handleNavClick} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Timeline theme={theme} />
        <Certificates theme={theme} />
        <Resume theme={theme} />
        <Contact theme={theme} />

        {/* Sitemap & newsletter footer */}
        <Footer theme={theme} onNavClick={handleNavClick} />
      </div>
    </div>
  );
}
