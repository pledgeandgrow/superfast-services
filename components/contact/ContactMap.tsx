'use client'
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare } from 'lucide-react';

export default function ContactMap() {
  return (
    <section id="map" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Où Nous Trouver
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-blue-600">Localisation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Présents à Dubai, au Tchad et en France pour vous servir partout dans le monde
          </p>
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { 
              city: 'Dubai', 
              country: 'UAE', 
              type: 'Siège Principal',
              phone: '+971545116447',
              features: ['Appels', 'Messages', 'WhatsApp']
            },
            { 
              city: 'Tchad', 
              country: 'Afrique Centrale', 
              type: 'Bureau Régional',
              phone: '+23560053886',
              features: ['Appels', 'Messages', 'WhatsApp']
            },
            { 
              city: 'France', 
              country: 'Europe', 
              type: 'Bureau Europe',
              phone: '+33756859252',
              features: ['Appels', 'Messages']
            },
          ].map((location, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <MapPin className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold text-gray-900 mb-1">{location.city}</h4>
              <p className="text-sm text-gray-600 mb-3">{location.country}</p>
              <span className="inline-block text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-semibold mb-4">
                {location.type}
              </span>
              
              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a 
                  href={`tel:${location.phone}`}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-3">
                  <Phone className="w-4 h-4" />
                  {location.phone}
                </a>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {location.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* WhatsApp Button if available */}
                {location.features.includes('WhatsApp') && (
                  <a
                    href={`https://wa.me/${location.phone.replace(/\+/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-semibold transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
