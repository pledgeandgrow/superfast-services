import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import PartnersSection from '@/components/home/PartnersSection';
import ServicesSection from '@/components/home/ServicesSection';
import MissionSection from '@/components/home/MissionSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <MissionSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
