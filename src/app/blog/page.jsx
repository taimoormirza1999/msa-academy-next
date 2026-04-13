import Link from "next/link";
import SEOPageWrapper from "@/components/SEOPageWrapper";
import BlogListGrid from "@/components/blog/BlogListGrid";
import {
  getAllPublishedBlogs,
  getDistinctCategories,
} from "@/lib/blogData";

export const revalidate = 3600; // refresh every hour

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title: "Animation Blog | MSA Club - Tips, Tutorials & Industry Insights",
  description:
    "Read the latest from MSA Club: animation tutorials, character design tips, Blender and After Effects guides, and behind-the-scenes from My Story Animated.",
  alternates: { canonical: "https://msa-club.com/blog" },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "Animation Blog | MSA Club",
    description:
      "Animation tutorials, character design tips, and industry insights from the MSA Club team.",
    url: "https://msa-club.com/blog",
    images: ["https://msa-club.com/hero_banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animation Blog | MSA Club",
    description:
      "Animation tutorials, character design tips, and industry insights from MSA Club.",
    images: ["https://msa-club.com/hero_banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function BlogIndexPage() {
  const [blogs, categories] = await Promise.all([
    getAllPublishedBlogs(60),
    getDistinctCategories(),
  ]);

  return (
    <SEOPageWrapper>
      <main className="min-h-screen text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 pt-28">
          <header className="mb-12">
            <h1 className="font-primary text-3xl lg:text-5xl font-bold mb-4">
              MSA Club{" "}
              <span className="bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">
                Animation Blog
              </span>
            </h1>
            <p className="font-eastroman-trial-demibold text-gray-400 text-lg max-w-2xl">
              Tutorials, character design breakdowns, software tips, and
              behind-the-scenes from the team behind My Story Animated.
            </p>
          </header>

          {categories.length > 0 && (
            <section aria-label="Browse by category" className="mb-10">
              <h2 className="font-primary text-sm uppercase tracking-wider text-gray-400 mb-3">
                Browse by category
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/blog/category/${cat.slug}`}
                    className="text-sm bg-purple-500/15 hover:bg-purple-500/25 text-purple-200 border border-purple-500/30 px-3 py-1.5 rounded-full transition"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <BlogListGrid blogs={blogs} emptyMessage="No blog posts yet. Check back soon." />
        </div>
      </main>
    </SEOPageWrapper>
  );
}
