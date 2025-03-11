import BlogClient from "@/components/blog/BlogClient";
import { notFound } from "next/navigation";

const fetchBlogData = async (name) => {
  try {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs/post/${name}`, { next: { revalidate: 3600 } });
      
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs/recent-blogs?limit=5`, { next: { revalidate: 3600 } })
    const data = await response.json();
    return data.filter((blog) => blog.friendlyUrl !== name);
  } catch (error) {
    console.error("Error fetching recent blogs:", error);
    return [];
  }
};


// 2️⃣ Override Metadata Dynamically (Server-Side)
export async function generateMetadata({ params }) {
  const { name } = await params;
  const blogData = await fetchBlogData(name);

  if (!blogData) {
    return {
      title: "Blog Post | MSA-Club.com",
      description: "Read our latest blog posts at MSA-Club.com.",
    };
  }

  // Create a clean description without HTML tags
  const cleanDescription = blogData.metaDescription || 
    (blogData.content ? blogData.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...' : "Read this blog on MSA-Club.com.");

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
    description: cleanDescription,
    keywords: blogData.metaTags?.join(", ") || "Animation, Character Design, 3D Animation, MSA Academy",
    openGraph: {
      siteName:"MSA-Club.com",
      locale: 'en_US',
      type: 'article',
      title: blogData.title,
      description: cleanDescription,
      images: [blogData.coverImage || "https://msa-club.com/hero_banner.png"],
      url: `https://msa-club.com/blog/post/${blogData.friendlyUrl}`,
      authors: ['Taimoor Hamza'],
      publishedTime: blogData.postedDate,
      modifiedTime: blogData.updatedDate || blogData.postedDate,
      section: blogData.categories?.[0] || "Animation",
      tags: blogData.metaTags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: blogData.metaTitle,
      description: cleanDescription,
      images: [blogData.coverImage || "https://msa-club.com/hero_banner.png"],
      creator: "@msaacademy",
    },
    alternates: {
      canonical: `https://msa-club.com/blog/post/${blogData.friendlyUrl}`,
    },
  };
}

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
