'use client'
import { motion } from 'motion/react';
import { Shield, Zap, Heart, Users, Award, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Sécurité et Sûreté',
    description: 'La sécurité et la sûreté sont au cœur de nos priorités. Nous mettons en place des procédures rigoureuses pour protéger nos collaborateurs, partenaires et infrastructures.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Réseau Mondial',
    description: 'Présence stratégique à Dubaï, ancrage en Afrique via le Tchad, accès privilégié à la Chine et partenariats en Turquie et Europe.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Heart,
    title: 'Accompagnement Personnalisé',
    description: 'Un accompagnement sur mesure pour un approvisionnement réussi, adapté à vos budgets et exigences de qualité.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Users,
    title: 'Expertise Globale',
    description: 'Collaborateurs sur le terrain et partenariats clés pour vous offrir un éventail de sources d\'approvisionnement.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Award,
    title: 'Excellence Opérationnelle',
    description: 'Respect de l\'ensemble des réglementations et normes en vigueur dans chaque secteur où nous intervenons.',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: TrendingUp,
    title: 'Mitigation des Risques',
    description: 'Diversité géographique permettant de mitiger les risques et proposer des options adaptées.',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function AboutValues() {
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
            Ce Qui Nous Définit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-blue-600">Valeurs Fondamentales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Les principes qui guident notre action quotidienne et notre engagement envers l&apos;excellence
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
