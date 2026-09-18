import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, UtensilsCrossed } from 'lucide-react';
import { contactInfo } from '../data/cateringData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Specialities', href: '#specialities' },
    { label: 'Combo Offers', href: '#combos' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#enquiry' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-md py-2 border-b border-[#D4AF37]/30'
          : 'bg-[#FAF6F0] py-3.5 border-b border-[#D4AF37]/20'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg p-1"
            aria-label="Jasmine Catering Service Home"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-lg overflow-hidden border border-[#D4AF37] shadow-sm flex-shrink-0 bg-[#700918]">
              <img
                src="/images/brand/logo_badge.png"
                alt="Jasmine Catering Logo Emblem"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                width="52"
                height="52"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-[#700918] uppercase leading-tight group-hover:text-[#8C1324] transition-colors">
                Jasmine Catering
              </span>
              <span className="font-script text-xs sm:text-sm text-[#AA841C] tracking-wide font-normal -mt-0.5">
                We speak the language of food
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-[#382A26] hover:text-[#700918] hover:bg-[#700918]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:+91${contactInfo.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#700918] bg-[#700918]/5 hover:bg-[#700918]/10 rounded-full border border-[#D4AF37]/40 transition-colors"
              title="Call Jasmine Catering"
            >
              <Phone className="w-3.5 h-3.5 text-[#AA841C]" />
              <span>{contactInfo.phoneDisplay}</span>
            </a>

            <a
              href="#enquiry"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-maroon-gradient hover:opacity-95 shadow-sm border border-[#D4AF37]/50 transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#F7E4A8]" />
              <span>Enquire Now</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                'Hello Jasmine Catering Service, I would like to enquire about catering.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2 rounded-full bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href="#enquiry"
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-[#700918] shadow-sm"
            >
              Enquire
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#700918] hover:bg-[#700918]/10 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D4AF37]/30 bg-[#FAF6F0] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-md text-base font-medium text-[#261B18] hover:text-[#700918] hover:bg-[#700918]/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#D4AF37]/30 flex flex-col gap-2.5">
            <a
              href={`tel:+91${contactInfo.phone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#700918] text-[#700918] font-semibold text-sm bg-white shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#AA841C]" />
              <span>Call: {contactInfo.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                'Hello Jasmine Catering Service, I would like to enquire about catering.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
