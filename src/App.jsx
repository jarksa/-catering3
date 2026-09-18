import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpecialityFoods from './components/SpecialityFoods';
import ComboOffers from './components/ComboOffers';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import EnquiryForm from './components/EnquiryForm';
import Reviews from './components/Reviews';
import InstagramSection from './components/InstagramSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [prefilledItem, setPrefilledItem] = useState('');

  const handleSelectItem = (itemName) => {
    setPrefilledItem(itemName);
    const formElement = document.getElementById('enquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col font-sans text-[#261B18] antialiased overflow-x-hidden">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Speciality Foods */}
        <SpecialityFoods onSelectDish={handleSelectItem} />

        {/* 3. Combo Offers */}
        <ComboOffers onSelectCombo={handleSelectItem} />

        {/* 4. Services */}
        <Services onSelectService={handleSelectItem} />

        {/* 5. Why Choose Jasmine */}
        <WhyChooseUs />

        {/* 6. About Section */}
        <About />

        {/* 7. Enquiry / Booking Form */}
        <EnquiryForm prefilledEventOrItem={prefilledItem} />

        {/* 8. Customer Reviews */}
        <Reviews />

        {/* 9. Instagram Social & Photo Gallery */}
        <InstagramSection />

        {/* 10. Final Call To Action */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Elements */}
      <WhatsAppButton />
    </div>
  );
}
