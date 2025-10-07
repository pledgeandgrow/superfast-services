import GroundShippingHero from '@/components/services/ground-shipping/GroundShippingHero';
import GroundShippingFeatures from '@/components/services/ground-shipping/GroundShippingFeatures';
import GroundShippingProcess from '@/components/services/ground-shipping/GroundShippingProcess';
import GroundShippingBenefits from '@/components/services/ground-shipping/GroundShippingBenefits';
import GroundShippingCTA from '@/components/services/ground-shipping/GroundShippingCTA';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Transport Terrestre - Ground Shipping | Superfast Services',
  description: 'Services de transport terrestre pour vos besoins de déplacement de marchandises volumineuses. Livraison sûre et ponctuelle avec des conducteurs expérimentés.',
};

export default function GroundShippingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <GroundShippingHero />
      <GroundShippingFeatures />
      <GroundShippingProcess />
      <GroundShippingBenefits />
      <GroundShippingCTA />
      <Footer />
    </div>
  );
}
