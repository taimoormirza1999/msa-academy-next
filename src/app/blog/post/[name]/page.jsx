import BlogClient from "@/components/blog/BlogClient";
import { notFound } from "next/navigation";

const fetchBlogData = async (name) => {
  try {
  // Use absolute URL for server-side fetching
  const baseUrl = process.env.FRONTEND || (typeof window === 'undefined' ? 'http://localhost:3000' : '');
  const url = baseUrl ? `${baseUrl}/api/blogs/post/${name}` : `/api/blogs/post/${name}`;
  const response = await fetch(url);
      
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return await response.json();
} catch (error) {
  console.error("Error fetching blogs:", error);
  return null;
}
};

const fetchRecentBlogs = async (name) => {
  try {
    // Use absolute URL for server-side fetching
    const baseUrl = process.env.FRONTEND || (typeof window === 'undefined' ? 'http://localhost:3000' : '');
    const url = baseUrl ? `${baseUrl}/api/blogs/recent-blogs?limit=5` : `/api/blogs/recent-blogs?limit=5`;
    const response = await fetch(url);
    const data = await response.json();
    return data.filter((blog) => blog.friendlyUrl !== name);
  } catch (error) {
    console.error("Error fetching recent blogs:", error);
    return [];
  }
};


// ✅ 2️⃣ Override Metadata Dynamically (Server-Side)
// export async function generateMetadata({ params }) {
//   const name = await params?.name;
export async function generateMetadata({ params }) {
  const { name } = await params;
  const blogData = await fetchBlogData(name);

  if (!blogData) {
    return {
      title: "Blog Post | MSA-Club.com",
      description: "Read our latest blog posts at MSA-Club.com.",
    };
  }

  return {
    generator:"MSA-Club.com",
    applicationName:"MSA-Club.com",
    referrer: 'origin-when-cross-origin',
     creator: 'Taimoor Hamza',
     publisher:'Artoul',
     robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    title: `${blogData.metaTitle} | MSA-Club.com`,
    description: blogData.metaDescription || "Read this blog on MSA-Club.com.",
    keywords: blogData.metaTags?.join(", ") || "Sourcing, Manufacturing, Supply Chain",
    openGraph: {
      siteName:"MSA-Club.com",
      locale: 'en_US',
      type: 'website',
      title: blogData.title,
      description: blogData.metaDescription || "Read this blog on MSA-Club.com.",
      images: [blogData.coverImage || "https://msa-club.com/hero_banner.jpg"],
      url: `https://msa-club.com/blog/post/${blogData.friendlyUrl}`,
      authors: ['Taimoor Hamza',],
    },
    twitter: {
      card: "summary_large_image",
      title: blogData.metaTitle,
      description: blogData.metaDescription || "Read this blog on MSA-Club.com.",
      images: [blogData.coverImage || "https://msa-club.com/hero_banner.jpg"],
    },
  };
}

// export default async function BlogDetail({ params }) {
//   const name = await params?.name;
//   const recentBlogs = await fetchRecentBlogs(name);
//   const blogData = await fetchBlogData(name);
export default async function BlogDetail({ params }) {
  const { name } = await params;
  const blogData = await fetchBlogData(name);
  const recentBlogs = await fetchRecentBlogs(name);
  if (!name) return notFound();

  if (!blogData) {
    return notFound();
  }
  return <BlogClient blogData={blogData} recentblogData={recentBlogs} />;
}
