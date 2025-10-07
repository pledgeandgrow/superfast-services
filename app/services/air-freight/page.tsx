import AirFreightHero from '@/components/services/air-freight/AirFreightHero';
import AirFreightFeatures from '@/components/services/air-freight/AirFreightFeatures';
import AirFreightServices from '@/components/services/air-freight/AirFreightServices';
import AirFreightNetwork from '@/components/services/air-freight/AirFreightNetwork';
import AirFreightAdvantages from '@/components/services/air-freight/AirFreightAdvantages';
import AirFreightCTA from '@/components/services/air-freight/AirFreightCTA';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Fret Aérien International - Air Freight | Superfast Services',
  description: 'Service de fret aérien international pour expéditions urgentes. Réseau mondial de partenaires aériens pour livraisons rapides et sécurisées.',
};

export default function AirFreightPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AirFreightHero />
      <AirFreightFeatures />
      <AirFreightServices />
      <AirFreightNetwork />
      <AirFreightAdvantages />
      <AirFreightCTA />
      <Footer />
    </div>
  );
}
