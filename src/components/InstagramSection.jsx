import { useState } from 'react';
import { ExternalLink, Heart, Eye, X } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { contactInfo, galleryItems } from '../data/cateringData';

export default function InstagramSection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="py-20 bg-[#FAF6F0] relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#700918] bg-[#700918]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
            CONNECT ON SOCIAL MEDIA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E040D] tracking-tight">
            Follow Jasmine Catering
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-[#AA841C]">
            “Good food connects people.”
          </p>
          <p className="text-xs sm:text-sm text-[#54413B]">
            Discover our Sunday special announcements, behind-the-scenes preparation, and feast galleries on Instagram.
          </p>
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-md bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setActiveImage(item)}
            >
              <div className="relative aspect-4/5 w-full bg-[#3E040D] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Dark Overlay with Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E040D]/90 via-[#3E040D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#F7E4A8]">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-white line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <div className="pt-2 flex items-center gap-2 text-xs text-[#FAF3E0] font-semibold">
                    <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Click to enlarge</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Profile CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-bold text-sm sm:text-base shadow-xl hover:opacity-95 hover:scale-[1.02] active:scale-98 transition-all border border-white/40"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>Follow {contactInfo.instagramHandle} on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full h-auto rounded-xl object-contain max-h-[80vh]"
            />
            <div className="p-3 text-center">
              <p className="font-serif font-bold text-[#3E040D] text-sm sm:text-base">
                {activeImage.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
