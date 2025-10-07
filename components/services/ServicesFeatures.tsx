'use client'
import { motion } from 'motion/react'
import { Globe2, Clock, Shield, Headphones, TrendingUp, Users } from 'lucide-react'

const features = [
  {
    icon: Globe2,
    title: 'Réseau Mondial',
    description: 'Présence dans plus de 200 pays avec des partenaires de confiance pour vos expéditions internationales.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Clock,
    title: 'Livraison Rapide',
    description: 'Options express disponibles pour vos envois urgents avec des délais garantis 24-48h.',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    icon: Shield,
    title: 'Sécurité Maximale',
    description: 'Assurance complète et suivi en temps réel pour la protection totale de vos marchandises.',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    description: 'Équipe dédiée disponible jour et nuit pour répondre à toutes vos questions et urgences.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'Solutions Évolutives',
    description: 'Services adaptés à vos besoins, du petit colis aux projets logistiques de grande envergure.',
    color: 'from-emerald-500 to-lime-500'
  },
  {
    icon: Users,
    title: 'Expertise Reconnue',
    description: 'Plus de 15 ans d\'expérience dans le transport international et la logistique complexe.',
    color: 'from-lime-500 to-yellow-500'
  }
]

export default function ServicesFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pourquoi Choisir <span className="text-blue-600">Superfast Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des avantages concurrentiels qui font la différence pour votre business
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Prêt à optimiser votre chaîne logistique ?
          </p>
          <a
            href="/devis"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105">
            Demander un Devis Gratuit
          </a>
        </motion.div>
      </div>
    </section>
  )
}
