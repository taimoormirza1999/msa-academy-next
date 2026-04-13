import { getDistinctTags } from "@/lib/blogData";

export async function GET() {
  try {
    const tags = await getDistinctTags();
    const now = new Date().toISOString();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${tags
  .map(
    (t) => `  <url>
    <loc>https://msa-club.com/blog/tag/${t.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
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
    console.error("Error generating tag sitemap:", error);
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`,
      { headers: { "Content-Type": "application/xml" } }
    );
  }
}
