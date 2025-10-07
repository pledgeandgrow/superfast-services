'use client'
import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, FileText, Calendar, ArrowRight } from 'lucide-react';

export default function LargeProjectsCTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl">
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
                  Parlons de Votre Grand Projet
                </h2>
                <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                  Notre équipe d&apos;experts est prête à analyser vos besoins et vous proposer une solution sur mesure pour votre projet logistique d&apos;envergure.
                </p>

                {/* Benefits List */}
                <ul className="space-y-4 mb-8">
                  {[
                    'Consultation gratuite avec nos experts',
                    'Analyse détaillée de votre projet',
                    'Proposition personnalisée sous 48h',
                    'Accompagnement de A à Z',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-400/30 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-indigo-50">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
                  {[
                    { value: '200+', label: 'Projets' },
                    { value: '15+', label: 'Ans d\'exp.' },
                    { value: '100%', label: 'Satisfait' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="text-xs text-indigo-200">{stat.label}</div>
                    </div>
                  ))}
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
                  <div className="text-sm text-indigo-200 mb-1">Appelez-nous</div>
                  <div className="text-xl font-semibold text-white">+971 54 511 6447</div>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Email */}
              <a
                href="mailto:projects@superfast-services.com"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-indigo-200 mb-1">Email projets</div>
                  <div className="text-xl font-semibold text-white">projects@superfast-services.com</div>
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
                  <div className="text-sm text-indigo-200 mb-1">WhatsApp</div>
                  <div className="text-xl font-semibold text-white">Discussion instantanée</div>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Schedule Meeting */}
              <a
                href="#schedule"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-indigo-200 mb-1">Planifier</div>
                  <div className="text-xl font-semibold text-white">Rendez-vous consultation</div>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Download Brochure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="pt-4">
                <a
                  href="#brochure"
                  className="group flex items-center justify-center gap-3 w-full bg-white text-indigo-600 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all duration-300 hover:shadow-2xl">
                  <FileText className="w-6 h-6" />
                  Télécharger Notre Brochure
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
            { icon: '🏗️', title: 'Projets Complexes', desc: 'Notre spécialité' },
            { icon: '🔒', title: 'Confidentialité', desc: 'Garantie totale' },
            { icon: '⚡', title: 'Réactivité', desc: 'Réponse rapide' },
            { icon: '🎯', title: 'Précision', desc: 'Exécution parfaite' },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
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
            <span className="font-semibold">Disponible 24/7</span> pour vos urgences et demandes spéciales
          </p>
        </motion.div>
      </div>
    </section>
  );
}
