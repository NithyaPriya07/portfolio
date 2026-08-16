import { motion } from 'motion/react';
import { timelineData } from '../data';
import { GraduationCap, Briefcase, Calendar, Award } from 'lucide-react';

interface TimelineProps {
  theme: 'dark' | 'light';
}

export default function Timeline({ theme }: TimelineProps) {
  const educationItems = timelineData.filter((item) => item.type === 'education');
  const experienceItems = timelineData.filter((item) => item.type === 'experience');

  return (
    <section id="timeline" className="py-24 px-6 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-purple dark:text-brand-cyan mb-2">
            05. PATHWAYS
          </h2>
          <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
          }`}>
            Education & Career Milestones
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* Vertical Separator Divider on Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-dashed bg-slate-500/10 -translate-x-1/2" />

          {/* Education Timeline */}
          <div className="space-y-8">
            <h4 className={`text-xl font-bold flex items-center gap-3 mb-8 pb-3 border-b ${
              theme === 'dark'
                ? 'text-slate-200 border-slate-900/60'
                : 'text-slate-800 border-slate-200'
            }`}>
              <div className="p-2 rounded-xl bg-brand-purple/10 text-brand-purple">
                <GraduationCap size={20} />
              </div>
              Education Timeline
            </h4>

            <div className="relative pl-6 sm:pl-8 border-l border-brand-purple/20 space-y-8">
              {educationItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline bullet */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] p-1.5 rounded-full border transition-all ${
                    idx === 0
                      ? 'bg-brand-purple border-brand-purple text-white animate-pulse'
                      : theme === 'dark'
                      ? 'bg-slate-950 border-slate-800 text-slate-400'
                      : 'bg-white border-slate-300 text-slate-500'
                  }`}>
                    <GraduationCap size={12} />
                  </div>

                  {/* Node Content Card */}
                  <div className={`p-6 rounded-3xl border transition-all hover:scale-[1.01] ${
                    theme === 'dark'
                      ? 'glass-card border-slate-800/80 hover:border-brand-purple/30'
                      : 'glass-card-light border-slate-200 hover:border-brand-purple/20'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-brand-purple flex items-center gap-1">
                        <Calendar size={12} />
                        {item.duration}
                      </span>
                      {idx === 0 && (
                        <span className="text-[10px] font-bold uppercase bg-brand-purple/15 text-brand-purple px-2 py-0.5 rounded-full">
                          Ongoing
                        </span>
                      )}
                    </div>
                    <h5 className={`font-bold text-base mb-1 ${
                      theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
                    }`}>
                      {item.title}
                    </h5>
                    <p className={`text-sm font-semibold mb-3 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.subTitle}
                    </p>
                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            <h4 className={`text-xl font-bold flex items-center gap-3 mb-8 pb-3 border-b ${
              theme === 'dark'
                ? 'text-slate-200 border-slate-900/60'
                : 'text-slate-800 border-slate-200'
            }`}>
              <div className="p-2 rounded-xl bg-brand-blue/10 text-brand-blue">
                <Briefcase size={20} />
              </div>
              Professional Experience
            </h4>

            <div className="relative pl-6 sm:pl-8 border-l border-brand-blue/20 space-y-8">
              {experienceItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline bullet */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] p-1.5 rounded-full border transition-all ${
                    idx === 0
                      ? 'bg-brand-blue border-brand-blue text-white animate-pulse'
                      : theme === 'dark'
                      ? 'bg-slate-950 border-slate-800 text-slate-400'
                      : 'bg-white border-slate-300 text-slate-500'
                  }`}>
                    <Briefcase size={12} />
                  </div>

                  {/* Node Content Card */}
                  <div className={`p-6 rounded-3xl border transition-all hover:scale-[1.01] ${
                    theme === 'dark'
                      ? 'glass-card border-slate-800/80 hover:border-brand-blue/30'
                      : 'glass-card-light border-slate-200 hover:border-brand-blue/20'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-brand-blue flex items-center gap-1">
                        <Calendar size={12} />
                        {item.duration}
                      </span>
                    </div>
                    <h5 className={`font-bold text-base mb-1 ${
                      theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
                    }`}>
                      {item.title}
                    </h5>
                    <p className={`text-sm font-semibold mb-3 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.subTitle}
                    </p>
                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
