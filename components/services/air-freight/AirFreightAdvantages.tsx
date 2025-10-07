'use client'
import { motion } from 'motion/react';
import { Zap, DollarSign, Shield, CheckCircle2 } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: 'Rapidité Inégalée',
    description: 'Livraison express en 24-48h pour vos urgences critiques, bien plus rapide que tout autre mode de transport.',
    stats: 'Jusqu\'à 10x plus rapide',
    benefits: [
      'Réduction des délais de production',
      'Réactivité face aux urgences',
      'Avantage concurrentiel',
    ],
  },
  {
    icon: DollarSign,
    title: 'Optimisation des Coûts',
    description: 'Réduisez vos coûts de stockage et d\'inventaire grâce à des livraisons rapides et fréquentes.',
    stats: 'Économie jusqu\'à 40%',
    benefits: [
      'Moins de stock immobilisé',
      'Réduction des entrepôts',
      'Flux de trésorerie amélioré',
    ],
  },
  {
    icon: Shield,
    title: 'Sécurité Maximale',
    description: 'Taux de perte et de dommage le plus faible de l\'industrie grâce aux standards aériens stricts.',
    stats: '99.9% de fiabilité',
    benefits: [
      'Assurance tous risques',
      'Emballage sécurisé',
      'Suivi en temps réel',
    ],
  },
  {
    icon: CheckCircle2,
    title: 'Fiabilité Garantie',
    description: 'Respect des délais garanti avec des horaires de vol réguliers et une planification précise.',
    stats: '98% de ponctualité',
    benefits: [
      'Planning prévisible',
      'Moins d\'imprévus',
      'Satisfaction client',
    ],
  },
];

export default function AirFreightAdvantages() {
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
            Avantages Clés
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Les Bénéfices du <span className="text-sky-600">Fret Aérien</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez pourquoi le transport aérien est le choix optimal pour vos expéditions urgentes
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
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                      {advantage.title}
                    </h3>
                    <span className="text-sm font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full whitespace-nowrap">
                      {advantage.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {advantage.description}
                  </p>
                  <ul className="space-y-2">
                    {advantage.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-6 text-white">
            <h3 className="text-2xl font-bold text-center">Comparaison des Modes de Transport</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Critère</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-sky-600">Fret Aérien</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Fret Maritime</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Transport Terrestre</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { criteria: 'Délai de livraison', air: '24-48h', sea: '15-30 jours', land: '5-10 jours' },
                  { criteria: 'Fiabilité', air: '98%', sea: '85%', land: '90%' },
                  { criteria: 'Sécurité', air: '99.9%', sea: '95%', land: '96%' },
                  { criteria: 'Suivi en temps réel', air: '✓ Complet', sea: '✓ Limité', land: '✓ Partiel' },
                  { criteria: 'Flexibilité horaires', air: '✓ Élevée', sea: '✗ Faible', land: '✓ Moyenne' },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.criteria}</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-sky-600">{row.air}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{row.sea}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{row.land}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '10,000+', label: 'Expéditions/an' },
            { value: '99.9%', label: 'Taux de réussite' },
            { value: '24/7', label: 'Support client' },
            { value: '200+', label: 'Destinations' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-sky-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
