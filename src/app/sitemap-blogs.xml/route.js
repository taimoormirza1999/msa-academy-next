export async function GET() {
  try {
    // Fetch blog posts from your API
    const response = await fetch(`${process.env.FRONTEND}/api/blogs?limit=100`);
    const blogs = await response.json();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogs.map((blog) => `
  <url>
    <loc>https://msa-club.com/blog/post/${blog.friendlyUrl}</loc>
    <lastmod>${new Date(blog.postedDate || blog.createdAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      },
    });
  } catch (error) {
    console.error('Error generating blog sitemap:', error);
    
    // Return empty sitemap on error
    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;

    return new Response(emptySitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
} 