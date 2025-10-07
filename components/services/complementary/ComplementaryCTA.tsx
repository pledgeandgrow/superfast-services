'use client'
import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

export default function ComplementaryCTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl">
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
                  Optimisez Votre Chaîne Logistique
                </h2>
                <p className="text-xl text-violet-100 mb-8 leading-relaxed">
                  Découvrez comment nos services complémentaires peuvent transformer votre logistique et booster votre performance. Contactez nos experts pour une consultation personnalisée.
                </p>

                {/* Benefits List */}
                <ul className="space-y-4 mb-8">
                  {[
                    'Consultation gratuite avec nos experts',
                    'Analyse complète de vos besoins',
                    'Solution sur mesure adaptée',
                    'Accompagnement de A à Z',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-violet-400/30 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-violet-50">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
                  {[
                    { value: '500+', label: 'Clients' },
                    { value: '35%', label: 'Économies' },
                    { value: '24/7', label: 'Support' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="text-xs text-violet-200">{stat.label}</div>
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
                  <div className="text-sm text-violet-200 mb-1">Appelez-nous</div>
                  <div className="text-xl font-semibold text-white">+971 54 511 6447</div>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Email */}
              <a
                href="mailto:services@superfast-services.com"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-violet-200 mb-1">Email</div>
                  <div className="text-xl font-semibold text-white">services@superfast-services.com</div>
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
                  <div className="text-sm text-violet-200 mb-1">WhatsApp</div>
                  <div className="text-xl font-semibold text-white">Chat instantané</div>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Schedule */}
              <a
                href="#schedule"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-violet-200 mb-1">Planifier</div>
                  <div className="text-xl font-semibold text-white">Rendez-vous consultation</div>
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
                  href="#quote"
                  className="block w-full bg-white text-violet-600 text-center px-8 py-5 rounded-2xl font-bold text-lg hover:bg-violet-50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  Demander une Consultation Gratuite
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: '🏆', title: 'Excellence', desc: 'Service premium' },
            { icon: '🔒', title: 'Sécurité', desc: 'Protection totale' },
            { icon: '⚡', title: 'Efficacité', desc: 'Résultats rapides' },
            { icon: '💯', title: 'Satisfaction', desc: 'Garantie client' },
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 text-center border border-violet-100 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="font-bold text-gray-900 mb-1">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
