// Server-only data helpers used by the new SEO pages (/blog,
// /blog/category/[slug], /blog/tag/[slug]). They talk directly to MongoDB
// instead of going through HTTP, which removes the FRONTEND env requirement
// and lets these pages be statically generated at build time.

import { connectToDatabase } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";
import { slugify } from "@/lib/slug";

const LIST_FIELDS = {
  title: 1,
  coverImage: 1,
  postedBy: 1,
  postedDate: 1,
  categories: 1,
  metaTitle: 1,
  metaDescription: 1,
  metaTags: 1,
  friendlyUrl: 1,
};

function serialize(doc) {
  if (!doc) return doc;
  return {
    ...doc,
    _id: doc._id?.toString?.() ?? doc._id,
    postedDate: doc.postedDate ? new Date(doc.postedDate).toISOString() : null,
  };
}

// All helpers swallow errors and return empty results so a build-time DB
// outage (e.g. running `next build` from a non-whitelisted IP) does not break
// the build. In production, ISR (`revalidate = 3600` on each page) re-fetches
// hourly so real data appears as soon as the DB is reachable.

export async function getAllPublishedBlogs(limit = 100) {
  try {
    await connectToDatabase();
    const blogs = await Blog.find({ status: "published" }, LIST_FIELDS)
      .sort({ postedDate: -1 })
      .limit(limit)
      .lean();
    return blogs.map(serialize);
  } catch (error) {
    console.warn("[blogData] getAllPublishedBlogs failed:", error.message);
    return [];
  }
}

export async function getDistinctCategories() {
  try {
    await connectToDatabase();
    const list = await Blog.distinct("categories", { status: "published" });
    return list
      .filter((c) => c && String(c).trim() !== "")
      .map((name) => ({ name, slug: slugify(name) }));
  } catch (error) {
    console.warn("[blogData] getDistinctCategories failed:", error.message);
    return [];
  }
}

export async function getDistinctTags() {
  try {
    await connectToDatabase();
    const list = await Blog.distinct("metaTags", { status: "published" });
    return list
      .filter((t) => t && String(t).trim() !== "")
      .map((name) => ({ name, slug: slugify(name) }));
  } catch (error) {
    console.warn("[blogData] getDistinctTags failed:", error.message);
    return [];
  }
}

export async function getBlogsByCategorySlug(slug) {
  try {
    await connectToDatabase();
    const distinct = await Blog.distinct("categories", { status: "published" });
    const match = distinct.find((c) => slugify(c) === slug);
    if (!match) return { name: null, blogs: [] };
    const blogs = await Blog.find(
      { status: "published", categories: match },
      LIST_FIELDS
    )
      .sort({ postedDate: -1 })
      .limit(100)
      .lean();
    return { name: match, blogs: blogs.map(serialize) };
  } catch (error) {
    console.warn("[blogData] getBlogsByCategorySlug failed:", error.message);
    return { name: null, blogs: [] };
  }
}

export async function getBlogsByTagSlug(slug) {
  try {
    await connectToDatabase();
    const distinct = await Blog.distinct("metaTags", { status: "published" });
    const match = distinct.find((t) => slugify(t) === slug);
    if (!match) return { name: null, blogs: [] };
    const blogs = await Blog.find(
      { status: "published", metaTags: match },
      LIST_FIELDS
    )
      .sort({ postedDate: -1 })
      .limit(100)
      .lean();
    return { name: match, blogs: blogs.map(serialize) };
  } catch (error) {
    console.warn("[blogData] getBlogsByTagSlug failed:", error.message);
    return { name: null, blogs: [] };
  }
}
