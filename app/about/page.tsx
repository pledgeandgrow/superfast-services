import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import AboutStats from '@/components/about/AboutStats';
import AboutTimeline from '@/components/about/AboutTimeline';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'À Propos | Superfast Services',
  description: 'Découvrez Superfast Services, votre partenaire de confiance pour le sourcing et la logistique internationale. Notre mission, nos valeurs et notre expertise.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutStats />
      <AboutTimeline />
      <AboutTeam />
      <Footer />
    </div>
  );
}
