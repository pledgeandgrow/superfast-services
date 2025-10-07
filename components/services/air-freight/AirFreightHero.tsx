'use client'
import { motion } from 'motion/react';
import { Plane, Clock, Globe2, Shield } from 'lucide-react';

export default function AirFreightHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/95 via-blue-800/90 to-indigo-900/95 z-10"></div>
        <img 
          src="/2.svg" 
          alt="Air Freight" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Animated Plane */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: '100vw', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 z-10">
        <Plane className="w-12 h-12 text-sky-400/30 rotate-45" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 rounded-full px-4 py-2 mb-6">
              <Plane className="w-5 h-5 text-sky-400" />
              <span className="text-sm font-medium text-sky-300">Service Express</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Fret Aérien <span className="text-sky-400">International</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Pour vos expéditions internationales urgentes, nous vous offrons la rapidité et la fiabilité du fret aérien. Grâce à notre réseau mondial de partenaires aériens, nous assurons que vos marchandises, même volumineuses ou spécifiques, atteignent leur destination rapidement et en toute sécurité.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-sky-600/50 hover:scale-105">
                Demander un Devis Express
              </a>
              <a 
                href="#services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Nos Services
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Key Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4">
            {[
              { icon: Clock, label: 'Livraison Express', value: '24-48h', color: 'from-sky-500 to-blue-600' },
              { icon: Globe2, label: 'Destinations', value: '200+', color: 'from-blue-500 to-indigo-600' },
              { icon: Shield, label: 'Sécurité', value: '100%', color: 'from-indigo-500 to-purple-600' },
              { icon: Plane, label: 'Vols Quotidiens', value: '500+', color: 'from-purple-500 to-pink-600' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
          {[
            { label: 'Tracking en temps réel', icon: '📍' },
            { label: 'Dédouanement inclus', icon: '📋' },
            { label: 'Assurance complète', icon: '🛡️' },
            { label: 'Support 24/7', icon: '💬' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm">Découvrir</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
