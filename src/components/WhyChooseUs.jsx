import { Sparkles, Leaf, ShieldCheck, Clock, Award } from 'lucide-react';
import { whyChooseBenefits } from '../data/cateringData';

export default function WhyChooseUs() {
  const iconMap = {
    Sparkles: Sparkles,
    Leaf: Leaf,
    ShieldCheck: ShieldCheck,
    Clock: Clock,
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FDFBF7] to-[#FAF6F0] relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#700918] bg-[#700918]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
            OUR PROMISE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E040D] tracking-tight">
            Why Choose Jasmine Catering
          </h2>
          <p className="text-sm sm:text-base text-[#54413B] leading-relaxed">
            Committed to culinary authenticity, pristine hygiene, and joyful service for every family and host.
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-2" />
        </div>

        {/* 4 Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseBenefits.map((benefit, index) => {
            const IconComp = iconMap[benefit.iconName] || Sparkles;
            return (
              <div
                key={benefit.id}
                className="bg-white rounded-2xl p-7 border border-[#D4AF37]/30 shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 text-left space-y-4 hover:-translate-y-1 relative"
              >
                {/* Number Badge */}
                <div className="absolute top-5 right-5 text-2xl font-cinzel font-black text-[#D4AF37]/20">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#700918] to-[#42050E] text-[#F7E4A8] flex items-center justify-center shadow-md border border-[#D4AF37]/40">
                  <IconComp className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#3E040D]">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#54413B] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline Quote Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#FAF6F0] border-2 border-[#D4AF37]/40 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-maroon-gradient text-[#F7E4A8] flex items-center justify-center flex-shrink-0 shadow-md">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="font-serif text-lg sm:text-xl font-bold text-[#700918]">
              “We speak the language of food”
            </p>
            <p className="text-xs sm:text-sm text-[#54413B]">
              Every recipe is prepared with love, traditional patience, and the highest standards of hospitality.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
