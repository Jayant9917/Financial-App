# Shivay Finance and Services

<div align="center">

![Shivay Finance Hero Section](./public/images/hero/original-a7c149d43c8a3d25a99463557e409824.gif)

**Making Finance Simple, Fast & Transparent**

A professional, SEO-optimized web application for home loan financial services built with Next.js 16, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)](https://tailwindcss.com/)

</div>

## 📸 Preview

![Shivay Finance Website Preview](./public/images/hero/original-a7c149d43c8a3d25a99463557e409824.gif)

*Hero section featuring our home loan services with easy navigation and contact options*

## 🚀 Features

### Core Features
- ✅ **SEO Optimized**: Complete SEO setup with metadata, sitemap, robots.txt, and structured data
- ✅ **Modern Stack**: Next.js 16 with App Router, TypeScript, and Tailwind CSS
- ✅ **Component Library**: shadcn/ui components for beautiful, accessible UI
- ✅ **Smooth Animations**: Framer Motion for performant, engaging animations
- ✅ **Responsive Design**: Fully responsive across all devices
- ✅ **Type Safety**: Full TypeScript support with proper type definitions

### User Experience
- 🏠 **Home Loan Services**: Comprehensive information about home loans, LAP, mortgage loans, and more
- 📱 **Easy Contact**: Direct phone, WhatsApp, and email contact options
- 🏦 **Bank Partnerships**: Showcase of partner banks (HDFC, ICICI, SBI, and more)
- ⚡ **Fast Navigation**: Smooth scroll-to-section navigation on homepage
- 🎨 **Modern UI**: Clean, professional design with gradient accents
- 📍 **Location Map**: Interactive Google Maps showing business location
- ✨ **Animated Icons**: Dynamic animations on service icons
- 📊 **Business Stats**: Animated number tickers showing company achievements

## 📁 Project Structure

```
├── app/
│   ├── about/            # About page (SEO route)
│   ├── contact/          # Contact page (opens email client)
│   ├── services/         # Services page (SEO route)
│   ├── layout.tsx        # Root layout with SEO metadata
│   ├── page.tsx          # Home page (main landing page)
│   ├── globals.css       # Global styles
│   ├── robots.ts         # Robots.txt configuration
│   ├── sitemap.ts        # Sitemap generation
│   ├── manifest.ts       # PWA manifest
│   ├── icon.tsx          # Dynamic favicon generation
│   └── apple-icon.tsx    # Apple touch icon generation
├── components/
│   ├── ui/               # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── textarea.tsx
│   │   ├── resizable-navbar.tsx
│   │   └── number-ticker.tsx  # Animated number counter
│   ├── animated-section.tsx
│   ├── banks-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx        # Footer with map section
│   ├── hero-section.tsx  # Hero with business stats
│   ├── navbar.tsx
│   ├── services-section.tsx
│   ├── structured-data.tsx  # JSON-LD structured data component
│   ├── LogoLoop.tsx      # Animated logo carousel
│   └── why-choose-us-section.tsx
├── lib/
│   ├── utils.ts          # Utility functions
│   ├── metadata.ts       # SEO metadata helpers
│   ├── constants.ts      # Application constants
│   ├── animations.ts     # Animation variants
│   └── structured-data.ts # Structured data schemas
└── public/
    ├── images/           # Images and assets
    └── icons/            # Bank logos
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd freelancing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Your site URL for SEO and metadata | Yes |

## 🎨 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/), [Tabler Icons](https://tabler.io/icons)

## 🎭 Animations

This project uses Framer Motion for smooth, performant animations.

### Usage Example
```tsx
import { AnimatedSection } from '@/components/animated-section';

<AnimatedSection variant="fadeInUp">
  <YourContent />
</AnimatedSection>
```

### Available Animation Variants
- `fadeIn` - Simple fade in
- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `slideInLeft` - Slide in from left
- `slideInRight` - Slide in from right
- `scaleIn` - Scale in animation

### Custom Animations
- **Number Ticker**: Animated counting effect for statistics (used in hero section)
- **Service Icons**: Dynamic animations with hover effects and icon-specific behaviors
- **Logo Loop**: Infinite scrolling carousel for partner bank logos

## 🎨 Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

**Example:**
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
```

**Already Installed Components:**
- Button
- Card
- Input
- Label
- Textarea
- Resizable Navbar
- Number Ticker (custom component for animated counters)

## 📊 SEO Features

- ✅ Dynamic metadata generation per page
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Automatic sitemap generation
- ✅ Robots.txt configuration
- ✅ Structured data (JSON-LD) for rich snippets:
  - Website schema
  - Organization schema
  - Financial service schema
  - Local business schema (for Indore, Burhanpur, Khandwa)
- ✅ Location-specific SEO targeting (Indore, Burhanpur, Khandwa)
- ✅ Image optimization with Next.js Image
- ✅ Performance optimizations
- ✅ LCP optimization (hero image with priority loading)

## 🔧 Development

### Key Directories
- **`app/`**: Next.js pages and routes
- **`components/`**: Reusable React components
- **`lib/`**: Utility functions and helpers
- **`public/`**: Static assets (images, icons)

### Navigation Structure
- **Home** (`/`): Main landing page with all sections (Services, About, Banks, Contact)
- **Services** (`/services`): SEO route page (also accessible via scroll on homepage)
- **About** (`/about`): SEO route page (also accessible via scroll on homepage)
- **Contact** (`/contact`): Opens email client with pre-filled email to `Shivayfinanceandservices@gmail.com`

### Scroll Navigation
The navbar and footer links use smooth scroll-to-section functionality on the homepage:
- **Services** → Scrolls to "Our Services" section (`#services`)
- **About Us** → Scrolls to "Why Choose Us" section (`#about`)
- **Contact** → Scrolls to "Contact Us" section (`#contact`)
- **Apply Now** → Scrolls to "Contact Us" section (`#contact`)

### Key Features
- **Single Page Application**: Main content on homepage with smooth scrolling
- **SEO Routes**: Separate routes for `/about`, `/services`, `/contact` for better SEO
- **Email Integration**: `/contact` route automatically opens email client
- **Interactive Map**: Google Maps embed in footer showing business location
- **Animated Statistics**: Number ticker animations for business metrics
- **Service Icons**: Animated icons with hover effects in services section

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel** (Recommended): Connect your GitHub repository
- **Netlify**: Deploy via Git integration
- **Any Node.js Hosting**: Run `npm start` after build

### Build Output
The build generates optimized static pages and server-rendered pages:
- Static pages: Home, About, Services
- Dynamic routes: Contact (client component), Icon generation, manifest

## 🗺️ Map Integration

The footer includes an interactive Google Maps embed showing the business location:
- **Location**: Burhanpur, Madhya Pradesh, India
- **Coordinates**: 21.303358, 76.223053
- **Zoom Level**: 20 (street-level view)
- **Marker**: Shows "Shivay Finance and Services" at the location

## 📱 Contact Information

- **Phone**: +91 8197222439
- **WhatsApp**: [Message Us](https://wa.me/918197222439)
- **Email**: Shivayfinanceandservices@gmail.com
- **Instagram**: [@shivayfinaceandservices](https://www.instagram.com/shivayfinaceandservices/)
- **Location**: Burhanpur, Madhya Pradesh, India
  - Coordinates: 21°18'12.1"N 76°13'23.0"E

## 🏦 Partner Banks

- HDFC Bank
- ICICI Bank
- State Bank of India (SBI)
- Punjab National Bank (PNB)
- Bank of Baroda
- Axis Bank
- IndusInd Bank
- Bandhan Bank

## 📄 License

Private - Freelancing Project

---

<div align="center">

**Built with ❤️ for Shivay Finance and Services**

[Report Bug](https://github.com/your-repo/issues) · [Request Feature](https://github.com/your-repo/issues)

</div>
