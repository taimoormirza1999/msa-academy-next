/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://msa-club.com',
  generateRobotsTxt: false, // We have a custom robots.txt
  generateIndexSitemap: true,
  outDir: './public',
  exclude: [
    '/admin/*',
    '/api/*',
    '/private/*',
    '/_next/*',
    '/success',
    '/sitemap-blogs.xml'
  ],
  
  // Static routes configuration
  additionalPaths: async (config) => {
    const paths = [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/privacy-policy',
        changefreq: 'monthly', 
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/blog',
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/about',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/courses',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/animation-course',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/character-design',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/contact',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    ];

    return paths.map((path) => ({
      loc: path.loc,
      changefreq: path.changefreq,
      priority: path.priority,
      lastmod: path.lastmod,
    }));
  },

  // Dynamic blog routes - fetch from API
  additionalSitemaps: [
    'https://msa-club.com/sitemap-blogs.xml'
  ],

  // Default values for all pages
  changefreq: 'weekly',
  priority: 0.8,
  lastmod: new Date().toISOString(),

  // Custom transformation for URLs
  transform: async (config, path) => {
    // Skip certain paths
    if (path.includes('/_next/') || path.includes('/api/')) {
      return null;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.lastmod,
      alternateRefs: config.alternateRefs ?? [],
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [
      'https://msa-club.com/sitemap-blogs.xml',
    ],
  },
}; 