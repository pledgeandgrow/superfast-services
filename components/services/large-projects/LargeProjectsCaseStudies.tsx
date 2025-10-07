'use client'
import { motion } from 'motion/react';
import { Building2, Factory, Zap, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    icon: Building2,
    title: 'Projet Infrastructure Pétrolière',
    client: 'Major Oil & Gas Company',
    challenge: 'Transport de 500 tonnes d\'équipements de raffinage sur 3 continents',
    solution: 'Coordination multimodale mer-air-terre avec équipements spécialisés',
    results: [
      'Livraison dans les délais malgré la complexité',
      'Économie de 25% sur le budget initial',
      'Zéro incident de sécurité',
    ],
    duration: '6 mois',
    image: '/19.svg',
  },
  {
    icon: Factory,
    title: 'Usine de Production Automobile',
    client: 'International Automotive Manufacturer',
    challenge: 'Installation complète d\'une chaîne de production avec machines hors gabarit',
    solution: 'Transport spécialisé et coordination avec 15 fournisseurs différents',
    results: [
      'Installation réussie en 4 mois',
      'Synchronisation parfaite des livraisons',
      'Mise en service anticipée de 2 semaines',
    ],
    duration: '4 mois',
    image: '/20.svg',
  },
  {
    icon: Zap,
    title: 'Centrale Électrique',
    client: 'Energy Infrastructure Developer',
    challenge: 'Transport de transformateurs de 200 tonnes et turbines sur 2000 km',
    solution: 'Convois exceptionnels avec escorte et planification d\'itinéraires spéciaux',
    results: [
      'Transport sans dommage de charges critiques',
      'Respect total du planning',
      'Certification qualité ISO obtenue',
    ],
    duration: '8 mois',
    image: '/1.svg',
  },
];

export default function LargeProjectsCaseStudies() {
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
            Études de Cas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-indigo-600">Réalisations</span> Marquantes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous avons relevé des défis logistiques complexes pour nos clients
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <study.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm text-indigo-300">Durée du projet</div>
                        <div className="text-xl font-bold">{study.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-indigo-600 font-semibold mb-6">{study.client}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Défi</h4>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Solution</h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-4">Résultats</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-4 transition-all duration-300">
                    Discuter d&apos;un projet similaire
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Votre Projet Mérite Notre Expertise
          </h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Rejoignez nos clients satisfaits et bénéficiez d&apos;une gestion de projet professionnelle
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl">
              Démarrer Votre Projet
            </a>
            <a 
              href="tel:+971545116447" 
              className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Parler à un Expert
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
