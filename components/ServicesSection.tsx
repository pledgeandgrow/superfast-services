'use client'
import { Truck, Plane, Ship } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function ServicesSection() {
  const tabs = [
    {
      value: "tab-1",
      icon: <Truck className="h-auto w-4 shrink-0" />,
      label: "Transport Terrestre",
      content: {
        badge: "Fiabilité & Rapidité",
        title: "Ground Shipping",
        description: "Nos services de transport terrestre sont conçus pour vos besoins de déplacement de marchandises volumineuses et importantes. Grâce à un réseau étendu de poids lourds et des conducteurs expérimentés, nous assurons une livraison sûre et ponctuelle.",
        buttonText: "OBTENEZ UNE QUOTATION",
        buttonHref: "mailto:support@superfast-services.com",
        imageSrc: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
        imageAlt: "Transport terrestre",
      },
    },
    {
      value: "tab-2",
      icon: <Plane className="h-auto w-4 shrink-0" />,
      label: "Fret Aérien",
      content: {
        badge: "International & Express",
        title: "International Air Freight",
        description: "Pour vos expéditions internationales urgentes, nous vous offrons la rapidité et la fiabilité du fret aérien. Grâce à notre réseau mondial de partenaires aériens, nous assurons que vos marchandises atteignent leur destination rapidement et en toute sécurité.",
        buttonText: "OBTENEZ UNE QUOTATION",
        buttonHref: "mailto:support@superfast-services.com",
        imageSrc: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
        imageAlt: "Fret aérien",
      },
    },
    {
      value: "tab-3",
      icon: <Ship className="h-auto w-4 shrink-0" />,
      label: "Grands Projets",
      content: {
        badge: "Solutions Sur Mesure",
        title: "Large Projects",
        description: "Chez SUPERFAST SERVICES, nous sommes spécialisés dans la gestion de projets logistiques de grande envergure, nécessitant une planification et une exécution méticuleuses. Du transport de volumes importants de matières premières aux expéditions de charges hors gabarit.",
        buttonText: "OBTENEZ UNE QUOTATION",
        buttonHref: "mailto:support@superfast-services.com",
        imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
        imageAlt: "Grands projets",
      },
    },
  ];

  return (
    <section className="py-24 md:py-32" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">Services</Badge>
          <h2 className="max-w-2xl text-4xl md:text-5xl font-bold">
            Nos Solutions Logistiques
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Des services d'approvisionnement globaux adaptés à vos besoins spécifiques
          </p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-3xl bg-muted/30 p-6 lg:p-16 border border-border">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-12 lg:grid-cols-2 lg:gap-16"
              >
                <div className="flex flex-col gap-6">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-bold lg:text-5xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg leading-relaxed">
                    {tab.content.description}
                  </p>
                  <Button asChild className="mt-2.5 w-fit gap-2 bg-blue-600 hover:bg-blue-700" size="lg">
                    <Link href={tab.content.buttonHref}>{tab.content.buttonText}</Link>
                  </Button>
                </div>
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
