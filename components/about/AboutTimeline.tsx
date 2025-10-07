'use client'
import { motion } from 'motion/react';
import { Calendar, Rocket, Award, Globe, TrendingUp, Building2 } from 'lucide-react';

const timeline = [
  {
    year: '2010',
    icon: Rocket,
    title: 'Fondation',
    description: 'Création de Superfast Services à Dubai avec une vision claire : révolutionner la logistique internationale.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    year: '2013',
    icon: Globe,
    title: 'Expansion Régionale',
    description: 'Ouverture de bureaux à Abu Dhabi et Sharjah, extension de notre réseau au Moyen-Orient.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    year: '2016',
    icon: Award,
    title: 'Certification ISO',
    description: 'Obtention des certifications ISO 9001 et ISO 14001, reconnaissance de notre excellence opérationnelle.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    year: '2019',
    icon: TrendingUp,
    title: 'Croissance Accélérée',
    description: 'Dépassement des 500 clients et expansion vers l\'Afrique et l\'Asie du Sud-Est.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    year: '2022',
    icon: Building2,
    title: 'Innovation Technologique',
    description: 'Lancement de notre plateforme digitale avec tracking en temps réel et IA pour l\'optimisation.',
    color: 'from-red-500 to-red-600',
  },
  {
    year: '2025',
    icon: Rocket,
    title: 'Vision Future',
    description: 'Objectif : devenir le leader de la logistique durable au Moyen-Orient et en Afrique.',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function AboutTimeline() {
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
            Notre Parcours
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-blue-600">Histoire</span> en Dates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            15 ans d&apos;innovation, de croissance et d&apos;excellence dans la logistique internationale
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 -translate-x-1/2"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}>
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}>
                  <div className="inline-block bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <div className="text-sm text-blue-600 font-semibold mb-2 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {item.year}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Year Circle */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {item.year.slice(-2)}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
