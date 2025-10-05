'use client'
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30" id="mission">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-12 rounded-3xl shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre Mission</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl leading-relaxed mb-8">
              Rendre accessible vos ambitions. <span className="font-bold text-blue-600">"Name it, We do it"</span> En quelques mots : ce que vous cherchez nous le trouvons. En étant VOTRE représentant chez vos fournisseurs, nous nous engageons à vous apporter, notre assistance et notre expertise en toute transparence et un accompagnement sur mesure tout au long du processus d'approvisionnement.
            </p>
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 rounded-2xl border-l-4 border-blue-600">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-blue-600/20" />
              <p className="text-muted-foreground italic leading-relaxed mb-6 pl-8">
                « En tant que filiale du groupe EPI, Superfast Services - spécialisé dans le sourcing - s'engage à simplifier et optimiser votre processus d'approvisionnement. Notre présence stratégique à Dubaï, porte d'entrée vers les marchés du Moyen-Orient et de l'Asie, notre ancrage en Afrique via le Tchad, notre accès privilégié à la Chine avec nos collaborateurs sur le terrain et nos partenariats clés en Turquie et en Europe, constituent un atout majeur. »
              </p>
              <p className="font-semibold pl-8">— Ahmed Salah, Directeur Général</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
