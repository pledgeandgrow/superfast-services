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
    <section className="py-24 md:py-32 bg-muted/30" id="temoignages">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Témoignages</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-card border border-border p-8 rounded-3xl hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-600/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground italic leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-blue-600 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
