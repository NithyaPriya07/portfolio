import { motion } from 'motion/react';
import { certificates } from '../data';
import { Award, Calendar } from 'lucide-react';

interface CertificatesProps {
  theme: 'dark' | 'light';
}

export default function Certificates({ theme }: CertificatesProps) {
  return (
    <section id="certificates" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-purple dark:text-brand-cyan mb-2">
            06. CERTIFICATIONS
          </h2>
          <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
          }`}>
            Verified Industry Credentials
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                theme === 'dark'
                  ? 'glass-card border-slate-800/80 hover:border-brand-purple/40 hover:shadow-brand-purple/5'
                  : 'glass-card-light border-slate-200/80 hover:border-brand-purple/20 hover:shadow-slate-300/40'
              }`}
            >
              {/* Card Top Block */}
              <div>
                {/* Certificate Icon / Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-slate-800/50 text-brand-cyan group-hover:bg-brand-cyan/10 group-hover:text-brand-cyan'
                      : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 group-hover:text-indigo-700'
                  }`}>
                    <Award size={22} className="transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  
                  {/* Visual Accent */}
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    theme === 'dark'
                      ? 'bg-slate-800/40 text-slate-400 border border-slate-700/50'
                      : 'bg-slate-100 text-slate-500 border border-slate-200'
                  }`}>
                    Credential
                  </span>
                </div>

                {/* Issuer */}
                <div className={`text-xs font-black uppercase tracking-wider mb-2 ${
                  theme === 'dark' ? 'text-brand-purple' : 'text-indigo-600'
                }`}>
                  {cert.issuer}
                </div>

                {/* Certificate Name / Title */}
                <h4 className={`text-lg font-extrabold mb-4 tracking-tight leading-snug transition-colors ${
                  theme === 'dark' ? 'text-slate-100 group-hover:text-white' : 'text-slate-800 group-hover:text-slate-900'
                }`}>
                  {cert.title}
                </h4>
              </div>

              {/* Card Footer Segment */}
              <div className="flex items-center justify-between pt-6 border-t border-dashed border-slate-500/10 mt-6">
                <span className={`text-xs flex items-center gap-1.5 font-semibold ${
                  theme === 'dark' ? 'text-slate-500 group-hover:text-slate-400' : 'text-slate-400 group-hover:text-slate-500'
                } transition-colors`}>
                  <Calendar size={14} />
                  Awarded: {cert.date}
                </span>
                
                {/* Minimal Verified Badge */}
                <span className="text-[10px] font-semibold text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
