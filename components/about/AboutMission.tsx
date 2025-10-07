'use client'
import { motion } from 'motion/react';
import { Target, Eye, Lightbulb } from 'lucide-react';

export default function AboutMission() {
  return (
    <section id="mission" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Notre Raison d&apos;Être
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mission, Vision & <span className="text-blue-600">Valeurs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ce qui nous guide au quotidien dans notre engagement envers l&apos;excellence
          </p>
        </motion.div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: 'Notre Mission',
              description: 'Simplifier et optimiser votre processus d\'approvisionnement grâce à notre réseau mondial et notre expertise en sourcing.',
              color: 'from-blue-500 to-blue-600',
            },
            {
              icon: Eye,
              title: 'Notre Vision',
              description: 'Être votre partenaire stratégique pour un approvisionnement global, avec un accompagnement personnalisé et des solutions adaptées à vos besoins.',
              color: 'from-indigo-500 to-indigo-600',
            },
            {
              icon: Lightbulb,
              title: 'Notre Devise',
              description: '« You Name it, We Do it » - Quelle que soit votre demande, nous trouvons la solution.',
              color: 'from-purple-500 to-purple-600',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/1.svg" 
              alt="Notre Histoire"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">15 Ans d&apos;Excellence</h3>
              <p className="text-blue-200">Une histoire de croissance et d&apos;innovation</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Qui Sommes-Nous ?</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                En tant que filiale du groupe EPI, <strong className="text-gray-900">Superfast Services</strong> - spécialisé dans le sourcing - s&apos;engage à simplifier et optimiser votre processus d&apos;approvisionnement.
              </p>
              <p>
                Notre présence stratégique à Dubaï, porte d&apos;entrée vers les marchés du Moyen-Orient et de l&apos;Asie, notre ancrage en Afrique via le Tchad, notre accès privilégié à la Chine avec nos collaborateurs sur le terrain et nos partenariats clés en Turquie et en Europe, constituent un atout majeur.
              </p>
              <p>
                Cette diversité géographique nous permet de vous offrir un éventail de sources d&apos;approvisionnement, de mitiger les risques et de vous proposer des options adaptées à vos budgets et à vos exigences de qualité.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-blue-50 rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Années d&apos;Expérience</div>
              </div>
              <div className="bg-indigo-50 rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-indigo-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Pays Desservis</div>
              </div>
              <div className="bg-purple-50 rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support Client</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
