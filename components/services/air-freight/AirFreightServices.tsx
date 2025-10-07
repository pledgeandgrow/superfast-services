'use client'
import { motion } from 'motion/react';
import { Package, Snowflake, AlertTriangle, Heart, Boxes, Plane } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: 'Fret Standard',
    description: 'Service économique pour marchandises non urgentes',
    features: [
      'Délai 3-5 jours ouvrables',
      'Tarifs compétitifs',
      'Consolidation possible',
      'Tracking inclus',
    ],
    image: '/2.svg',
  },
  {
    icon: Plane,
    title: 'Fret Express',
    description: 'Livraison ultra-rapide pour vos urgences',
    features: [
      'Livraison 24-48h garantie',
      'Priorité embarquement',
      'Suivi en temps réel',
      'Support dédié 24/7',
    ],
    image: '/3.svg',
  },
  {
    icon: Snowflake,
    title: 'Fret Réfrigéré',
    description: 'Transport sous température contrôlée',
    features: [
      'Chaîne du froid garantie',
      'Produits pharmaceutiques',
      'Denrées périssables',
      'Monitoring température',
    ],
    image: '/4.svg',
  },
  {
    icon: AlertTriangle,
    title: 'Marchandises Dangereuses',
    description: 'Transport certifié IATA pour produits spéciaux',
    features: [
      'Certification DGR',
      'Emballage conforme',
      'Documentation complète',
      'Personnel formé',
    ],
    image: '/5.svg',
  },
  {
    icon: Heart,
    title: 'Fret Médical',
    description: 'Transport sécurisé de matériel médical et échantillons',
    features: [
      'Conformité sanitaire',
      'Livraison prioritaire',
      'Conditions spéciales',
      'Traçabilité totale',
    ],
    image: '/6.svg',
  },
  {
    icon: Boxes,
    title: 'Fret Volumineux',
    description: 'Solutions pour charges lourdes et surdimensionnées',
    features: [
      'Charters disponibles',
      'Équipements spéciaux',
      'Planification sur mesure',
      'Manutention experte',
    ],
    image: '/7.svg',
  },
];

export default function AirFreightServices() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solutions de <span className="text-sky-600">Fret Aérien</span> Adaptées
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des services spécialisés pour répondre à tous vos besoins de transport aérien
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-sky-500/90 backdrop-blur-sm flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full bg-sky-50 hover:bg-sky-100 text-sky-600 font-semibold py-3 rounded-xl transition-colors duration-300">
                  En Savoir Plus
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Besoin d&apos;un service personnalisé ?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-sky-600/30">
            Contactez Nos Experts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
