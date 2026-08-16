import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data';

interface ProjectsProps {
  theme: 'dark' | 'light';
}

export default function Projects({ theme }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-purple dark:text-brand-cyan mb-2">
            03. RECENT WORK
          </h2>
          <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
          }`}>
            Featured Engineering Projects
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-3xl overflow-hidden border flex flex-col h-full transition-all duration-300 hover:shadow-2xl ${
                theme === 'dark'
                  ? 'glass-card border-slate-800 hover:border-brand-purple/40 hover:shadow-brand-purple/5'
                  : 'glass-card-light border-slate-200 hover:border-brand-purple/30 hover:shadow-slate-300/60'
              }`}
            >
                {/* Card Top Category / Header Row */}
                <div className="p-6 pb-0 flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full border ${
                    theme === 'dark'
                      ? 'bg-slate-900/80 text-brand-cyan border-brand-cyan/20'
                      : 'bg-indigo-50 text-indigo-600 border-indigo-200'
                  }`}>
                    Engineering Project
                  </span>

                  {/* Top Links */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg transition-colors ${
                          theme === 'dark'
                            ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                        title="GitHub Repository"
                        referrerPolicy="no-referrer"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg transition-colors ${
                          theme === 'dark'
                            ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                        title="Live Demo"
                        referrerPolicy="no-referrer"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className={`text-lg font-bold mb-2 tracking-tight group-hover:text-brand-purple transition-colors duration-200 ${
                    theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
                  }`}>
                    {project.title}
                  </h4>
                  <p className={`text-sm leading-relaxed mb-6 flex-grow ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[10px] font-mono font-semibold px-2 py-1 rounded-lg ${
                          theme === 'dark'
                            ? 'bg-slate-900/60 text-slate-300 border border-slate-800/80'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Primary Link Row */}
                  {(project.githubUrl || project.demoUrl) && (
                    <div className="flex gap-3 pt-4 border-t border-dashed border-slate-500/10 mt-auto">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                            theme === 'dark'
                              ? 'border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-slate-300'
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                          }`}
                          referrerPolicy="no-referrer"
                        >
                          <Github size={14} />
                          Source Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-md shadow-brand-purple/10 hover:shadow-lg hover:shadow-brand-purple/20 transition-all hover:scale-[1.02] active:scale-95"
                          referrerPolicy="no-referrer"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
