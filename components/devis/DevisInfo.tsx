'use client'
import { motion } from 'motion/react';
import { Clock, CheckCircle, Shield, Phone, Mail, MessageCircle } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Réponse Rapide',
    description: 'Devis sous 24h maximum',
  },
  {
    icon: CheckCircle,
    title: 'Sans Engagement',
    description: 'Gratuit et sans obligation',
  },
  {
    icon: Shield,
    title: 'Confidentiel',
    description: 'Vos données sont protégées',
  },
];

const contactOptions = [
  {
    icon: Phone,
    title: 'Téléphone',
    value: '+971 54 511 6447',
    href: 'tel:+971545116447',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'devis@superfast-services.com',
    href: 'mailto:devis@superfast-services.com',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Chat Direct',
    href: 'https://wa.me/+971545116447',
    color: 'from-green-500 to-green-600',
  },
];

export default function DevisInfo() {
  return (
    <div className="space-y-6">
      {/* Benefits Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Pourquoi Demander un Devis ?</h3>
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact Options */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Besoin d&apos;Aide ?</h3>
        <p className="text-blue-100 mb-6 text-sm">
          Notre équipe est disponible pour vous accompagner dans votre demande de devis.
        </p>
        <div className="space-y-3">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              target={option.href.startsWith('http') ? '_blank' : undefined}
              rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-all duration-300 group">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center flex-shrink-0`}>
                <option.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-blue-200">{option.title}</div>
                <div className="font-semibold">{option.value}</div>
              </div>
              <svg className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Questions Fréquentes</h3>
        <div className="space-y-4">
          {[
            {
              q: 'Combien de temps pour recevoir mon devis ?',
              a: 'Vous recevrez votre devis sous 24h maximum.',
            },
            {
              q: 'Le devis est-il gratuit ?',
              a: 'Oui, absolument gratuit et sans engagement.',
            },
            {
              q: 'Puis-je modifier ma demande ?',
              a: 'Oui, contactez-nous pour toute modification.',
            },
          ].map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">{faq.q}</h4>
              <p className="text-sm text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">100% Sécurisé</h4>
            <p className="text-sm text-gray-600">Données protégées</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Vos informations sont traitées de manière confidentielle et ne seront jamais partagées avec des tiers.
        </p>
      </motion.div>
    </div>
  );
}
