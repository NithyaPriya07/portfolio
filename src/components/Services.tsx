import { motion } from 'motion/react';
import { services } from '../data';
import * as Icons from 'lucide-react';

interface ServicesProps {
  theme: 'dark' | 'light';
}

function ServiceIcon({ name, size = 24 }) {
  const IconComponent = Icons[name];
  // Fallback to standard code icon if name not found
  if (!IconComponent) return <Icons.Code2 size={size} />;
  return <IconComponent size={size} />;
}

export default function Services({ theme }: ServicesProps) {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-purple dark:text-brand-cyan mb-2">
            04. MY SERVICES
          </h2>
          <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
          }`}>
            Professional Development Solutions
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-8 rounded-3xl border flex flex-col group transition-all duration-300 hover:shadow-2xl ${
                theme === 'dark'
                  ? 'glass-card border-slate-800 hover:border-brand-purple/40 hover:shadow-brand-purple/5'
                  : 'glass-card-light border-slate-200 hover:border-brand-purple/30 hover:shadow-slate-300/40'
              }`}
            >
              {/* Icon Container with glowing background */}
              <div className={`p-4 rounded-2xl w-fit mb-6 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900 border border-slate-800 text-brand-purple group-hover:bg-brand-purple group-hover:text-white'
                  : 'bg-slate-100 border border-slate-200 text-brand-purple group-hover:bg-brand-purple group-hover:text-white'
              } group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-purple/20`}>
                <ServiceIcon name={service.icon} />
              </div>

              {/* Title & Description */}
              <h4 className={`text-lg font-bold mb-3 tracking-tight ${
                theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
              }`}>
                {service.title}
              </h4>
              <p className={`text-sm leading-relaxed ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {service.description}
              </p>

              {/* Arrow Accent */}
              <div className="flex items-center gap-1.5 mt-8 text-xs font-bold text-brand-purple uppercase tracking-wider opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                Learn More
                <Icons.ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
