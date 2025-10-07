'use client'
import { motion } from 'motion/react';
import { CreditCard, Truck, Warehouse, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: CreditCard,
    title: 'Facilitateur De Transfert / Paiement',
    description: 'Nous sommes bien plus qu\'un simple prestataire ; nous sommes vos partenaires stratégiques pour des transitions réussies. Notre expertise repose sur des années d\'expérience dans la gestion de transferts de diverses natures : connaissances, compétences, technologies, processus, équipes, et bien plus encore.',
    features: [
      'Gestion sécurisée des paiements internationaux',
      'Transfert de technologies et processus',
      'Accompagnement dans les transitions',
      'Solutions de paiement flexibles',
    ],
    color: 'from-violet-500 to-purple-600',
    image: '/8.svg',
  },
  {
    icon: Truck,
    title: 'Transport Terrestre, Maritime et Aérien',
    description: 'Que votre cargaison doive voyager par route, mer ou air, nos solutions de fret multimodal vous couvrent. Notre réseau de transport terrestre assure une livraison porte-à-porte ponctuelle et fiable. Nous offrons également des services de fret maritime et aérien pour répondre à tous vos besoins logistiques internationaux.',
    features: [
      'Transport multimodal intégré',
      'Livraison porte-à-porte',
      'Réseau international étendu',
      'Suivi en temps réel',
    ],
    color: 'from-blue-500 to-indigo-600',
    image: '/9.svg',
  },
  {
    icon: Warehouse,
    title: 'Entreposage et Stockage',
    description: 'Nos entrepôts stratégiquement situés offrent un environnement sécurisé et contrôlé pour vos marchandises, en utilisant des technologies avancées telles que les systèmes de gestion d\'entrepôt (WMS) et l\'identification par radiofréquence (RFID) pour une visibilité et une précision en temps réel.',
    features: [
      'Entrepôts sécurisés et climatisés',
      'Systèmes WMS et RFID',
      'Gestion des stocks en temps réel',
      'Emplacements stratégiques',
    ],
    color: 'from-indigo-500 to-purple-600',
    image: '/10.svg',
  },
  {
    icon: Lightbulb,
    title: 'Services de Conseil',
    description: 'Nos services de conseil en logistique offrent une expertise et des solutions pour rationaliser vos opérations de chaîne d\'approvisionnement. Nous réalisons des évaluations complètes, identifions les domaines à améliorer et élaborons des stratégies personnalisées pour optimiser vos processus logistiques.',
    features: [
      'Audit de la chaîne d\'approvisionnement',
      'Optimisation des processus',
      'Stratégies personnalisées',
      'Formation et accompagnement',
    ],
    color: 'from-purple-500 to-pink-600',
    image: '/11.svg',
  },
];

export default function ComplementaryServices() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block text-violet-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solutions <span className="text-violet-600">Complémentaires</span> Complètes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des services additionnels pour une gestion logistique optimale et intégrée
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:gap-4 transition-all duration-300">
                  En savoir plus
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
