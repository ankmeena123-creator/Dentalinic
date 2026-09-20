import { Doctor, ServiceItem, Testimonial, PriceRecord, FaqItem } from '../types';
import heroOperatoryImage from '../assets/images/regenerated_image_1789844377927.png';
import heroRuchitaAvatarImage from '../assets/images/regenerated_image_1789844384883.png';
import doctorRuchitaImage from '../assets/images/regenerated_image_1789844393875.png';
import doctorAnkitImage from '../assets/images/regenerated_image_1789844401468.png';

export const CLINIC_INFO = {
  name: 'Dentalinic',
  tagline: 'Healthy Smiles. Confident You.',
  businessType: 'Multi-Specialty Dental Clinic',
  founded: '2026',
  location: 'Gurugram Delhi, India',
  address: {
    line1: 'Dentalinic Dental Care',
    line2: '2nd Floor, Smile Plaza, Sector 12',
    city: 'Gurugram, New Delhi – 110075',
    fullAddress: 'Dentalinic Dental Care, 2nd Floor, Smile Plaza, Sector 12, Gurugram, New Delhi – 110075',
    landmarks: 'Near Sector 12 Market & Metro Link, Gurugram',
  },
  contact: {
    phone: '+91 98765 43210',
    phoneClean: '+919876543210',
    email: 'hello@dentalinic.example',
    whatsapp: '+91 98765 43210',
    whatsappUrl: 'https://wa.me/919876543210?text=Hello%20Dentalinic%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment.',
  },
  hours: {
    monSat: '9:00 AM – 8:00 PM',
    sunday: '10:00 AM – 2:00 PM',
    emergency: 'Available by appointment 24/7 on-call',
  },
  disclaimer: 'Sample business profile for website development and preview. Contact and doctor details are dummy demonstration placeholders.'
};

export const SAMPLE_STATISTICS = [
  { id: 'patients', label: 'Happy Patients', number: '5,000+', icon: 'Users', description: 'Treated with gentle, personalized care' },
  { id: 'experience', label: 'Years of Experience', number: '8+', icon: 'Award', description: 'Clinical expertise across specialties' },
  { id: 'specialists', label: 'Dental Specialists', number: '6', icon: 'Stethoscope', description: 'Multi-disciplinary dental panel' },
  { id: 'treatments', label: 'Treatments Completed', number: '12,000+', icon: 'Sparkles', description: 'Restorative, ortho & cosmetic cases' },
  { id: 'rating', label: 'Patient Rating', number: '4.9/5', icon: 'Star', description: 'Based on verified patient feedback' },
];

export const WHY_CHOOSE_US = [
  {
    id: 'modern-tech',
    title: 'Modern Technology',
    description: 'Advanced diagnostic and treatment equipment including digital 3D intraoral scanners, low-radiation OPG, and computer-guided procedures.',
    icon: 'Cpu',
    tag: 'Advanced'
  },
  {
    id: 'experienced-team',
    title: 'Experienced Dental Team',
    description: 'Qualified professionals focused on personalized dental care, continually trained in modern painless dentistry protocols.',
    icon: 'GraduationCap',
    tag: 'Accredited'
  },
  {
    id: 'patient-centered',
    title: 'Patient-Centered Care',
    description: 'We explain your treatment options clearly before beginning, respecting your comfort, timeline, and individual budget.',
    icon: 'HeartHandshake',
    tag: 'Transparent'
  },
  {
    id: 'comfort-focused',
    title: 'Comfort-Focused Dentistry',
    description: 'A calm and welcoming environment designed around patient comfort, with soothing operatory chairs and anxiety-free dentistry.',
    icon: 'Smile',
    tag: 'Gentle'
  },
  {
    id: 'transparent-plans',
    title: 'Transparent Treatment Plans',
    description: 'Clear explanations of procedures and estimated costs with zero hidden charges or surprise add-ons.',
    icon: 'FileText',
    tag: 'Honest'
  },
  {
    id: 'hygiene-safety',
    title: 'Hygiene & Safety',
    description: 'Strict sterilization and infection-control protocols adhering to Class-B international autoclave hospital standards.',
    icon: 'ShieldCheck',
    tag: 'Hospital-Grade'
  }
];

