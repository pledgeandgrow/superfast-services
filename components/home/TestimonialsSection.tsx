'use client'
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Depuis qu'on utilise SUPERFAST SERVICES, notre centre de formation fonctionne beaucoup mieux ! Leurs solutions pour organiser les livraisons nous ont vraiment facilité la vie. On gagne du temps et on dépense moins d'argent.",
      author: "Hamid Jaouhar",
      company: "GENSEO",
      rating: 5
    },
    {
      quote: "Avant, la gestion des livraisons était vraiment compliquée pour notre clinique. SUPERFAST SERVICES nous a beaucoup aidé à simplifier tout ça. Leur solution s'adapte parfaitement à notre façon de travailler.",
      author: "Hasna El Nour",
      company: "Clinique El Nour",
      rating: 5
    },
    {
      quote: "Pour notre PME française en pleine expansion, la logistique est un facteur clé de notre réussite. SUPERFAST SERVICES est un véritable partenaire de confiance qui s'intègre parfaitement à notre fonctionnement.",
      author: "Alain Menetre",
      company: "Gérant PME",
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white" id="temoignages">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
            Ce Que Disent <span className="text-blue-600">Nos Clients</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 sm:w-12 h-10 sm:h-12 text-blue-600/10" />
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed mb-4 sm:mb-6">&quot;{testimonial.quote}&quot;</p>
              <div className="border-t border-gray-200 pt-3 sm:pt-4">
                <p className="font-bold text-sm sm:text-base text-gray-900">{testimonial.author}</p>
                <p className="text-blue-600 text-xs sm:text-sm font-semibold">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
