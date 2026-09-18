import { Phone, MessageCircle, Utensils, Sparkles } from 'lucide-react';
import { contactInfo } from '../data/cateringData';

export default function CTA() {
  return (
    <section className="py-20 bg-maroon-dark-gradient text-white relative overflow-hidden pattern-kolam-dark border-y-2 border-[#D4AF37]/50">
      {/* Ambient Gold Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 text-center space-y-8">

        {/* Top Emblem / Logo */}
        <div className="inline-flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-xl bg-[#700918] mb-3">
            <img
              src="/images/brand/logo_badge.png"
              alt="Jasmine Catering Insignia"
              className="w-full h-full object-cover"
              width="64"
              height="64"
            />
          </div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#F7E4A8]">
            READY TO SERVE YOUR GUESTS
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white-500 tracking-tight">
            Let’s Make Your Event Delicious
          </h2>

          <div className="pt-1">
            <p className="font-cinzel text-lg sm:text-xl font-bold text-[#F3C64D]">
              Jasmine Catering Service
            </p>
            <p className="font-script text-2xl sm:text-3xl text-[#FAF3E0]">
              “{contactInfo.tagline}”
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#E6D8C2] max-w-xl mx-auto pt-2 leading-relaxed">
            Reach out today for Sunday biryani pre-bookings, customized celebration menus, or large-scale event catering quotes.
          </p>
        </div>

        {/* 3 Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">

          {/* Call Us Button */}
          <a
            href={`tel:+91${contactInfo.phone}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#700918] font-bold text-sm sm:text-base shadow-xl hover:bg-[#FAF6F0] hover:scale-[1.02] active:scale-98 transition-all"
          >
            <Phone className="w-4 h-4 text-[#AA841C]" />
            <span>Call Us: {contactInfo.phoneDisplay}</span>
          </a>

          {/* WhatsApp Us Button */}
          <a
            href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
              'Hello Jasmine Catering Service, I would like to discuss catering for an upcoming event.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-xl hover:scale-[1.02] active:scale-98 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          {/* Send an Enquiry Button */}
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-gradient text-[#3E040D] font-bold text-sm sm:text-base shadow-xl hover:opacity-95 hover:scale-[1.02] active:scale-98 transition-all border border-white/50"
          >
            <Utensils className="w-4 h-4" />
            <span>Send an Enquiry</span>
          </a>

        </div>

        {/* Small Verified Indicator */}
        <p className="text-xs text-[#F5E9C9]/70 pt-2">
          ⭐ Verified South Indian Taste • Punctual Delivery • Fresh & Hygienic
        </p>

      </div>
    </section>
  );
}
