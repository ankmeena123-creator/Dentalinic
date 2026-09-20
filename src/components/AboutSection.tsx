import React from 'react';
import { Heart, ShieldCheck, Sparkles, Target, Compass, Clock, Award } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/dentalData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage / Story */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
                <img
                  src={CLINIC_IMAGES.aboutInterior}
                  alt="Dentalinic Care Team in Action"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (e.currentTarget.src !== CLINIC_IMAGES.aboutInteriorFallback) {
                      e.currentTarget.src = CLINIC_IMAGES.aboutInteriorFallback;
                    }
                  }}
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl border border-slate-700 max-w-[240px]">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase mb-1">
                  <Award className="w-4 h-4" />
                  <span>Est. {CLINIC_INFO.founded}</span>
                </div>
                <h4 className="text-base font-bold font-display">Multi-Specialty Dental Clinic</h4>
                <p className="text-[11px] text-slate-300 mt-1">
                  Gurugram, Delhi NCR's modern destination for pain-free dentistry.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Core Values */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-900 text-xs font-semibold uppercase tracking-wider">
              About Dentalinic
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Healthy Smiles. Confident You.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Founded in 2026, <strong>Dentalinic</strong> is a multi-specialty dental practice dedicated to breaking the anxiety traditionally associated with dental visits. Situated at Smile Plaza in Sector 12, Gurugram, we bring together leading specialists, computer-guided diagnostics, and warm personalized hospitality under one roof.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To provide comfortable, ethical, and accessible dental healthcare utilizing modern precision technology.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <Compass className="w-4 h-4" />
                  <span>Our Approach</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We walk you through clear digital 3D scans and itemized treatment options before starting any clinical work.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Class-B Hospital Sterilization</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-sky-600" />
                <span>Zero-Pain Anesthesia</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Convenient Evening &amp; Weekend Slots</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
