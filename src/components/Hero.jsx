import { CheckCircle2, ArrowRight, Utensils, Sparkles, Calendar } from 'lucide-react';
import { contactInfo } from '../data/cateringData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#FDFBF7] to-[#FAF6F0] pattern-kolam"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#700918]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand & Copy */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            
            {/* Top Brand Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#700918]/10 border border-[#D4AF37]/40 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#AA841C]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#700918] uppercase">
                Premier South Indian Catering
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#3E040D] leading-[1.12] tracking-tight">
              Delicious Food. <br />
              <span className="text-gold-gradient font-serif italic">
                Beautifully Served.
              </span>
            </h1>

            {/* Subheading with Brand Tagline */}
            <div className="space-y-2 border-l-3 border-[#D4AF37] pl-4 sm:pl-5">
              <p className="font-cinzel text-lg sm:text-xl font-bold text-[#700918]">
                Jasmine Catering Service
              </p>
              <p className="font-script text-2xl sm:text-3xl text-[#AA841C] -mt-1 font-normal">
                “{contactInfo.tagline}”
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#54413B] max-w-2xl font-normal leading-relaxed">
              Authentic flavours, fresh ingredients and memorable catering for every special occasion. From Sunday signature handi biryanis to lavish wedding banquets.
            </p>

            {/* Small Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-[#382A26] text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Fresh & Quality Ingredients</span>
              </div>
              <div className="flex items-center gap-2 text-[#382A26] text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Hygienic Preparation</span>
              </div>
              <div className="flex items-center gap-2 text-[#382A26] text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Made for Every Occasion</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#specialities"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-maroon-gradient hover:opacity-95 shadow-lg border border-[#D4AF37]/60 transition-all hover:scale-[1.02] active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <Utensils className="w-4 h-4 text-[#F7E4A8]" />
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 text-[#F7E4A8]" />
              </a>

              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-[#700918] bg-[#FAF6F0] hover:bg-[#F3EBDD] border-2 border-[#D4AF37] shadow-md transition-all hover:scale-[1.02] active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#700918]"
              >
                <span>Get a Quote</span>
              </a>
            </div>

            {/* Quick Sunday Notice */}
            <div className="flex items-center gap-2 text-xs text-[#7A645C] pt-2">
              <Calendar className="w-3.5 h-3.5 text-[#AA841C]" />
              <span>Sunday Specials available: Naattu Kozhi & Prawn Biryani (Pre-booking required)</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative w-full">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/40 via-[#8C1324]/20 to-[#D4AF37]/30 blur-sm transform rotate-1" />
              
              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-[#D4AF37] shadow-2xl">
                <img
                  src="/images/food/naatu_kozhi_biryani.jpg"
                  alt="Authentic Naattu Kozhi Biryani Feast"
                  className="w-full h-80 sm:h-96 md:h-[440px] lg:h-[500px] xl:h-[540px] object-cover hover:scale-105 transition-transform duration-700"
                  fetchPriority="high"
                  loading="eager"
                  width="800"
                  height="600"
                />

                {/* Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E040D]/80 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Bottom Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#FAF6F0]/95 backdrop-blur-md border border-[#D4AF37]/60 shadow-lg text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#AA841C]">
                        Signature Specialty
                      </span>
                      <h2 className="font-serif text-base sm:text-lg font-bold text-[#3E040D] leading-tight">
                        Naattu Kozhi Biryani
                      </h2>
                      <p className="text-xs text-[#54413B]">
                        Served with Raitha, Brinjal & Bread Halwa
                      </p>
                    </div>

                    <a
                      href="#specialities"
                      className="px-3 py-1.5 text-xs font-bold rounded-lg bg-maroon-gradient text-white border border-[#D4AF37]/40 shadow-sm hover:opacity-90"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Badge (Pre-booking) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-gradient-to-r from-[#D4AF37] to-[#AA841C] text-[#3E040D] p-3 rounded-2xl shadow-xl border border-white flex items-center gap-2 animate-pulse">
                <Sparkles className="w-5 h-5 text-white" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-black tracking-wider leading-none text-white">
                    Special Batch
                  </p>
                  <p className="text-xs font-extrabold leading-tight">
                    Pre-Booking Open
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
