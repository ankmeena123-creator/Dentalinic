import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Heart, ShieldAlert, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookClick }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      
      {/* Top CTA Band */}
      <div className="bg-slate-900/90 border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-xl font-bold text-white font-display">Ready for a healthier, more confident smile?</h3>
            <p className="text-slate-400 text-xs">Consult with Dr. Ruchita Pratihar and Dr. Ankit Meena in Sector 12, Gurugram.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href={CLINIC_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold px-4 py-2.5 rounded-xl transition-colors border border-emerald-600/60"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white font-bold">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.2 5.5 2.5 8.5C9.8 19.3 11 22 12 22s2.2-2.7 3.5-5.5C16.8 13.5 18 11 18 8c0-3.5-2.5-6-6-6zm0 3c1.5 0 2.8.8 3.5 2-.8-.3-1.8-.4-3.5-.4s-2.7.1-3.5.4c.7-1.2 2-2 3.5-2z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white font-display tracking-tight">Dentalinic</span>
                <p className="text-[11px] text-sky-400 font-medium">Healthy Smiles. Confident You.</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Multi-specialty dental practice offering modern, comfortable dentistry in Gurugram, Delhi NCR. Advanced diagnostic equipment, strict Class-B sterilization, and personalized treatment plans under one roof.
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <span className="font-semibold text-slate-200 block">Clinic Foundation:</span>
              <span>Founded 2026 • Sector 12, Gurugram Delhi, India</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-sky-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-sky-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-sky-400 transition-colors">
                  Services &amp; Specializations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doctors')} className="hover:text-sky-400 transition-colors">
                  Doctors &amp; Dental Team
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('technology')} className="hover:text-sky-400 transition-colors">
                  Technology &amp; Equipment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-sky-400 transition-colors">
                  Treatment Pricing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-sky-400 transition-colors">
                  Testimonials &amp; Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-sky-400 transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-sky-400 transition-colors">
                  Contact &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Opening Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Opening Hours</h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div>
                <span className="text-slate-500 block">Mon – Sat</span>
                <span className="font-semibold text-white">9:00 AM – 8:00 PM</span>
              </div>
              <div>
                <span className="text-slate-500 block">Sunday</span>
                <span className="font-semibold text-white">10:00 AM – 2:00 PM</span>
              </div>
              <div className="pt-2 border-t border-slate-900">
                <span className="text-amber-400 block font-medium">Emergency Care:</span>
                <span className="text-[11px] text-slate-400">Available by appointment</span>
              </div>
            </div>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Contact Clinic</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span className="text-slate-300">
                  Dentalinic Dental Care<br />
                  2nd Floor, Smile Plaza, Sector 12,<br />
                  Gurugram, New Delhi – 110075
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.contact.phoneClean}`} className="text-slate-200 hover:text-sky-400 font-semibold">
                  {CLINIC_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.contact.email}`} className="text-slate-300 hover:text-sky-400">
                  {CLINIC_INFO.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={CLINIC_INFO.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-medium">
                  WhatsApp: +91 98765 43210
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Bar */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
            <span>
              <strong>Sample Business Profile:</strong> Contact details, staff information, statistics, and reviews are dummy website-development data for preview purposes.
            </span>
          </div>
          <span className="text-slate-500 shrink-0">© 2026 Dentalinic. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};
