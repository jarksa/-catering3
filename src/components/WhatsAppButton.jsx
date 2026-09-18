import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/cateringData';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage = 'Hello Jasmine Catering Service, I would like to enquire about catering.';
  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Tooltip on Hover */}
      <div
        className={`mr-3 px-3.5 py-1.5 rounded-xl bg-[#2D040A] text-[#FAF3E0] text-xs font-semibold shadow-xl border border-[#D4AF37]/50 whitespace-nowrap transition-all duration-200 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat with Jasmine Catering
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with Jasmine Catering on WhatsApp"
        className="relative group p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-emerald-300 border-2 border-white/80"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/50 animate-ping pointer-events-none" />

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
      </a>
    </div>
  );
}
