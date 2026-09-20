import React from 'react';
import { X, Clock, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image & overlay */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              if (service.fallbackImage && e.currentTarget.src !== service.fallbackImage) {
                e.currentTarget.src = service.fallbackImage;
              }
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header text */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-600 text-[11px] font-semibold tracking-wide uppercase mb-2">
              <Sparkles className="w-3 h-3" />
              <span>{service.categoryLabel}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">{service.title}</h3>
            <p className="text-sm text-slate-200 mt-1 max-w-xl">{service.tagline}</p>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
            <div>
              <span className="text-slate-500 font-medium">Starting From</span>
              <p className="text-base font-bold text-slate-900 font-display">{service.startingPrice}</p>
            </div>
            <div>
              <span className="text-slate-500 font-medium">Session Duration</span>
              <p className="text-sm font-semibold text-slate-800 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                <span>{service.typicalDuration}</span>
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-500 font-medium">Safety Standard</span>
              <p className="text-sm font-semibold text-sky-700 flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Sterile Operatory</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Treatment Overview</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
          </div>

          {/* Specific Procedures Included */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Procedures &amp; Options</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.procedures.map((proc, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-sky-50/60 border border-sky-200/70 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{proc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Indications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">When Is This Recommended?</h4>
            <ul className="space-y-2">
              {service.indications.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Expect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">What To Expect Step-by-Step</h4>
            <div className="space-y-2.5">
              {service.whatToExpect.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 leading-normal">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent pricing note */}
          <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-start gap-2 text-[11px] text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              Prices shown are indicative starting figures for standard cases. A customized, itemized plan is provided after your in-person diagnosis.
            </span>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="text-xs text-slate-500 font-medium">Estimated Starting Fee</span>
            <p className="text-xl font-bold text-slate-900 font-display">{service.startingPrice} <span className="text-xs font-normal text-slate-500">per treatment</span></p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xl transition-colors"
            >
              Back to Services
            </button>
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-700 rounded-xl shadow-xs transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-sky-300" />
              <span>Book This Service</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
