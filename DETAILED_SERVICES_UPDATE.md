# DetailedServicesSection Update

## Changes Made

### 1. Added Service Links
Each service card now links to its specific service page:

| Service | Link |
|---------|------|
| Facilitateur De Transfert / Paiement | `/services/complementary` |
| Transport Terrestre, Maritime et Aérien | `/services/ground-shipping` |
| Entreposage et Stockage | `/services/complementary` |
| Services de Conseil | `/services/complementary` |

### 2. Hover-Only Button Display
The "Demander plus d'infos" button now:
- **Hidden by default** - `opacity-0`
- **Appears on hover** - `group-hover:opacity-100`
- **Smooth transition** - `transition-opacity duration-300`

### 3. Enhanced User Experience

**Card Hover Effects:**
- ✨ Card lifts up (`hover:-translate-y-2`)
- 🌟 Enhanced shadow (`hover:shadow-2xl`)
- 🖼️ Image zooms in (`group-hover:scale-110`)
- 🔘 Button fades in (`group-hover:opacity-100`)

**Button Styling:**
- Gradient background: `from-blue-600 to-indigo-600`
- Hover gradient: `from-blue-700 to-indigo-700`
- Full width with centered content
- Arrow icon for visual direction

## Component Structure

```tsx
<motion.div className="group ...">
  {/* Image Section */}
  <div className="relative h-48 overflow-hidden">
    <img className="group-hover:scale-110" />
    <Icon /> {/* Service icon */}
  </div>
  
  {/* Content Section */}
  <div className="p-8">
    <span>{badge}</span>
    <h3>{title}</h3>
    <p>{description}</p>
    
    {/* Hover-only Button */}
    <div className="opacity-0 group-hover:opacity-100">
      <Button>
        <Link href={service.link}>
          Demander plus d'infos
        </Link>
      </Button>
    </div>
  </div>
</motion.div>
```

## Interaction Flow

1. **Default State**: Card displays service info, button is hidden
2. **On Hover**: 
   - Card elevates with shadow
   - Image zooms in
   - Button fades in smoothly
3. **On Click**: User is directed to the specific service page

## Benefits

- ✅ **Cleaner UI** - Buttons don't clutter the initial view
- ✅ **Better UX** - Clear call-to-action appears when user shows interest
- ✅ **Direct Navigation** - Each service links to its detailed page
- ✅ **Smooth Animations** - Professional hover effects enhance engagement
- ✅ **Responsive** - Works seamlessly on all device sizes
