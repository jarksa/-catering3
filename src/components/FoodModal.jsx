import { X, Check, Utensils, MessageCircle, AlertCircle } from 'lucide-react';
import { contactInfo } from '../data/cateringData';

export default function FoodModal({ food, onClose, onSelectForEnquiry }) {
  if (!food) return null;

  const handleEnquireThisDish = () => {
    onSelectForEnquiry(food.name);
    onClose();
  };

  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello Jasmine Catering Service, I would like to enquire about ordering ${food.name}.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-food-title"
    >
      <div className="relative w-full max-w-xl bg-[#FDFBF7] rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          aria-label="Close food details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#3E040D]">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E040D] via-transparent to-black/20" />
          
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37] text-[#3E040D] text-xs font-extrabold uppercase tracking-wider mb-2">
              {food.badge}
            </span>
            <h3 id="modal-food-title" className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              {food.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#F7E4A8] font-medium">
              {food.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 text-left space-y-5 max-h-[60vh] overflow-y-auto">
          
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#AA841C] mb-1">
              About This Dish
            </h4>
            <p className="text-sm sm:text-base text-[#382A26] leading-relaxed">
              {food.longDescription || food.description}
            </p>
          </div>

          {/* Accompaniments & Side Dishes */}
          {food.sides && food.sides.length > 0 && (
            <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#D4AF37]/30">
              <h4 className="text-xs uppercase font-bold tracking-widest text-[#700918] mb-2 flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-[#AA841C]" />
                <span>Included Accompaniments</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#382A26]">
                {food.sides.map((side, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{side}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Timing Notice */}
          {food.timingNotice && (
            <div className="flex items-center gap-2 text-xs text-[#700918] bg-[#700918]/5 p-3 rounded-lg border border-[#700918]/20">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-[#AA841C]" />
              <span>{food.timingNotice}</span>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleEnquireThisDish}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-maroon-gradient text-white text-sm font-bold border border-[#D4AF37]/60 shadow-md hover:opacity-95 transition-all"
            >
              <span>Enquire for Catering / Order</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
