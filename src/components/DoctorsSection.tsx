import React from 'react';
import { Award, Calendar, Quote, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { DOCTORS } from '../data/dentalData';

interface DoctorsSectionProps {
  onSelectDoctorForBooking: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onSelectDoctorForBooking }) => {
  return (
    <section id="doctors" className="py-20 bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-900 text-xs font-semibold uppercase tracking-wider">
            Clinical Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Meet Our Dental Specialists
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our qualified clinicians bring together gentle surgical precision, artistic smile design, and a patient-first ethos.
          </p>
        </div>

        {/* Disclaimer Banner for dummy website data */}
        <div className="mt-8 max-w-2xl mx-auto p-3 bg-amber-50/90 border border-amber-200 rounded-xl flex items-center justify-center gap-2 text-xs text-amber-900 text-center">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Note:</strong> Staff names and qualifications are dummy website-development data provided for preview purposes.
          </span>
        </div>

        {/* Doctor Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DOCTORS.map((doctor) => {
            const isRuchita = doctor.id === 'dr-ruchita-pratihar';

            return (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo & Doctor Header */}
                  <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start border-b border-slate-100">
                    <div className="relative shrink-0">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-sky-500/80 shadow-md">
                        <img
                          src={doctor.photo}
                          alt={doctor.name}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            if (doctor.fallbackPhoto && e.currentTarget.src !== doctor.fallbackPhoto) {
                              e.currentTarget.src = doctor.fallbackPhoto;
                            }
                          }}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      
                      {isRuchita && (
                        <div className="absolute -bottom-2 -right-2 bg-slate-900 text-sky-300 p-1.5 rounded-lg shadow-sm border border-slate-700" title="Featured Photo in Clinic Operatory">
                          <Sparkles className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    <div className="text-center sm:text-left space-y-1.5">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <h3 className="text-2xl font-bold text-slate-900 font-display">
                          {doctor.name}
                        </h3>
                        <span className="text-xs font-semibold bg-sky-50 text-sky-800 px-2 py-0.5 rounded-md border border-sky-200/60">
                          {doctor.role}
                        </span>
                      </div>

                      <p className="text-xs font-medium text-slate-500">
                        {doctor.qualifications}
                      </p>

                      {/* Explicit mention of uploaded photo for Dr. Ruchita Pratihar as required */}
                      {doctor.photoNote && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50/90 text-sky-900 text-[11px] font-medium border border-sky-200/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                          <span>{doctor.photoNote}</span>
                        </div>
                      )}

                      <div className="pt-2 text-xs text-slate-600 space-y-1">
                        <p><strong className="text-slate-800">Experience:</strong> {doctor.experience}</p>
                        <p><strong className="text-slate-800">Schedule:</strong> {doctor.availableDays}</p>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Philosophy Quote */}
                  <div className="p-6 sm:p-8 bg-slate-50/50">
                    <div className="relative pl-6 text-xs sm:text-sm italic text-slate-700 leading-relaxed">
                      <Quote className="w-4 h-4 text-sky-600/80 absolute left-0 top-0" />
                      {doctor.quote}
                    </div>

                    {/* Specialties */}
                    <div className="mt-5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Clinical Focus:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {doctor.specialties.map((spec, i) => (
                          <span
                            key={i}
                            className="text-xs bg-white border border-slate-200/90 text-slate-700 px-2.5 py-1 rounded-lg shadow-2xs"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Action */}
                <div className="p-6 bg-white border-t border-slate-100 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium">Consultation Fee</span>
                    <p className="text-base font-bold text-slate-900 font-display">{doctor.consultationFee}</p>
                  </div>

                  <button
                    onClick={() => onSelectDoctorForBooking(doctor.name)}
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-sky-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-sky-300" />
                    <span>Book with {doctor.name.split(' ')[1] || doctor.name}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
