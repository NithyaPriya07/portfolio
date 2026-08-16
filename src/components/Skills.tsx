import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skills } from '../data';
import * as Icons from 'lucide-react';

interface SkillsProps {
  theme: 'dark' | 'light';
}

function SkillIcon({ name, size = 18 }: { name: string; size?: number }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as Record<string, any>)[name];
  if (!IconComponent) return <Icons.Sparkles size={size} />;
  return <IconComponent size={size} />;
}

// Map subcategory to icon and accent colors
const categoryConfig: Record<string, { icon: string; label: string; color: string; bgLight: string; bgDark: string }> = {
  'Languages': {
    icon: 'Code2',
    label: 'Programming Languages',
    color: 'from-purple-500 to-indigo-500',
    bgLight: 'bg-purple-50 text-purple-600 border-purple-200',
    bgDark: 'bg-purple-950/40 text-purple-400 border-purple-800/40'
  },
  'Frontend & Web': {
    icon: 'Layout',
    label: 'Frontend & UI Frameworks',
    color: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50 text-blue-600 border-blue-200',
    bgDark: 'bg-blue-950/40 text-cyan-400 border-blue-800/40'
  },
  'Backend & DB': {
    icon: 'Database',
    label: 'Backend & Databases',
    color: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    bgDark: 'bg-emerald-950/40 text-emerald-400 border-emerald-800/40'
  },
  'Tools & DevOps': {
    icon: 'Wrench',
    label: 'Developer Tools & Platforms',
    color: 'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-50 text-amber-600 border-amber-200',
    bgDark: 'bg-amber-950/40 text-amber-400 border-amber-800/40'
  },
  'Professional Strengths': {
    icon: 'Zap',
    label: 'Core Strengths & Soft Skills',
    color: 'from-pink-500 to-rose-500',
    bgLight: 'bg-rose-50 text-rose-600 border-rose-200',
    bgDark: 'bg-rose-950/40 text-rose-400 border-rose-800/40'
  }
};

function getProficiencyLabel(level: number) {
  if (level >= 93) return 'Expert';
  if (level >= 88) return 'Advanced';
  return 'Proficient';
}

