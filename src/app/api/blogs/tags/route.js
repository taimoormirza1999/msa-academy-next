import { connectToDatabase } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";
import { slugify } from "@/lib/slug";

// Distinct metaTags across published blogs with their post counts.
// Powers the /blog/tag/[slug] dynamic route + tag index.
export async function GET() {
  try {
    await connectToDatabase();

    const aggregation = await Blog.aggregate([
      { $match: { status: "published" } },
      { $unwind: "$metaTags" },
      {
        $group: {
          _id: "$metaTags",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1, _id: 1 } },
    ]);

    const tags = aggregation
      .filter((t) => t._id && String(t._id).trim() !== "")
      .map((t) => ({
        name: t._id,
        slug: slugify(t._id),
        count: t.count,
      }));

    return Response.json(tags, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
    });
  } catch (error) {
    console.error("Failed to fetch tags:", error);
    return Response.json({ error: "Failed to fetch tags" }, { status: 500 });
  }
}
