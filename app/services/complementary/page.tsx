import ComplementaryHero from '@/components/services/complementary/ComplementaryHero';
import ComplementaryServices from '@/components/services/complementary/ComplementaryServices';
import ComplementaryFeatures from '@/components/services/complementary/ComplementaryFeatures';
import ComplementaryAdvantages from '@/components/services/complementary/ComplementaryAdvantages';
import ComplementaryCTA from '@/components/services/complementary/ComplementaryCTA';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Services Complémentaires | Superfast Services',
  description: 'Services complémentaires de logistique : facilitation de paiement, transport multimodal, entreposage et conseil en supply chain.',
};

export default function ComplementaryServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ComplementaryHero />
      <ComplementaryServices />
      <ComplementaryFeatures />
      <ComplementaryAdvantages />
      <ComplementaryCTA />
      <Footer />
    </div>
  );
}
