'use client'
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Globe } from 'lucide-react';

const contactDetails = [
  {
    icon: Phone,
    title: 'Téléphone',
    details: ['Dubai: +971 54 511 6447', 'Tchad: +235 60 05 38 86', 'France: +33 7 56 85 92 52'],
    action: 'Appelez-nous',
    href: 'tel:+971545116447',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['support@superfast-services.com', 'direction@superfast-services.com'],
    action: 'Envoyez un email',
    href: 'mailto:support@superfast-services.com',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    details: ['Dubai, UAE', 'N’Djamena, Tchad'],
    action: 'Voir sur la carte',
    href: '#map',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Clock,
    title: 'Horaires',
    details: ['Lun - Sam: 9h à 20h', 'Dimanche: Fermé'],
    action: 'Disponibilité',
    href: '#',
    color: 'from-pink-500 to-pink-600',
  },
];

const socialLinks = [
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/+971545116447', color: 'hover:bg-green-500' },
  { name: 'LinkedIn', icon: Globe, href: '#', color: 'hover:bg-blue-600' },
  { name: 'Instagram', icon: Globe, href: '#', color: 'hover:bg-pink-500' },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Informations de Contact</h2>
        <p className="text-gray-600 mb-8">
          Plusieurs moyens de nous joindre pour répondre à tous vos besoins logistiques.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${detail.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <detail.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">{detail.title}</h3>
                {detail.details.map((item, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{item}</p>
                ))}
                <a 
                  href={detail.href}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mt-3 hover:gap-3 transition-all">
                  {detail.action}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Media */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
        <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
        <p className="text-blue-100 mb-6">
          Restez connecté avec nous sur les réseaux sociaux pour les dernières actualités et offres.
        </p>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110`}
              aria-label={social.name}>
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-red-900 mb-2">Urgence 24/7</h3>
            <p className="text-red-700 text-sm mb-3">
              Pour les urgences logistiques, notre équipe est disponible 24h/24 et 7j/7.
            </p>
            <div className="flex gap-2">
              <a 
                href="tel:+971545116447"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                <Phone className="w-4 h-4" />
                Dubai
              </a>
              <a 
                href="tel:+23560053886"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                <Phone className="w-4 h-4" />
                Tchad
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
