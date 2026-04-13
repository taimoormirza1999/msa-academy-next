import { connectToDatabase } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";
import { slugify } from "@/lib/slug";

// Returns every distinct category that appears on any published blog,
// along with how many posts use it. Used to generate /blog/category/[slug]
// pages and to render the category index.
export async function GET() {
  try {
    await connectToDatabase();

    const aggregation = await Blog.aggregate([
      { $match: { status: "published" } },
      { $unwind: "$categories" },
      {
        $group: {
          _id: "$categories",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1, _id: 1 } },
    ]);

    const categories = aggregation
      .filter((c) => c._id && String(c._id).trim() !== "")
      .map((c) => ({
        name: c._id,
        slug: slugify(c._id),
        count: c.count,
      }));

    return Response.json(categories, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
    });
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return Response.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}
