'use client'
import { motion } from 'motion/react';
import { Zap, Globe, Shield, Package, Clock, FileCheck, Headphones, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Livraison Express',
    description: 'Service de livraison ultra-rapide avec options 24h, 48h et 72h selon vos besoins urgents.',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Globe,
    title: 'Réseau Mondial',
    description: 'Accès à plus de 200 destinations internationales via notre réseau de partenaires aériens certifiés.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Sécurité Maximale',
    description: 'Assurance tous risques et protocoles de sécurité stricts pour protéger vos marchandises.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Package,
    title: 'Colis Spéciaux',
    description: 'Gestion de marchandises volumineuses, fragiles, périssables ou nécessitant des conditions spéciales.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Clock,
    title: 'Tracking Temps Réel',
    description: 'Suivi GPS en temps réel de vos expéditions avec notifications à chaque étape du transport.',
    color: 'from-sky-500 to-sky-600',
  },
  {
    icon: FileCheck,
    title: 'Dédouanement Rapide',
    description: 'Gestion complète des formalités douanières pour un passage en douane accéléré.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Headphones,
    title: 'Support Dédié',
    description: 'Équipe dédiée disponible 24/7 pour répondre à vos urgences et questions.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'Tarifs Optimisés',
    description: 'Négociation de tarifs préférentiels avec les compagnies aériennes pour votre économie.',
    color: 'from-teal-500 to-teal-600',
  },
];

export default function AirFreightFeatures() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Avantages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi Choisir Notre <span className="text-sky-600">Fret Aérien</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions aériennes rapides et fiables pour vos expéditions internationales urgentes
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
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
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

        {/* Speed Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-br from-sky-600 to-blue-700 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Comparaison des Délais de Livraison</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { mode: 'Fret Aérien Express', time: '24-48h', icon: '✈️', highlight: true },
              { mode: 'Fret Maritime', time: '15-30 jours', icon: '🚢', highlight: false },
              { mode: 'Transport Terrestre', time: '5-10 jours', icon: '🚛', highlight: false },
            ].map((item, index) => (
              <div 
                key={index} 
                className={`text-center p-6 rounded-2xl transition-all duration-300 ${
                  item.highlight 
                    ? 'bg-white/20 border-2 border-white/50 scale-105' 
                    : 'bg-white/10 border border-white/20'
                }`}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-xl font-bold mb-2">{item.mode}</div>
                <div className={`text-3xl font-bold ${item.highlight ? 'text-yellow-300' : 'text-sky-200'}`}>
                  {item.time}
                </div>
                {item.highlight && (
                  <div className="mt-3 text-sm text-yellow-300 font-semibold">⚡ Le Plus Rapide</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
