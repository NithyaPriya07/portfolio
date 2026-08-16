import { motion } from 'motion/react';
import { blogPosts } from '../data';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

interface BlogProps {
  theme: 'dark' | 'light';
}

export default function Blog({ theme }: BlogProps) {
  return (
    <section id="blog" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-purple dark:text-brand-cyan mb-2">
            11. RECENT WRITINGS
          </h2>
          <h3 className={`text-3xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
          }`}>
            Engineering Insights & Articles
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group rounded-3xl overflow-hidden border flex flex-col md:flex-row transition-all duration-300 hover:shadow-2xl ${
                theme === 'dark'
                  ? 'glass-card border-slate-850 hover:border-brand-purple/30'
                  : 'glass-card-light border-slate-200 hover:border-brand-purple/20'
              }`}
            >
              {/* Blog Image */}
              <div className="h-48 md:h-full md:w-2/5 overflow-hidden relative shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase bg-brand-purple text-white px-2.5 py-1 rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  {/* Timestamp row */}
                  <div className={`flex items-center gap-4 text-xs font-medium ${
                    theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h4 className={`text-base md:text-lg font-bold leading-snug group-hover:text-brand-purple transition-colors duration-200 ${
                    theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
                  }`}>
                    {post.title}
                  </h4>

                  <p className={`text-xs md:text-sm leading-relaxed line-clamp-3 font-light ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-dashed border-slate-500/10">
                  <button
                    id={`blog-read-btn-${post.id}`}
                    className="flex items-center gap-1 text-xs font-bold text-brand-purple group-hover:text-brand-blue transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    Read Article
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
