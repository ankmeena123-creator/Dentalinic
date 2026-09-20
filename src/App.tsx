/**
 * Dentalinic — Multi-Specialty Dental Clinic
 * Gurugram Delhi, India
 * "Healthy Smiles. Confident You."
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { TechnologySection } from './components/TechnologySection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from './data/dentalData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTreatment, setSelectedTreatment] = useState('Dental Consultation (₹500)');
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Ruchita Pratihar (BDS, Chief Dental Surgeon)');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for active section & back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sectionIds = ['home', 'services', 'doctors', 'why-us', 'technology', 'pricing', 'reviews', 'about', 'faq', 'contact', 'book-appointment'];
      const scrollPosition = window.scrollY + 140;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWithTreatment = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    scrollToSection('book-appointment');
  };

  const handleBookWithDoctor = (doctorName: string) => {
    setSelectedDoctor(doctorName);
    scrollToSection('book-appointment');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Sticky Header Navigation */}
      <Navbar
        onBookClick={() => scrollToSection('book-appointment')}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onBookClick={() => scrollToSection('book-appointment')}
          onExploreServices={() => scrollToSection('services')}
        />

        {/* 2. Sample Statistics Bar */}
        <StatsSection />

        {/* 3. Services Section & Individual Service Modal Deep Dive */}
        <ServicesSection
          onBookService={handleBookWithTreatment}
        />

        {/* 4. Sample Dental Team (Doctors) */}
        <DoctorsSection
          onSelectDoctorForBooking={handleBookWithDoctor}
        />

        {/* 5. 6 Core Pillars: Why Choose Dentalinic? */}
        <WhyChooseUs
          onBookClick={() => scrollToSection('book-appointment')}
        />

        {/* 6. Advanced Dental Technology & Hygiene */}
        <TechnologySection />

        {/* 7. Sample Treatment Pricing & Interactive Estimator */}
        <PricingSection
          onBookTreatment={handleBookWithTreatment}
        />

        {/* 8. Patient Testimonials / Reviews */}
        <TestimonialsSection />

        {/* 9. About Dentalinic */}
        <AboutSection />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. Appointment Booking Section */}
        <AppointmentSection
          prefilledTreatment={selectedTreatment}
          prefilledDoctor={selectedDoctor}
        />

        {/* 12. Location, Hours & Contact Details */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onBookClick={() => scrollToSection('book-appointment')}
      />

      {/* Floating Bottom Quick Actions on Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden flex items-center gap-2 bg-slate-900/95 backdrop-blur-md p-2 rounded-2xl border border-slate-800 shadow-2xl">
        <a
          href={`tel:${CLINIC_INFO.contact.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-800 text-white rounded-xl text-xs font-semibold"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400" />
          <span>Call</span>
        </a>

        <a
          href={CLINIC_INFO.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 text-white rounded-xl text-xs font-semibold"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => scrollToSection('book-appointment')}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-xs"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>

      {/* Back to Top Floating Button on Desktop */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900 hover:bg-sky-700 text-white shadow-lg border border-slate-700 transition-all hover:scale-105 active:scale-95 focus:outline-none"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
