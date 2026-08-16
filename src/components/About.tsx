import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, GraduationCap, Calendar, Briefcase, Award } from 'lucide-react';
import { personalInfo, stats } from '../data';

interface AboutProps {
  theme: 'dark' | 'light';
}

function Counter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const isDecimal = value % 1 !== 0;
  const decimalPlaces = isDecimal ? (value.toString().split('.')[1]?.length || 2) : 0;

  useEffect(() => {
    let startTime: number;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      const current = progressPercentage * value;
      setCount(current);

      if (progressPercentage < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [value, duration]);

  const formattedValue = isDecimal ? count.toFixed(decimalPlaces) : Math.floor(count);

  return (
    <span>
      {formattedValue}
      {suffix}
    </span>
  );
}

export default function About({ theme }: AboutProps) {
  const infoItems = [
    { icon: <Mail size={16} className="text-brand-purple" />, label: 'Email', value: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { icon: <MapPin size={16} className="text-brand-blue" />, label: 'Location', value: personalInfo.location },
    { icon: <GraduationCap size={16} className="text-brand-cyan" />, label: 'Education', value: 'B.Tech in Computer Science' },
    { icon: <Briefcase size={16} className="text-brand-purple" />, label: 'Availability', value: 'Open for Opportunities' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-purple dark:text-brand-cyan mb-2">
            01. ABOUT ME
          </h2>
          <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
          }`}>
            My Coding Journey & Philosophy
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Right Column: Narrative Biography & Objective */}
          <div className="lg:col-span-7 space-y-8">
            <div className={`p-8 rounded-3xl ${
              theme === 'dark' ? 'glass-card' : 'glass-card-light'
            } transition-all duration-300`}>
              <h4 className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
              }`}>
                Who is Nithya Priya?
              </h4>
              <p className={`leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {personalInfo.longIntro}
              </p>

              {/* Career Objective Bento-style Panel */}
              <div className={`p-5 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-brand-purple/10 to-brand-blue/5 border-brand-purple/20'
                  : 'bg-gradient-to-r from-brand-purple/5 to-brand-blue/5 border-brand-purple/10'
              }`}>
                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-brand-purple/10 text-brand-purple shrink-0 h-fit">
                    <Award size={18} />
                  </div>
                  <div>
                    <h5 className={`font-semibold mb-1 text-sm uppercase tracking-wider ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Career Objective
                    </h5>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {personalInfo.careerObjective}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Counter stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl text-center border transition-all hover:scale-105 duration-300 ${
                    theme === 'dark'
                      ? 'bg-slate-900/40 border-slate-800 shadow-slate-950/20'
                      : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan mb-2">
                    <Counter value={stat.value} suffix={stat.suffix || ''} />
                  </div>
                  <div className={`text-xs font-medium uppercase tracking-wider ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Column: Personal Attributes Profile Grid */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-3xl ${
              theme === 'dark' ? 'glass-card' : 'glass-card-light'
            } transition-all duration-300`}>
              <h4 className={`text-xl font-bold mb-6 border-b pb-4 ${
                theme === 'dark' ? 'text-slate-200 border-slate-800' : 'text-slate-800 border-slate-200'
              }`}>
                Essential Details
              </h4>
              <div className="space-y-5">
                {infoItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className={`p-3 rounded-xl transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-900 group-hover:bg-slate-800 text-slate-300'
                        : 'bg-slate-100 group-hover:bg-slate-200 text-slate-700'
                    }`}>
                      {item.icon}
                    </div>
                    <div className="overflow-hidden">
                      <p className={`text-xs uppercase tracking-wider ${
                        theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-sm font-semibold text-brand-purple hover:underline truncate block"
                          referrerPolicy="no-referrer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className={`text-sm font-semibold truncate ${
                          theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                        }`}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Small Quick-Quote Box */}
            <div className={`p-6 rounded-3xl border border-dashed text-center relative overflow-hidden ${
              theme === 'dark'
                ? 'border-brand-blue/20 bg-brand-blue/5'
                : 'border-brand-blue/30 bg-brand-blue/5'
            }`}>
              <span className="absolute -top-10 -right-10 text-9xl font-serif text-brand-blue/10 select-none">“</span>
              <p className={`italic text-sm leading-relaxed ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}>
                "Code is like humor. When you have to explain it, it’s bad."
              </p>
              <p className="text-xs font-bold text-brand-blue mt-3 uppercase tracking-widest">- Cory House</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
