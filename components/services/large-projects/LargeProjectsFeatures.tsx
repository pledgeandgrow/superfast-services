'use client'
import { motion } from 'motion/react';
import { Cog, Users, FileCheck, Shield, Globe2, Zap, BarChart3, Headphones } from 'lucide-react';

const features = [
  {
    icon: Cog,
    title: 'Planification Méticuleuse',
    description: 'Analyse détaillée de chaque aspect du projet avec des plans d\'action précis et des contingences.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Users,
    title: 'Équipe Dédiée',
    description: 'Chef de projet assigné et équipe spécialisée pour gérer tous les aspects de votre projet.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FileCheck,
    title: 'Gestion Documentaire',
    description: 'Gestion complète des permis, autorisations et documentation réglementaire nécessaire.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Assurance Complète',
    description: 'Couverture d\'assurance adaptée aux projets de grande envergure et charges spéciales.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Globe2,
    title: 'Coordination Multi-Sites',
    description: 'Synchronisation parfaite entre plusieurs sites et pays pour des projets internationaux.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Zap,
    title: 'Équipements Spécialisés',
    description: 'Accès à des équipements de levage et transport pour charges exceptionnelles.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: BarChart3,
    title: 'Reporting Détaillé',
    description: 'Rapports réguliers sur l\'avancement, les coûts et les performances du projet.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Headphones,
    title: 'Support Continu',
    description: 'Assistance 24/7 pendant toute la durée du projet avec points de contact dédiés.',
    color: 'from-red-500 to-red-600',
  },
];

export default function LargeProjectsFeatures() {
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
          <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Notre Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Une Approche <span className="text-indigo-600">Professionnelle</span> pour Vos Grands Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions sur mesure pour gérer la complexité de vos projets logistiques d&apos;envergure
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
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '200+', label: 'Projets Réalisés' },
              { value: '50M+', label: 'Tonnes Transportées' },
              { value: '30+', label: 'Pays Desservis' },
              { value: '100%', label: 'Taux de Réussite' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
