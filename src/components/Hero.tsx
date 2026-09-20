import React from 'react';
import { Calendar, Phone, MessageCircle, Star, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { CLINIC_INFO, DOCTORS, CLINIC_IMAGES } from '../data/dentalData';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  const drRuchita = DOCTORS[0];

  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-slate-100/80 via-white to-slate-50 border-b border-slate-200/70">
      {/* Decorative ambient background subtle circles */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-blue-100/35 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Pill / Top Tile */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-900 text-xs font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Dr. Ruchita Pratihar (BDS) • Multi-Specialty Dental Clinic • Sector 12, Gurugram</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-display">
              Your Smile Deserves <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-700 to-slate-900">
                Expert Care
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Modern dentistry, compassionate care, and personalized treatment plans — all under one roof.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-sky-700 text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-md shadow-slate-900/10 hover:shadow-lg transition-all duration-200 active:scale-98"
              >
                <Calendar className="w-5 h-5 text-sky-300" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-300 shadow-xs hover:border-slate-400 transition-colors"
              >
                <Phone className="w-5 h-5 text-sky-600" />
                <span>Call Our Clinic</span>
              </a>

              <a
                href={CLINIC_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm px-4 py-3.5 rounded-xl border border-emerald-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Prefer WhatsApp? Chat With Us</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-slate-700 text-xs">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs p-2.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Hospital-Grade Sterilization</div>
                  <div className="text-slate-500 text-[11px]">Class-B Autoclave</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs p-2.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">4.9/5 Rating</div>
                  <div className="text-slate-500 text-[11px]">5,000+ Happy Smiles</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 bg-white/90 backdrop-blur-xs p-2.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Sector 12, Gurugram</div>
                  <div className="text-slate-500 text-[11px]">Smile Plaza, 2nd Floor</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Clinic Card & Doctor Highlight */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Clinic Image Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200/80">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={CLINIC_IMAGES.heroOperatory}
                    alt="Dentalinic Modern Clinic Operatory Room"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (e.currentTarget.src !== CLINIC_IMAGES.heroOperatoryFallback) {
                        e.currentTarget.src = CLINIC_IMAGES.heroOperatoryFallback;
                      }
                    }}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                  {/* Operatory Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-900 shadow-xs flex items-center gap-1.5 border border-slate-200/60">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    <span>Dr. Ruchita Pratihar • Operatory</span>
                  </div>

                  {/* Founded Tag */}
                  <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-200 border border-slate-700">
                    Est. 2026
                  </div>

                  {/* Operatory Bottom overlay text */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-semibold text-sky-300">Dentalinic Dental Care • Gurugram</p>
                    <p className="text-sm font-semibold">Clean, Calm &amp; Technology-Driven Environment</p>
                  </div>
                </div>

                {/* Sub-card: Doctor Highlight Mentioning Dr. Ruchita Pratihar */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={CLINIC_IMAGES.heroRuchitaAvatar}
                      alt={drRuchita.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        if (CLINIC_IMAGES.heroRuchitaAvatarFallback && e.currentTarget.src !== CLINIC_IMAGES.heroRuchitaAvatarFallback) {
                          e.currentTarget.src = CLINIC_IMAGES.heroRuchitaAvatarFallback;
                        }
                      }}
                      className="w-12 h-12 rounded-full object-cover border-2 border-sky-500/80 shadow-xs"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-slate-900">{drRuchita.name}</span>
                        <span className="text-[10px] bg-sky-50 text-sky-800 border border-sky-200/60 px-1.5 py-0.5 rounded font-medium">BDS</span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">Chief Dental Surgeon</p>
                      <p className="text-[10px] text-sky-600 font-medium">(Featured in Clinic Operatory Photo)</p>
                    </div>
                  </div>

                  <button
                    onClick={onExploreServices}
                    className="shrink-0 text-xs font-semibold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200/60 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    View Care →
                  </button>
                </div>
              </div>

              {/* Emergency Banner Floating Pill */}
              <div className="mt-3 bg-amber-50 border border-amber-200/90 rounded-xl p-2.5 flex items-center justify-between text-xs text-amber-900">
                <span className="font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  Emergency Dental Care Available By Appointment
                </span>
                <a
                  href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                  className="font-bold underline text-amber-800 hover:text-amber-950"
                >
                  Call Now
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
