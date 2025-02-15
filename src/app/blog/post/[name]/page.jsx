import BlogClient from "@/components/blog/BlogClient";
import axios from "axios";
import { notFound } from "next/navigation";
const fetchBlogData = async (name) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs/post/${name}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

const fetchRecentBlogs = async (name) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs/recent-blogs?limit=5`
    );
    return response.data.filter((blog) => blog.friendlyUrl !== name);
  } catch (error) {
    console.error("Error fetching recent blogs:", error);
    return [];
  }
};

// ✅ 2️⃣ Override Metadata Dynamically (Server-Side)
export async function generateMetadata({ params }) {
  const blogData = await fetchBlogData(params?.name);

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
      images: [blogData.coverImage || "https://msa-club.com/hero_banner.png"],
      url: `https://msa-club.com/blog/post/${blogData.friendlyUrl}`,
      authors: ['Taimoor Hamza',],
    },
    twitter: {
      card: "summary_large_image",
      title: blogData.metaTitle,
      description: blogData.metaDescription || "Read this blog on MSA-Club.com.",
      images: [blogData.coverImage || "https://msa-club.com/hero_banner.png"],
    },
  };
}

export default async function BlogDetail({ params }) {
  const blogData = await fetchBlogData(params?.name);
  const recentBlogs = await fetchRecentBlogs(params?.name);
  if (!blogData) {
    return notFound();
  }
  return <BlogClient blogData={blogData} recentblogData={recentBlogs} />;
}
