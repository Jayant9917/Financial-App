# Shivay Finance and Services

<div align="center">

![Shivay Finance Hero Section](./public/images/hero/original-a7c149d43c8a3d25a99463557e409824.gif)

**Your Trusted Home Loan Partner in Indore, Burhanpur & Khandwa**

A high-performance, SEO-optimized financial services website built with Next.js 16 (Turbopack), TypeScript, and Tailwind CSS. This platform showcases home loan services, banking partnerships, and financial solutions with a focus on user experience and conversion optimization.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)](https://tailwindcss.com/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100-44cc11)](https://developers.google.com/web/tools/lighthouse/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

## 🌟 Key Features

### 🚀 Performance & SEO
- ⚡ Perfect 100/100 Lighthouse score (Performance, SEO, Accessibility, Best Practices)
- 🔍 Complete SEO optimization with dynamic metadata and sitemap
- 🏗️ Next.js 16 with Turbopack for lightning-fast development
- 📱 Fully responsive design across all devices
- 🚀 Optimized images with WebP format and lazy loading

### 💼 Financial Services
- 🏠 Home Loans with competitive interest rates
- 🏦 Loan Against Property (LAP)
- 🔄 Balance Transfer & Top-Up Loans
- 📊 Mortgage Loans with flexible terms

### 🛠️ Developer Experience
- 🎨 Modern UI with shadcn/ui components
- 🎭 Smooth animations using Framer Motion
- 📱 Mobile-first responsive design
- 🛠️ Type-safe with TypeScript
- 🔄 Optimized build process

## 📸 Preview

![Shivay Finance Website Preview](./public/images/hero/original-a7c149d43c8a3d25a99463557e409824.gif)

*Experience our high-performance website with smooth animations and intuitive navigation*

## 🏗️ Project Structure

```
shivay-finance/
├── app/                    # App router directory
│   ├── about/             # About page with company information
│   ├── contact/           # Contact page with form
│   ├── services/          # Detailed services pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt configuration
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── favicon.ico        # Favicon
│
├── components/            # Reusable components
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx     # Custom button component
│   │   ├── card.tsx       # Card component
│   │   └── ...            # Other UI components
│   │
│   ├── animated-section.tsx  # Reusable animation wrapper
│   ├── banks-section.tsx     # Bank partners showcase
│   ├── contact-section.tsx   # Contact information
│   ├── footer.tsx           # Site footer
│   ├── hero-section.tsx     # Hero banner with CTA
│   ├── navbar.tsx           # Responsive navigation
│   ├── services-section.tsx # Services showcase
│   └── ...
│
├── lib/                   # Utility functions and config
│   ├── utils.ts           # Helper functions
│   ├── metadata.ts        # SEO metadata generation
│   ├── constants.ts       # App constants
│   ├── animations.ts      # Animation variants
│   └── structured-data.ts # Schema.org structured data
│
└── public/                # Static assets
    ├── images/            # Image assets
    └── icons/             # Bank and social icons
```

## 🛠️ Technical Stack

### Core Technologies
- **Frontend Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.0+
- **Styling**: Tailwind CSS 3.0
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **State Management**: React Context
- **SEO**: Next-SEO

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Code Formatting**: Prettier
- **Type Checking**: TypeScript
- **Version Control**: Git

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

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm 9.0 or later
- Git (for version control)

### Installation Guide

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/shivay-finance.git
   cd shivay-finance
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Required
   NEXT_PUBLIC_SITE_URL=https://shivayfinanceandservices.com
   
   # Optional (for analytics)
   # NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
   ```

4. **Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**
   ```bash
   npm run build
   ```

6. **Start Production Server**
   ```bash
   npm start
   ```

### Deployment

Deploy using your preferred platform:

#### Vercel (Recommended)
1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Import the repository on [Vercel](https://vercel.com/)
3. Configure environment variables
4. Deploy!

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables
5. Deploy site

## ⚙️ Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Base URL of your website (used for SEO and canonical URLs) | Yes | `http://localhost:3000` |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS` | Google Analytics 4 Measurement ID | No | - |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API Key (for location map) | No | - |

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run linter:
```bash
npm run lint
```

Format code:
```bash
npm run format
```

## 📚 Documentation

### Code Organization
- **Components**: Reusable UI components in `/components`
- **Pages**: Route segments in `/app` directory
- **Styles**: Global styles in `app/globals.css`
- **Utils**: Shared utilities in `/lib`
- **Public Assets**: Static files in `/public`

### Adding New Pages
1. Create a new directory in `/app` (e.g., `/app/loans`)
2. Add a `page.tsx` file with your component
3. Export metadata for SEO

### Adding New Components
1. Create a new file in `/components`
2. Follow the existing component patterns
3. Add TypeScript types for props
4. Document with JSDoc comments

### Styling Guidelines
- Use Tailwind CSS utility classes
- For complex styles, use `@apply` in a CSS module
- Keep responsive design in mind (mobile-first approach)
- Use CSS variables for theming

## 🎭 Animations & Interactions

### Framer Motion
This project uses Framer Motion for performant animations. Example usage:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content here
</motion.div>
```

### Pre-built Animation Components

#### AnimatedSection
A reusable wrapper for section animations:

```tsx
import { AnimatedSection } from '@/components/animated-section';

<AnimatedSection variant="fadeInUp">
  <YourContent />
</AnimatedSection>
```

**Available Variants:**
- `fadeIn` - Simple fade in
- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `slideInLeft` - Slide in from left
- `slideInRight` - Slide in from right
- `scaleIn` - Scale in animation

### Custom Hooks

#### useScrollAnimation
```tsx
const { ref, controls } = useScrollAnimation();

return (
  <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
      }
    }}
  >
    Animated Content
  </motion.div>
);
```

## 🛠️ Development Guide

### Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

**Example:**
```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add form
```

### Available Components

#### UI Components
- `Button` - Customizable button with variants
- `Card` - Content container with header and footer
- `Input` - Form input field
- `Textarea` - Multi-line text input
- `Label` - Form field labels
- `Select` - Dropdown selection
- `Checkbox` - Toggle input
- `Radio Group` - Radio button group

#### Custom Components
- `AnimatedSection` - Wrapper for section animations
- `LogoLoop` - Infinite logo carousel
- `NumberTicker` - Animated number counter
- `ResizableNavbar` - Responsive navigation

### Code Style
- Use TypeScript for type safety
- Follow the Airbnb Style Guide
- Use functional components with hooks
- Keep components small and focused
- Add PropTypes or TypeScript interfaces
- Write meaningful commit messages

### Git Workflow
1. Create a new branch for features/fixes
2. Make atomic commits
3. Write clear commit messages
4. Open a pull request for review
5. Squash merge after approval

## 🔍 SEO & Performance

### SEO Features
- Dynamic metadata generation
- Open Graph and Twitter Cards
- Automatic sitemap.xml
- robots.txt configuration
- Canonical URLs
- Structured Data (JSON-LD)
  - Website
  - Organization
  - LocalBusiness
  - FinancialService
  - BreadcrumbList

### Performance Optimizations
- Image optimization with Next/Image
- Code splitting
- Lazy loading
- Font optimization
- Critical CSS inlining
- Prefetching

### Performance Metrics
- 100/100 Lighthouse Score
- Fast First Contentful Paint (FCP)
- Optimized Largest Contentful Paint (LCP)
- Minimal Cumulative Layout Shift (CLS)
- Fast Time to Interactive (TTI)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Shivay Finance and Services

- 📧 Email: [contact@shivayfinance.com](mailto:contact@shivayfinance.com)
- 📱 Phone: [+91 8197222439](tel:+918197222439)
- 🌐 Website: [shivayfinanceandservices.com](https://shivayfinanceandservices.com)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
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
