import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../data';

interface FAQProps {
  theme: 'dark' | 'light';
}

export default function FAQ({ theme }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 relative bg-slate-950/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-purple dark:text-brand-cyan mb-2">
            08. INQUIRIES
          </h2>
          <h3 className={`text-3xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
          }`}>
            Frequently Asked Questions
          </h3>
          <div className="h-1 w-16 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? theme === 'dark'
                      ? 'border-brand-purple/40 bg-slate-900/50'
                      : 'border-brand-purple/20 bg-slate-50'
                    : theme === 'dark'
                    ? 'border-slate-850 bg-slate-950/40 hover:border-slate-800'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Accordion header button */}
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-brand-purple shrink-0" />
                    <span className={`font-bold text-sm md:text-base ${
                      theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-brand-purple' : ''
                    }`}
                  />
                </button>

                {/* Accordion answer content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className={`px-6 pb-6 pt-1 text-sm leading-relaxed border-t border-dashed ${
                        theme === 'dark'
                          ? 'text-slate-400 border-slate-900'
                          : 'text-slate-600 border-slate-100'
                      }`}>
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
