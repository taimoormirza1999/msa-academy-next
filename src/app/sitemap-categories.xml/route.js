import { getDistinctCategories } from "@/lib/blogData";

// Dynamic sitemap for /blog/category/[slug] pages.
// Mirrors the shape of sitemap-blogs.xml so search engines see one URL per
// category. Cached for a day; categories don't change often.
export async function GET() {
  try {
    const categories = await getDistinctCategories();
    const now = new Date().toISOString();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${categories
  .map(
    (c) => `  <url>
    <loc>https://msa-club.com/blog/category/${c.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("Error generating category sitemap:", error);
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`,
      { headers: { "Content-Type": "application/xml" } }
    );
  }
}
