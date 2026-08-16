import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { achievements, testimonials } from '../data';
import { Trophy, Target, Sparkles, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface AchievementsProps {
  theme: 'dark' | 'light';
}

export default function Achievements({ theme }: AchievementsProps) {
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);

  // Icon mapper
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="text-amber-500" size={24} />;
      case 'Target':
        return <Target className="text-rose-500" size={24} />;
      case 'Sparkles':
        return <Sparkles className="text-brand-purple" size={24} />;
      default:
        return <Trophy className="text-brand-purple" size={24} />;
    }
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-cycle testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(handleNextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="achievements" className="py-24 px-6 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Achievements Grid Column (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-purple dark:text-brand-cyan mb-2">
                07. ACCOLADES
              </h2>
              <h3 className={`text-3xl font-extrabold tracking-tight ${
                theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
              }`}>
                Achievements & Key Milestones
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-brand-purple to-brand-blue mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-6 rounded-3xl border flex gap-5 items-start transition-all hover:translate-x-1 duration-200 ${
                    theme === 'dark'
                      ? 'glass-card border-slate-800 hover:border-brand-purple/20'
                      : 'glass-card-light border-slate-200 hover:border-brand-purple/10'
                  }`}
                >
                  <div className={`p-4 rounded-2xl shrink-0 ${
                    theme === 'dark' ? 'bg-slate-900 border border-slate-850' : 'bg-slate-100 border border-slate-200'
                  }`}>
                    {getAchievementIcon(ach.icon)}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className={`font-bold text-base ${
                        theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
                      }`}>
                        {ach.title}
                      </h4>
                      <span className="text-[10px] font-mono uppercase bg-slate-500/10 text-slate-500 px-2 py-0.5 rounded-full font-bold">
                        {ach.date}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {ach.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials Carousel Column (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-blue dark:text-brand-cyan mb-2">
                08. RECOGNITION
              </h2>
              <h3 className={`text-3xl font-extrabold tracking-tight ${
                theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
              }`}>
                Professor & Mentor Feedback
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mt-4 rounded-full" />
            </div>

            {/* Carousel Core */}
            <div className={`p-8 rounded-3xl border relative min-h-[300px] flex flex-col justify-between ${
              theme === 'dark'
                ? 'glass-card border-slate-800/80'
                : 'glass-card-light border-slate-200 shadow-sm'
            }`}>
              <Quote className="absolute top-6 right-8 text-slate-500/15 h-16 w-16 pointer-events-none" />

              <div className="relative overflow-hidden mb-6 flex-grow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonialIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <p className={`text-sm md:text-base leading-relaxed italic ${
                      theme === 'dark' ? 'text-slate-300 font-light' : 'text-slate-700 font-normal'
                    }`}>
                      "{testimonials[currentTestimonialIdx].content}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Author info & pagination triggers */}
              <div className="flex items-center justify-between pt-6 border-t border-dashed border-slate-500/10">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonials[currentTestimonialIdx].avatar}
                    alt={testimonials[currentTestimonialIdx].name}
                    className="h-11 w-11 rounded-full object-cover border border-brand-purple/20 shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className={`font-bold text-sm ${
                      theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {testimonials[currentTestimonialIdx].name}
                    </h5>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {testimonials[currentTestimonialIdx].role}, <span className="font-semibold">{testimonials[currentTestimonialIdx].company}</span>
                    </p>
                  </div>
                </div>

                {/* Left/Right Buttons */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    id="carousel-prev-btn"
                    onClick={handlePrevTestimonial}
                    className={`p-2 rounded-xl border transition-all cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    id="carousel-next-btn"
                    onClick={handleNextTestimonial}
                    className={`p-2 rounded-xl border transition-all cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
