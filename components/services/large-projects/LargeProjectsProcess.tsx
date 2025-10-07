'use client'
import { motion } from 'motion/react';
import { Search, FileText, Users, Cog, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Analyse & Évaluation',
    description: 'Étude approfondie de vos besoins, contraintes techniques et objectifs du projet.',
    details: ['Visite sur site', 'Analyse des risques', 'Étude de faisabilité'],
  },
  {
    icon: FileText,
    title: 'Proposition & Planification',
    description: 'Élaboration d\'une solution sur mesure avec planning détaillé et budget précis.',
    details: ['Devis détaillé', 'Planning Gantt', 'Plan de contingence'],
  },
  {
    icon: Users,
    title: 'Mobilisation Équipe',
    description: 'Constitution d\'une équipe dédiée avec chef de projet et spécialistes assignés.',
    details: ['Chef de projet dédié', 'Équipe technique', 'Coordinateurs locaux'],
  },
  {
    icon: Cog,
    title: 'Préparation & Permis',
    description: 'Obtention des autorisations, permis et préparation des équipements nécessaires.',
    details: ['Permis de transport', 'Autorisations douanières', 'Équipements spéciaux'],
  },
  {
    icon: Truck,
    title: 'Exécution & Suivi',
    description: 'Mise en œuvre du projet avec suivi en temps réel et reporting régulier.',
    details: ['Tracking GPS', 'Rapports quotidiens', 'Communication continue'],
  },
  {
    icon: CheckCircle,
    title: 'Livraison & Clôture',
    description: 'Livraison finale, documentation complète et bilan du projet.',
    details: ['Livraison certifiée', 'Documentation finale', 'Retour d\'expérience'],
  },
];

export default function LargeProjectsProcess() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20">
          <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Méthodologie Éprouvée
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-indigo-600">Processus</span> de Gestion de Projet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche structurée en 6 étapes pour garantir le succès de vos projets complexes
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 via-indigo-400 to-indigo-200 -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
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
                  <div className="inline-block bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100">
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <div className="text-sm text-indigo-600 font-semibold mb-2">Étape {index + 1}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                              <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Number Circle */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Image/Illustration */}
                <div className={`${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <step.icon className="w-24 h-24 text-indigo-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Prêt à Démarrer Votre Projet ?
              </h3>
              <p className="text-gray-600 mb-6">
                Contactez notre équipe de spécialistes pour discuter de vos besoins et obtenir une proposition détaillée.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl">
                  Demander une Consultation
                </a>
                <a 
                  href="tel:+971545116447" 
                  className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  Appeler Maintenant
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '⏱️', text: 'Réponse sous 24h' },
                { icon: '📋', text: 'Devis détaillé' },
                { icon: '🤝', text: 'Accompagnement complet' },
                { icon: '✅', text: 'Garantie de résultat' },
              ].map((item, index) => (
                <div key={index} className="bg-indigo-50 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-sm font-semibold text-gray-700">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
