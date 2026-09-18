import { useState } from 'react';
import { Eye, UtensilsCrossed, Sparkles, BookOpen } from 'lucide-react';
import { specialityFoods } from '../data/cateringData';
import FoodModal from './FoodModal';

export default function SpecialityFoods({ onSelectDish }) {
  const [selectedFood, setSelectedFood] = useState(null);
  const [showFullMenuNotice, setShowFullMenuNotice] = useState(false);

  return (
    <section id="specialities" className="py-20 bg-[#FAF6F0] relative">
      {/* Decorative top divider line */}
      <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mb-4" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#700918] bg-[#700918]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
            OUR SPECIALITY FOODS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E040D] tracking-tight">
            Signature Dishes, Unforgettable Taste
          </h2>
          <p className="text-sm sm:text-base text-[#54413B] leading-relaxed">
            Authentic flavours, carefully prepared with quality ingredients and a passion for great food.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {specialityFoods.map((food) => (
            <div
              key={food.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-md hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-56 w-full overflow-hidden bg-[#3E040D]">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width="400"
                  height="300"
                />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#700918]/90 text-[#FAF3E0] backdrop-blur-xs border border-[#D4AF37]/60 shadow-xs">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    <span>{food.badge}</span>
                  </span>
                </div>

                {/* Subtle Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#3E040D] group-hover:text-[#700918] transition-colors leading-snug">
                    {food.name}
                  </h3>
                  <p className="text-xs text-[#AA841C] font-semibold">
                    {food.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#54413B] line-clamp-3 leading-relaxed">
                    {food.description}
                  </p>
                </div>

                {/* Card Action Button */}
                <div className="pt-2 border-t border-[#FAF6F0]">
                  <button
                    type="button"
                    onClick={() => setSelectedFood(food)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#700918] bg-[#FAF6F0] hover:bg-[#700918] hover:text-white border border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors shadow-xs"
                  >
                    <Eye className="w-4 h-4 text-[#AA841C] group-hover:text-[#FAF3E0]" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              {/* Bottom Gold Accent Line */}
              <div className="h-1 w-0 group-hover:w-full bg-gold-gradient transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-sm max-w-xl mx-auto">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-[#700918]/10 flex items-center justify-center flex-shrink-0 text-[#700918]">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#AA841C]">
                  Custom Menus Available
                </p>
                <p className="text-sm font-semibold text-[#3E040D]">
                  Need a personalized menu for weddings, bulk orders, or parties?
                </p>
              </div>
            </div>

            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-maroon-gradient text-white text-xs sm:text-sm font-bold border border-[#D4AF37]/60 shadow-sm hover:opacity-95 transition-all flex-shrink-0"
            >
              <BookOpen className="w-4 h-4 text-[#F7E4A8]" />
              <span>View Full Menu & Pricing</span>
            </a>
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      {selectedFood && (
        <FoodModal
          food={selectedFood}
          onClose={() => setSelectedFood(null)}
          onSelectForEnquiry={(dishName) => {
            if (onSelectDish) onSelectDish(dishName);
          }}
        />
      )}
    </section>
  );
}
