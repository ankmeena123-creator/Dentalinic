export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  quote: string;
  photo: string;
  fallbackPhoto?: string;
  photoNote?: string;
  specialties: string[];
  experience: string;
  availableDays: string;
  consultationFee: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'general' | 'cosmetic' | 'orthodontics' | 'implants' | 'rct' | 'pediatric' | 'surgery';
  categoryLabel: string;
  tagline: string;
  startingPrice: string;
  typicalDuration: string;
  procedures: string[];
  description: string;
  indications: string[];
  whatToExpect: string[];
  image: string;
  fallbackImage?: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  treatment: string;
  quote: string;
  date: string;
}

export interface PriceRecord {
  treatment: string;
  category: string;
  startingFrom: string;
  numericPrice: number;
  duration: string;
  includes: string;
}

export interface AppointmentData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  doctorPreference: string;
  message: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
