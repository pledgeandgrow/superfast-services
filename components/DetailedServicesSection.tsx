'use client'
import { CheckCircle2, Ship, Warehouse, Users } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function DetailedServicesSection() {
  const services = [
    {
      icon: CheckCircle2,
      badge: "Partenaire Stratégique",
      title: 'Facilitateur De Transfert / Paiement',
      description: 'Nous sommes bien plus qu\'un simple prestataire ; nous sommes vos partenaires stratégiques pour des transitions réussies. Notre expertise repose sur des années d\'expérience dans la gestion de transferts de diverses natures.',
      color: 'blue',
      imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
    },
    {
      icon: Ship,
      badge: "Multimodal",
      title: 'Transport Terrestre, Maritime et Aérien',
      description: 'Que votre cargaison doive voyager par route, mer ou air, nos solutions de fret multimodal vous couvrent. Notre réseau de transport terrestre assure une livraison porte-à-porte ponctuelle et fiable.',
      color: 'purple',
      imageSrc: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop'
    },
    {
      icon: Warehouse,
      badge: "Technologies Avancées",
      title: 'Entreposage et Stockage',
      description: 'Nos entrepôts stratégiquement situés offrent un environnement sécurisé et contrôlé pour vos marchandises, en utilisant des technologies avancées telles que les systèmes de gestion d\'entrepôt (WMS) et l\'identification par radiofréquence (RFID).',
      color: 'orange',
      imageSrc: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop'
    },
    {
      icon: Users,
      badge: "Expertise & Solutions",
      title: 'Services de Conseil',
      description: 'Nos services de conseil en logistique offrent une expertise et des solutions pour rationaliser vos opérations de chaîne d\'approvisionnement. Nous réalisons des évaluations complètes et élaborons des stratégies personnalisées.',
      color: 'green',
      imageSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    }
  ];

  const colorClasses = {
    blue: { gradient: 'from-blue-500 to-blue-600', badge: 'bg-blue-50 text-blue-600 border-blue-200' },
    purple: { gradient: 'from-purple-500 to-purple-600', badge: 'bg-purple-50 text-purple-600 border-purple-200' },
    orange: { gradient: 'from-orange-500 to-orange-600', badge: 'bg-orange-50 text-orange-600 border-orange-200' },
    green: { gradient: 'from-green-500 to-green-600', badge: 'bg-green-50 text-green-600 border-green-200' }
  };

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200">Services Complémentaires</Badge>
          <h2 className="max-w-2xl text-4xl md:text-5xl font-bold">
            À Votre Écoute
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Des services additionnels pour optimiser votre chaîne logistique
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-4 left-4 bg-gradient-to-br ${colors.gradient} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                    <Icon className="text-white" size={28} />
                  </div>
                </div>
                <div className="p-8">
                  <Badge variant="outline" className={`mb-4 ${colors.badge}`}>
                    {service.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link href="mailto:support@superfast-services.com">Demander plus d'infos</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
