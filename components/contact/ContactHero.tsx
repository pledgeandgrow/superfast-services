'use client'
import { motion } from 'motion/react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-800/90 to-purple-900/95 z-10"></div>
        <img 
          src="/7.svg" 
          alt="Contact" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12 py-20 md:py-32 w-full">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Nous Sommes Là Pour Vous</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Contactez-<span className="text-blue-400">Nous</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Notre équipe d&apos;experts est disponible 24/7 pour répondre à vos questions et vous accompagner dans vos projets logistiques.
          </motion.p>

          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Phone, label: 'Téléphone', value: '+971 54 511 6447', href: 'tel:+971545116447' },
              { icon: Mail, label: 'Email', value: 'contact@superfast-services.com', href: 'mailto:contact@superfast-services.com' },
              { icon: MapPin, label: 'Localisation', value: 'Dubai, UAE', href: '#map' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-gray-300 mb-1">{item.label}</div>
                <div className="font-semibold text-white">{item.value}</div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
