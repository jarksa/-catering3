import { useState, useEffect } from 'react';
import { Send, MessageCircle, CheckCircle2, Calendar, MapPin, Users, Utensils, AlertCircle } from 'lucide-react';
import { contactInfo } from '../data/cateringData';

export default function EnquiryForm({ prefilledEventOrItem }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: 'Wedding',
    guestCount: '',
    eventLocation: '',
    foodPreference: 'Both',
    specialRequirements: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update when prefill is passed from Combos or Menu
  useEffect(() => {
    if (prefilledEventOrItem) {
      setFormData((prev) => ({
        ...prev,
        specialRequirements: prev.specialRequirements
          ? `${prev.specialRequirements} | Selected: ${prefilledEventOrItem}`
          : `Interested in: ${prefilledEventOrItem}`,
        eventType: ['Wedding', 'Birthday', 'Corporate Event', 'Family Function', 'Party', 'Bulk Order'].includes(
          prefilledEventOrItem
        )
          ? prefilledEventOrItem
          : prev.eventType,
      }));
    }
  }, [prefilledEventOrItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.eventDate) newErrors.eventDate = 'Event Date is required';
    if (!formData.eventType) newErrors.eventType = 'Event Type is required';
    if (!formData.guestCount || Number(formData.guestCount) <= 0) {
      newErrors.guestCount = 'Number of guests is required';
    }
    if (!formData.eventLocation.trim()) {
      newErrors.eventLocation = 'Event Location is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Generate WhatsApp message with structured entered info
  const generateWhatsAppMessage = () => {
    return `Hello Jasmine Catering Service,
I would like to enquire about catering.

Name: ${formData.fullName || '-'}
Phone: ${formData.phone || '-'}
Event: ${formData.eventType || '-'}
Date: ${formData.eventDate || '-'}
Guests: ${formData.guestCount || '-'}
Location: ${formData.eventLocation || '-'}
Food Preference: ${formData.foodPreference || '-'}
Requirements: ${formData.specialRequirements || '-'}`;
  };

  const handleWhatsAppEnquiry = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate submission handler ready to connect with Email / Google Sheets / API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form fields
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        eventDate: '',
        eventType: 'Wedding',
        guestCount: '',
        eventLocation: '',
        foodPreference: 'Both',
        specialRequirements: '',
      });
    }, 600);
  };

  // Get minimum date (today) in YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="enquiry" className="py-24 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative floral aura */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#700918]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#700918] bg-[#700918]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
            BOOK YOUR CATERING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E040D] tracking-tight">
            Send Us Your Enquiry
          </h2>
          <p className="text-sm sm:text-base text-[#54413B] leading-relaxed">
            Tell us about your event and we'll get back to you with the best options.
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-2" />
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#D4AF37]/40 shadow-2xl relative">
          
          {/* Success Notification */}
          {isSubmitted ? (
            <div className="p-8 sm:p-12 text-center space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3E040D]">
                Thank you! Your enquiry has been received.
              </h3>
              <p className="text-base text-[#54413B] max-w-md mx-auto leading-relaxed">
                We’ll get back to you shortly with custom catering details and recommendations.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-[#700918] bg-[#FAF6F0] hover:bg-[#F3EBDD] border border-[#D4AF37] transition-colors"
                >
                  Send Another Enquiry
                </button>

                <a
                  href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Jasmine Catering Service, I just submitted an enquiry on your website and would like to connect.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#382A26] mb-1.5">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ayesha Rahman"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#261B18] bg-[#FDFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all ${
                      errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#D4AF37]/40'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#382A26] mb-1.5">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#261B18] bg-[#FDFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#D4AF37]/40'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#382A26] mb-1.5">
                    Email Address <span className="text-xs font-normal text-gray-500">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. ayesha@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 text-sm text-[#261B18] bg-[#FDFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                  />
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="eventDate" className="block text-xs font-bold uppercase tracking-wider text-[#382A26] mb-1.5">
                    Event Date <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      min={todayStr}
                      value={formData.eventDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#261B18] bg-[#FDFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all ${
                        errors.eventDate ? 'border-red-500 bg-red-50/20' : 'border-[#D4AF37]/40'
                      }`}
                    />
                  </div>
                  {errors.eventDate && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.eventDate}</span>
                    </p>
                  )}
                </div>

                {/* Event Type */}
                <div>
                  <label htmlFor="eventType" className="block text-xs font-bold uppercase tracking-wider text-[#382A26] mb-1.5">
                    Event Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 text-sm text-[#261B18] bg-[#FDFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Family Function">Family Function</option>
                    <option value="Party">Party</option>
                    <option value="Bulk Order">Bulk Order</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="guestCount" className="block text-xs font-bold uppercase tracking-wider text-[#382A26] mb-1.5">
                    Number of Guests <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    min="1"
                    value={formData.guestCount}
                    onChange={handleChange}
                    placeholder="e.g. 50"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#261B18] bg-[#FDFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all ${
                      errors.guestCount ? 'border-red-500 bg-red-50/20' : 'border-[#D4AF37]/40'
                    }`}
                  />
                  {errors.guestCount && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.guestCount}</span>
                    </p>
                  )}
                </div>

                {/* Event Location */}
                <div className="sm:col-span-2">
                  <label htmlFor="eventLocation" className="block text-xs font-bold uppercase tracking-wider text-[#382A26] mb-1.5">
                    Event Location / City <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="eventLocation"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleChange}
                    placeholder="e.g. Chennai / Madurai / Coimbatore"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#261B18] bg-[#FDFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all ${
                      errors.eventLocation ? 'border-red-500 bg-red-50/20' : 'border-[#D4AF37]/40'
                    }`}
                  />
                  {errors.eventLocation && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.eventLocation}</span>
                    </p>
                  )}
                </div>

                {/* Food Preference */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#382A26] mb-2">
                    Food Preference
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['Vegetarian', 'Non-Vegetarian', 'Both', 'Custom'].map((pref) => (
                      <label
                        key={pref}
                        className={`flex items-center justify-center p-3 rounded-xl border cursor-pointer text-xs sm:text-sm font-semibold transition-all ${
                          formData.foodPreference === pref
                            ? 'bg-[#700918] text-white border-[#700918] shadow-xs'
                            : 'bg-[#FDFBF7] text-[#382A26] border-[#D4AF37]/40 hover:bg-[#FAF6F0]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="foodPreference"
                          value={pref}
                          checked={formData.foodPreference === pref}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>{pref}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message / Special Requirements */}
                <div className="sm:col-span-2">
                  <label htmlFor="specialRequirements" className="block text-xs font-bold uppercase tracking-wider text-[#382A26] mb-1.5">
                    Message / Special Requirements
                  </label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    rows="3"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    placeholder="Tell us about specific dish preferences, Sunday special bookings, live counters, or timing requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/40 text-sm text-[#261B18] bg-[#FDFBF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all resize-y"
                  ></textarea>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-maroon-gradient text-white font-bold text-sm sm:text-base border border-[#D4AF37]/50 shadow-lg hover:opacity-95 active:scale-98 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#F7E4A8]" />
                  <span>{isSubmitting ? 'Submitting Enquiry...' : 'Send Enquiry'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg active:scale-98 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#7A645C] pt-1">
                🔒 Your contact details are strictly kept private and used only for catering consultations.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
