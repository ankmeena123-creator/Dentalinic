import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Phone, Mail, User, Stethoscope, MessageCircle, Send, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { CLINIC_INFO, SERVICES, DOCTORS } from '../data/dentalData';
import { BookingConfirmationModal } from './BookingConfirmationModal';

interface AppointmentSectionProps {
  prefilledTreatment?: string;
  prefilledDoctor?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  prefilledTreatment = '',
  prefilledDoctor = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (9:00 AM – 12:00 PM)');
  const [treatment, setTreatment] = useState('General Dental Check-up');
  const [doctorPreference, setDoctorPreference] = useState('Dr. Ruchita Pratihar (Chief Surgeon)');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<any | null>(null);
  const [formError, setFormError] = useState('');

  // Update if prefilled props change
  useEffect(() => {
    if (prefilledTreatment) {
      setTreatment(prefilledTreatment);
    }
  }, [prefilledTreatment]);

  useEffect(() => {
    if (prefilledDoctor) {
      setDoctorPreference(prefilledDoctor);
    }
  }, [prefilledDoctor]);

  // Set default minimum date to tomorrow
  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setFormError('Please enter a valid phone number so our clinic can confirm your booking.');
      return;
    }

    setIsSubmitting(true);

    // Simulate booking creation with realistic delay
    setTimeout(() => {
      const generatedId = `DEN-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const bookingData = {
        bookingId: generatedId,
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim() || 'Not specified',
        preferredDate: preferredDate || 'Earliest Available',
        preferredTime,
        treatment,
        doctorPreference,
        message: message.trim(),
      };

      setSubmittedBooking(bookingData);
      setIsSubmitting(false);

      // Reset form fields
      setFullName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 600);
  };

  return (
    <section id="book-appointment" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-900 text-xs font-semibold tracking-wide">
            <CalendarIcon className="w-3.5 h-3.5 text-sky-600" />
            <span>Online Booking Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Book Your Appointment
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reserve your dental consultation at our modern Sector 12, Gurugram clinic. Instant confirmation and zero wait time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {formError && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium animate-in fade-in">
                  {formError}
                </div>
              )}

              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="email"
                      type="email"
                      placeholder="rahul@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <CalendarIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="preferredDate"
                      type="date"
                      min={getTomorrowDate()}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Time & Treatment / Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="preferredTime"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    >
                      <option>Morning (9:00 AM – 12:00 PM)</option>
                      <option>Afternoon (12:00 PM – 4:00 PM)</option>
                      <option>Evening (4:00 PM – 8:00 PM)</option>
                      <option>Emergency Slot (Priority)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="treatment" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Treatment / Service
                  </label>
                  <div className="relative">
                    <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="treatment"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    >
                      <option>Dental Consultation (₹500)</option>
                      <option>Teeth Cleaning &amp; Polishing</option>
                      <option>Dental Filling (Composite)</option>
                      <option>Root Canal Treatment (Modern RCT)</option>
                      <option>Dental Crown / Cap</option>
                      <option>Teeth Whitening (Laser)</option>
                      <option>Dental Veneers / Smile Makeover</option>
                      <option>Clear Aligners / Braces</option>
                      <option>Dental Implants (Titanium)</option>
                      <option>Pediatric Dental Care</option>
                      <option>Wisdom Tooth Removal</option>
                      <option>Emergency Toothache Relieve</option>
                      <option>Other / Unsure</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Doctor Preference */}
              <div>
                <label htmlFor="doctorPreference" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Doctor Preference
                </label>
                <select
                  id="doctorPreference"
                  value={doctorPreference}
                  onChange={(e) => setDoctorPreference(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                >
                  <option>Dr. Ruchita Pratihar (BDS, Chief Dental Surgeon)</option>
                  <option>Dr. Ankit Meena (BDS, MDS Consultant)</option>
                  <option>Next Available Specialist</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Message / Symptoms (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Describe your symptoms, previous treatments, or specific concerns..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-sky-700 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-98 disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Reserving Your Slot...</span>
                ) : (
                  <>
                    <CalendarIcon className="w-4 h-4 text-sky-300" />
                    <span>Book Appointment</span>
                    <Send className="w-3.5 h-3.5 ml-1" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  <span>No Booking Fee</span>
                </span>
                <span>•</span>
                <span>Free Rescheduling</span>
                <span>•</span>
                <span>Instant SMS &amp; Call Confirmation</span>
              </div>
            </form>
          </div>

          {/* Right Column: WhatsApp Card & Clinic Support (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card explicitly requested */}
            <div className="bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-sky-400">
                <MessageCircle className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-sky-300 bg-sky-950/60 border border-sky-800/80 px-2.5 py-1 rounded-full">
                Instant Chat
              </span>

              <h3 className="text-2xl font-bold font-display mt-3">Prefer WhatsApp?</h3>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                Connect directly with our Gurugram clinic front desk on WhatsApp. Ask treatment questions, get cost estimates, or book slots in real time.
              </p>

              <a
                href={CLINIC_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-sky-50 hover:text-sky-900 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-sky-600" />
                <span>Chat With Us on WhatsApp</span>
              </a>
            </div>

            {/* Quick Contact & Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-slate-900 font-display">Need Immediate Assistance?</h4>
              
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Phone Desk:</span>
                    <a href={`tel:${CLINIC_INFO.contact.phoneClean}`} className="text-sky-700 hover:underline font-bold text-sm">
                      {CLINIC_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Working Hours:</span>
                    <span>Monday – Saturday: 9:00 AM – 8:00 PM</span>
                    <br />
                    <span>Sunday: 10:00 AM – 2:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Address:</span>
                    <span>Dentalinic Dental Care, 2nd Floor, Smile Plaza, Sector 12, Gurugram, New Delhi – 110075</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-900">
                <strong>Emergency Dental Care:</strong> Severe tooth trauma or intolerable toothache? Emergency slots are available 7 days a week by appointment.
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Booking Confirmation Pass / Modal */}
      {submittedBooking && (
        <BookingConfirmationModal
          data={submittedBooking}
          onClose={() => setSubmittedBooking(null)}
        />
      )}
    </section>
  );
};
