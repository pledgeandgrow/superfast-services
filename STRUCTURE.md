# 📁 Structure des Dossiers - Superfast Services

## 🗂️ Organisation des Composants

```
components/
├── layout/                    # Composants de mise en page
│   ├── Header.tsx            # Navigation principale
│   └── Footer.tsx            # Pied de page
│
├── home/                      # Composants de la page d'accueil
│   ├── HeroSection.tsx       # Section hero
│   ├── ServicesSection.tsx   # Section services
│   └── ...autres sections
│
├── about/                     # Composants page À Propos
│   ├── AboutHero.tsx
│   ├── AboutMission.tsx
│   ├── AboutValues.tsx
│   ├── AboutTeam.tsx
│   ├── AboutStats.tsx
│   └── AboutTimeline.tsx
│
├── contact/                   # Composants page Contact
│   ├── ContactHero.tsx
│   ├── ContactForm.tsx
│   ├── ContactInfo.tsx
│   └── ContactMap.tsx
│
├── devis/                     # Composants page Devis
│   ├── DevisHero.tsx
│   ├── DevisSteps.tsx
│   ├── DevisForm.tsx
│   └── DevisInfo.tsx
│
├── services/                  # Composants des pages services
│   ├── ground-shipping/
│   │   ├── GroundShippingHero.tsx
│   │   ├── GroundShippingFeatures.tsx
│   │   └── ...
│   ├── air-freight/
│   │   ├── AirFreightHero.tsx
│   │   ├── AirFreightServices.tsx
│   │   └── ...
│   ├── large-projects/
│   │   ├── LargeProjectsHero.tsx
│   │   ├── LargeProjectsCapabilities.tsx
│   │   └── ...
│   └── complementary/
│       ├── ComplementaryHero.tsx
│       ├── ComplementaryServices.tsx
│       └── ...
│
└── ui/                        # Composants UI réutilisables
    ├── button.tsx
    ├── tabs.tsx
    └── ...
```

## 📄 Structure des Pages

```
app/
├── page.tsx                   # Page d'accueil
├── about/
│   └── page.tsx              # Page À Propos
├── contact/
│   └── page.tsx              # Page Contact
├── devis/
│   └── page.tsx              # Page Devis
└── services/
    ├── ground-shipping/
    │   └── page.tsx
    ├── air-freight/
    │   └── page.tsx
    ├── large-projects/
    │   └── page.tsx
    └── complementary/
        └── page.tsx
```

## 🎯 Conventions de Nommage

### Composants
- **PascalCase** pour les noms de fichiers et composants
- Préfixe avec le nom de la page/section
- Suffixe avec le type de composant

Exemples :
- `AboutHero.tsx` - Hero de la page About
- `ContactForm.tsx` - Formulaire de la page Contact
- `DevisSteps.tsx` - Étapes de la page Devis

### Dossiers
- **kebab-case** pour les noms de dossiers
- Nom descriptif et concis
- Regroupement logique par fonctionnalité

Exemples :
- `ground-shipping/`
- `air-freight/`
- `large-projects/`

## 📦 Imports Standards

### Layout Components
```tsx
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
```

### Page Components
```tsx
// Pour la page About
import AboutHero from '@/components/about/AboutHero'
import AboutMission from '@/components/about/AboutMission'

// Pour la page Contact
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
```

### UI Components
```tsx
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
```

## 🔄 Migration en Cours

### Fichiers à Déplacer

#### De `components/` vers `components/layout/`
- ✅ Header.tsx → layout/Header.tsx
- ✅ Footer.tsx → layout/Footer.tsx

#### De `components/` vers `components/home/`
- ✅ HeroSection.tsx → home/HeroSection.tsx
- 🔄 ServicesSection.tsx → home/ServicesSection.tsx
- 🔄 MissionSection.tsx → home/MissionSection.tsx
- 🔄 WhyChooseUsSection.tsx → home/WhyChooseUsSection.tsx
- 🔄 TestimonialsSection.tsx → home/TestimonialsSection.tsx

#### Composants Services (déjà organisés)
- ✅ components/services/ground-shipping/*
- ✅ components/services/air-freight/*
- ✅ components/services/large-projects/*
- ✅ components/services/complementary/*

#### Composants About (déjà organisés)
- ✅ components/about/*

#### Composants Contact (déjà organisés)
- ✅ components/contact/*

#### Composants Devis (déjà organisés)
- ✅ components/devis/*

## 📝 Template de Page Standard

```tsx
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/[page]/PageHero'
// ... autres imports

export const metadata = {
  title: 'Titre | Superfast Services',
  description: 'Description de la page',
}

export default function PageName() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero />
      {/* Autres sections */}
      <Footer />
    </div>
  )
}
```

## 🎨 Composants par Type

### Hero Sections
- Toujours nommés `[Page]Hero.tsx`
- Contiennent : titre, description, CTA, background
- Hauteur : `min-h-[600px] md:min-h-[700px] lg:min-h-[800px]`

### Feature Sections
- Nommés `[Page]Features.tsx` ou `[Page]Services.tsx`
- Grilles de cartes avec icônes
- Animations Framer Motion

### Form Components
- Nommés `[Page]Form.tsx`
- Validation, états loading/success/error
- Responsive et accessible

### Info Components
- Nommés `[Page]Info.tsx`
- Informations complémentaires, FAQ, contact
- Sidebar ou sections informatives

### CTA Sections
- Nommés `[Page]CTA.tsx`
- Appels à l'action finaux
- Gradients et boutons proéminents

## 🚀 Prochaines Étapes

1. ✅ Créer dossiers `layout/` et `home/`
2. ✅ Déplacer Header et Footer
3. 🔄 Déplacer composants home
4. 🔄 Mettre à jour tous les imports
5. 🔄 Tester toutes les pages
6. 🔄 Supprimer anciens fichiers

## 📌 Notes Importantes

- **Toujours utiliser les imports absolus** avec `@/components/`
- **Maintenir la cohérence** dans la structure
- **Documenter** les nouveaux composants
- **Tester** après chaque migration
- **Commit** régulièrement les changements

---

**Version:** 1.0  
**Dernière mise à jour:** 2025-01-05  
**Statut:** 🟡 En cours de migration
