import React from 'react';
import { CheckCircle2, Calendar, Clock, MapPin, Phone, User, Stethoscope, Download, Printer, X, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface BookingSlipData {
  bookingId: string;
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  doctorPreference: string;
  message?: string;
}

interface BookingConfirmationModalProps {
  data: BookingSlipData | null;
  onClose: () => void;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({ data, onClose }) => {
  if (!data) return null;

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Dentalinic Dental Care//Appointment//EN
BEGIN:VEVENT
SUMMARY:Dentalinic Appointment - ${data.treatment}
DESCRIPTION:Dental appointment for ${data.fullName} at Dentalinic. Doctor: ${data.doctorPreference}. Phone: ${CLINIC_INFO.contact.phone}.
LOCATION:${CLINIC_INFO.address.fullAddress}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Dentalinic-Appointment-${data.bookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Dentalinic, I have booked an appointment online! Ref ID: ${data.bookingId}. Name: ${data.fullName}, Treatment: ${data.treatment}, Date: ${data.preferredDate} (${data.preferredTime}). Please confirm my slot.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-900 to-sky-800 p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-3 text-white border border-white/30 shadow-inner">
            <CheckCircle2 className="w-8 h-8 text-sky-300" />
          </div>

          <span className="text-xs font-bold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full border border-white/30">
            Booking Received
          </span>

          <h3 className="text-2xl font-extrabold font-display mt-2">Appointment Scheduled!</h3>
          <p className="text-xs text-sky-100 mt-1">
            Reference ID: <span className="font-mono font-bold text-white bg-slate-950/50 px-2 py-0.5 rounded border border-white/20">{data.bookingId}</span>
          </p>
        </div>

        {/* Slip Body */}
        <div className="p-6 sm:p-8 space-y-5 text-xs text-slate-700">
          <div className="p-3 bg-sky-50 border border-sky-200/80 rounded-xl text-sky-900 text-center">
            Our clinic coordinator will call you at <strong>{data.phone}</strong> shortly to confirm the exact appointment schedule.
          </div>

          {/* Details Table */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-sky-600" />
                <span>Patient Name</span>
              </span>
              <span className="font-bold text-slate-900 text-sm">{data.fullName}</span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
                <span>Treatment</span>
              </span>
              <span className="font-semibold text-slate-900">{data.treatment}</span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sky-600" />
                <span>Date &amp; Time</span>
              </span>
              <span className="font-semibold text-slate-900">{data.preferredDate} • {data.preferredTime}</span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
                <span>Doctor Preference</span>
              </span>
              <span className="font-semibold text-slate-900">{data.doctorPreference}</span>
            </div>

            <div className="flex items-start justify-between pt-1">
              <span className="text-slate-500 flex items-center gap-1.5 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span>Location</span>
              </span>
              <span className="font-medium text-slate-800 text-right max-w-[220px]">
                {CLINIC_INFO.address.fullAddress}
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={handleDownloadCalendar}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 font-semibold text-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-sky-600" />
              <span>Add to Calendar</span>
            </button>

            <button
              onClick={shareWhatsApp}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Slip</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Slip</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors shadow-xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
