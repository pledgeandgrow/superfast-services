'use client'
import { motion } from 'motion/react'
import { Plane, Truck, Boxes, Package, ArrowRight, Clock, Globe2, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'air-freight',
    title: 'Fret Aérien International',
    description: 'Service de fret aérien pour vos expéditions urgentes. Réseau mondial de partenaires aériens pour des livraisons rapides et sécurisées.',
    icon: Plane,
    color: 'from-sky-500 to-blue-600',
    bgColor: 'from-sky-50 to-blue-50',
    features: [
      'Livraison express 24-48h',
      '200+ destinations mondiales',
      'Tracking en temps réel',
      'Dédouanement inclus'
    ],
    stats: [
      { label: 'Délai', value: '24-48h' },
      { label: 'Destinations', value: '200+' },
    ],
    link: '/services/air-freight'
  },
  {
    id: 'ground-shipping',
    title: 'Transport Terrestre',
    description: 'Services de transport terrestre pour vos marchandises volumineuses. Livraison sûre et ponctuelle avec des conducteurs expérimentés.',
    icon: Truck,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50',
    features: [
      'Transport de volumes importants',
      'Conducteurs expérimentés',
      'Suivi GPS en temps réel',
      'Assurance complète'
    ],
    stats: [
      { label: 'Capacité', value: '30T+' },
      { label: 'Couverture', value: 'Europe' },
    ],
    link: '/services/ground-shipping'
  },
  {
    id: 'large-projects',
    title: 'Grands Projets Logistiques',
    description: 'Spécialisés dans la gestion de projets logistiques de grande envergure. Transport de charges hors gabarit avec planification méticuleuse.',
    icon: Boxes,
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'from-indigo-50 to-purple-50',
    features: [
      'Gestion de projet complète',
      'Charges hors gabarit',
      'Équipe dédiée',
      'Solutions sur mesure'
    ],
    stats: [
      { label: 'Projets', value: '500+' },
      { label: 'Satisfaction', value: '99%' },
    ],
    link: '/services/large-projects'
  },
  {
    id: 'complementary',
    title: 'Services Complémentaires',
    description: 'Services additionnels : facilitation de paiement, transport multimodal, entreposage et conseil en supply chain.',
    icon: Package,
    color: 'from-purple-500 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50',
    features: [
      'Facilitation de paiement',
      'Transport multimodal',
      'Entreposage sécurisé',
      'Conseil supply chain'
    ],
    stats: [
      { label: 'Services', value: '10+' },
      { label: 'Partenaires', value: '50+' },
    ],
    link: '/services/complementary'
  }
]

export default function ServicesGrid() {
  return (
    <section id="services-grid" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Solutions <span className="text-blue-600">Logistiques</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos services spécialisés pour répondre à tous vos besoins en transport et logistique internationale
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="flex gap-4 mb-6">
                  {service.stats.map((stat, idx) => (
                    <div key={idx} className="flex-1 bg-gray-50 rounded-xl p-3 group-hover:bg-white transition-colors duration-300">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={service.link}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                  En Savoir Plus
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
