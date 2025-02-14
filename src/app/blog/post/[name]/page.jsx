import BlogClient from "@/components/blog/BlogClient";
import axios from "axios";
import { notFound } from "next/navigation";
// ✅ 1️⃣ Move API calls to the server for better SEO & performance
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
      `${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs/recent-blogs`
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
      title: "Blog Post | Dipak Sourcing",
      description: "Read our latest blog posts at Dipak Sourcing.",
    };
  }

  return {
    title: `${blogData.metaTitle} | Dipak Sourcing`,
    description: blogData.metaDescription || "Read this blog on Dipak Sourcing.",
    keywords: blogData.metaTags?.join(", ") || "Sourcing, Manufacturing, Supply Chain",
    openGraph: {
      title: blogData.title,
      description: blogData.metaDescription || "Read this blog on Dipak Sourcing.",
      images: [blogData.coverImage || "/logo.png"],
      url: `https://msa-club.com/blog/post/${blogData.friendlyUrl}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blogData.title,
      description: blogData.metaDescription || "Read this blog on Dipak Sourcing.",
      images: [blogData.coverImage || "/logo.png"],
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
