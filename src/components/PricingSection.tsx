import React, { useState } from 'react';
import { IndianRupee, AlertCircle, Calculator, Check, Calendar, ArrowRight, HelpCircle } from 'lucide-react';
import { PRICING_LIST } from '../data/dentalData';

interface PricingSectionProps {
  onBookTreatment: (treatmentName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onBookTreatment }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(['Dental Consultation', 'Teeth Cleaning']);

  const toggleItem = (treatment: string) => {
    if (selectedItems.includes(treatment)) {
      setSelectedItems(selectedItems.filter(item => item !== treatment));
    } else {
      setSelectedItems([...selectedItems, treatment]);
    }
  };

  const estimatedTotal = selectedItems.reduce((sum, title) => {
    const found = PRICING_LIST.find(p => p.treatment === title);
    return sum + (found ? found.numericPrice : 0);
  }, 0);

  return (
    <section id="pricing" className="py-20 bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-900 text-xs font-semibold uppercase tracking-wider">
            Clear &amp; Upfront
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Sample Treatment Pricing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Transparent pricing with no surprise hospital charges or hidden fees. We discuss all costs before commencing care.
          </p>
        </div>

        {/* Indicative Disclaimer Note */}
        <div className="mt-8 max-w-3xl mx-auto p-4 bg-amber-50/90 border border-amber-200/90 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-amber-900 shadow-2xs">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Indicative Pricing Notice</p>
            <p className="text-amber-800 mt-0.5">
              Prices shown are indicative. Final treatment costs may vary depending on individual diagnosis and treatment requirements.
            </p>
          </div>
        </div>

        {/* Pricing Layout: Table & Quick Estimator */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Table (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">Standard Procedure Fee Schedule</h3>
                <p className="text-xs text-slate-500">Benchmark rates for top dental treatments in Gurugram</p>
              </div>
              <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200/60">
                INR (₹)
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200/80 text-[11px] uppercase tracking-wider">
                    <th className="py-3.5 px-4 sm:px-6">Treatment</th>
                    <th className="py-3.5 px-3">Category</th>
                    <th className="py-3.5 px-4">Starting From</th>
                    <th className="py-3.5 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {PRICING_LIST.map((item) => (
                    <tr key={item.treatment} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-4 sm:px-6">
                        <div className="font-bold text-slate-900">{item.treatment}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{item.includes}</div>
                      </td>
                      <td className="py-4 px-3">
                        <span className="inline-block text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-bold text-slate-900 text-sm font-display whitespace-nowrap">
                        {item.startingFrom}
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <button
                          onClick={() => onBookTreatment(item.treatment)}
                          className="text-xs font-semibold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200/60 px-3 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1"
                        >
                          <span>Book</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 text-[11px] text-slate-500 border-t border-slate-100 flex items-center justify-between">
              <span>*Consultation fee of ₹500 is adjusted against treatment upon confirmation.</span>
              <span className="font-semibold text-slate-700">EMI options available for Implants &amp; Aligners</span>
            </div>
          </div>

          {/* Interactive Cost Estimator Card (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-display">Treatment Cost Estimator</h3>
                <p className="text-[11px] text-slate-500">Select procedures to simulate an estimate</p>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {PRICING_LIST.map((item) => {
                const isSelected = selectedItems.includes(item.treatment);
                return (
                  <button
                    key={item.treatment}
                    onClick={() => toggleItem(item.treatment)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition-all border ${
                      isSelected
                        ? 'bg-sky-50/80 border-sky-300 text-slate-900 font-medium'
                        : 'bg-slate-50 hover:bg-slate-100/70 border-slate-200/60 text-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                        isSelected ? 'bg-sky-600 text-white' : 'border border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                      <span className="line-clamp-1">{item.treatment}</span>
                    </div>
                    <span className="font-semibold text-slate-800 shrink-0 font-display">
                      {item.startingFrom}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Estimated Total Calculation */}
            <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Selected Procedures ({selectedItems.length}):</span>
                <span>Subtotal</span>
              </div>
              <div className="flex items-baseline justify-between pt-1 border-t border-slate-800">
                <span className="text-sm font-semibold">Estimated From:</span>
                <span className="text-2xl font-extrabold text-sky-300 font-display">
                  ₹{estimatedTotal.toLocaleString('en-IN')}*
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                *Approximate starting cost. Final diagnostic evaluation will confirm the exact plan.
              </p>
            </div>

            {/* Direct CTA */}
            <button
              onClick={() => onBookTreatment(selectedItems.length > 0 ? selectedItems.join(', ') : 'Dental Consultation')}
              className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-xl text-xs transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment for Estimate</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
