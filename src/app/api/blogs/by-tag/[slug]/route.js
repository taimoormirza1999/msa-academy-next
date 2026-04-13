import { connectToDatabase } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";
import { slugify } from "@/lib/slug";

export async function GET(req, { params }) {
  try {
    const { slug } = await params;
    if (!slug) {
      return Response.json({ error: "Missing slug" }, { status: 400 });
    }

    await connectToDatabase();

    const distinct = await Blog.distinct("metaTags", { status: "published" });
    const match = distinct.find((t) => slugify(t) === slug);

    if (!match) {
      return Response.json({ name: null, slug, blogs: [] }, { status: 404 });
    }

    const blogs = await Blog.find(
      { status: "published", metaTags: match },
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
    console.error("Failed to fetch blogs by tag:", error);
    return Response.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
