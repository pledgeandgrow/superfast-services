# Services Components

This directory contains all components for the main services page and the 4 specialized service pages of Superfast Services.

## Structure

```
services/
├── ServicesHero.tsx          # Main services page hero
├── ServicesGrid.tsx          # Services overview grid
├── ServicesFeatures.tsx      # Key features section
├── ServicesProcess.tsx       # How it works process
├── ServicesCTA.tsx           # Call-to-action section
├── air-freight/              # Air Freight service components
├── complementary/            # Complementary services components
├── ground-shipping/          # Ground Shipping service components
└── large-projects/           # Large Projects service components
```

## Main Services Page (`/services`)

The main services overview page that showcases all available services.

**Components:**
- `ServicesHero` - Hero section with introduction to all services
- `ServicesGrid` - Grid displaying all 4 main services with features and links
- `ServicesFeatures` - Why choose Superfast Services section
- `ServicesProcess` - 4-step process explanation
- `ServicesCTA` - Final call-to-action with contact information

## Service Pages

### 1. Air Freight (`/services/air-freight`)
International air freight services for urgent shipments.

**Components:**
- `AirFreightHero` - Hero section with service introduction
- `AirFreightFeatures` - Key features of air freight service
- `AirFreightServices` - Detailed service offerings
- `AirFreightNetwork` - Global network visualization
- `AirFreightAdvantages` - Competitive advantages
- `AirFreightCTA` - Call-to-action section

### 2. Complementary Services (`/services/complementary`)
Additional logistics services including payment facilitation, multimodal transport, warehousing, and supply chain consulting.

**Components:**
- `ComplementaryHero` - Hero section
- `ComplementaryServices` - Service catalog
- `ComplementaryFeatures` - Feature highlights
- `ComplementaryAdvantages` - Benefits overview
- `ComplementaryCTA` - Call-to-action section

### 3. Ground Shipping (`/services/ground-shipping`)
Ground transportation services for bulk and oversized cargo.

**Components:**
- `GroundShippingHero` - Hero section
- `GroundShippingFeatures` - Service features
- `GroundShippingProcess` - Shipping process workflow
- `GroundShippingBenefits` - Key benefits
- `GroundShippingCTA` - Call-to-action section

### 4. Large Projects (`/services/large-projects`)
Specialized logistics for large-scale projects and oversized cargo.

**Components:**
- `LargeProjectsHero` - Hero section
- `LargeProjectsFeatures` - Project features
- `LargeProjectsCapabilities` - Technical capabilities
- `LargeProjectsProcess` - Project management process
- `LargeProjectsCaseStudies` - Success stories
- `LargeProjectsCTA` - Call-to-action section

## Usage

### Individual Import
```tsx
import AirFreightHero from '@/components/services/air-freight/AirFreightHero';
```

### Barrel Import (using index.ts)
```tsx
import { AirFreightHero, AirFreightFeatures } from '@/components/services/air-freight';
```

## Component Standards

All service components follow these standards:

1. **Client Components**: Use `'use client'` directive for interactive features
2. **Animations**: Utilize Framer Motion for smooth animations
3. **Responsive Design**: Mobile-first approach with Tailwind CSS
4. **Icons**: Lucide React icons for consistency
5. **Styling**: Tailwind CSS with custom gradients and effects
6. **Accessibility**: Semantic HTML and ARIA labels where needed

## Adding New Components

When adding new service components:

1. Create the component in the appropriate service subfolder
2. Follow the naming convention: `[ServiceName][ComponentType].tsx`
3. Export the component in the subfolder's `index.ts`
4. Update this README with component description
5. Ensure responsive design and animations are implemented

## Related Files

- Service pages: `/app/services/[service-name]/page.tsx`
- Layout components: `/components/layout/`
- UI components: `/components/ui/`
