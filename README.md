# Home Loan Financial Services - Next.js Application

A professional, SEO-optimized web application for home loan financial services built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **SEO Optimized**: Complete SEO setup with metadata, sitemap, robots.txt, and structured data
- **Modern Stack**: Next.js 16 with App Router, TypeScript, and Tailwind CSS
- **Component Library**: shadcn/ui components for beautiful, accessible UI
- **Animations**: Framer Motion for smooth, performant animations
- **Clean Architecture**: Well-organized folder structure for scalability
- **API Routes**: Backend logic in Next.js API routes
- **Type Safety**: Full TypeScript support with proper type definitions

## 📁 Project Structure

```
├── app/
│   ├── api/              # Backend API routes
│   ├── (routes)/         # Frontend pages/routes
│   ├── layout.tsx        # Root layout with SEO metadata
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   ├── robots.ts         # Robots.txt configuration
│   ├── sitemap.ts        # Sitemap generation
│   └── manifest.ts       # PWA manifest
├── components/
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/
│   ├── utils.ts          # Utility functions
│   ├── metadata.ts       # SEO metadata helpers
│   ├── constants.ts      # Application constants
│   ├── validations.ts    # Validation functions
│   └── api-client.ts     # API client utilities
├── types/
│   └── index.ts          # TypeScript type definitions
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your configuration.

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 Environment Variables

Create a `.env.local` file with the following variables:

- `NEXT_PUBLIC_SITE_URL` - Your site URL (required for SEO)

## 🎨 Adding shadcn/ui Components

To add shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
```

**Already Installed Components:**
- Button, Card, Input, Label, Textarea, Select, Form
- Dialog, Alert, Badge, Separator

## 🎭 Animations with Framer Motion

This project includes Framer Motion for animations. See [docs/ANIMATIONS.md](docs/ANIMATIONS.md) for complete animation guide.

**Quick Example:**
```tsx
import { AnimatedSection } from '@/components/animated-section';

<AnimatedSection variant="fadeInUp">
  <YourContent />
</AnimatedSection>
```

**Available Animation Components:**
- `AnimatedSection` - Scroll-triggered section animations
- `AnimatedPage` - Page transition animations
- `AnimatedCounter` - Number counter animations

## 📊 SEO Features

- ✅ Dynamic metadata generation
- ✅ Open Graph tags
- ✅ Twitter Card support
- ✅ Sitemap generation
- ✅ Robots.txt configuration
- ✅ Structured data ready
- ✅ Image optimization
- ✅ Performance optimizations

## 🔧 Development

- **Frontend**: Pages in `app/` directory
- **Backend**: API routes in `app/api/` directory
- **Components**: Reusable components in `components/` directory
- **Types**: TypeScript definitions in `types/` directory

## 📦 Build & Deploy

The application is ready for deployment on Vercel, Netlify, or any Node.js hosting platform.

```bash
npm run build
npm start
```

## 📄 License

Private - Freelancing Project
