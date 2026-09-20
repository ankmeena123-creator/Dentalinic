import React from 'react';
import { Users, Award, Stethoscope, Sparkles, Star, Info } from 'lucide-react';
import { SAMPLE_STATISTICS } from '../data/dentalData';

export const StatsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-sky-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-sky-600" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-sky-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-sky-600" />;
      case 'Star':
        return <Star className="w-5 h-5 text-amber-500 fill-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Sample Flag */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 gap-2 border-b border-slate-100">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Clinic Milestones &amp; Patient Trust</h2>
            <p className="text-xl font-bold text-slate-900 font-display">Dedicated to Healthy Smiles Across Gurugram</p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Sample Statistics (Indicative Developer Figures)</span>
          </div>
        </div>

        {/* 5 Stats Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {SAMPLE_STATISTICS.map((stat) => (
            <div
              key={stat.id}
              className="bg-slate-50/70 hover:bg-white hover:shadow-md transition-all p-5 rounded-2xl border border-slate-200/70 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-white group-hover:bg-sky-50 border border-slate-200/60 group-hover:border-sky-200 transition-colors shadow-2xs">
                  {getIcon(stat.icon)}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Metrics</span>
              </div>
              
              <div>
                <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-display group-hover:text-sky-700 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-1">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Note */}
        <p className="mt-4 text-center text-xs text-slate-400 italic">
          *Note: Statistics represent sample portfolio data for the Dentalinic practice preview.
        </p>
      </div>
    </section>
  );
};
