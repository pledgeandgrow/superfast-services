'use client'
import { motion } from 'motion/react';
import { MapPin, Plane, Globe2 } from 'lucide-react';

const regions = [
  {
    name: 'Europe',
    destinations: 85,
    dailyFlights: 150,
    cities: ['Paris', 'Londres', 'Francfort', 'Amsterdam', 'Milan'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Asie-Pacifique',
    destinations: 65,
    dailyFlights: 120,
    cities: ['Dubai', 'Shanghai', 'Hong Kong', 'Singapour', 'Tokyo'],
    color: 'from-sky-500 to-sky-600',
  },
  {
    name: 'Amérique du Nord',
    destinations: 45,
    dailyFlights: 80,
    cities: ['New York', 'Los Angeles', 'Chicago', 'Toronto', 'Miami'],
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    name: 'Moyen-Orient',
    destinations: 30,
    dailyFlights: 60,
    cities: ['Dubai', 'Doha', 'Riyadh', 'Abu Dhabi', 'Kuwait'],
    color: 'from-purple-500 to-purple-600',
  },
];

const partners = [
  { name: 'Emirates', logo: '🛫' },
  { name: 'Qatar Airways', logo: '✈️' },
  { name: 'Lufthansa Cargo', logo: '🛩️' },
  { name: 'Air France Cargo', logo: '🛫' },
  { name: 'DHL Aviation', logo: '✈️' },
  { name: 'FedEx Express', logo: '🛩️' },
];

export default function AirFreightNetwork() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block text-sky-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Notre Réseau
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Réseau Mondial de <span className="text-sky-400">Partenaires Aériens</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Accès à plus de 200 destinations internationales via nos partenaires certifiés
          </p>
        </motion.div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 text-center">
            <Globe2 className="w-32 h-32 mx-auto mb-6 text-sky-400" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-sky-400 mb-2">200+</div>
                <div className="text-sm text-gray-300">Destinations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-400 mb-2">500+</div>
                <div className="text-sm text-gray-300">Vols Quotidiens</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-400 mb-2">50+</div>
                <div className="text-sm text-gray-300">Compagnies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300">Disponibilité</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{region.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {region.destinations} destinations
                    </span>
                    <span className="flex items-center gap-1">
                      <Plane className="w-4 h-4" />
                      {region.dailyFlights} vols/jour
                    </span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${region.color} flex items-center justify-center`}>
                  <Globe2 className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {region.cities.map((city, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200">
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Nos Partenaires Aériens</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl">{partner.logo}</div>
                <div className="text-xs text-center text-gray-300">{partner.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-6">
            Votre destination n&apos;est pas listée ? Contactez-nous !
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl">
            Vérifier la Disponibilité
            <Plane className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
