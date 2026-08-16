import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { personalInfo, skills, projects, timelineData } from '../data';
import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

interface ResumeProps {
  theme: 'dark' | 'light';
}

export default function Resume({ theme }: ResumeProps) {
  const [downloading, setDownloading] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const technicalSkills = skills.filter((s) => s.category === 'technical');
  const softSkills = skills.filter((s) => s.category === 'soft');

  const educationItems = timelineData.filter((t) => t.type === 'education');
  const milestoneItems = timelineData.filter((t) => t.type === 'experience');

  const handleDownload = async () => {
    if (!resumeRef.current) return;
    setDownloading(true);

    const backups: Array<{
      type: 'style' | 'element';
      element: HTMLElement;
      originalValue: string;
    }> = [];

    // Helper to dynamically parse oklch values using the browser's built-in conversion engine
    const convertOklchToRgb = (cssText: string): string => {
      if (!cssText.includes('oklch')) return cssText;
      
      const tempEl = document.createElement('div');
      tempEl.style.display = 'none';
      document.body.appendChild(tempEl);

      const cache = new Map<string, string>();

      const result = cssText.replace(/oklch\([^)]+\)/g, (match) => {
        if (cache.has(match)) return cache.get(match)!;
        try {
          tempEl.style.color = '';
          tempEl.style.color = match;
          const computed = window.getComputedStyle(tempEl).color;
          if (computed && (computed.startsWith('rgb') || computed.startsWith('rgba'))) {
            cache.set(match, computed);
            return computed;
          }
        } catch (e) {
          // Fall back gracefully
        }
        const fallback = 'rgb(120, 120, 120)';
        cache.set(match, fallback);
        return fallback;
      });

      document.body.removeChild(tempEl);
      return result;
    };

    try {
      // 1. Process inline <style> tags to convert oklch to rgb for html2canvas
      const styleElements = Array.from(document.querySelectorAll('style'));
      for (const style of styleElements) {
        const text = style.textContent || '';
        if (text.includes('oklch')) {
          backups.push({ type: 'style', element: style, originalValue: text });
          style.textContent = convertOklchToRgb(text);
        }
      }

      // 2. Also inject a temp style tag to translate tailwind variables
      const stylesheets = Array.from(document.styleSheets);
      let globalCssText = '';
      for (const sheet of stylesheets) {
        try {
          const rules = Array.from(sheet.cssRules);
          for (const rule of rules) {
            globalCssText += rule.cssText + '\n';
          }
        } catch (e) {
          // Bypass cross-origin stylesheet errors
        }
      }

      if (globalCssText.includes('oklch')) {
        const tempStyle = document.createElement('style');
        tempStyle.setAttribute('id', 'temp-html2canvas-style');
        tempStyle.textContent = convertOklchToRgb(globalCssText);
        document.head.appendChild(tempStyle);
      }

      // Optimize page styling for rendering
      const element = resumeRef.current;
      const originalBoxShadow = element.style.boxShadow;
      const originalBorderRadius = element.style.borderRadius;
      const originalBorder = element.style.border;

      element.style.boxShadow = 'none';
      element.style.borderRadius = '0px';
      element.style.border = 'none';

      const canvas = await html2canvas(element, {
        scale: 2.5, // High resolution scale
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      // Restore styling
      element.style.boxShadow = originalBoxShadow;
      element.style.borderRadius = originalBorderRadius;
      element.style.border = originalBorder;

      // Generate PDF
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Sudireddy_Nithya_Priya_Resume.pdf`);

    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      // Restore backups
      for (const backup of backups) {
        if (backup.type === 'style') {
          backup.element.textContent = backup.originalValue;
        }
      }
      const tempStyle = document.getElementById('temp-html2canvas-style');
      if (tempStyle) {
        tempStyle.remove();
      }
      setDownloading(false);
    }
  };

  return (
    <section id="resume" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-purple dark:text-brand-cyan mb-2">
              07. MY RESUME
            </h2>
            <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
            }`}>
              Academic Profile & Resume
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-blue mt-4 rounded-full" />
          </div>

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/25 transition-all active:scale-98 disabled:opacity-50 cursor-pointer"
          >
            <Download size={16} className={downloading ? 'animate-bounce' : ''} />
            {downloading ? 'Generating PDF...' : 'Download High-Quality PDF'}
          </button>
        </div>

        {/* Paper Container - styled strictly as a white A4 paper */}
        <div className="overflow-x-auto pb-4">
          <div 
            ref={resumeRef}
            className="w-[210mm] min-h-[297mm] p-12 mx-auto shadow-2xl relative text-left"
            style={{ 
              boxSizing: 'border-box',
              backgroundColor: '#ffffff',
              color: '#1e293b',
              border: '1px solid #e2e8f0'
            }}
          >
            {/* Main Header Row */}
            <div className="flex justify-between items-start pb-6 mb-6" style={{ borderBottom: '2px solid #cbd5e1' }}>
              <div className="max-w-[65%]">
                <h1 className="text-3xl font-extrabold tracking-tight leading-tight uppercase font-sans" style={{ color: '#0f172a' }}>
                  Sudireddy Nithya Priya
                </h1>
                <p className="text-xs font-extrabold tracking-wider uppercase mt-1" style={{ color: '#4338ca' }}>
                  {personalInfo.title}
                </p>
              </div>

              {/* Contact info card inside header */}
              <div className="text-right text-[10px] space-y-1.5 font-medium leading-none" style={{ color: '#475569' }}>
                <div className="flex items-center justify-end gap-1.5">
                  <span>Email: {personalInfo.email}</span>
                  <Mail size={10} style={{ color: '#94a3b8' }} />
                </div>
                <div className="flex items-center justify-end gap-1.5">
                  <span>Phone: {personalInfo.phone}</span>
                  <Phone size={10} style={{ color: '#94a3b8' }} />
                </div>
                <div className="flex items-center justify-end gap-1.5">
                  <span>Location: {personalInfo.location}</span>
                  <MapPin size={10} style={{ color: '#94a3b8' }} />
                </div>
                <div className="flex items-center justify-end gap-1.5">
                  <span>GitHub: github.com/NithyaPriya07</span>
                  <Github size={10} style={{ color: '#94a3b8' }} />
                </div>
                <div className="flex items-center justify-end gap-1.5">
                  <span>LinkedIn: linkedin.com/in/sudireddy-nithya-priya-b18963355/</span>
                  <Linkedin size={10} style={{ color: '#94a3b8' }} />
                </div>
              </div>
            </div>

            {/* Split Dual-Column Layout */}
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column (Span 5) */}
              <div className="col-span-5 space-y-6 pr-6" style={{ borderRight: '1px solid #e2e8f0' }}>
                
                {/* Career Objective Section */}
                <div className="space-y-2">
                  <h2 className="text-xs font-black tracking-widest uppercase pb-1" style={{ borderBottom: '2px solid #cbd5e1', color: '#0f172a' }}>
                    Career Objective
                  </h2>
                  <p className="text-[10px] leading-relaxed font-normal" style={{ color: '#475569' }}>
                    {personalInfo.careerObjective}
                  </p>
                </div>

                {/* Technical Core Section */}
                <div className="space-y-2">
                  <h2 className="text-xs font-black tracking-widest uppercase pb-1" style={{ borderBottom: '2px solid #cbd5e1', color: '#0f172a' }}>
                    Technical Core
                  </h2>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {technicalSkills.map((skill) => (
                      <span 
                        key={skill.name}
                        className="px-2.5 py-1 rounded text-[9px] font-bold tracking-wide"
                        style={{
                          backgroundColor: '#f1f5f9',
                          color: '#1e293b',
                          border: '1px solid #e2e8f0'
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Attributes Section */}
                <div className="space-y-2">
                  <h2 className="text-xs font-black tracking-widest uppercase pb-1" style={{ borderBottom: '2px solid #cbd5e1', color: '#0f172a' }}>
                    Core Attributes
                  </h2>
                  <ul className="space-y-1.5 text-[10px] font-medium pl-2" style={{ color: '#475569' }}>
                    {softSkills.map((skill) => (
                      <li key={skill.name} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#4f46e5' }} />
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Education Credentials Section */}
                <div className="space-y-3">
                  <h2 className="text-xs font-black tracking-widest uppercase pb-1" style={{ borderBottom: '2px solid #cbd5e1', color: '#0f172a' }}>
                    Education Credentials
                  </h2>
                  <div className="space-y-4">
                    {educationItems.map((edu) => (
                      <div key={edu.id} className="space-y-0.5">
                        <h3 className="text-[10px] font-bold leading-tight" style={{ color: '#0f172a' }}>
                          {edu.title}
                        </h3>
                        <p className="text-[9px] font-medium leading-none" style={{ color: '#475569' }}>
                          {edu.subTitle}
                        </p>
                        <p className="text-[8px] font-semibold uppercase tracking-wider" style={{ color: '#94a3b8' }}>
                          {edu.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column (Span 7) */}
              <div className="col-span-7 space-y-6">

                {/* Key Technical Projects Section */}
                <div className="space-y-3">
                  <h2 className="text-xs font-black tracking-widest uppercase pb-1" style={{ borderBottom: '2px solid #cbd5e1', color: '#0f172a' }}>
                    Key Technical Projects
                  </h2>
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.id} className="space-y-1">
                        <div className="flex justify-between items-baseline gap-2">
                          <h3 className="text-[10px] font-bold leading-tight" style={{ color: '#0f172a' }}>
                            {project.title}
                          </h3>
                          <span 
                            className="text-[8px] font-bold px-1.5 py-0.5 rounded shrink-0"
                            style={{
                              color: '#475569',
                              backgroundColor: '#f1f5f9',
                              border: '1px solid #e2e8f0'
                            }}
                          >
                            {project.tech.slice(0, 3).join(', ')}
                          </span>
                        </div>
                        <p className="text-[9px] leading-relaxed font-normal" style={{ color: '#475569' }}>
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Work Experience & Milestones Section */}
                <div className="space-y-3">
                  <h2 className="text-xs font-black tracking-widest uppercase pb-1" style={{ borderBottom: '2px solid #cbd5e1', color: '#0f172a' }}>
                    Work Experience & Milestones
                  </h2>
                  <div className="space-y-4">
                    {milestoneItems.map((milestone) => (
                      <div key={milestone.id} className="space-y-1">
                        <div className="flex justify-between items-baseline gap-2">
                          <h3 className="text-[10px] font-bold leading-tight" style={{ color: '#0f172a' }}>
                            {milestone.title}
                          </h3>
                          <span className="text-[8px] font-semibold uppercase tracking-wider shrink-0" style={{ color: '#94a3b8' }}>
                            {milestone.duration}
                          </span>
                        </div>
                        <p className="text-[9px] font-bold leading-none italic" style={{ color: '#4338ca' }}>
                          {milestone.subTitle}
                        </p>
                        <p className="text-[9px] leading-relaxed font-normal" style={{ color: '#475569' }}>
                          {milestone.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Resume Footer (Signature stamp at bottom center) */}
            <div 
              className="absolute bottom-6 left-12 right-12 flex justify-between items-center pt-4 text-[8px] font-mono"
              style={{ borderTop: '1px solid #e2e8f0', color: '#94a3b8' }}
            >
              <span>Verified Academic Profile of Sudireddy Nithya Priya</span>
              <span>Generated dynamically on June 26, 2026</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
