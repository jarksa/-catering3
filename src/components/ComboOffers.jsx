import { Check, Sparkles, MessageCircle, ArrowRight, Gift } from 'lucide-react';
import { comboOffers, contactInfo } from '../data/cateringData';

export default function ComboOffers({ onSelectCombo }) {
  const handleGetCombo = (combo) => {
    if (onSelectCombo) {
      onSelectCombo(combo.name);
    }
    const formElement = document.getElementById('enquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="combos"
      className="py-24 bg-maroon-dark-gradient text-white relative overflow-hidden pattern-kolam-dark"
    >
      {/* Decorative Gold Ambient Lights */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#B11D32]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 shadow-sm">
            <Gift className="w-4 h-4 text-[#F3C64D]" />
            <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#F7E4A8]">
              OUR COMBO OFFERS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF3E0]">
            Perfect Combos for Every Celebration
          </h2>

          <p className="text-sm sm:text-base text-[#F5E9C9]/85 leading-relaxed">
            Thoughtfully curated menus for families, parties and special events.
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto pt-1" />
        </div>

        {/* 3 Combo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comboOffers.map((combo, index) => {
            const isFeatured = index === 0; // Family Feast featured or Middle card
            return (
              <div
                key={combo.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#540612] to-[#3A030A] border-2 border-[#D4AF37] shadow-2xl scale-[1.02]'
                    : 'bg-[#4A050F]/80 backdrop-blur-md border border-[#D4AF37]/30 hover:border-[#D4AF37]/70 shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {combo.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-gold-gradient text-[#3E040D] shadow-md border border-white/50">
                      <Sparkles className="w-3 h-3 text-[#3E040D]" />
                      <span>{combo.badge}</span>
                    </span>
                  </div>
                )}

                <div className="text-left space-y-4">
                  {/* Category Tag */}
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F3C64D] bg-[#D4AF37]/15 px-3 py-1 rounded-md border border-[#D4AF37]/30">
                      {combo.tag}
                    </span>
                  </div>

                  {/* Combo Name */}
                  <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                    {combo.name}
                  </h3>

                  {/* Serves Note */}
                  <p className="text-xs text-[#F7E4A8] font-medium flex items-center gap-1.5">
                    <span>👥</span>
                    <span>{combo.servesText}</span>
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#E6D8C2] leading-relaxed">
                    {combo.description}
                  </p>

                  {/* Inclusions List */}
                  <div className="pt-3 border-t border-[#D4AF37]/25 space-y-2.5">
                    <p className="text-xs uppercase font-bold tracking-wider text-[#F3C64D]">
                      What's Included:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#FDFBF7]">
                      {combo.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing & Booking CTA */}
                <div className="pt-6 mt-6 border-t border-[#D4AF37]/25 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#E6D8C2]">Pricing:</span>
                    <span className="text-sm font-extrabold text-[#F7E4A8] tracking-wide">
                      {combo.priceDisplay}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleGetCombo(combo)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold-gradient text-[#3E040D] font-bold text-sm shadow-lg hover:opacity-95 transition-all hover:scale-[1.01] active:scale-98"
                  >
                    <span>Get This Combo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Jasmine Catering Service, I would like to get a quote for the "${combo.name}" (${combo.tag}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Ask for Price on WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on Custom Menus */}
        <p className="mt-12 text-xs sm:text-sm text-[#F5E9C9]/70 text-center">
          * Custom combinations and pure vegetarian options are gladly accommodated upon request.
        </p>

      </div>
    </section>
  );
}
