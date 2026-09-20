import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Copy, Check, ShieldAlert, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-900 text-xs font-semibold tracking-wide">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Visit Our Gurugram Clinic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Get in Touch &amp; Directions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Conveniently situated in Sector 12, Gurugram with ample parking and elevator access to the 2nd floor.
          </p>
        </div>

        {/* Disclaimer for fictional placeholders */}
        <div className="mt-6 max-w-2xl mx-auto p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center gap-2 text-xs text-amber-900 text-center">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Developer Notice:</strong> Contact details shown below are fictional placeholders for website development.
          </span>
        </div>

        {/* Grid layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Contact Info & Hours Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 4 Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-sky-50/50 hover:border-sky-200 transition-colors group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <button
                    onClick={() => copyToClipboard(CLINIC_INFO.contact.phone, 'phone')}
                    className="text-[11px] text-slate-400 hover:text-slate-700 flex items-center gap-1"
                    title="Copy phone"
                  >
                    {copiedKey === 'phone' ? <Check className="w-3 h-3 text-sky-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'phone' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</h4>
                <a href={`tel:${CLINIC_INFO.contact.phoneClean}`} className="text-base font-bold text-slate-900 hover:text-sky-700 font-display block mt-1">
                  {CLINIC_INFO.contact.phone}
                </a>
                <p className="text-[11px] text-slate-500 mt-1">Direct reception line</p>
              </div>

              {/* WhatsApp Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-emerald-50/40 hover:border-emerald-200 transition-colors group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <button
                    onClick={() => copyToClipboard(CLINIC_INFO.contact.whatsapp, 'whatsapp')}
                    className="text-[11px] text-slate-400 hover:text-slate-700 flex items-center gap-1"
                  >
                    {copiedKey === 'whatsapp' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'whatsapp' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp</h4>
                <a href={CLINIC_INFO.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-emerald-800 hover:text-emerald-900 font-display block mt-1">
                  {CLINIC_INFO.contact.whatsapp}
                </a>
                <p className="text-[11px] text-slate-500 mt-1">Instant chat support</p>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-sky-50/50 hover:border-sky-200 transition-colors group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    onClick={() => copyToClipboard(CLINIC_INFO.contact.email, 'email')}
                    className="text-[11px] text-slate-400 hover:text-slate-700 flex items-center gap-1"
                  >
                    {copiedKey === 'email' ? <Check className="w-3 h-3 text-sky-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</h4>
                <a href={`mailto:${CLINIC_INFO.contact.email}`} className="text-sm font-bold text-slate-900 hover:text-sky-700 font-display block mt-1 truncate">
                  {CLINIC_INFO.contact.email}
                </a>
                <p className="text-[11px] text-slate-500 mt-1">For general queries</p>
              </div>

              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-sky-50/50 hover:border-sky-200 transition-colors group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold bg-white border border-slate-200 px-2 py-0.5 rounded">Gurugram</span>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</h4>
                <p className="text-xs font-bold text-slate-900 mt-1 leading-tight">
                  2nd Floor, Smile Plaza, Sector 12
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Gurugram, New Delhi – 110075</p>
              </div>

            </div>

            {/* Operating Hours Table Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-sky-400" />
                  <h4 className="text-base font-bold font-display">Clinic Operating Hours</h4>
                </div>
                <span className="text-xs font-semibold bg-sky-950/80 text-sky-200 border border-sky-700/80 px-2.5 py-1 rounded-full">
                  Open Today
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-300 font-medium">Monday – Saturday</span>
                  <span className="text-sky-300 font-bold font-mono">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-300 font-medium">Sunday</span>
                  <span className="text-sky-300 font-bold font-mono">10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-amber-300 font-medium">Emergency Dental Care</span>
                  <span className="text-amber-300 font-semibold">Available By Appointment</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Simulated Map & Landmark Guide (6 cols) */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">Clinic Location Map</h3>
                    <p className="text-xs text-slate-500">Sector 12, Gurugram, New Delhi</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                  Elevator &amp; Parking Available
                </span>
              </div>

              {/* Stylized Visual Map Representation */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-200 border border-slate-300/80 shadow-inner flex items-center justify-center">
                {/* Simulated Street grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                
                {/* Simulated roads */}
                <div className="absolute w-full h-8 bg-slate-300/80 top-1/2 -translate-y-1/2 -rotate-6" />
                <div className="absolute h-full w-8 bg-slate-300/80 left-1/3 rotate-12" />

                {/* Pin Card */}
                <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-sky-500/40 text-center max-w-xs animate-bounce-short">
                  <div className="w-9 h-9 rounded-full bg-sky-600 text-white flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Dentalinic Dental Care</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">2nd Floor, Smile Plaza, Sector 12</p>
                  <p className="text-[10px] text-sky-700 font-semibold mt-1">Gurugram, New Delhi – 110075</p>
                </div>
              </div>

              {/* Landmark directions */}
              <div className="mt-5 space-y-2 text-xs text-slate-600">
                <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider">How to reach us:</div>
                <p>• <strong>By Metro:</strong> Short cab ride from nearest Gurugram metro station.</p>
                <p>• <strong>By Car:</strong> Dedicated basement &amp; surface parking available at Smile Plaza.</p>
                <p>• <strong>Accessibility:</strong> Full wheelchair access with high-speed medical elevators to 2nd Floor.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-500">Need help with directions?</span>
              <a
                href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                className="text-xs font-bold text-sky-700 hover:text-sky-800 underline"
              >
                Call Reception for Route Assistance →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
