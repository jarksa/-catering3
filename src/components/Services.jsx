import { Heart, Cake, Briefcase, Users, PackageCheck, ArrowUpRight } from 'lucide-react';
import { services } from '../data/cateringData';

export default function Services({ onSelectService }) {
  const iconMap = {
    HeartHandshake: Heart,
    Cake: Cake,
    Briefcase: Briefcase,
    Users: Users,
    Package: PackageCheck,
  };

  const handleServiceClick = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const formElement = document.getElementById('enquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[#FAF6F0] relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#700918] bg-[#700918]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
            OUR SERVICES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E040D] tracking-tight">
            Catering for Every Occasion
          </h2>
          <p className="text-sm sm:text-base text-[#54413B] leading-relaxed">
            From intimate gatherings to grand celebrations, we make your moments special.
          </p>
          <div className="w-20 h-1 bg-gold-gradient mx-auto rounded-full mt-2" />
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Users;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 border border-[#D4AF37]/30 shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 text-left"
              >
                <div className="space-y-4">
                  {/* Icon Container with Gold/Maroon Accent */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF6F0] to-[#F3EBDD] border border-[#D4AF37]/50 flex items-center justify-center text-[#700918] group-hover:bg-maroon-gradient group-hover:text-white transition-colors shadow-xs">
                    <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-[#3E040D] group-hover:text-[#700918] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#AA841C]">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#54413B] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 mt-4 border-t border-[#FAF6F0]">
                  <button
                    type="button"
                    onClick={() => handleServiceClick(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#700918] group-hover:text-[#AA841C] transition-colors"
                  >
                    <span>Enquire for {service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                {/* Bottom Gold Line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
