'use client'
import { motion } from 'motion/react'
import { Plane, Truck, Package, Boxes, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServicesHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-800/90 to-purple-900/95 z-10"></div>
        <img 
          src="/1.svg" 
          alt="Logistics Services" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12 py-32 md:py-40 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <Package className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
              Solutions Logistiques Complètes
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Nos <span className="text-blue-400">Services</span> Logistiques
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            Des solutions sur mesure pour tous vos besoins en transport et logistique internationale. 
            De l'express aérien aux grands projets, nous avons l'expertise pour réussir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/devis" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
              Demander un Devis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              Nous Contacter
            </Link>
          </motion.div>
        </div>

        {/* Service Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Plane, label: 'Fret Aérien', color: 'from-sky-500 to-blue-600' },
            { icon: Truck, label: 'Transport Terrestre', color: 'from-blue-500 to-indigo-600' },
            { icon: Boxes, label: 'Grands Projets', color: 'from-indigo-500 to-purple-600' },
            { icon: Package, label: 'Services Complémentaires', color: 'from-purple-500 to-pink-600' },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-medium text-white">{service.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2 text-white/60 cursor-pointer"
          onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-sm font-medium">Découvrir</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
