'use client'
import { motion } from 'motion/react';

export default function ProcessSection() {
  const steps = [
    { title: "Analyse approfondie de vos besoins", desc: "Comprendre vos exigences précises est notre priorité." },
    { title: "Recherche ciblée de fournisseurs", desc: "Identification des acteurs clés répondant à vos critères." },
    { title: "Évaluation rigoureuse", desc: "Vérification de la qualité, des capacités et des prix." },
    { title: "Négociation stratégique", desc: "Obtenir les meilleures conditions pour vous." },
    { title: "Validation et commande sécurisée", desc: "Suivi rigoureux de votre ordre." },
    { title: "Contrôle qualité méticuleux", desc: "Assurance que les produits correspondent à vos attentes." },
    { title: "Suivi de production constant", desc: "Maintien des délais et information régulière." },
    { title: "Logistique et livraison optimisées", desc: "Acheminement de vos produits dans les meilleures conditions." },
    { title: "Service après-vente dédié", desc: "Support continu après la livraison." }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Notre Processus
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Méthodologie <span className="text-blue-600">Prouvée</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Un processus structuré en 9 étapes pour garantir votre succès
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  {index + 1}
                </div>
                <h3 className="font-bold text-sm text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
