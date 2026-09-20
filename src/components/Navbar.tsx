import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Calendar, Menu, X, MessageCircle, ShieldAlert } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface NavbarProps {
  onBookClick: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'technology', label: 'Technology' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Notification / Hours & Emergency Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-sky-300 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span>Dr. Ruchita Pratihar (BDS)</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Mon–Sat: 9 AM – 8 PM | Sun: 10 AM – 2 PM</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Sector 12, Gurugram, New Delhi</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 bg-amber-950/70 text-amber-300 border border-amber-800/80 px-2 py-0.5 rounded text-[11px]">
              <ShieldAlert className="w-3 h-3" />
              <span>Sample Business Profile &amp; Demo Data</span>
            </span>
          </div>
          
          <div className="flex items-center gap-3 ml-auto">
            <a
              href={`tel:${CLINIC_INFO.contact.phoneClean}`}
              className="flex items-center gap-1 text-slate-200 hover:text-sky-300 font-medium transition-colors"
              title="Call clinic reception"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{CLINIC_INFO.contact.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={CLINIC_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
          : 'bg-white py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Dentalinic Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-blue-900 flex items-center justify-center text-white shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.2 5.5 2.5 8.5C9.8 19.3 11 22 12 22s2.2-2.7 3.5-5.5C16.8 13.5 18 11 18 8c0-3.5-2.5-6-6-6zm0 3c1.5 0 2.8.8 3.5 2-.8-.3-1.8-.4-3.5-.4s-2.7.1-3.5.4c.7-1.2 2-2 3.5-2z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900 font-display">Dentalinic</span>
                <span className="text-[10px] font-semibold bg-sky-50 text-sky-800 border border-sky-200/70 px-1.5 py-0.5 rounded">Dental Care</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">Dr. Ruchita Pratihar • Healthy Smiles. Confident You.</p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-sky-700 bg-sky-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CLINIC_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-emerald-600 hover:bg-emerald-50 rounded-xl border border-emerald-200 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-sky-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow active:scale-98"
            >
              <Calendar className="w-4 h-4 text-sky-300" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onBookClick}
              className="sm:hidden text-xs bg-slate-900 text-white font-semibold px-3 py-1.5 rounded-lg"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-150">
            <div className="grid grid-cols-2 gap-1.5 mb-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 text-sm font-medium text-left rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'text-sky-700 bg-sky-50 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 rounded-xl shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                  className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Call Clinic</span>
                </a>
                <a
                  href={CLINIC_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-200"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
