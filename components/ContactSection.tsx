'use client'
import { Mail, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200')] bg-cover bg-center opacity-10"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contactez-Nous</h2>
          <p className="text-xl text-blue-100 mb-8">Obtenez une quotation personnalisée</p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-blue-600 hover:bg-blue-50 border-0 h-12 rounded-full px-8">
            <Link href="mailto:support@superfast-services.com">
              <Mail className="mr-2" size={20} />
              Demander une quotation
            </Link>
          </Button>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Mail,
              title: 'Email',
              items: ['support@superfast-services.com', 'direction@superfast-services.com']
            },
            {
              icon: Phone,
              title: 'Téléphone',
              items: ['Dubai: +971545116447', 'Tchad: +23560053886', 'France: +33756859252']
            },
            {
              icon: Clock,
              title: 'Heures d\'ouverture',
              items: ['Lun - Sam: 9h à 20h', 'Dimanche: Fermé']
            }
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="font-bold text-xl mb-4">{contact.title}</h3>
                {contact.items.map((item, i) => (
                  <p key={i} className="text-blue-100 mb-1">{item}</p>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