export default function Skills({ theme }: SkillsProps) {
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'bento' | 'matrix'>('bento');

  const categoriesList = ['All', 'Languages', 'Frontend & Web', 'Backend & DB', 'Tools & DevOps', 'Professional Strengths'];

  // Filter skills based on search and category
  const filteredSkills = skills.filter((skill) => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedSubCategory === 'All' || skill.subCategory === selectedSubCategory;
    return matchesSearch && matchesCategory;
  });

  // Group skills by subCategory for Bento view
  const subCategoriesToDisplay = selectedSubCategory === 'All' 
    ? Object.keys(categoryConfig)
    : [selectedSubCategory];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-purple dark:text-brand-cyan mb-2">
            02. TECHNICAL PROFICIENCIES
          </h2>
          <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
          }`}>
            Core Skills & Technical Arsenal
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Search, Filter & View Toggle Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start w-full md:w-auto">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedSubCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  selectedSubCategory === cat
                    ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-lg shadow-brand-purple/20 scale-105'
                    : theme === 'dark'
                    ? 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar & View Mode Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            {/* Search Input */}
            <div className={`relative flex items-center px-3.5 py-2 rounded-xl border text-xs w-full md:w-56 transition-all ${
              theme === 'dark' 
                ? 'bg-slate-900/90 border-slate-800 text-slate-200 focus-within:border-brand-purple/60' 
                : 'bg-slate-100/90 border-slate-200 text-slate-800 focus-within:border-indigo-500'
            }`}>
              <Icons.Search size={15} className={`mr-2 shrink-0 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`} />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none w-full text-xs placeholder:text-slate-500"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="ml-1 text-slate-400 hover:text-slate-200">
                  <Icons.X size={14} />
                </button>
              )}
            </div>

            {/* Layout Mode Toggle */}
            <div className={`p-1 rounded-xl border flex items-center gap-1 ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                onClick={() => setViewMode('bento')}
                title="Bento Category Cards"
                className={`p-2 rounded-lg text-xs transition-colors cursor-pointer ${
                  viewMode === 'bento'
                    ? 'bg-brand-purple text-white'
                    : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icons.LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode('matrix')}
                title="Individual Skill Badges"
                className={`p-2 rounded-lg text-xs transition-colors cursor-pointer ${
                  viewMode === 'matrix'
                    ? 'bg-brand-purple text-white'
                    : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icons.Grid size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* BENTO CATEGORY CARDS VIEW */}
        {viewMode === 'bento' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {subCategoriesToDisplay.map((subCatKey) => {
                const config = categoryConfig[subCatKey];
                const catSkills = filteredSkills.filter((s) => s.subCategory === subCatKey);

                if (catSkills.length === 0) return null;

                return (
                  <motion.div
                    key={subCatKey}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                      theme === 'dark'
                        ? 'glass-card border-slate-800/80 hover:border-slate-700'
                        : 'glass-card-light border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-2xl border ${
                            theme === 'dark' ? config.bgDark : config.bgLight
                          }`}>
                            <SkillIcon name={config.icon} size={20} />
                          </div>
                          <div>
                            <h4 className={`text-base font-extrabold ${
                              theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
                            }`}>
                              {config.label}
                            </h4>
                            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                              {catSkills.length} {catSkills.length === 1 ? 'skill' : 'skills'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Skills List in this Category */}
                      <div className="space-y-4 my-2">
                        {catSkills.map((skill) => (
                          <div key={skill.name} className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs">
                              <span className={`font-bold flex items-center gap-2 ${
                                theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                              }`}>
                                <span className={`p-1 rounded-md ${
                                  theme === 'dark' ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                                }`}>
                                  <SkillIcon name={skill.icon} size={13} />
                                </span>
                                {skill.name}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider bg-slate-500/10 text-slate-500">
                                  {getProficiencyLabel(skill.level)}
                                </span>
                                <span className="font-extrabold text-[11px] text-brand-purple dark:text-brand-cyan">
                                  {skill.level}%
                                </span>
                              </div>
                            </div>

                            {/* Level Bar */}
                            <div className={`h-2 w-full rounded-full overflow-hidden ${
                              theme === 'dark' ? 'bg-slate-800/80' : 'bg-slate-200/80'
                            }`}>
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className={`h-full rounded-full bg-gradient-to-r ${config.color}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* INDIVIDUAL SKILL MATRIX / BADGES VIEW */}
        {viewMode === 'matrix' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => {
                const subCatKey = skill.subCategory || 'Languages';
                const config = categoryConfig[subCatKey] || categoryConfig['Languages'];

                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    className={`p-5 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${
                      theme === 'dark'
                        ? 'glass-card border-slate-800 hover:border-brand-purple/40'
                        : 'glass-card-light border-slate-200 hover:border-indigo-300'
                    }`}
                  >
                    <div>
                      {/* Top Row: Icon + Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                          theme === 'dark' ? 'bg-slate-800 text-brand-cyan' : 'bg-indigo-50 text-indigo-600'
                        }`}>
                          <SkillIcon name={skill.icon} size={20} />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 uppercase tracking-wider">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Skill Name */}
                      <h4 className={`text-sm font-bold tracking-tight mb-1 ${
                        theme === 'dark' ? 'text-slate-100 group-hover:text-white' : 'text-slate-800 group-hover:text-slate-900'
                      }`}>
                        {skill.name}
                      </h4>

                      <p className="text-[10px] font-medium text-slate-500 mb-3">
                        {skill.subCategory}
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className={`h-1.5 w-full rounded-full overflow-hidden ${
                      theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`h-full rounded-full bg-gradient-to-r ${config.color}`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Empty state if search returns nothing */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              No skills found matching "{searchQuery}".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedSubCategory('All'); }}
              className="mt-3 text-xs font-bold text-brand-purple dark:text-brand-cyan underline cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
