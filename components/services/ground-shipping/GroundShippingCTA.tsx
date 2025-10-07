'use client'
import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';

export default function GroundShippingCTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Prêt à Expédier Vos Marchandises ?
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Obtenez un devis gratuit et personnalisé pour votre transport terrestre. Notre équipe d&apos;experts est prête à vous accompagner.
                </p>

                {/* Benefits List */}
                <ul className="space-y-4 mb-8">
                  {[
                    'Devis gratuit sous 24h',
                    'Prix compétitifs garantis',
                    'Support client dédié',
                    'Suivi en temps réel',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-400/30 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-blue-50">{item}</span>
                    </motion.li>
                  ))}
                </ul>
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
                  <div className="text-sm text-blue-200 mb-1">Appelez-nous</div>
                  <div className="text-xl font-semibold text-white">+971 54 511 6447</div>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Email */}
              <a
                href="mailto:contact@superfast-services.com"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-blue-200 mb-1">Envoyez un email</div>
                  <div className="text-xl font-semibold text-white">contact@superfast-services.com</div>
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
                  <div className="text-sm text-blue-200 mb-1">WhatsApp</div>
                  <div className="text-xl font-semibold text-white">Chattez avec nous</div>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="pt-4">
                <a
                  href="#contact-form"
                  className="block w-full bg-white text-blue-600 text-center px-8 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  Demander un Devis Gratuit
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: '🏆', text: 'Service Premium' },
            { icon: '🔒', text: '100% Sécurisé' },
            { icon: '⚡', text: 'Livraison Rapide' },
            { icon: '💯', text: 'Satisfaction Garantie' },
          ].map((badge, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="text-4xl mb-2">{badge.icon}</div>
              <div className="text-gray-700 font-semibold">{badge.text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
