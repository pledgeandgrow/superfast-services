import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import ServicesSection from '@/components/ServicesSection';
import MissionSection from '@/components/MissionSection';
import DetailedServicesSection from '@/components/DetailedServicesSection';
import ProcessSection from '@/components/ProcessSection';
import SecteursSection from '@/components/SecteursSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <MissionSection />
      <DetailedServicesSection />
      <ProcessSection />
      <SecteursSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
