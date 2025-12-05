# Animation Guide

This project uses **Framer Motion** for smooth, performant animations. All animation utilities and components are ready to use.

## 📦 Installed Dependencies

- `framer-motion` - Animation library for React

## 🎨 Animation Components

### AnimatedSection

Wrapper component for sections with scroll-triggered animations.

```tsx
import { AnimatedSection } from '@/components/animated-section';

<AnimatedSection variant="fadeInUp" delay={0.2}>
  <h1>Your Content</h1>
</AnimatedSection>
```

**Props:**
- `variant`: Animation type (`fadeIn`, `fadeInUp`, `fadeInDown`, `slideInLeft`, `slideInRight`, `scaleIn`)
- `delay`: Delay in seconds before animation starts
- `stagger`: Enable stagger animation for children
- `className`: Additional CSS classes

**Example with stagger:**
```tsx
<AnimatedSection stagger>
  <AnimatedItem>Item 1</AnimatedItem>
  <AnimatedItem>Item 2</AnimatedItem>
  <AnimatedItem>Item 3</AnimatedItem>
</AnimatedSection>
```

### AnimatedPage

Wrapper for page-level animations with transitions.

```tsx
import { AnimatedPage } from '@/components/animated-page';

<AnimatedPage>
  <YourPageContent />
</AnimatedPage>
```

### AnimatedCounter

Animates a number from 0 to target value.

```tsx
import { AnimatedCounter } from '@/components/animated-counter';

<AnimatedCounter
  value={1000}
  prefix="$"
  suffix="+"
  decimals={0}
  duration={2}
/>
```

## 🎭 Animation Variants

All variants are available in `lib/animations.ts`:

- `fadeIn` - Simple fade in
- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `slideInLeft` - Slide in from left
- `slideInRight` - Slide in from right
- `scaleIn` - Scale in animation
- `staggerContainer` - Container for staggered children
- `staggerItem` - Item for stagger container
- `pageTransition` - Page transition animation

## 📝 Usage Examples

### Basic Fade In Animation

```tsx
'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export function MyComponent() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h1>Animated Content</h1>
    </motion.div>
  );
}
```

### Hover Animations

```tsx
import { motion } from 'framer-motion';
import { hoverScale, hoverLift } from '@/lib/animations';

<motion.button
  whileHover={hoverScale}
  whileTap={{ scale: 0.95 }}
>
  Hover Me
</motion.button>
```

### Staggered List Animation

```tsx
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';

<motion.ul
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.li key={item.id} variants={staggerItem}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

### Custom Animation

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
  Custom Animation
</motion.div>
```

## 🎯 Best Practices

1. **Use `viewport={{ once: true }}`** - Animations should only trigger once when scrolling into view
2. **Add margin to viewport** - Use `viewport={{ margin: '-100px' }}` to trigger animations slightly before elements are fully visible
3. **Keep animations subtle** - Don't overuse animations; they should enhance UX, not distract
4. **Performance** - Framer Motion is optimized, but avoid animating too many elements simultaneously
5. **Accessibility** - Respect `prefers-reduced-motion` media query for users who prefer less motion

## 🔧 Custom Hooks

### useAnimationOnScroll

Hook for scroll-triggered animations.

```tsx
import { useAnimationOnScroll } from '@/hooks/use-animation';

function MyComponent() {
  const { ref, isInView } = useAnimationOnScroll();
  
  return (
    <div ref={ref}>
      {isInView && <AnimatedContent />}
    </div>
  );
}
```

## 📚 Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)

