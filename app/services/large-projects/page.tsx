import LargeProjectsHero from '@/components/services/large-projects/LargeProjectsHero';
import LargeProjectsFeatures from '@/components/services/large-projects/LargeProjectsFeatures';
import LargeProjectsCapabilities from '@/components/services/large-projects/LargeProjectsCapabilities';
import LargeProjectsProcess from '@/components/services/large-projects/LargeProjectsProcess';
import LargeProjectsCaseStudies from '@/components/services/large-projects/LargeProjectsCaseStudies';
import LargeProjectsCTA from '@/components/services/large-projects/LargeProjectsCTA';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Grands Projets Logistiques - Large Projects | Superfast Services',
  description: 'Spécialisés dans la gestion de projets logistiques de grande envergure. Transport de volumes importants et charges hors gabarit avec planification méticuleuse.',
};

export default function LargeProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LargeProjectsHero />
      <LargeProjectsFeatures />
      <LargeProjectsCapabilities />
      <LargeProjectsProcess />
      <LargeProjectsCaseStudies />
      <LargeProjectsCTA />
      <Footer />
    </div>
  );
}
