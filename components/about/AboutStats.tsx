'use client'
import { motion } from 'motion/react';
import { TrendingUp, Globe, Package } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '15+',
    label: 'Années d\'Expérience',
    description: 'Dans la logistique internationale',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Pays Desservis',
    description: 'Réseau mondial étendu',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Package,
    value: '1000+',
    label: 'Projets Réalisés',
    description: 'Avec succès',
    color: 'from-pink-500 to-pink-600',
  },
];

export default function AboutStats() {
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
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Chiffres Clés
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            L&apos;Excellence en <span className="text-blue-600">Chiffres</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des résultats concrets qui témoignent de notre engagement et de notre expertise
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <div className="text-5xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
