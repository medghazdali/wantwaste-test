# WantWaste - Skip Hire Platform

## Technical Stack

### Next.js 14
- **Why Next.js?**
  - Server-side rendering for better SEO
  - Built-in API routes for backend functionality
  - Excellent TypeScript support
  - App Router for modern React patterns
  - Optimized image handling
  - Built-in performance optimizations

### TypeScript
- Type safety for better code reliability
- Enhanced developer experience with better IDE support
- Easier maintenance and refactoring
- Better documentation through types

### Tailwind CSS
- Utility-first approach for rapid development
- Consistent design system
- Responsive design made simple
- Custom theme configuration for brand colors

## Architecture Decisions

### Component Structure
```
src/
├── app/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── types/         # TypeScript interfaces
│   └── utils/         # Helper functions
```

### State Management
- React's built-in state management (useState, useContext)
- Props drilling minimized through component composition
- Local state for UI interactions
- Server state handled through Next.js data fetching

## UI/UX Design Decisions

### Carousel Implementation
- Custom carousel for skip selection
- Smooth scrolling with CSS snap points
- Responsive design for all screen sizes
- Touch-friendly for mobile users
- Visual feedback for selected items
- Performance optimized with CSS transforms

### Design System
- Primary color scheme with variations
- Consistent spacing and typography
- Glass-morphism effects for modern look
- Responsive breakpoints for all devices
- Accessible color contrast ratios
- Interactive elements with hover states

### Mobile-First Approach
- Bottom sheet for skip details on mobile
- Collapsible filters with search capabilities:
  - Size-based filtering with dropdown selection
  - Price sorting (low to high, high to low)
  - Road placement filter (show only road-allowed skips)
- Mobile dropdown navigation for quick skip size selection
- Touch-optimized interactions
- Responsive images
- Mobile-friendly navigation

## Performance Optimizations
- Image optimization with Next.js Image component
- Lazy loading for off-screen content
- CSS transitions for smooth animations
- Efficient state updates
- Minimal bundle size



## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

