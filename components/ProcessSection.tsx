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
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Un Process Méthodologique pour des Résultats Concrets</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-card border border-border p-6 rounded-2xl hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-transform duration-300 group-hover:scale-110">
                  {index + 1}
                </div>
                <h3 className="font-bold text-sm">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
