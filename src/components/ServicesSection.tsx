import React, { useState } from 'react';
import { Search, ArrowRight, Sparkles, Check, Clock, Calendar } from 'lucide-react';
import { SERVICES } from '../data/dentalData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onBookService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'general', label: 'General Dentistry' },
    { id: 'cosmetic', label: 'Cosmetic Dentistry' },
    { id: 'orthodontics', label: 'Orthodontics' },
    { id: 'implants', label: 'Dental Implants' },
    { id: 'rct', label: 'Root Canal' },
    { id: 'pediatric', label: 'Pediatric' },
    { id: 'surgery', label: 'Oral Surgery' },
  ];

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      query === '' ||
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.procedures.some(p => p.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/80 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Comprehensive Dental Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Specialized Care for Every Smile
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From preventive oral check-ups and clear aligners to painless single-sitting root canals and aesthetic smile makeovers.
          </p>
        </div>

        {/* Filters & Search Controls */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments, e.g. whitening..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300 mt-8">
            <p className="text-sm font-semibold text-slate-700">No treatments found matching "{searchQuery}"</p>
            <p className="text-xs text-slate-500 mt-1">Try another keyword or select All Services</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 text-xs font-semibold text-sky-700 underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        if (service.fallbackImage && e.currentTarget.src !== service.fallbackImage) {
                          e.currentTarget.src = service.fallbackImage;
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                    
                    {/* Category Label Pill */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-semibold text-slate-800 shadow-2xs">
                      {service.categoryLabel}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-xs font-semibold">
                      From {service.startingPrice}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-sky-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {service.tagline}
                    </p>

                    {/* Procedures List */}
                    <div className="mt-5 space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Included Procedures:</div>
                      {service.procedures.slice(0, 4).map((proc, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{proc}</span>
                        </div>
                      ))}
                      {service.procedures.length > 4 && (
                        <p className="text-[11px] text-sky-600 font-medium pl-5.5">
                          + {service.procedures.length - 4} more procedures
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-800 hover:underline py-2"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookService(service.title)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white text-xs font-semibold transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    <span>Book Service</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Service Detail Deep-Dive Modal */}
      {activeModalService && (
        <ServiceDetailModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onBookService={onBookService}
        />
      )}
    </section>
  );
};
