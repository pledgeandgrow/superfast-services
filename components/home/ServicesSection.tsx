'use client'
import { motion } from 'motion/react';
import { Truck, Plane, Ship, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function ServicesSection() {
  const tabs = [
    {
      value: "tab-1",
      icon: <Truck className="h-auto w-5 shrink-0" />,
      label: "Transport Terrestre",
      content: {
        badge: "Fiabilité & Rapidité",
        title: "Ground Shipping",
        description: "Nos services de transport terrestre sont conçus pour vos besoins de déplacement de marchandises volumineuses et importantes. Grâce à un réseau étendu de poids lourds et des conducteurs expérimentés, nous assurons une livraison sûre et ponctuelle.",
        buttonText: "En savoir plus",
        buttonHref: "/services/ground-shipping",
        imageSrc: "/9.svg",
        imageAlt: "Transport terrestre",
      },
    },
    {
      value: "tab-2",
      icon: <Plane className="h-auto w-5 shrink-0" />,
      label: "Fret Aérien",
      content: {
        badge: "International & Express",
        title: "International Air Freight",
        description: "Pour vos expéditions internationales urgentes, nous vous offrons la rapidité et la fiabilité du fret aérien. Grâce à notre réseau mondial de partenaires aériens, nous assurons que vos marchandises atteignent leur destination rapidement et en toute sécurité.",
        buttonText: "En savoir plus",
        buttonHref: "/services/air-freight",
        imageSrc: "/10.svg",
        imageAlt: "Fret aérien",
      },
    },
    {
      value: "tab-3",
      icon: <Ship className="h-auto w-5 shrink-0" />,
      label: "Grands Projets",
      content: {
        badge: "Solutions Sur Mesure",
        title: "Large Projects",
        description: "Chez SUPERFAST SERVICES, nous sommes spécialisés dans la gestion de projets logistiques de grande envergure, nécessitant une planification et une exécution méticuleuses. Du transport de volumes importants de matières premières aux expéditions de charges hors gabarit.",
        buttonText: "En savoir plus",
        buttonHref: "/services/large-projects",
        imageSrc: "/11.svg",
        imageAlt: "Grands projets",
      },
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solutions Logistiques <span className="text-blue-600">Complètes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des services d&apos;approvisionnement globaux adaptés à vos besoins spécifiques
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6 bg-transparent mb-12">
            {tabs.map((tab, index) => (
              <motion.div
                key={tab.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <TabsTrigger
                  value={tab.value}
                  className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300 hover:scale-105">
                  {tab.icon} {tab.label}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>

          <div className="mx-auto max-w-7xl">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-12 lg:grid-cols-2 lg:gap-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-16 border border-gray-200">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-6">
                  <span className="inline-block w-fit bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                    {tab.content.badge}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {tab.content.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {tab.content.description}
                  </p>
                  <Button 
                    asChild 
                    size="lg"
                    className="mt-2.5 w-fit gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105">
                    <Link href={tab.content.buttonHref} className="flex items-center gap-2">
                      {tab.content.buttonText}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
