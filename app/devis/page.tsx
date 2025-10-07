import DevisHero from '@/components/devis/DevisHero';
import DevisForm from '@/components/devis/DevisForm';
import DevisInfo from '@/components/devis/DevisInfo';
import DevisSteps from '@/components/devis/DevisSteps';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Demander un Devis | Superfast Services',
  description: 'Obtenez un devis gratuit et personnalisé pour vos besoins en logistique et transport international. Réponse rapide garantie.',
};

export default function DevisPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DevisHero />
      <DevisSteps />
      <div className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <DevisForm />
            </div>
            <div>
              <DevisInfo />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