export const CLINIC_IMAGES = {
  heroOperatory: heroOperatoryImage,
  heroOperatoryFallback: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
  heroRuchitaAvatar: heroRuchitaAvatarImage,
  heroRuchitaAvatarFallback: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  aboutInterior: '/images/clinic-interior.jpg',
  aboutInteriorFallback: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
  drRuchita: doctorRuchitaImage,
  drRuchitaFallback: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  drAnkit: doctorAnkitImage,
  drAnkitFallback: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
};

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-ruchita-pratihar',
    name: 'Dr. Ruchita Pratihar',
    role: 'Chief Dental Surgeon',
    qualifications: 'BDS, Chief Dental Surgeon',
    quote: '“Our goal is to provide comfortable, ethical and personalized dental care using modern technology.”',
    photo: doctorRuchitaImage,
    fallbackPhoto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    photoNote: 'Featured with clinic operatory photo (Chief Dental Surgeon)',
    specialties: ['General & Cosmetic Dentistry', 'Smile Makeovers', 'Preventive Oral Care', 'Restorative Surgery'],
    experience: '8+ Years Clinical Practice',
    availableDays: 'Mon – Sat (10:00 AM – 7:00 PM)',
    consultationFee: '₹500',
  },
  {
    id: 'dr-ankit-meena',
    name: 'Dr. Ankit Meena',
    role: 'Consultant',
    qualifications: 'BDS, MDS Consultant',
    quote: '“Precise diagnosis combined with patient comfort creates the foundation for lasting oral health.”',
    photo: doctorAnkitImage,
    fallbackPhoto: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    specialties: ['Orthodontic Aligners', 'Complex Root Canals', 'Oral Implantology', 'Emergency Consultations'],
    experience: '7+ Years Specialization',
    availableDays: 'Tue, Thu, Sat & Sun (By Appointment)',
    consultationFee: '₹500',
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    category: 'general',
    categoryLabel: 'Preventive & Routine',
    tagline: 'Comprehensive oral wellness to protect and maintain your natural teeth for life.',
    startingPrice: '₹500',
    typicalDuration: '30–45 mins',
    procedures: [
      'Dental check-ups & full mouth examination',
      'Teeth cleaning & ultrasonic plaque scaling',
      'Cavity treatment & remineralization',
      'Tooth-colored composite fillings',
      'Gentle tooth extraction'
    ],
    description: 'Our general dentistry services focus on preventive diagnosis, maintaining oral hygiene, and stopping decay before it becomes painful. Regular checkups protect your gums and ensure healthy teeth.',
    indications: [
      'Routine 6-month checkups and dental hygiene',
      'Tooth sensitivity or mild toothache',
      'Bleeding gums or tartar accumulation',
      'Chipped or decayed teeth needing filling'
    ],
    whatToExpect: [
      'Digital intraoral inspection with high-res camera',
      'Gentle ultrasonic scaling to remove plaque and stain',
      'Personalized oral care guidance and fluoride treatment'
    ],
    image: '/images/services/general-dentistry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    category: 'cosmetic',
    categoryLabel: 'Aesthetic Smiles',
    tagline: 'Transform your smile with artistic precision, whitening, and custom veneer restorations.',
    startingPrice: '₹6,000',
    typicalDuration: '45–90 mins',
    procedures: [
      'Teeth whitening (In-clinic laser power whitening)',
      'Dental porcelain veneers & laminates',
      'Comprehensive smile makeover',
      'Tooth-colored composite aesthetic fillings'
    ],
    description: 'Achieve the confident, radiant smile you have always desired. From immediate in-chair whitening to hand-crafted ultra-thin porcelain veneers, we blend cosmetic artistry with biological function.',
    indications: [
      'Discolored, yellowed, or deeply stained teeth',
      'Chipped, broken, or uneven tooth edges',
      'Minor gaps between teeth',
      'Worn enamel affecting smile aesthetics'
    ],
    whatToExpect: [
      'Digital smile design simulation before starting',
      'Custom shade matching to your natural complexion',
      'Long-lasting aesthetic materials with natural luster'
    ],
    image: '/images/services/cosmetic-dentistry.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics & Aligners',
    category: 'orthodontics',
    categoryLabel: 'Teeth Alignment',
    tagline: 'Straighten crooked teeth with modern clear aligners and discreet ceramic brackets.',
    startingPrice: '₹45,000',
    typicalDuration: 'Monthly follow-ups',
    procedures: [
      'Metal braces with gentle self-ligating brackets',
      'Ceramic tooth-colored aesthetic braces',
      'Clear invisible aligners (removable & seamless)',
      'Orthodontic retainers for retention'
    ],
    description: 'Orthodontic therapy corrects malocclusion, crowded teeth, overbites, and spacing issues. We offer virtually invisible clear aligner technology alongside precision metal and ceramic braces.',
    indications: [
      'Crowded or overlapping teeth',
      'Gaps and spaces between teeth',
      'Overbite, underbite, or crossbite',
      'Chewing difficulty or jaw strain'
    ],
    whatToExpect: [
      '3D digital intraoral scan without messy molds',
      'Visual 3D simulation of your expected teeth movement',
      'Clear aligner trays tailored to your daily lifestyle'
    ],
    image: '/images/services/orthodontics.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    category: 'implants',
    categoryLabel: 'Permanent Replacement',
    tagline: 'The gold standard for replacing missing teeth with natural look, bite, and feel.',
    startingPrice: '₹25,000',
    typicalDuration: '2–3 sittings',
    procedures: [
      'Single-tooth titanium & zirconia implants',
      'Multiple implants & bridge anchors',
      'Implant-supported crowns & full arch rehab'
    ],
    description: 'Replace lost or damaged teeth permanently. Implants integrate directly into your jawbone, preserving bone density and preventing adjacent teeth from shifting.',
    indications: [
      'One or more missing teeth',
      'Loose or uncomfortable removable dentures',
      'Difficulty chewing or biting favorite foods',
      'Desire for a permanent, lifetime tooth replacement'
    ],
    whatToExpect: [
      '3D CBCT digital bone mapping for pinpoint placement',
      'Minimally invasive computer-guided implant surgery',
      'Custom ceramic crown perfectly matched in color'
    ],
    image: '/images/services/dental-implants.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    popular: false
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment (RCT)',
    category: 'rct',
    categoryLabel: 'Tooth Preservation',
    tagline: 'Save severely infected teeth and relieve pain with modern painless rotary endodontics.',
    startingPrice: '₹4,500',
    typicalDuration: '45–60 mins',
    procedures: [
      'Modern painless rotary RCT',
      'Single-sitting RCT for acute pulpitis',
      'Zirconia & porcelain dental crowns'
    ],
    description: 'Do not extract an infected tooth when you can save it. Modern rotary endodontics cleans the infected nerve canals painlessly under computerized local anesthesia, topped by a durable dental crown.',
    indications: [
      'Severe, throbbing tooth pain or pain when biting',
      'Lingering sensitivity to hot or cold drinks',
      'Gum swelling or tender pimple near a tooth',
      'Deep decay reaching the pulp'
    ],
    whatToExpect: [
      'Computerized painless anesthesia delivery',
      'Precision apex locators & rotary files for thorough cleaning',
      'Biocompatible sealing and customized protective crown'
    ],
    image: '/images/services/root-canal.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    category: 'pediatric',
    categoryLabel: "Children's Dental",
    tagline: 'Gentle, friendly oral care specially crafted to keep your little ones smiling without fear.',
    startingPrice: '₹800',
    typicalDuration: '30 mins',
    procedures: [
      "Children's dental check-ups & oral habit counseling",
      'Preventive pit & fissure sealants',
      'Gentle cavity treatment & colored fillings',
      'Protective fluoride varnish treatment'
    ],
    description: 'We turn dental visits into positive experiences for kids. Our caring team helps build lifelong oral health habits while treating early milk-tooth cavities and developmental concerns.',
    indications: [
      'First dental visit (recommended at age 1 or first tooth)',
      'Early childhood cavities from nursing/sugar',
      'Thumb-sucking or tongue-thrusting habits',
      'Preventive cavity protection for growing teeth'
    ],
    whatToExpect: [
      'Friendly, fun introductory checkup with zero intimidation',
      'Interactive brushing tutorials for parents and kids',
      'Painless preventive fluoride and sealants'
    ],
    image: '/images/services/pediatric.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    popular: false
  },
  {
    id: 'oral-surgery',
    title: 'Oral Surgery',
    category: 'surgery',
    categoryLabel: 'Surgical Procedures',
    tagline: 'Safe, comfortable extractions and minor surgical interventions under sterile protocols.',
    startingPrice: '₹1,500',
    typicalDuration: '30–60 mins',
    procedures: [
      'Impacted wisdom tooth removal',
      'Simple & surgical extractions',
      'Minor oral soft tissue procedures & frenectomy'
    ],
    description: 'Our surgical team performs wisdom tooth extractions and minor oral procedures with utmost safety, minimal invasiveness, and rapid postoperative recovery protocols.',
    indications: [
      'Painful or impacted third molar (wisdom tooth)',
      'Teeth broken below the gumline',
      'Pre-orthodontic extraction requirements',
      'High frenum attachment causing spacing'
    ],
    whatToExpect: [
      'Full digital panoramic imaging prior to surgery',
      'Deep targeted local anesthesia for total comfort',
      'Comprehensive post-operative healing kit and follow-up'
    ],
    image: '/images/services/oral-surgery.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
    popular: false
  }
];

