# Services Structure Documentation

## Overview

The services section has been completely reorganized with a main services page and 4 specialized service pages.

## Pages Structure

### Main Services Page
**Route:** `/services`  
**File:** `app/services/page.tsx`

This is the main landing page for all services, providing an overview and directing users to specific services.

**Components Used:**
- `ServicesHero` - Hero section with all services introduction
- `ServicesGrid` - Interactive grid showcasing all 4 services
- `ServicesFeatures` - Key advantages of Superfast Services
- `ServicesProcess` - 4-step process workflow
- `ServicesCTA` - Call-to-action with contact information

### Specialized Service Pages

#### 1. Air Freight
**Route:** `/services/air-freight`  
**Components Folder:** `components/services/air-freight/`

- AirFreightHero
- AirFreightFeatures
- AirFreightServices
- AirFreightNetwork
- AirFreightAdvantages
- AirFreightCTA

#### 2. Ground Shipping
**Route:** `/services/ground-shipping`  
**Components Folder:** `components/services/ground-shipping/`

- GroundShippingHero
- GroundShippingFeatures
- GroundShippingProcess
- GroundShippingBenefits
- GroundShippingCTA

#### 3. Large Projects
**Route:** `/services/large-projects`  
**Components Folder:** `components/services/large-projects/`

- LargeProjectsHero
- LargeProjectsFeatures
- LargeProjectsCapabilities
- LargeProjectsProcess
- LargeProjectsCaseStudies
- LargeProjectsCTA

#### 4. Complementary Services
**Route:** `/services/complementary`  
**Components Folder:** `components/services/complementary/`

- ComplementaryHero
- ComplementaryServices
- ComplementaryFeatures
- ComplementaryAdvantages
- ComplementaryCTA

## Components Organization

```
components/services/
├── Main Services Page Components
│   ├── ServicesHero.tsx
│   ├── ServicesGrid.tsx
│   ├── ServicesFeatures.tsx
│   ├── ServicesProcess.tsx
│   └── ServicesCTA.tsx
│
├── Service-Specific Components (Organized by Service)
│   ├── air-freight/
│   │   ├── AirFreightHero.tsx
│   │   ├── AirFreightFeatures.tsx
│   │   ├── AirFreightServices.tsx
│   │   ├── AirFreightNetwork.tsx
│   │   ├── AirFreightAdvantages.tsx
│   │   ├── AirFreightCTA.tsx
│   │   └── index.ts
│   │
│   ├── ground-shipping/
│   │   ├── GroundShippingHero.tsx
│   │   ├── GroundShippingFeatures.tsx
│   │   ├── GroundShippingProcess.tsx
│   │   ├── GroundShippingBenefits.tsx
│   │   ├── GroundShippingCTA.tsx
│   │   └── index.ts
│   │
│   ├── large-projects/
│   │   ├── LargeProjectsHero.tsx
│   │   ├── LargeProjectsFeatures.tsx
│   │   ├── LargeProjectsCapabilities.tsx
│   │   ├── LargeProjectsProcess.tsx
│   │   ├── LargeProjectsCaseStudies.tsx
│   │   ├── LargeProjectsCTA.tsx
│   │   └── index.ts
│   │
│   └── complementary/
│       ├── ComplementaryHero.tsx
│       ├── ComplementaryServices.tsx
│       ├── ComplementaryFeatures.tsx
│       ├── ComplementaryAdvantages.tsx
│       ├── ComplementaryCTA.tsx
│       └── index.ts
│
├── index.ts (Barrel exports for all components)
└── README.md (Detailed documentation)
```

## Import Patterns

### Individual Import
```tsx
import ServicesHero from '@/components/services/ServicesHero'
import AirFreightHero from '@/components/services/air-freight/AirFreightHero'
```

### Barrel Import
```tsx
import { ServicesHero, ServicesGrid } from '@/components/services'
import { AirFreightHero, AirFreightFeatures } from '@/components/services/air-freight'
```

## Key Features

### Main Services Page
1. **Comprehensive Overview** - All services in one place
2. **Interactive Grid** - Hover effects and smooth animations
3. **Clear Navigation** - Direct links to specialized pages
4. **Process Explanation** - 4-step workflow visualization
5. **Trust Indicators** - Stats and certifications

### Service-Specific Pages
1. **Dedicated Hero Sections** - Unique branding per service
2. **Detailed Features** - Service-specific capabilities
3. **Visual Elements** - Custom icons and gradients
4. **Call-to-Actions** - Conversion-optimized CTAs
5. **Responsive Design** - Mobile-first approach

## Design Patterns

All components follow these standards:
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Gradient backgrounds** for visual appeal
- **Responsive grid layouts**
- **Hover effects** for interactivity
- **Semantic HTML** for accessibility

## Navigation Flow

```
Home Page
    ↓
Services Page (/services)
    ├→ Air Freight (/services/air-freight)
    ├→ Ground Shipping (/services/ground-shipping)
    ├→ Large Projects (/services/large-projects)
    └→ Complementary (/services/complementary)
```

## Next Steps

To add a new service:
1. Create a new folder in `components/services/[service-name]/`
2. Create service-specific components
3. Add barrel export in `index.ts`
4. Create page in `app/services/[service-name]/page.tsx`
5. Update main `ServicesGrid` component
6. Update documentation

## Related Files

- Main services page: `/app/services/page.tsx`
- Service pages: `/app/services/[service-name]/page.tsx`
- Components: `/components/services/`
- Layout: `/components/layout/`
- UI components: `/components/ui/`
