'use client'
import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

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
            Visitez nos bureaux à Dubai ou contactez-nous pour planifier une rencontre
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          {/* Placeholder Map - Replace with actual Google Maps embed */}
          <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-blue-100 to-indigo-100">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dubai, UAE</h3>
                <p className="text-gray-600 mb-6">Business Bay Area</p>
                <a
                  href="https://maps.google.com/?q=Dubai+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg">
                  <Navigation className="w-5 h-5" />
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>

            {/* You can replace the above placeholder with actual Google Maps iframe */}
            {/* 
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            */}
          </div>

          {/* Location Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Superfast Services</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Business Bay<br />
                    Dubai, UAE
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="tel:+971545116447"
                      className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                      +971 54 511 6447
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { city: 'Dubai', country: 'UAE', type: 'Siège Principal' },
            { city: 'Abu Dhabi', country: 'UAE', type: 'Bureau Régional' },
            { city: 'Sharjah', country: 'UAE', type: 'Centre Logistique' },
          ].map((location, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <MapPin className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">{location.city}</h4>
              <p className="text-sm text-gray-600 mb-2">{location.country}</p>
              <span className="inline-block text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-semibold">
                {location.type}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
