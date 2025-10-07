'use client'
import { Mail, Phone, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      items: ['support@superfast-services.com', 'direction@superfast-services.com'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      items: ['Dubai: +971 54 511 6447', 'Tchad: +235 60 05 38 86', 'France: +33 7 56 85 92 52'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Heures d\'ouverture',
      items: ['Lun - Sam: 9h à 20h', 'Dimanche: Fermé'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/16.svg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/90 to-purple-900/90"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-block text-blue-300 font-semibold text-sm uppercase tracking-wider mb-4">
            Contactez-Nous
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Démarrer Votre <span className="text-blue-400">Projet ?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Obtenez un devis personnalisé et découvrez comment nous pouvons optimiser votre chaîne d&apos;approvisionnement
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 border-0 rounded-xl px-8 py-6 text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300">
              <Link href="/devis" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Demander un Devis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-white rounded-xl px-8 py-6 text-lg font-semibold transition-all duration-300">
              <Link href="https://wa.me/+971545116447" target="_blank" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${contact.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-4">{contact.title}</h3>
                <div className="space-y-2">
                  {contact.items.map((item, i) => (
                    <p key={i} className="text-blue-100 text-sm leading-relaxed">{item}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
