'use client'
import { motion } from 'motion/react';
import { Factory, Construction, Ship, Plane, Train, Container } from 'lucide-react';

const capabilities = [
  {
    icon: Factory,
    title: 'Matières Premières',
    items: [
      'Transport en vrac de minerais et métaux',
      'Produits chimiques et pétrochimiques',
      'Matériaux de construction en grande quantité',
      'Produits agricoles et alimentaires',
    ],
    image: '/13.svg',
  },
  {
    icon: Construction,
    title: 'Charges Hors Gabarit',
    items: [
      'Équipements industriels surdimensionnés',
      'Structures métalliques et préfabriquées',
      'Machines-outils et presses industrielles',
      'Transformateurs et équipements électriques',
    ],
    image: '/14.svg',
  },
  {
    icon: Ship,
    title: 'Projets Maritimes',
    items: [
      'Transport de conteneurs en volume',
      'Fret maritime break-bulk',
      'Coordination port-à-port',
      'Dédouanement et manutention portuaire',
    ],
    image: '/15.svg',
  },
  {
    icon: Plane,
    title: 'Fret Aérien Urgent',
    items: [
      'Charters pour projets urgents',
      'Pièces de rechange critiques',
      'Équipements médicaux et scientifiques',
      'Coordination multi-aéroports',
    ],
    image: '/16.svg',
  },
  {
    icon: Train,
    title: 'Transport Ferroviaire',
    items: [
      'Wagons complets et trains-blocs',
      'Transport intermodal rail-route',
      'Matières dangereuses certifiées',
      'Liaisons transcontinentales',
    ],
    image: '/17.svg',
  },
  {
    icon: Container,
    title: 'Solutions Multimodales',
    items: [
      'Combinaison mer-air-terre',
      'Optimisation des itinéraires',
      'Gestion des transbordements',
      'Suivi bout-en-bout',
    ],
    image: '/18.svg',
  },
];

export default function LargeProjectsCapabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Capacités
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solutions Complètes pour <span className="text-indigo-600">Tous Types de Projets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise diversifiée pour répondre à tous vos besoins logistiques industriels
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
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
                  src={capability.image} 
                  alt={capability.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {capability.title}
                </h3>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
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
            Votre projet nécessite une solution personnalisée ?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600/30">
            Discuter de Votre Projet
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
