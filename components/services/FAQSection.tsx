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
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Questions <span className="text-blue-600">Fréquentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Trouvez rapidement les réponses à vos questions
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-4">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4">
                <span className="font-semibold text-gray-900">{question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}>
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
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
