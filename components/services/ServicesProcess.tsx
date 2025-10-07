'use client'
import { motion } from 'motion/react'
import { MessageSquare, FileText, Truck, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Contactez-nous pour discuter de vos besoins logistiques. Notre équipe analyse votre demande et vous propose les meilleures solutions.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    icon: FileText,
    title: 'Devis Personnalisé',
    description: 'Recevez un devis détaillé et transparent adapté à votre projet. Nous optimisons les coûts sans compromis sur la qualité.',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    number: '03',
    icon: Truck,
    title: 'Expédition',
    description: 'Une fois validé, nous organisons le transport de vos marchandises avec suivi en temps réel à chaque étape du parcours.',
    color: 'from-teal-500 to-green-500'
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Livraison',
    description: 'Vos marchandises arrivent à destination en toute sécurité. Nous assurons un service après-vente de qualité.',
    color: 'from-green-500 to-emerald-500'
  }
]

export default function ServicesProcess() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment Ça <span className="text-blue-600">Fonctionne</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple et transparent en 4 étapes pour vos expéditions
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-teal-200 to-green-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 group">
                  {/* Step Number */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-10">
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg className="w-8 h-8 text-blue-400 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Commencez votre projet logistique dès aujourd&apos;hui
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105">
            Contactez-Nous
          </a>
        </motion.div>
      </div>
    </section>
  )
}
