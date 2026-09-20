import React from 'react';
import { Cpu, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINIC_TECHNOLOGY } from '../data/dentalData';

export const TechnologySection: React.FC = () => {
  return (
    <section id="technology" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-900 text-xs font-semibold tracking-wide">
            <Cpu className="w-3.5 h-3.5 text-sky-600" />
            <span>Digital Precision Dentistry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Modern Clinical Technology &amp; Safety
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We invest in advanced diagnostic and sterilization equipment to make treatments quicker, more precise, and remarkably comfortable.
          </p>
        </div>

        {/* Tech Features Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLINIC_TECHNOLOGY.map((tech, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    0{idx + 1}
                  </div>
                  <span className="text-[11px] font-semibold bg-sky-50 text-sky-800 px-2.5 py-1 rounded-md border border-sky-200/60">
                    High Precision
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                  {tech.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-start gap-2 text-xs text-slate-800 bg-sky-50/80 border border-sky-200/60 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Patient Benefit:</strong> {tech.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sterilization Highlight Banner */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>International Infection Control</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-display">7-Step Sterilization &amp; Disposable Protocol</h4>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Every instrument undergoes ultrasonic cleaning, individual vacuum pouching, and Class-B autoclave sterilization before being opened fresh right in front of you.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="bg-slate-800/80 border border-slate-700 px-4 py-3 rounded-xl text-center">
              <span className="text-2xl font-bold text-sky-300 font-display block">100%</span>
              <span className="text-[11px] text-slate-400">Class-B Sterile</span>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 px-4 py-3 rounded-xl text-center">
              <span className="text-2xl font-bold text-sky-400 font-display block">0%</span>
              <span className="text-[11px] text-slate-400">Cross-Infection</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
