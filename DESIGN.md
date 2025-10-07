# 🎨 Superfast Services - Guide de Design

## 📋 Table des Matières
1. [Palette de Couleurs](#palette-de-couleurs)
2. [Typographie](#typographie)
3. [Composants Standards](#composants-standards)
4. [Layout & Espacement](#layout--espacement)
5. [Animations](#animations)
6. [Patterns de Pages](#patterns-de-pages)
7. [Checklist de Conformité](#checklist-de-conformité)

---

## 🎨 Palette de Couleurs

### Couleurs Principales
```css
/* Bleu Principal - Utilisé pour les CTA et éléments importants */
Primary Blue: #2563eb (blue-600)
Primary Blue Hover: #1d4ed8 (blue-700)
Primary Blue Light: #3b82f6 (blue-500)

/* Indigo - Utilisé pour les gradients et accents */
Indigo: #4f46e5 (indigo-600)
Indigo Dark: #4338ca (indigo-700)

/* Couleurs Secondaires par Service */
Ground Shipping: #2563eb → #4f46e5 (blue-600 → indigo-600)
Air Freight: #0ea5e9 → #2563eb (sky-600 → blue-600)
Large Projects: #6366f1 → #8b5cf6 (indigo-500 → purple-600)
Complementary: #7c3aed → #a855f7 (violet-600 → purple-500)
```

### Couleurs Neutres
```css
/* Texte */
Text Primary: #111827 (gray-900)
Text Secondary: #4b5563 (gray-600)
Text Tertiary: #9ca3af (gray-400)

/* Backgrounds */
White: #ffffff
Gray Light: #f9fafb (gray-50)
Gray Medium: #f3f4f6 (gray-100)

/* Bordures */
Border Light: #e5e7eb (gray-200)
Border Medium: #d1d5db (gray-300)
```

### Couleurs de Status
```css
Success: #10b981 (green-500)
Warning: #f59e0b (amber-500)
Error: #ef4444 (red-500)
Info: #3b82f6 (blue-500)
```

---

## 📝 Typographie

### Familles de Polices
```css
/* Police principale (définie dans Tailwind) */
font-family: 'Inter', system-ui, sans-serif;
```

### Hiérarchie des Titres
```css
/* Hero Titles (H1) */
text-5xl md:text-6xl lg:text-7xl (48px → 60px → 72px)
font-bold
leading-tight
text-gray-900 ou text-white

/* Section Titles (H2) */
text-4xl md:text-5xl (36px → 48px)
font-bold
mb-6
text-gray-900

/* Subsection Titles (H3) */
text-2xl md:text-3xl (24px → 30px)
font-bold
mb-4
text-gray-900

/* Card Titles (H4) */
text-xl (20px)
font-bold
mb-3
text-gray-900
```

### Corps de Texte
```css
/* Paragraphe Principal */
text-xl (20px)
text-gray-600
leading-relaxed
max-w-3xl mx-auto

/* Paragraphe Standard */
text-base (16px)
text-gray-600
leading-relaxed

/* Petit Texte */
text-sm (14px)
text-gray-600

/* Labels */
text-sm (14px)
font-semibold
text-gray-700
mb-2
```

---

## 🧩 Composants Standards

### 1. Hero Section
```tsx
Structure Standard:
- Height: min-h-[600px] md:min-h-[700px] lg:min-h-[800px]
- Background: Image + Gradient Overlay
- Gradient: from-{color}-900/95 via-{color}-800/90 to-{color}-900/95
- Padding: py-32 md:py-40
- Badge: Inline badge avec icône
- Title: H1 avec span coloré pour mot clé
- Description: text-xl md:text-2xl text-gray-300
- CTA Buttons: 2 boutons (Primary + Secondary)
- Scroll Indicator: Animation bounce en bas
```

### 2. Section Header
```tsx
Structure Standard:
- Badge: text-{color}-600 uppercase tracking-wider text-sm
- Title: H2 avec span coloré
- Description: text-xl text-gray-600 max-w-3xl mx-auto
- Spacing: mb-16
```

### 3. Cards
```tsx
Standard Card:
- Background: bg-white
- Border: border border-gray-100
- Rounded: rounded-2xl
- Padding: p-6 ou p-8
- Shadow: shadow-lg hover:shadow-2xl
- Transition: transition-all duration-300
- Hover: hover:-translate-y-2

Icon Card:
- Icon Container: w-14 h-14 rounded-xl bg-gradient-to-br
- Icon Size: w-7 h-7 text-white
- Hover Effect: group-hover:scale-110
```

### 4. Buttons
```tsx
Primary Button:
- Classes: bg-gradient-to-r from-blue-600 to-indigo-600
- Hover: hover:from-blue-700 hover:to-indigo-700
- Padding: px-8 py-4
- Rounded: rounded-xl
- Font: font-semibold
- Shadow: hover:shadow-xl hover:shadow-blue-600/30
- Transition: transition-all duration-300

Secondary Button:
- Classes: bg-white/10 backdrop-blur-sm border border-white/30
- Hover: hover:bg-white/20
- Same padding, rounded, font as primary

Outline Button:
- Classes: border border-gray-300
- Hover: hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50
```

### 5. Forms
```tsx
Input Field:
- Classes: w-full px-4 py-3 rounded-xl border border-gray-300
- Focus: focus:border-blue-500 focus:ring-2 focus:ring-blue-200
- Transition: transition-all outline-none

Select:
- Same as Input Field

Textarea:
- Same as Input Field + resize-none

Label:
- Classes: block text-sm font-semibold text-gray-700 mb-2
```

---

## 📐 Layout & Espacement

### Container
```css
/* Standard Container */
mx-auto max-w-7xl px-6 lg:px-12
```

### Section Spacing
```css
/* Section Padding */
py-24 md:py-32

/* Section Margin Bottom */
mb-16 (entre sections internes)
mb-20 (entre grandes sections)
```

### Grid Layouts
```css
/* 2 Colonnes */
grid md:grid-cols-2 gap-8

/* 3 Colonnes */
grid md:grid-cols-2 lg:grid-cols-3 gap-8

/* 4 Colonnes */
grid md:grid-cols-2 lg:grid-cols-4 gap-6
```

### Spacing Scale
```css
gap-3  (12px) - Petits éléments
gap-4  (16px) - Éléments moyens
gap-6  (24px) - Éléments standards
gap-8  (32px) - Grandes sections
gap-12 (48px) - Très grandes sections
```

---

## ✨ Animations

### Framer Motion - Entrées Standards
```tsx
// Fade In from Bottom
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}

// Fade In from Left
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}

// Fade In from Right
initial={{ opacity: 0, x: 50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}

// Staggered Children
transition={{ duration: 0.5, delay: index * 0.1 }}
```

### Hover Effects
```css
/* Scale */
hover:scale-105 transition-transform duration-300

/* Translate Y */
hover:-translate-y-2 transition-all duration-300

/* Shadow */
hover:shadow-2xl transition-all duration-300

/* Icon Scale */
group-hover:scale-110 transition-transform duration-300
```

---

## 📄 Patterns de Pages

### Structure Standard d'une Page
```tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PageName() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      {/* Content Sections */}
      {/* CTA Section */}
      <Footer />
    </div>
  )
}
```

### Ordre des Sections
1. **Hero** - Introduction avec CTA
2. **Features/Services** - Présentation des fonctionnalités
3. **Benefits/Advantages** - Avantages et bénéfices
4. **Process/Steps** - Comment ça marche
5. **Stats/Proof** - Chiffres et preuves sociales
6. **CTA Final** - Appel à l'action final

### Background Patterns
```tsx
// Alternance des backgrounds
Section 1: bg-white
Section 2: bg-gradient-to-br from-gray-50 to-blue-50
Section 3: bg-white
Section 4: bg-gradient-to-br from-{color}-900 to-{color}-900 (dark)
Section 5: bg-gradient-to-br from-gray-50 to-blue-50
```

---

## ✅ Checklist de Conformité

### Pour Chaque Page
- [ ] Header et Footer présents
- [ ] Hero section avec gradient cohérent
- [ ] Palette de couleurs respectée
- [ ] Typographie conforme (tailles, poids, couleurs)
- [ ] Animations Framer Motion sur tous les éléments
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Spacing cohérent (py-24 md:py-32)
- [ ] Container max-w-7xl px-6 lg:px-12
- [ ] CTA buttons avec gradients
- [ ] Cards avec hover effects
- [ ] Images avec alt text

### Pour Chaque Composant
- [ ] 'use client' si utilise hooks ou animations
- [ ] Imports corrects (motion/react, lucide-react)
- [ ] Props TypeScript typées
- [ ] Classes Tailwind cohérentes
- [ ] Hover states définis
- [ ] Transitions fluides
- [ ] Responsive breakpoints (md:, lg:)

### Pour les Formulaires
- [ ] Labels avec font-semibold
- [ ] Inputs avec focus states
- [ ] Validation visuelle
- [ ] Messages d'erreur/succès
- [ ] Loading states
- [ ] Bouton submit avec gradient

---

## 🎯 Exemples de Code

### Hero Section Standard
```tsx
<section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-800/90 to-purple-900/95 z-10"></div>
    <img src="..." alt="..." className="w-full h-full object-cover" />
  </div>
  
  <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12 py-32 md:py-40">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
        Titre <span className="text-blue-400">Important</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">Description</p>
      <div className="flex gap-4">
        <a href="#" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
          CTA Principal
        </a>
      </div>
    </motion.div>
  </div>
</section>
```

### Section Header Standard
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center mb-16">
  <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
    Badge Section
  </span>
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
    Titre de <span className="text-blue-600">Section</span>
  </h2>
  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    Description de la section
  </p>
</motion.div>
```

### Card Standard
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
    <Icon className="w-7 h-7 text-white" />
  </div>
  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
    Titre
  </h3>
  <p className="text-gray-600 leading-relaxed">
    Description
  </p>
</motion.div>
```

---

## 🔄 Processus de Mise à Jour

### Étapes pour Uniformiser une Page
1. **Vérifier le Hero** - Gradient, tailles, spacing
2. **Vérifier les Sections** - Headers, spacing, backgrounds
3. **Vérifier les Cards** - Structure, hover effects, icons
4. **Vérifier les Buttons** - Gradients, hover states
5. **Vérifier les Animations** - Framer Motion partout
6. **Vérifier le Responsive** - Mobile, tablet, desktop
7. **Vérifier les Couleurs** - Palette respectée
8. **Vérifier la Typographie** - Tailles et poids corrects

### Ordre de Priorité des Pages
1. ✅ Page d'accueil (/)
2. 🔄 Services individuels (/services/*)
3. 🔄 À Propos (/about)
4. 🔄 Contact (/contact)
5. 🔄 Devis (/devis)

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
Base: < 768px
md:  >= 768px  (Tablet)
lg:  >= 1024px (Desktop)
xl:  >= 1280px (Large Desktop)
```

### Patterns Responsive Communs
```tsx
// Text Sizes
text-base md:text-lg lg:text-xl

// Padding
py-12 md:py-16 lg:py-24

// Grid
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Flex Direction
flex-col md:flex-row

// Hidden/Visible
hidden md:block
block md:hidden
```

---

## 🎨 Gradients Standards

```css
/* Bleu Principal */
from-blue-600 to-indigo-600

/* Bleu Clair */
from-sky-500 to-blue-600

/* Violet */
from-violet-600 to-purple-600

/* Indigo */
from-indigo-600 to-purple-700

/* Background Sections */
from-gray-50 to-blue-50
from-gray-50 to-indigo-50
from-gray-50 to-violet-50

/* Dark Sections */
from-blue-900 via-indigo-800 to-purple-900
from-sky-900 via-blue-900 to-indigo-900
```

---

## 📌 Notes Importantes

1. **Toujours utiliser Framer Motion** pour les animations d'entrée
2. **Toujours ajouter viewport={{ once: true }}** pour éviter les re-animations
3. **Toujours utiliser des gradients** pour les boutons CTA
4. **Toujours ajouter des hover effects** sur les éléments interactifs
5. **Toujours respecter le spacing** py-24 md:py-32 pour les sections
6. **Toujours utiliser max-w-7xl** pour les containers
7. **Toujours ajouter des transitions** transition-all duration-300
8. **Toujours tester le responsive** sur mobile, tablet, desktop

---

**Version:** 1.0  
**Dernière mise à jour:** 2025-01-05  
**Statut:** 🟢 Actif
