'use client'
import { motion } from 'motion/react';
import { Quote, Target, Globe, Users } from 'lucide-react';

export default function MissionSection() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet',
    },
    {
      icon: Globe,
      title: 'Présence Mondiale',
      description: 'Un réseau global pour vos besoins',
    },
    {
      icon: Users,
      title: 'Partenariat',
      description: 'Votre succès est notre priorité',
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white" id="mission">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Notre Mission
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
            Rendre Accessible <span className="text-blue-600">Vos Ambitions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Votre partenaire de confiance pour le sourcing et la logistique internationale
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl mb-8 sm:mb-12">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
              <span className="font-bold text-blue-600 text-xl sm:text-2xl">&quot;Name it, We do it&quot;</span> — En quelques mots : ce que vous cherchez nous le trouvons. En étant VOTRE représentant chez vos fournisseurs, nous nous engageons à vous apporter notre assistance et notre expertise en toute transparence et un accompagnement sur mesure tout au long du processus d&apos;approvisionnement.
            </p>

            {/* Quote */}
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border-l-4 border-blue-600">
              <Quote className="absolute top-4 sm:top-6 left-4 sm:left-6 w-8 sm:w-10 h-8 sm:h-10 text-blue-600/20" />
              <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed mb-4 sm:mb-6 pl-6 sm:pl-8">
                « En tant que filiale du groupe EPI, Superfast Services - spécialisé dans le sourcing - s&apos;engage à simplifier et optimiser votre processus d&apos;approvisionnement. Notre présence stratégique à Dubaï, porte d&apos;entrée vers les marchés du Moyen-Orient et de l&apos;Asie, notre ancrage en Afrique via le Tchad, notre accès privilégié à la Chine avec nos collaborateurs sur le terrain et nos partenariats clés en Turquie et en Europe, constituent un atout majeur. »
              </p>
              <p className="font-bold text-sm sm:text-base text-gray-900 pl-6 sm:pl-8">— Ahmed Salah, Directeur Général</p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
