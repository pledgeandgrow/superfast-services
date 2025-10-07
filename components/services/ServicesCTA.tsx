'use client'
import { motion } from 'motion/react'
import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Prêt à Optimiser Votre <span className="text-blue-400">Logistique</span> ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Contactez nos experts pour discuter de vos besoins et obtenir un devis personnalisé. 
              Nous sommes là pour vous accompagner dans tous vos projets logistiques.
            </p>

            {/* Contact Options */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Appelez-nous</div>
                  <div className="text-lg font-semibold">+33 1 23 45 67 89</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Écrivez-nous</div>
                  <div className="text-lg font-semibold">contact@superfast-services.com</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Demander un Devis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                <MessageSquare className="w-5 h-5" />
                Nous Contacter
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6">
            {[
              { value: '15+', label: 'Années d\'Expérience', color: 'from-blue-500 to-cyan-500' },
              { value: '200+', label: 'Pays Desservis', color: 'from-cyan-500 to-teal-500' },
              { value: '10K+', label: 'Clients Satisfaits', color: 'from-teal-500 to-green-500' },
              { value: '99%', label: 'Taux de Satisfaction', color: 'from-green-500 to-emerald-500' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
          {[
            { icon: '🏆', label: 'Certifié ISO 9001' },
            { icon: '🛡️', label: 'Assurance Complète' },
            { icon: '📍', label: 'Tracking Temps Réel' },
            { icon: '💬', label: 'Support 24/7' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white justify-center">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
