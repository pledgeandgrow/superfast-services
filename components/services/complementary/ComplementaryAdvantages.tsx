'use client'
import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Clock, Target } from 'lucide-react';

const advantages = [
  {
    icon: TrendingUp,
    title: 'Croissance Accélérée',
    description: 'Optimisez votre chaîne logistique pour une croissance rapide et durable de votre entreprise.',
    stats: '+40% d\'efficacité',
    benefits: [
      'Réduction des délais de livraison',
      'Amélioration de la satisfaction client',
      'Expansion facilitée sur de nouveaux marchés',
    ],
  },
  {
    icon: DollarSign,
    title: 'Réduction des Coûts',
    description: 'Diminuez vos coûts opérationnels grâce à nos solutions intégrées et notre expertise.',
    stats: 'Jusqu\'à 35% d\'économies',
    benefits: [
      'Optimisation des stocks',
      'Réduction des coûts de transport',
      'Minimisation des pertes et dommages',
    ],
  },
  {
    icon: Clock,
    title: 'Gain de Temps',
    description: 'Concentrez-vous sur votre cœur de métier pendant que nous gérons votre logistique.',
    stats: '50% de temps gagné',
    benefits: [
      'Processus automatisés',
      'Gestion simplifiée',
      'Moins d\'intervention manuelle',
    ],
  },
  {
    icon: Target,
    title: 'Précision Maximale',
    description: 'Technologies avancées pour une précision et une fiabilité sans faille.',
    stats: '99.8% de précision',
    benefits: [
      'Inventaire en temps réel',
      'Traçabilité complète',
      'Zéro erreur de picking',
    ],
  },
];

export default function ComplementaryAdvantages() {
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
            Avantages Concrets
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Les Bénéfices pour <span className="text-violet-600">Votre Entreprise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des résultats mesurables et un impact direct sur votre performance
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-violet-100">
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                      {advantage.title}
                    </h3>
                    <span className="text-sm font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full whitespace-nowrap">
                      {advantage.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {advantage.description}
                  </p>
                  <ul className="space-y-2">
                    {advantage.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-violet-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Résultats Clients
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Clients Satisfaits' },
              { value: '35%', label: 'Réduction Coûts Moyenne' },
              { value: '99.8%', label: 'Taux de Précision' },
              { value: '24/7', label: 'Support Disponible' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-violet-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
