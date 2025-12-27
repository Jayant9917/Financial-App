/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://shivayfinanceandservices.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://shivayfinanceandservices.com/sitemap.xml',
    ],
  },
  exclude: [
    '/server-sitemap.xml',
    '/api/*',
    '/_next/*',
    '/404',
    '/500',
  ],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: 'public',
  // Add city-specific pages for better local SEO
  additionalPaths: async (config) => {
    const cities = [
      'indore', 'bhopal', 'delhi', 'pune', 'bangalore', 'noida', 
      'ghaziabad', 'dehradun', 'burhanpur', 'khandwa', 'raver'
    ];
    
    return cities.map(city => ({
      loc: `https://shivayfinanceandservices.com/home-loan-${city}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
  // Default transformation for all pages
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}