"use client";

import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Image from "next/image";
import Script from "next/script";

const BlogClient = ({ blogData, recentblogData }) => {
  const [sanitizedContent, setSanitizedContent] = useState("");

  // Sanitize the blog content after the component mounts
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
  // ADDED: Prepare JSON-LD for Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blogData.metaTitle,
    "datePublished": blogData.postedDate,
    "image": blogData.coverImage,
    "author": {
      "@type": "Person",
      "name": "Taimoor Hamza"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MSA Club ", 
      "logo": {
        "@type": "ImageObject",
        "url": "https://msa-club.com/logo.png" 
      }
    },
    "description": blogData.metaDescription || "",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://msa-club.com/blog/post/${blogData.friendlyUrl}` 
    }
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div
        className="min-h-screen mx-0 bg-cover bg-center mt-28"
        // style={{ backgroundImage: `url(${BackgroundImage.src})`, height:'auto', width:'100%' }}
      >
        <div className="container w-[92%] xl:w-[80%] mx-auto lg:p-6 my-18 max-w-[1920px] pt-10 ">
          {/* Main Blog Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Blog Content Area */}
            <div className="shadow-2xl shadow-pink200/40 lg:col-span-2 border border-white/[21%] bg-white/[9%] bg-opacity-90 px-2 lg:p-4  rounded-2xl relative">
              {/* Blog Top Image */}
              <Image
                height={800}
                width={1200}
                src={blogData?.coverImage}
                alt="Blog Cover"
                className="mt-3 lg:mt-0 w-full border border-white/[51%] shadow-2xl shadow-pink200/40 h-[23rem] lg:h-[30rem] xl:h-[50vh] object-cover rounded-2xl mb-4 bg-gradient-to-t from-black via-black/50 to-transparent"
              />
              <div className="px-2 lg:px-0">
                {/* Blog Title */}
                <div className=" items-center mt-6 lg:mt-10 z-20 w-full ">
                  <h1 className="text-2xl lg:text-4xl font-bold text-white  font-impact-regular mb-1 ">
                    {blogData?.title}
                  </h1>
                  <span className="justify-end text-xs pe-2 mt-10 text-white font-medium-kgpr text-right"></span>
                  <div className="mb-0 mt-3 lg:my-4 flex flex-wrap gap-1.5">
                    {blogData?.categories?.slice(0, 3).map((category, index) => (
                      <span
                        key={index}
                        className={`text-white  font-medium py-1.5  text-[0.65rem] md:text-xs px-5 lg:px-7 rounded-full font-impact-regular bg-opacity-40 shadow-pink200 shadow-2xl border-white/[51%] border`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Blog Description */}
                <div
                  className="text-gray-100 blog_description leading-relaxed  bg-opacity-90 lg:p-3 lg:px-0 rounded mt-3 lg:mt-5 font-medium-kgpr  text-sm"
                  dangerouslySetInnerHTML={{
                    __html: sanitizedContent,
                  }}
                ></div>
              </div>
            </div>

            {/* Sidebar Area */}
            <div className="shadow-2xl shadow-pink200/40 border border-white/[21%] bg-white/[9%] bg-opacity-5 p-3 py-6 lg:p-6 rounded-2xl sidebar">
              {/* Recent Blogs */}
              <h2 className="text-xl lg:text-2xl font-semibold text-white border-b-2 border-white/[51%] pb-2.5 mb-5 font-medium-ccm ">
                Recent Blogs
              </h2>{" "}
              <ul className="space-y-4">
                {recentblogData?.map((recentblogItem, index) => (
                  <a
                    href={`/blog/post/${recentblogItem.friendlyUrl}`}
                    key={index}
                    className="flex items-center space-x-4 shadow-xl  hover:scale-[1.03] transition-transform duration-300 shadow-pink200/25 rounded-[13px] p-2.5 mb-5 border-[1px] border-white/50"
                  >
                    <img
                      src={recentblogItem?.coverImage}
                      alt={`Blog ${index + 1} thumbnail`}
                      className="border-[1px] self-start  border-white/50 shadow shadow-pink200/30 w-20 h-20 object-cover rounded-md"
                    />
                    <button
                      href="#"
                      className="w-full text-white text-base font-medium-kgpr"
                      style={{ fontWeight: "900" }}
                    >
                      <p className="w-full text-xs lg:text-sm font-bold lg:pb-2 text-start">
                        {recentblogItem?.title}
                      </p>
                      <div className="text-right text-[0.55rem] lg:text-[0.69rem] w-full pe-2 mt-3">
                        {new Date(recentblogItem?.postedDate).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </div>
                    </button>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogClient;
