import type { NextConfig } from 'next'

const isProduction = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Add empty turbopack config to avoid conflicts
  turbopack: {},
  
  // Enable static exports for the 'output: export' option
  output: 'standalone' as const,
  
  // Image optimization
  images: {
    // Replace domains with remotePatterns (new recommended approach)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shivayfinanceandservices.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shivayfinanceandservices.com',
      },
      {
        protocol: 'https',
        hostname: 'financial-app-iota-ebon.vercel.app',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: !isProduction,
  },
  
  // Rest of your configuration remains the same...
  // ... [rest of your existing config]
}

export default nextConfig