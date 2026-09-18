import { Phone, MessageCircle, MapPin, Heart, ArrowUp } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { contactInfo } from '../data/cateringData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D040A] text-[#FAF6F0] pt-16 pb-12 border-t-2 border-[#D4AF37]/40 relative text-left">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#D4AF37]/20">
          
          {/* Col 1: Brand & Bio (lg: 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#D4AF37] shadow-md bg-[#700918] flex-shrink-0">
                <img
                  src="/images/brand/logo_badge.png"
                  alt="Jasmine Catering Service Logo"
                  className="w-full h-full object-cover"
                  width="56"
                  height="56"
                />
              </div>
              <div>
                <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white uppercase block">
                  Jasmine Catering
                </span>
                <span className="font-script text-base sm:text-lg text-[#F7E4A8] block -mt-1">
                  “{contactInfo.tagline}”
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E6D8C2] leading-relaxed max-w-sm">
              Bringing authentic taste, comforting flavours, and memorable catering to family functions, weddings, parties, corporate events, and Sunday special feasts.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#700918]/50 border border-[#D4AF37]/30 text-[11px] text-[#F7E4A8]">
              <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
              <span>#womenentrepreneurs • Homemade goodness</span>
            </div>
          </div>

          {/* Col 2: Quick Links (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-base font-bold text-[#F7E4A8] uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E6D8C2]">
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#specialities" className="hover:text-[#D4AF37] transition-colors">
                  Speciality Foods
                </a>
              </li>
              <li>
                <a href="#combos" className="hover:text-[#D4AF37] transition-colors">
                  Combo Offers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Catering Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  About Our Brand
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-[#D4AF37] transition-colors">
                  Book Catering
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Contact Info (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-base font-bold text-[#F7E4A8] uppercase tracking-wider">
              Contact & Bookings
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm text-[#E6D8C2]">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#700918] text-[#F7E4A8] flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/30">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#AA841C] block">Phone / Booking</span>
                  <a href={`tel:+91${contactInfo.phone}`} className="font-semibold text-white hover:text-[#D4AF37] transition-colors">
                    {contactInfo.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-300 block">WhatsApp Chat</span>
                  <a
                    href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                      'Hello Jasmine Catering Service, I would like to enquire about catering.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-emerald-300 transition-colors"
                  >
                    {contactInfo.whatsappDisplay}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-pink-300 block">Instagram</span>
                  <a
                    href={contactInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-pink-300 transition-colors"
                  >
                    {contactInfo.instagramHandle}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#700918] text-[#F7E4A8] flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#AA841C] block">Service Region</span>
                  <span className="text-white font-medium">
                    {contactInfo.serviceArea}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E6D8C2]/70">
          <p>
            © 2026 Jasmine Catering Service. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#700918]/60 hover:bg-[#700918] text-[#F7E4A8] border border-[#D4AF37]/30 transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
