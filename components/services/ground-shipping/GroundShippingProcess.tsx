'use client'
import { motion } from 'motion/react';
import { ClipboardCheck, Truck, MapPin, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Demande de Devis',
    description: 'Contactez-nous avec les détails de votre chargement. Nous analysons vos besoins et vous proposons une solution adaptée.',
    step: '01',
  },
  {
    icon: Truck,
    title: 'Planification & Chargement',
    description: 'Nous planifions l\'itinéraire optimal et organisons le chargement sécurisé de vos marchandises avec notre équipe expérimentée.',
    step: '02',
  },
  {
    icon: MapPin,
    title: 'Transport & Suivi',
    description: 'Vos marchandises sont transportées en toute sécurité. Suivez votre chargement en temps réel grâce à notre système de tracking GPS.',
    step: '03',
  },
  {
    icon: PackageCheck,
    title: 'Livraison & Confirmation',
    description: 'Livraison ponctuelle à destination avec confirmation et signature. Votre satisfaction est notre priorité.',
    step: '04',
  },
];

export default function GroundShippingProcess() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Notre Processus
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comment Ça <span className="text-blue-600">Fonctionne</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple et transparent pour garantir la livraison sûre de vos marchandises
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative">
                {/* Step Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2 z-10">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
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
          className="mt-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Besoin d&apos;un Transport Urgent ?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Nous offrons des services de transport express pour vos besoins urgents. Contactez-nous pour une solution rapide et fiable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="tel:+971545116447" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl">
              Appelez-nous Maintenant
            </a>
            <a 
              href="https://wa.me/+971545116447" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl">
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
