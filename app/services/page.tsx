import ServicesHero from '@/components/services/ServicesHero'
import ServicesGrid from '@/components/services/ServicesGrid'
import ServicesFeatures from '@/components/services/ServicesFeatures'
import DetailedServicesSection from '@/components/services/DetailedServicesSection'
import ProcessSection from '@/components/services/ProcessSection'
import SecteursSection from '@/components/services/SecteursSection'
import FAQSection from '@/components/services/FAQSection'
import ServicesCTA from '@/components/services/ServicesCTA'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Nos Services Logistiques | Superfast Services',
  description: 'Découvrez nos services de transport et logistique internationale : fret aérien, transport terrestre, grands projets et services complémentaires.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <ServicesFeatures />
      <DetailedServicesSection />
      <ProcessSection />
      <SecteursSection />
      <FAQSection />
      <ServicesCTA />
      <Footer />
    </div>
  )
}
