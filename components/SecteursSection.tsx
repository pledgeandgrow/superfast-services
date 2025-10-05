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
    <section className="py-24 md:py-32 bg-background" id="secteurs">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Secteurs d'Activité</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre expertise diversifiée nous permet d'intervenir dans une large gamme de secteurs, offrant des solutions adaptées aux besoins spécifiques de chaque domaine.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {secteurs.map((secteur, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              viewport={{ once: true }}
              className="group bg-card border border-border p-6 rounded-2xl text-center hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300 hover:border-blue-600/50">
              <p className="font-semibold text-sm">{secteur}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
