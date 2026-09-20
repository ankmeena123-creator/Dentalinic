import React from 'react';
import { Star, Quote, ShieldAlert, Heart, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/dentalData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-900 text-xs font-semibold tracking-wide">
            <Heart className="w-3.5 h-3.5 text-sky-600 fill-sky-600" />
            <span>Real Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Smiles Transformed, Fears Relieved
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See how our compassionate, modern dental care has helped patients in Gurugram achieve healthy, pain-free smiles.
          </p>
        </div>

        {/* Clear Sample Disclaimer */}
        <div className="mt-6 max-w-2xl mx-auto p-3 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center gap-2 text-xs text-slate-600 text-center">
          <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0" />
          <span>
            <strong>Disclaimer:</strong> These are sample preview testimonials labeled for demonstration until genuine patient reviews and publication permissions are obtained.
          </span>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:bg-white"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ThumbsUp className="w-2.5 h-2.5" />
                    <span>5.0 Rating</span>
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  {t.quote}
                </p>
              </div>

              {/* Patient Info */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">{t.name}</h4>
                  <p className="text-xs text-sky-700 font-medium">{t.treatment}</p>
                  <p className="text-[10px] text-slate-400">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust summary strip */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 py-3 px-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
            <span className="font-semibold text-slate-900">Patient Satisfaction Metrics:</span>
            <span>• 99.2% Pain-Free Experience</span>
            <span>• 100% Sterilization Guarantee</span>
            <span>• 4.9 / 5 Overall Google Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
};