export const PRICING_LIST: PriceRecord[] = [
  {
    treatment: 'Dental Consultation',
    category: 'General',
    startingFrom: '₹500',
    numericPrice: 500,
    duration: '30 mins',
    includes: 'Comprehensive oral examination, intraoral camera review & personalized treatment plan.'
  },
  {
    treatment: 'Teeth Cleaning',
    category: 'Preventive',
    startingFrom: '₹1,200',
    numericPrice: 1200,
    duration: '45 mins',
    includes: 'Full-mouth ultrasonic scaling, plaque removal, and stain polishing.'
  },
  {
    treatment: 'Dental Filling',
    category: 'Restorative',
    startingFrom: '₹800',
    numericPrice: 800,
    duration: '30 mins per tooth',
    includes: 'Tooth-colored composite resin, enamel shade matching & bite adjustment.'
  },
  {
    treatment: 'Root Canal Treatment',
    category: 'Endodontics',
    startingFrom: '₹4,500',
    numericPrice: 4500,
    duration: '45–60 mins',
    includes: 'Modern rotary RCT, digital canal measurement, local anesthesia & temporary restoration.'
  },
  {
    treatment: 'Dental Crown',
    category: 'Prosthodontics',
    startingFrom: '₹5,500',
    numericPrice: 5500,
    duration: '2 sittings',
    includes: 'High-strength ceramic/zirconia crown, precision impression & cementation.'
  },
  {
    treatment: 'Teeth Whitening',
    category: 'Cosmetic',
    startingFrom: '₹6,000',
    numericPrice: 6000,
    duration: '60 mins',
    includes: 'In-clinic laser power whitening, enamel desensitization & post-care shade guide.'
  },
  {
    treatment: 'Dental Implant',
    category: 'Implants',
    startingFrom: '₹25,000',
    numericPrice: 25000,
    duration: '2–3 sittings',
    includes: 'Grade-5 titanium implant post, surgical guide, healing abutment & digital follow-up.'
  },
  {
    treatment: 'Clear Aligners',
    category: 'Orthodontics',
    startingFrom: '₹45,000',
    numericPrice: 45000,
    duration: 'Custom treatment plan',
    includes: '3D digital scan, custom aligner sets, 3D progression simulation & regular checkups.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'priya-m',
    name: 'Priya M.',
    rating: 5,
    treatment: 'Teeth Cleaning & Cosmetic Care',
    quote: '“Everyone at Dentalinic was friendly and professional. The treatment was explained clearly, and the overall experience was very comfortable.”',
    date: 'Recent Patient'
  },
  {
    id: 'rahul-s',
    name: 'Rahul S.',
    rating: 5,
    treatment: 'Root Canal & Ceramic Crown',
    quote: '“Clean clinic, modern equipment and a very helpful dental team. I would definitely recommend Dentalinic.”',
    date: 'Verified Patient'
  },
  {
    id: 'neha-k',
    name: 'Neha K.',
    rating: 5,
    treatment: 'Pediatric Dental Check-up',
    quote: '“My daughter’s first dental visit was surprisingly comfortable. The staff were patient and welcoming.”',
    date: 'Parent of Patient'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Appointments',
    question: 'How do I book an appointment at Dentalinic?',
    answer: 'You can easily book online via our appointment form on this website, message us directly on WhatsApp (+91 98765 43210), or call our reception desk directly. We confirm your slot within minutes.'
  },
  {
    category: 'Comfort & Pain',
    question: 'Are dental procedures painful at your clinic?',
    answer: 'Patient comfort is our foremost priority. We use modern computerized local anesthesia, gentle rotary instruments, and topical numbing gels so that root canals, fillings, and extractions are virtually pain-free.'
  },
  {
    category: 'Root Canal',
    question: 'Can a Root Canal Treatment (RCT) be done in a single sitting?',
    answer: 'Yes! In many acute cases without severe periapical infection, our modern rotary endodontic equipment allows us to complete the entire root canal in a single comfortable 60-minute sitting.'
  },
  {
    category: 'Aligners',
    question: 'How do Clear Aligners compare to traditional metal braces?',
    answer: 'Clear aligners are virtually invisible, custom 3D-printed transparent trays that you can remove during meals and brushing. They offer equal alignment effectiveness without metal wires or mouth irritation.'
  },
  {
    category: 'Pricing',
    question: 'Are there any hidden costs in the treatment plans?',
    answer: 'None. Following your initial ₹500 consultation and digital checkup, we hand you a transparent itemized treatment plan specifying exact costs, sittings, and material choices before starting any procedure.'
  },
  {
    category: 'Emergency',
    question: 'Do you handle dental emergencies outside regular clinic hours?',
    answer: 'Yes. For severe dental pain, knocked-out teeth, or sudden trauma, emergency dental care is available by appointment. Contact our emergency line at +91 98765 43210.'
  }
];

export const CLINIC_TECHNOLOGY = [
  {
    title: '3D Digital Intraoral Scanner',
    description: 'Replaces messy rubber molds with a gentle handheld optical wand that captures thousands of 3D data points in seconds.',
    benefit: 'Pinpoint crown and aligner accuracy without gagging.'
  },
  {
    title: 'Low-Radiation Digital OPG & X-Rays',
    description: 'Full-mouth panoramic digital radiology with up to 80% less radiation exposure than conventional film radiographs.',
    benefit: 'Instant high-resolution diagnostics on operatory screens.'
  },
  {
    title: 'Modern Rotary Endodontic Motors',
    description: 'Precision torque-controlled rotary files that safely navigate tooth root canals with micro-millimeter precision.',
    benefit: 'Fast, smooth, single-sitting root canals with minimal discomfort.'
  },
  {
    title: 'Class-B Hospital Autoclave Sterilization',
    description: 'Multi-vacuum fractionated steam sterilization for every single instrument, exceeding international hospital hygiene standards.',
    benefit: '100% sterile cross-infection protection for you and your family.'
  }
];
