'use client'
import { motion } from 'motion/react';
import { CheckCircle2, Ship, Warehouse, Users, ArrowRight } from 'lucide-react';
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
      imageSrc: '/12.svg',
      link: '/services/complementary'
    },
    {
      icon: Ship,
      badge: "Multimodal",
      title: 'Transport Terrestre, Maritime et Aérien',
      description: 'Que votre cargaison doive voyager par route, mer ou air, nos solutions de fret multimodal vous couvrent. Notre réseau de transport terrestre assure une livraison porte-à-porte ponctuelle et fiable.',
      color: 'purple',
      imageSrc: '/13.svg',
      link: '/services/ground-shipping'
    },
    {
      icon: Warehouse,
      badge: "Technologies Avancées",
      title: 'Entreposage et Stockage',
      description: 'Nos entrepôts stratégiquement situés offrent un environnement sécurisé et contrôlé pour vos marchandises, en utilisant des technologies avancées telles que les systèmes de gestion d\'entrepôt (WMS) et l\'identification par radiofréquence (RFID).',
      color: 'orange',
      imageSrc: '/14.svg',
      link: '/services/complementary'
    },
    {
      icon: Users,
      badge: "Expertise & Solutions",
      title: 'Services de Conseil',
      description: 'Nos services de conseil en logistique offrent une expertise et des solutions pour rationaliser vos opérations de chaîne d\'approvisionnement. Nous réalisons des évaluations complètes et élaborons des stratégies personnalisées.',
      color: 'green',
      imageSrc: '/15.svg',
      link: '/services/complementary'
    }
  ];

  const colorClasses = {
    blue: { gradient: 'from-blue-500 to-blue-600', badge: 'bg-blue-50 text-blue-600 border-blue-200' },
    purple: { gradient: 'from-purple-500 to-purple-600', badge: 'bg-purple-50 text-purple-600 border-purple-200' },
    orange: { gradient: 'from-orange-500 to-orange-600', badge: 'bg-orange-50 text-orange-600 border-orange-200' },
    green: { gradient: 'from-green-500 to-green-600', badge: 'bg-green-50 text-green-600 border-green-200' }
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block text-purple-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Services Complémentaires
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À Votre <span className="text-blue-600">Écoute</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des services additionnels pour optimiser votre chaîne logistique
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
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
                  <span className={`inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold ${colors.badge}`}>
                    {service.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                      <Link href={service.link} className="flex items-center justify-center gap-2">
                        Demander plus d&apos;infos
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
