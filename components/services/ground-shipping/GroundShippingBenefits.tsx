'use client'
import { motion } from 'motion/react';
import { CheckCircle2, TrendingDown, Zap, Award } from 'lucide-react';

const benefits = [
  {
    icon: TrendingDown,
    title: 'Coûts Optimisés',
    description: 'Réduisez vos coûts de transport grâce à nos tarifs compétitifs et notre optimisation des itinéraires.',
    stats: 'Jusqu\'à 30% d\'économies',
  },
  {
    icon: Zap,
    title: 'Rapidité & Efficacité',
    description: 'Livraison rapide avec des délais respectés grâce à notre réseau logistique performant.',
    stats: '99.8% de ponctualité',
  },
  {
    icon: Award,
    title: 'Qualité Certifiée',
    description: 'Services certifiés ISO avec des standards de qualité internationaux pour votre tranquillité d\'esprit.',
    stats: 'Certifications ISO 9001',
  },
  {
    icon: CheckCircle2,
    title: 'Fiabilité Garantie',
    description: 'Assurance tous risques et garantie de livraison pour protéger vos marchandises de A à Z.',
    stats: '100% assuré',
  },
];

export default function GroundShippingBenefits() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Avantages Clés
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Les Bénéfices de Notre Service de <span className="text-blue-400">Transport Terrestre</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Profitez d&apos;un service de transport professionnel qui combine efficacité, sécurité et économies pour votre entreprise.
            </p>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/12.svg" 
                alt="Transport Benefits" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="text-3xl font-bold mb-1">500+</div>
                    <div className="text-sm text-gray-300">Clients Satisfaits</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold mb-1">10K+</div>
                    <div className="text-sm text-gray-300">Livraisons Réussies</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Benefits Grid */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <benefit.icon className="w-6 h-6 text-blue-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                        {benefit.title}
                      </h3>
                      <span className="text-sm text-blue-400 font-semibold bg-blue-500/20 px-3 py-1 rounded-full">
                        {benefit.stats}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '15+', label: 'Années d\'Expérience' },
            { value: '50+', label: 'Destinations' },
            { value: '24/7', label: 'Support Client' },
            { value: '100%', label: 'Satisfaction Client' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
