# Image Organization Guide

## 📁 Where to Put Images

All images should be placed in the **`public`** folder. This folder is served statically by Next.js.

## 📂 Recommended Folder Structure

```
public/
├── images/
│   ├── hero/          # Hero section images
│   ├── features/      # Feature images
│   ├── gallery/       # Gallery images
│   ├── testimonials/  # Customer photos
│   └── logo/          # Logo files
├── icons/             # Icon files (SVG, PNG)
└── og-image.jpg       # Open Graph image for social sharing
```

## 🖼️ Using Images in Next.js

### Method 1: Using Next.js Image Component (Recommended)

The `next/image` component provides automatic optimization, lazy loading, and responsive images.

```tsx
import Image from 'next/image';

// Image in public/images/hero/hero-image.jpg
<Image
  src="/images/hero/hero-image.jpg"
  alt="Hero image description"
  width={1200}
  height={600}
  priority // Use for above-the-fold images
/>
```

### Method 2: Regular img Tag (For SVGs or when needed)

```tsx
// Image in public/images/logo/logo.svg
<img src="/images/logo/logo.svg" alt="Company Logo" />
```

## 📝 Best Practices

1. **File Naming**: Use descriptive, lowercase names with hyphens
   - ✅ `hero-home-loan.jpg`
   - ❌ `IMG_1234.jpg`

2. **Image Formats**:
   - **JPG/JPEG**: For photos
   - **PNG**: For images with transparency
   - **WebP**: Modern format (Next.js auto-converts)
   - **SVG**: For logos and icons

3. **Image Sizes**:
   - Hero images: 1920x1080px (or larger)
   - Feature images: 800x600px
   - Thumbnails: 400x300px
   - Icons: 64x64px or 128x128px

4. **SEO Optimization**:
   - Always include descriptive `alt` text
   - Use meaningful file names
   - Optimize file sizes before uploading

5. **Performance**:
   - Use `priority` prop for above-the-fold images
   - Let Next.js handle image optimization
   - Use appropriate image sizes

## 🎯 Example Usage

### Hero Section Image

```tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <Image
        src="/images/hero/home-loan-hero.jpg"
        alt="Professional home loan services"
        width={1920}
        height={1080}
        priority
        className="w-full h-auto"
      />
    </section>
  );
}
```

### Logo

```tsx
import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/images/logo/company-logo.svg"
      alt="Company Logo"
      width={200}
      height={50}
      priority
    />
  );
}
```

### Gallery Image

```tsx
import Image from 'next/image';

export default function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={`/images/gallery/${src}`}
      alt={alt}
      width={800}
      height={600}
      className="rounded-lg"
    />
  );
}
```

## 📍 Image Paths

When referencing images, the path starts from the `public` folder:

- File: `public/images/hero/image.jpg`
- Path: `/images/hero/image.jpg`

- File: `public/logo.svg`
- Path: `/logo.svg`

## 🔧 Image Optimization

Next.js automatically:
- Converts images to WebP/AVIF formats
- Resizes images based on device
- Lazy loads images below the fold
- Caches optimized images

## 📦 Adding Images

1. Create the folder structure in `public/images/`
2. Add your image files
3. Reference them in your components using the path from `public/`

Example:
```
public/
  └── images/
      └── hero/
          └── hero-image.jpg  ← Your image here
```

Use in code:
```tsx
<Image src="/images/hero/hero-image.jpg" ... />
```

