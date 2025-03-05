"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "dompurify";
import BlogStructuredData from "./BlogStructuredData";

const BlogClient = ({ blogData, recentblogData }) => {
  const [sanitizedContent, setSanitizedContent] = useState("");

  useEffect(() => {
    if (blogData?.content) {
      const sanitized = DOMPurify.sanitize(blogData.content);
      setSanitizedContent(sanitized);
    }
  }, [blogData]);

  if (!blogData) {
    return (
      <div className="text-center py-20 mt-20">
        <div className="border-white/[21%] bg-white/[9%] w-[50%] lg:py-20 inline-block rounded-[1.7rem]">
          <h1 className="text-2xl font-bold text-white capitalize">Blog not found</h1>
          <p className="text-gray-300 py-3">The blog post you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <article className="w-full max-w-[1200px] mx-auto px-4 py-8 md:py-12">
      <BlogStructuredData blogData={blogData} />
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" itemProp="headline">
          {blogData.title}
        </h1>
        <div className="flex items-center text-gray-600 mb-4">
          <time dateTime={blogData.postedDate} itemProp="datePublished">
            {new Date(blogData.postedDate).toLocaleDateString()}
          </time>
        </div>
        {blogData.coverImage && (
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={blogData.coverImage}
              alt={blogData.title}
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-lg"
              itemProp="image"
            />
          </div>
        )}
      </header>

      <div 
        className="prose max-w-none"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />

      {recentblogData && recentblogData.length > 0 && (
        <aside className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentblogData.map((blog) => (
              <Link
                key={blog._id}
                href={`/blog/post/${blog.friendlyUrl}`}
                className="group"
              >
                <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {blog.coverImage && (
                    <div className="relative w-full h-48">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary">
                      {blog.title}
                    </h3>
                    <time dateTime={blog.postedDate} className="text-sm text-gray-600">
                      {new Date(blog.postedDate).toLocaleDateString()}
                    </time>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </article>
  );
};

export default BlogClient;
