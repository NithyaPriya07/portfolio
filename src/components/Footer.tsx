import { useState, FormEvent } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data';

const LeetCodeIcon = ({ size = 16 }: { size?: number }) => (
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

interface FooterProps {
  theme: 'dark' | 'light';
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ theme, onNavClick }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setSubscribing(true);
    setTimeout(() => {
      setSubscribing(false);
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }, 1200);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const linksGroup1 = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills & Tools' },
    { id: 'projects', label: 'Recent Projects' },
  ];

  const linksGroup2 = [
    { id: 'resume', label: 'Academic Resume' },
    { id: 'timeline', label: 'Education & Exp' },
    { id: 'certificates', label: 'Credentials' },
    { id: 'contact', label: 'Get in Touch' },
  ];

  return (
    <footer className={`border-t relative z-10 transition-all duration-300 ${
      theme === 'dark'
        ? 'bg-slate-950/80 backdrop-blur-xl border-white/5 text-slate-400'
        : 'bg-white/80 backdrop-blur-xl border-slate-200 text-slate-500'
    }`}>
      {/* Scroll to Top Trigger */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          id="back-to-top-btn"
          onClick={handleScrollToTop}
          className="p-3.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/45 hover:scale-110 active:scale-95 transition-all animate-bounce cursor-pointer"
          title="Scroll to Top"
        >
          <ArrowUp size={16} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Column 1: Brand details (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="h-8 w-8 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white font-bold text-base shadow-sm">
                NP
              </span>
              <span className={`text-lg font-bold tracking-tight ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
              }`}>
                Nithya<span className="text-brand-purple">Priya</span>
              </span>
            </div>
            
            <p className="text-xs leading-relaxed font-light">
              Designing, building, and optimizing premium full-stack products with rigorous logic and high visual style. Open for software development inquiries globally.
            </p>

            {/* Social rows */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl transition-all border ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-850 text-slate-400 hover:text-white hover:bg-slate-800'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
                }`}
                referrerPolicy="no-referrer"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl transition-all border ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-850 text-slate-400 hover:text-white hover:bg-slate-800'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
                }`}
                referrerPolicy="no-referrer"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl transition-all border ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-850 text-slate-400 hover:text-white hover:bg-slate-800'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
                }`}
                referrerPolicy="no-referrer"
              >
                <LeetCodeIcon size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-2 rounded-xl transition-all border ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-850 text-slate-400 hover:text-white hover:bg-slate-800'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
                }`}
                referrerPolicy="no-referrer"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Sitemap Links Group 1 (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h5 className={`text-xs font-bold uppercase tracking-wider ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
            }`}>
              Navigation
            </h5>
            <ul className="space-y-2 text-xs">
              {linksGroup1.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-nav-link-1-${link.id}`}
                    onClick={() => onNavClick(link.id)}
                    className="hover:text-brand-purple transition-colors text-left font-light cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sitemap Links Group 2 (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h5 className={`text-xs font-bold uppercase tracking-wider ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
            }`}>
              Discover
            </h5>
            <ul className="space-y-2 text-xs">
              {linksGroup2.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-nav-link-2-${link.id}`}
                    onClick={() => onNavClick(link.id)}
                    className="hover:text-brand-purple transition-colors text-left font-light cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Box (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h5 className={`text-xs font-bold uppercase tracking-wider ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
            }`}>
              Stay Updated
            </h5>
            <p className="text-xs font-light leading-relaxed">
              Subscribe to receive compact digests on full-stack architecture, React performance, and my technical learnings.
            </p>

            {!newsletterSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className={`px-3 py-2.5 text-xs rounded-xl border focus:outline-none flex-grow ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-800 text-slate-100 focus:border-brand-purple'
                      : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-brand-purple'
                  }`}
                  placeholder="name@email.com"
                />
                <button
                  id="newsletter-subscribe-btn"
                  type="submit"
                  disabled={subscribing}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white text-xs font-bold shadow-md hover:scale-102 transition-transform disabled:opacity-60 flex items-center justify-center cursor-pointer"
                >
                  {subscribing ? (
                    <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 rounded-xl text-xs font-medium">
                <CheckCircle size={14} />
                Subscribed successfully!
              </div>
            )}
          </div>

        </div>

        {/* Outer bottom copyright strip */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light ${
          theme === 'dark' ? 'border-slate-900 text-slate-500' : 'border-slate-100 text-slate-400'
        }`}>
          <p>
            &copy; {currentYear} {personalInfo.name}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with React &amp; Tailwind &bull; Designed in Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
