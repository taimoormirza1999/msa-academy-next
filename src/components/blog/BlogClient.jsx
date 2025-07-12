"use client";

import React, { useEffect, useState, useRef } from "react";
import DOMPurify from "dompurify";
import Image from "next/image";
import Script from "next/script";
import BlogDetailHeroImage from "../utils/BlogDetailHeroImage";
import Bubble from "@/assets/bubble.svg";
import RightEllipseSVG from "../utils/icons/RightEllipseSVG";
import SectionWrapper from "../SectionWrapper";
import ClippedAutoWidthBtn from "../utils/ClippedAutoWidthBtn";
import useScreenStore from "@/store/useScreenStore";
import BlogImageProcessor from "../utils/BlogImageProcessor";
import { processBlogImages } from "../utils/imageProcessor";
import BlogCardsDynamic from "./BlogCardsDynamic";

const BlogClient = ({ blogData, recentblogData }) => {
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);
  const [sanitizedContent, setSanitizedContent] = useState("");
  const contentRef = useRef(null);

  // Sanitize the blog content after the component mounts
  useEffect(() => {
    if (blogData?.content) {
      const clean = DOMPurify.sanitize(blogData.content, {
        ALLOWED_TAGS: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'blockquote'],
        ALLOWED_ATTR: ['src', 'alt', 'href', 'class', 'style']
      });
      setSanitizedContent(clean);
    }
  }, [blogData]);

  // Prepare JSON-LD for Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blogData?.metaTitle || '',
    datePublished: blogData?.postedDate || '',
    image: blogData?.coverImage || '',
    author: {
      "@type": "Person",
      name: "Taimoor Hamza",
    },
    publisher: {
      "@type": "Organization",
      name: "MSA Club",
      logo: {
        "@type": "ImageObject",
        url: "https://msa-club.com/logo.png",
      },
    },
    description: blogData?.metaDescription || "",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://msa-club.com/blog/post/${blogData?.friendlyUrl || ''}`,
    },
  };

  if (!blogData) {
    return (
      <div className="text-center py-0 mt-0">
        <div className="border-white/[21%] bg-white/[9%] w-[50%] lg:py-20 inline-block rounded-[1.7rem]">
          <h1 className="text-2xl font-bold text-white capitalize">
            Blog not found
          </h1>
          <p className="text-gray-300 py-3">
            The blog post you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="mt-3 xl:-mt-3 mx-0 bg-cover bg-center">
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            <div className="lg:col-span-2 px-2 lg:p-4 rounded-2xl relative">
              <div className="relative">
                <BlogDetailHeroImage
                  imageUrl={blogData?.coverImage}
                  className="w-[95%] max-w-[1208px] mx-auto"
                />
                <Image
                  width={60}
                  height={60}
                  src={Bubble.src}
                  alt="Floating big Bubble"
                  className="absolute -bottom-7 left-0 w-12 md:w-12 lg:w-24 2xl:left-5 z-50"
                  priority
                />
                <div className="absolute -left-[40%] md:-left-[10%] lg:-right-[30%] lg:-bottom-96 overflow-visible md:scale-x-[-1] -z-20 xl:-z-10">
                  <RightEllipseSVG height={900} width={900} />
                </div>
              </div>

              <div className="px-2 lg:px-0">
                <div className="items-center mt-6 lg:mt-10 w-full">
                  <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white font-primary mb-1">
                    {blogData?.title}
                  </h1>
                  <div className="mb-0 mt-0 flex flex-wrap gap-1.5 gap-x-3 my-2">
                    {blogData?.categories?.slice(0, 3).map((category, index) => (
                      <ClippedAutoWidthBtn
                        key={index}
                        text={category}
                        textSize={isLargeScreen ? "lg:text-2xl p-3" : "md:text-xl text-lg p-2"}
                        strokeWidth={1.16}
                      />
                    ))}
                  </div>
                </div>

                <div
                  ref={contentRef}
                  className="text-gray-100 blog_description leading-relaxed bg-opacity-90 lg:p-3 lg:px-0 rounded mt-3 lg:mt-5 font-medium-kgpr text-sm"
                  dangerouslySetInnerHTML={{
                    __html: sanitizedContent,
                  }}
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
        {blogData && <BlogImageProcessor contentRef={contentRef} />}
      </div>
      <BlogCardsDynamic apiEndpoint={`/api/blogs?limit=8`} text1={"Recomened Blogs"}   />
    </>
  );
};

export default BlogClient;