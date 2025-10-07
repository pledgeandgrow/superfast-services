'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
        {/* Background Video with Gradient Overlay */}
        <div className="absolute inset-0 m-1 rounded-3xl border border-black/10 lg:rounded-[3rem]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50 rounded-3xl lg:rounded-[3rem]"
            src="/hero.mp4">
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-800/90 to-purple-900/95 rounded-3xl lg:rounded-[3rem]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-32 md:py-40 w-full">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                Solutions Logistiques Globales
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
              Sourcing Sur Mesure, <span className="text-blue-400">Performance Maximale</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Des Solutions d&apos;Approvisionnement Globales, Pensées pour Vous. Votre partenaire de confiance pour le sourcing international.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105">
                <Link href="/devis" className="flex items-center gap-2">
                  Demander un Devis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-white px-8 py-6 rounded-xl font-semibold text-lg transition-all duration-300">
                <Link href="/about">
                  En Savoir Plus
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-white/60 cursor-pointer"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="text-sm font-medium">Découvrir</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
