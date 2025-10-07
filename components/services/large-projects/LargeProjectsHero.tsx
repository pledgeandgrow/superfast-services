'use client'
import { motion } from 'motion/react';
import { Building2, Boxes, Ruler, Globe } from 'lucide-react';

export default function LargeProjectsHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-gray-900/95 z-10"></div>
        <img 
          src="/4.svg" 
          alt="Large Projects" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

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
              className="inline-flex items-center gap-2 bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-5 h-5 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">Expertise Industrielle</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Grands <span className="text-indigo-400">Projets</span> Logistiques
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Chez SUPERFAST SERVICES, nous sommes spécialisés dans la gestion de projets logistiques de grande envergure, nécessitant une planification et une exécution méticuleuses. Du transport de volumes importants de matières premières aux expéditions de charges hors gabarit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-600/50 hover:scale-105">
                Discuter de Votre Projet
              </a>
              <a 
                href="#capabilities" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Nos Capacités
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Project Types */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4">
            {[
              { 
                icon: Boxes, 
                title: 'Volumes Importants', 
                description: 'Transport de matières premières en grande quantité',
                gradient: 'from-indigo-500 to-purple-600'
              },
              { 
                icon: Ruler, 
                title: 'Charges Hors Gabarit', 
                description: 'Équipements industriels et structures surdimensionnées',
                gradient: 'from-purple-500 to-pink-600'
              },
              { 
                icon: Building2, 
                title: 'Projets Industriels', 
                description: 'Solutions complètes pour l\'industrie lourde',
                gradient: 'from-pink-500 to-red-600'
              },
              { 
                icon: Globe, 
                title: 'Logistique Internationale', 
                description: 'Coordination multi-pays et multi-sites',
                gradient: 'from-blue-500 to-indigo-600'
              },
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center flex-shrink-0`}>
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{type.title}</h3>
                    <p className="text-sm text-gray-300">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
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
