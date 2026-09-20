import React from 'react';
import { Cpu, GraduationCap, HeartHandshake, Smile, FileText, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/dentalData';

interface WhyChooseUsProps {
  onBookClick: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onBookClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-sky-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-sky-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-sky-600" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-sky-600" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-sky-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-sky-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-900 text-xs font-semibold uppercase tracking-wider">
            Patient First Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Why Choose Dentalinic?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We blend cutting-edge medical technology with ethical, gentle dental care to ensure your visits are completely stress-free.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-lg transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-sky-600 flex items-center justify-center transition-colors">
                    <span className="group-hover:text-white transition-colors">
                      {getIcon(item.icon)}
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-sky-50 group-hover:text-sky-700 transition-colors">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5 font-display group-hover:text-sky-700 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-sky-700 group-hover:text-sky-800">
                <span>Standard at Dentalinic</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900 font-display">Ready to experience gentle, modern dentistry?</h4>
            <p className="text-sm text-slate-600">Consult with our chief dental surgeons in Sector 12, Gurugram.</p>
          </div>
          <button
            onClick={onBookClick}
            className="shrink-0 bg-slate-900 hover:bg-sky-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
          >
            Schedule Your Visit Today
          </button>
        </div>

      </div>
    </section>
  );
};
