import { Heart, Sparkles, Utensils, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../data/cateringData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#FAF6F0] relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column: Logo Emblem & Catering Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl bg-white">
                <img
                  src="/images/flyers/customer_reviews_flyer_1.jpg"
                  alt="Jasmine Catering Food and Customer Service"
                  className="w-full h-80 sm:h-96 object-cover object-top"
                  loading="lazy"
                  width="600"
                  height="700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E040D]/70 via-transparent to-transparent" />
                
                {/* Embedded Logo Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#FAF6F0]/95 backdrop-blur-md border border-[#D4AF37] flex items-center gap-3">
                  <img
                    src="/images/brand/logo_badge.png"
                    alt="Jasmine Catering Logo"
                    className="w-12 h-12 rounded-lg object-cover border border-[#D4AF37] bg-[#700918]"
                    width="48"
                    height="48"
                  />
                  <div className="text-left">
                    <p className="font-cinzel text-xs font-bold text-[#700918] uppercase">
                      Jasmine Catering Service
                    </p>
                    <p className="font-script text-sm text-[#AA841C]">
                      We speak the language of food
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Women Entrepreneur Badge (Verified from Instagram source) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 border border-[#D4AF37] shadow-xl flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 fill-rose-600" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#7A645C] block">
                    Proudly Led
                  </span>
                  <span className="text-xs font-extrabold text-[#700918]">
                    Women Entrepreneur
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#700918] bg-[#700918]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
                OUR STORY & PASSION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E040D] tracking-tight">
                Good Food. Great Memories.
              </h2>
              <p className="font-script text-2xl sm:text-3xl text-[#AA841C]">
                “{contactInfo.tagline}”
              </p>
            </div>

            {/* Core Message */}
            <p className="text-base sm:text-lg text-[#382A26] leading-relaxed">
              Jasmine Catering Service brings delicious, comforting food to your special occasions. From family gatherings and birthdays to weddings, corporate events and bulk orders, our goal is to make every event memorable through great food and dependable service.
            </p>

            <p className="text-sm sm:text-base text-[#54413B] leading-relaxed">
              Cooking with authentic recipes, freshly ground spice blends, and pristine culinary hygiene, we take pride in serving meals that remind everyone of heartfelt homemade goodness.
            </p>

            {/* Key Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-[#261B18] font-semibold bg-white p-3 rounded-xl border border-[#D4AF37]/30 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Homestyle Flavors & Recipes</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#261B18] font-semibold bg-white p-3 rounded-xl border border-[#D4AF37]/30 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Carefully Sourced Ingredients</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#261B18] font-semibold bg-white p-3 rounded-xl border border-[#D4AF37]/30 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Strict Cleanliness Standards</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#261B18] font-semibold bg-white p-3 rounded-xl border border-[#D4AF37]/30 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Reliable Punctual Service</span>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-maroon-gradient text-white text-sm font-bold border border-[#D4AF37]/50 shadow-md hover:opacity-95 transition-all"
              >
                <Utensils className="w-4 h-4 text-[#F7E4A8]" />
                <span>Discuss Your Event</span>
              </a>

              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#700918] hover:text-[#AA841C] transition-colors"
              >
                <span>Follow on Instagram</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
