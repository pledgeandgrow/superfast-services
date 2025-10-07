'use client'
import { motion } from 'motion/react';

export default function SecteursSection() {
  const secteurs = [
    "Automobile", "Énergétique", "Machines Industrielles", "Machines Agricoles",
    "Chaîne de Production", "Agroalimentaire", "Téléphonie & Informatique", "Textile",
    "Emballage", "Outils Publicitaires", "Quincaillerie", "Logistique",
    "Conseils & Services", "Facilités Transferts", "Accompagnement de Projets", "Subventions & Fonds"
  ];

  return (
    <section className="py-24 md:py-32 bg-white" id="secteurs">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Secteurs d&apos;Activité
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expertise <span className="text-blue-600">Multisectorielle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Notre expertise diversifiée nous permet d&apos;intervenir dans une large gamme de secteurs, offrant des solutions adaptées aux besoins spécifiques de chaque domaine.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {secteurs.map((secteur, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:border-blue-600 hover:-translate-y-1">
              <p className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">{secteur}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
