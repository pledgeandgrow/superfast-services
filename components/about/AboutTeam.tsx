'use client'
import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Ahmed Salah',
    role: 'Directeur Général',
    image: '/17.svg',
    bio: '15 ans d\'expérience dans la logistique internationale et le sourcing global',
    linkedin: '#',
    email: 'ahmed@superfast-services.com',
  },
];

export default function AboutTeam() {
  return (
    <section id="team" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Notre Équipe
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-blue-600">Direction</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une expertise reconnue au service de votre réussite
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="max-w-md mx-auto mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 p-8 text-center">
              {/* Content */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 mb-6">{member.bio}</p>
              <div className="flex gap-3 justify-center">
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez Notre Équipe</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nous sommes toujours à la recherche de talents passionnés pour renforcer notre équipe et contribuer à notre croissance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl">
              Postuler Maintenant
            </a>
            <a 
              href="#" 
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Voir les Offres
            </a>
          </div>
        </motion.div>

        {/* Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { icon: '🌟', title: 'Innovation', desc: 'Nous encourageons la créativité et l\'innovation' },
            { icon: '🤝', title: 'Collaboration', desc: 'Le travail d\'équipe est au cœur de notre culture' },
            { icon: '📈', title: 'Développement', desc: 'Opportunités de croissance et de formation continue' },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
