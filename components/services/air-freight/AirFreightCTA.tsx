'use client'
import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, Calculator, ArrowRight, Clock } from 'lucide-react';

export default function AirFreightCTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 p-12 md:p-16">
            {/* Left Content */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium">Réponse en moins de 2h</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Expédiez Rapidement avec Notre Fret Aérien
                </h2>
                <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                  Obtenez un devis instantané pour votre expédition aérienne. Notre équipe d&apos;experts est disponible 24/7 pour répondre à vos besoins urgents.
                </p>

                {/* Benefits List */}
                <ul className="space-y-4 mb-8">
                  {[
                    'Devis gratuit en moins de 2 heures',
                    'Tarifs négociés avec les compagnies',
                    'Enlèvement sous 24h disponible',
                    'Tracking en temps réel inclus',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-sky-400/30 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sky-50">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Urgency Banner */}
                <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/30 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-yellow-300" />
                    </div>
                    <div>
                      <div className="font-bold text-yellow-300">Expédition Urgente ?</div>
                      <div className="text-sm text-yellow-200">Service express disponible 24/7</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+971545116447"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-sky-200 mb-1">Urgence ? Appelez</div>
                  <div className="text-xl font-semibold text-white">+971 54 511 6447</div>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Email */}
              <a
                href="mailto:airfreight@superfast-services.com"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-sky-200 mb-1">Email fret aérien</div>
                  <div className="text-xl font-semibold text-white">airfreight@superfast-services.com</div>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/+971545116447"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-sky-200 mb-1">WhatsApp</div>
                  <div className="text-xl font-semibold text-white">Chat instantané</div>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Quote Calculator */}
              <a
                href="#calculator"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-sky-200 mb-1">Calculateur</div>
                  <div className="text-xl font-semibold text-white">Devis instantané</div>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Main CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="pt-4">
                <a
                  href="#quote"
                  className="block w-full bg-white text-sky-600 text-center px-8 py-5 rounded-2xl font-bold text-lg hover:bg-sky-50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  Obtenir un Devis Gratuit
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: '⚡', title: 'Livraison Express', desc: '24-48h garanti' },
            { icon: '🌍', title: 'Réseau Mondial', desc: '200+ destinations' },
            { icon: '🛡️', title: 'Assurance Incluse', desc: 'Protection totale' },
            { icon: '📍', title: 'Tracking Live', desc: 'Suivi en temps réel' },
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 text-center border border-sky-100 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="font-bold text-gray-900 mb-1">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-12 text-center">
          <p className="text-gray-600">
            <span className="font-semibold">Service d&apos;urgence disponible 24/7</span> - Nous répondons en moins de 2 heures
          </p>
        </motion.div>
      </div>
    </section>
  );
}
