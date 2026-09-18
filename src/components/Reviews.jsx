import { useState } from 'react';
import { Star, Quote, CheckCircle2, Image as ImageIcon, X } from 'lucide-react';
import { customerReviews } from '../data/cateringData';

export default function Reviews() {
  const [selectedFlyer, setSelectedFlyer] = useState(null);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#FAF6F0] via-white to-[#FAF6F0] relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#700918] bg-[#700918]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
            CUSTOMER REVIEWS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E040D] tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-[#54413B] leading-relaxed">
            Real words from our happy customers — authentic love, trust and support from special events and Sunday feasts.
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-2" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {customerReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-7 border border-[#D4AF37]/40 shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between text-left relative"
            >
              {/* Quote Icon watermark */}
              <Quote className="absolute top-5 right-5 w-8 h-8 text-[#D4AF37]/20 pointer-events-none" />

              <div className="space-y-4">
                {/* 5-Star Ratings */}
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-[#AA841C]">
                    5.0 Verified Review
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#382A26] font-normal leading-relaxed italic">
                  “{rev.review}”
                </p>
              </div>

              {/* Author & Tag info */}
              <div className="pt-4 mt-4 border-t border-[#FAF6F0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#700918]/10 text-[#700918] flex items-center justify-center font-bold text-xs">
                    {rev.author[0]}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#3E040D]">
                      {rev.author}
                    </h3>
                    <p className="text-[11px] text-[#7A645C]">
                      {rev.tag}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Real Feedback</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View Original Verified Flyers CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-3 px-6 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/50 shadow-xs text-xs sm:text-sm text-[#54413B]">
            <span>📸 All reviews are verified from authentic customer messages received by Jasmine Catering.</span>
            <button
              type="button"
              onClick={() => setSelectedFlyer('/images/flyers/customer_reviews_flyer_1.jpg')}
              className="font-bold text-[#700918] hover:text-[#AA841C] underline flex items-center gap-1"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>View Review Flyer</span>
            </button>
          </div>
        </div>

      </div>

      {/* Flyer Modal Preview */}
      {selectedFlyer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedFlyer(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedFlyer(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedFlyer}
              alt="Authentic Jasmine Catering Customer Reviews Flyer"
              className="w-full h-auto rounded-xl object-contain max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
