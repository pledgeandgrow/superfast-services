'use client'
import { motion } from 'motion/react';
import { Shield, Zap, Users, Globe, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Sécurité Garantie',
    description: 'Protection maximale de vos marchandises et transactions avec assurance complète.',
  },
  {
    icon: Zap,
    title: 'Efficacité Optimale',
    description: 'Processus rationalisés et automatisés pour une performance maximale.',
  },
  {
    icon: Users,
    title: 'Expertise Dédiée',
    description: 'Équipe de spécialistes à votre service pour chaque aspect de votre logistique.',
  },
  {
    icon: Globe,
    title: 'Réseau International',
    description: 'Présence mondiale avec des partenaires locaux dans plus de 50 pays.',
  },
  {
    icon: Award,
    title: 'Qualité Certifiée',
    description: 'Standards internationaux ISO et certifications de qualité reconnues.',
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    description: 'Assistance continue disponible à tout moment pour vos urgences.',
  },
];

export default function ComplementaryFeatures() {
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
          <span className="inline-block text-violet-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Atouts
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi Choisir Nos <span className="text-violet-600">Services Complémentaires</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des avantages concrets pour votre entreprise et votre chaîne logistique
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-violet-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technology Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-br from-violet-600 to-purple-700 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Technologies Avancées</h3>
              <p className="text-violet-100 mb-6 leading-relaxed">
                Nous utilisons les dernières technologies pour optimiser votre chaîne logistique et garantir une visibilité totale sur vos opérations.
              </p>
              <ul className="space-y-3">
                {[
                  'Systèmes WMS (Warehouse Management System)',
                  'Technologie RFID pour le tracking',
                  'Intelligence artificielle pour l\'optimisation',
                  'Blockchain pour la traçabilité',
                ].map((tech, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-violet-400/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-violet-50">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🤖', label: 'IA & Automation' },
                { icon: '📊', label: 'Analytics Avancés' },
                { icon: '🔗', label: 'Blockchain' },
                { icon: '📡', label: 'IoT & RFID' },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-sm font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
