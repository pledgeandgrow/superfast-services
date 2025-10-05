'use client'
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const questions = [
    "Comment votre entreprise gère-t-elle le transport de cargaisons spécialisées ?",
    "Quelles mesures votre entreprise prend-elle pour garantir la sécurité de la chaîne d'approvisionnement ?",
    "Comment votre entreprise aborde-t-elle les questions de durabilité et de préoccupations environnementales ?",
    "Quel est le coût de vos services ?",
    "Quels sont les délais habituels pour un projet de sourcing ?",
    "Dans quels pays travaillez-vous ?",
    "Proposez-vous des solutions sur mesure ?",
    "Comment puis-je démarrer un projet avec vous ?"
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQ (Foire Aux Questions)</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-4">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4">
                <span className="font-semibold">{question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}>
                <p className="px-6 pb-6 text-muted-foreground">
                  Contactez-nous pour obtenir des réponses détaillées à vos questions.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
