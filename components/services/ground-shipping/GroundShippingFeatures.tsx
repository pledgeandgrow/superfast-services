'use client'
import { motion } from 'motion/react';
import { Truck, Shield, Clock, Package, MapPin, Users, Gauge, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Flotte Moderne',
    description: 'Une flotte de camions modernes et bien entretenus équipés des dernières technologies de suivi GPS.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Sécurité Maximale',
    description: 'Assurance complète et protocoles de sécurité stricts pour protéger vos marchandises pendant le transport.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Clock,
    title: 'Livraison Ponctuelle',
    description: 'Respect des délais garantis avec un taux de ponctualité de 99.8% sur toutes nos livraisons.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Package,
    title: 'Chargements Volumineux',
    description: 'Capacité de transport pour marchandises volumineuses et lourdes avec équipement spécialisé.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: MapPin,
    title: 'Réseau Étendu',
    description: 'Couverture nationale et internationale avec plus de 50 destinations desservies régulièrement.',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Users,
    title: 'Conducteurs Expérimentés',
    description: 'Équipe de chauffeurs professionnels formés et certifiés avec des années d\'expérience.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Gauge,
    title: 'Suivi en Temps Réel',
    description: 'Système de tracking avancé vous permettant de suivre vos marchandises à chaque étape du trajet.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    description: 'Service client disponible 24h/24 et 7j/7 pour répondre à toutes vos questions et préoccupations.',
    color: 'from-pink-500 to-pink-600',
  },
];

export default function GroundShippingFeatures() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Avantages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi Choisir Notre Service de <span className="text-blue-600">Transport Terrestre</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions de transport fiables et efficaces adaptées à vos besoins spécifiques
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Prêt à expédier vos marchandises en toute sécurité ?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30">
            Obtenir un Devis Gratuit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
