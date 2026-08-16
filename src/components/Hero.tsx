import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileText, ArrowDown, ChevronRight } from 'lucide-react';
import TypedText from './TypedText';
import { personalInfo } from '../data';

const LeetCodeIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className="inline-block"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.945l1.944 1.944a1.375 1.375 0 0 0 1.945 0l9.777-9.777a1.375 1.375 0 0 0 0-1.945L14.444.414A1.374 1.374 0 0 0 13.483 0zm5.102 5.681a1.375 1.375 0 0 0-.96.414l-9.778 9.777a1.375 1.375 0 0 0 0 1.945l1.944 1.944a1.375 1.375 0 0 0 1.945 0l9.777-9.777a1.375 1.375 0 0 0 0-1.945L19.544 6.1a1.374 1.374 0 0 0-.96-.414zM22.5 12h-3v1.5h3V12zm-4.5 0h-3v1.5h3V12z"/>
  </svg>
);

interface HeroProps {
  theme: 'dark' | 'light';
  onNavClick: (sectionId: string) => void;
}

export default function Hero({ theme, onNavClick }: HeroProps) {
  const socialLinks = [
    { id: 'github', icon: <Github size={20} />, url: personalInfo.github, label: 'GitHub' },
    { id: 'linkedin', icon: <Linkedin size={20} />, url: personalInfo.linkedin, label: 'LinkedIn' },
    { id: 'leetcode', icon: <LeetCodeIcon size={20} />, url: personalInfo.leetcode, label: 'LeetCode' },
    { id: 'mail', icon: <Mail size={20} />, url: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-6"
    >
      {/* Decorative Orbs / Floating Shapes */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-brand-purple/10 blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-blue/10 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-brand-cyan/10 blur-[80px] animate-pulse-slow pointer-events-none" />

      {/* Floating physical geometric shapes for creative depth */}
      <div className="absolute top-20 right-[15%] w-12 h-12 border border-brand-purple/20 rounded-xl rotate-12 animate-float opacity-30 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-32 left-[12%] w-16 h-16 bg-gradient-to-tr from-brand-blue/5 to-brand-cyan/10 rounded-full animate-float opacity-40 pointer-events-none hidden md:block" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-[8%] w-8 h-8 border border-brand-cyan/20 rounded-lg -rotate-45 animate-float opacity-30 pointer-events-none hidden lg:block" style={{ animationDelay: '4s' }} />

      <div className="max-w-4xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
        {/* Texts Column */}
        <div className="flex flex-col items-center text-center w-full">
          {/* Greeting Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border mb-6 bg-indigo-500/10 border-indigo-500/20 text-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping" />
            Welcome to my creative space
          </motion.div>

          {/* Name Header */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}>
              Hi, I'm{' '}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Dynamic typing subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-10"
          >
            <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
              A passionate{' '}
            </span>
            <span className="text-brand-purple dark:text-brand-cyan font-bold">
              <TypedText
                strings={[
                  'Full Stack Developer',
                  'Computer Science Student',
                  'Problem Solver',
                  'UI/UX Enthusiast',
                ]}
              />
            </span>
          </motion.h2>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className={`text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-normal ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {personalInfo.shortIntro}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto"
          >
             {/* View Resume Button */}
            <a
              id="hero-resume-btn"
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                onNavClick('resume');
              }}
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:scale-[1.02] active:scale-98 transition-all duration-300"
            >
              <FileText size={16} />
              View Resume
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Contact Button */}
            <button
              id="hero-contact-btn"
              onClick={() => onNavClick('contact')}
              className={`flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl border font-bold text-sm hover:scale-[1.02] active:scale-98 transition-all duration-300 cursor-pointer ${
                theme === 'dark'
                  ? 'border-white/10 bg-slate-800/50 backdrop-blur-md hover:bg-slate-800 text-slate-200'
                  : 'border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
            >
              Let's Connect
              <ArrowDown size={14} className="animate-bounce" />
            </button>
          </motion.div>

          {/* Center aligned Social Row (All Devices) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex items-center justify-center gap-4 py-4 border-t border-dashed border-slate-500/10 w-full mt-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border transition-all duration-300 hover:scale-110 active:scale-95 ${
                  theme === 'dark'
                    ? 'border-slate-800 bg-slate-950/40 text-slate-400 hover:text-white hover:bg-slate-900 hover:shadow-lg hover:shadow-brand-purple/5'
                    : 'border-slate-200 bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 hover:shadow-lg hover:shadow-slate-200/50'
                }`}
                title={link.label}
                referrerPolicy="no-referrer"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave bottom separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`relative block w-full h-[60px] md:h-[90px] transition-colors duration-300 ${
            theme === 'dark' ? 'fill-slate-950/40' : 'fill-slate-100/60'
          }`}
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V30.27C1124.4,2.22,1069.65,115,985.66,92.83Z" />
        </svg>
      </div>
    </section>
  );
}
