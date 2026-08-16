import { motion } from 'motion/react';

interface LoaderProps {
  theme: 'dark' | 'light';
}

export default function Loader({ theme }: LoaderProps) {
  return (
    <div className={`fixed inset-0 z-100 flex flex-col items-center justify-center transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#020617]' : 'bg-slate-50'
    }`}>
      <div className="relative">
        {/* Outer glowing halo */}
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-purple via-brand-blue to-brand-cyan opacity-40 blur-md animate-pulse-slow" />
        
        {/* Spinner border */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-cyan animate-spin-slow opacity-25" />

        {/* Branding Container */}
        <div className={`h-16 w-16 rounded-2xl flex items-center justify-center text-2xl font-extrabold text-white shadow-xl relative z-10 ${
          theme === 'dark'
            ? 'bg-slate-950 border border-slate-900'
            : 'bg-slate-900 border border-slate-800'
        }`}>
          NP
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-1.5 text-center">
        <h4 className={`text-sm font-bold tracking-widest uppercase ${
          theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
        }`}>
          Nithya Priya
        </h4>
        <p className={`text-[10px] font-mono tracking-wider ${
          theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
        }`}>
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}
