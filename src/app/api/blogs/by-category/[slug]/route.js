import { connectToDatabase } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";
import { slugify } from "@/lib/slug";

// Returns the canonical category name + every published post that belongs to
// it. The slug is matched in JS (not via $regex) because category strings can
// contain ampersands, capitalisation differences, etc. and we want a single
// source of truth via slugify().
export async function GET(req, { params }) {
  try {
    const { slug } = await params;
    if (!slug) {
      return Response.json({ error: "Missing slug" }, { status: 400 });
    }

    await connectToDatabase();

    // Resolve the slug back to the actual category string stored in Mongo.
    const distinct = await Blog.distinct("categories", { status: "published" });
    const match = distinct.find((c) => slugify(c) === slug);

    if (!match) {
      return Response.json({ name: null, slug, blogs: [] }, { status: 404 });
    }

    const blogs = await Blog.find(
      { status: "published", categories: match },
      {
        title: 1,
        coverImage: 1,
        postedBy: 1,
        postedDate: 1,
        categories: 1,
        metaTitle: 1,
        metaDescription: 1,
        friendlyUrl: 1,
      }
    )
      .sort({ postedDate: -1 })
      .limit(100);

    return Response.json(
      { name: match, slug, blogs },
      { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } }
    );
  } catch (error) {
    console.error("Failed to fetch blogs by category:", error);
    return Response.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
