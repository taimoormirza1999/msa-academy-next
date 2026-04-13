import Link from "next/link";
import { notFound } from "next/navigation";
import SEOPageWrapper from "@/components/SEOPageWrapper";
import BlogListGrid from "@/components/blog/BlogListGrid";
import {
  getBlogsByCategorySlug,
  getDistinctCategories,
} from "@/lib/blogData";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const categories = await getDistinctCategories();
    return categories.map((c) => ({ slug: c.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { name } = await getBlogsByCategorySlug(slug);

  if (!name) {
    return {
      title: "Category | MSA Club Blog",
      description: "Browse animation tutorials and character design articles by category on MSA Club.",
    };
  }

  const title = `${name} Articles | MSA Club Animation Blog`;
  const description = `Read the latest ${name.toLowerCase()} tutorials, tips, and guides from MSA Club. Learn animation, character design, and 3D from industry pros.`;
  const url = `https://msa-club.com/blog/category/${slug}`;

  return {
    metadataBase: new URL("https://msa-club.com"),
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      siteName: "MSA-Club.com",
      locale: "en_US",
      type: "website",
      title,
      description,
      url,
      images: ["https://msa-club.com/hero_banner.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const { name, blogs } = await getBlogsByCategorySlug(slug);

  if (!name) {
    notFound();
  }

  return (
    <SEOPageWrapper>
      <main className="min-h-screen text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 pt-28">
          <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-pink-300">Home</Link>
            <span className="px-2">/</span>
            <Link href="/blog" className="hover:text-pink-300">Blog</Link>
            <span className="px-2">/</span>
            <span className="text-gray-300">{name}</span>
          </nav>

          <header className="mb-10">
            <p className="text-sm uppercase tracking-wider text-pink-400 mb-2">
              Category
            </p>
            <h1 className="font-primary text-3xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">
                {name}
              </span>{" "}
              Articles
            </h1>
            <p className="font-eastroman-trial-demibold text-gray-400 text-lg max-w-2xl">
              {blogs.length} {blogs.length === 1 ? "post" : "posts"} on{" "}
              {name.toLowerCase()} from the MSA Club team. Tutorials, breakdowns,
              and insights from working animators.
            </p>
          </header>

          <BlogListGrid
            blogs={blogs}
            emptyMessage={`No posts in ${name} yet — check back soon.`}
          />

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-block text-pink-400 hover:text-pink-300 font-medium"
            >
              &#8592; Back to all posts
            </Link>
          </div>
        </div>
      </main>
    </SEOPageWrapper>
  );
}
