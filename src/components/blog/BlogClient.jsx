"use client";

import { useEffect, useState } from "react";
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
import { processBlogImages } from "@/utils/imageProcessor";
import BlogCardsDynamic from "./BlogCardsDynamic";

const BlogClient = ({ blogData, recentblogData }) => {
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);


  const [sanitizedContent, setSanitizedContent] = useState("");

  // Sanitize the blog content after the component mounts
  useEffect(() => {
    if (blogData?.content) {
      const sanitized = DOMPurify.sanitize(blogData.content);
      setSanitizedContent(sanitized);
    }
  }, [blogData]);

  // Apply the custom styling to images after content is rendered
  useEffect(() => { 
    if (!sanitizedContent) return;

    const styleImages = () => {
      const contentArea = document.querySelector(".blog_description");
      if (!contentArea) return;

      const images = contentArea.querySelectorAll("img");

      images.forEach((img) => {
        // Skip if already processed
        if (img.hasAttribute("data-processed")) return;
        img.setAttribute("data-processed", "true");

        // Get parent paragraph or div
        const parent = img.parentElement;
        parent.style.position = "relative";
        parent.style.margin = "30px 0";

        // Create random ID for clip path
        const clipId = `clip-${Math.random().toString(36).substring(2, 11)}`;

        // Save original image
        const imgSrc = img.src;
        const imgAlt = img.alt || "Blog image";
        const imgWidth = img.width;
        const imgHeight = img.height;

        // Create SVG container
        const container = document.createElement("div");
        container.className = "relative w-full aspect-[16/9] my-4";

        // Generate SVG markup
        container.innerHTML = `
          <svg class="absolute inset-0 w-full h-full" 
               viewBox="0 0 1000 562.5" 
               preserveAspectRatio="none"
               style="left:-8px; top:8px;">
            <path d="M0 0H960L1000 40V562.5H40L0 522.5V0Z" 
                  stroke="#FF00FF" 
                  stroke-width="1" 
                  fill="none" />
          </svg>
          <svg class="absolute inset-0 w-full h-full" 
               viewBox="0 0 1000 562.5" 
               preserveAspectRatio="none">
            <defs>
              <clipPath id="${clipId}">
                <path d="M0 0H960L1000 40V562.5H40L0 522.5V0Z" />
              </clipPath>
            </defs>
            <image width="1000" 
                   height="562.5" 
                   href="${imgSrc}" 
                   clip-path="url(#${clipId})" 
                   preserveAspectRatio="xMidYMid slice" />
            <path d="M0 0H960L1000 40V562.5H40L0 522.5V0Z" 
                  stroke="white" 
                  stroke-width="1" 
                  fill="none" />
          </svg>
        `;

        // Replace original image with our SVG container
        img.parentNode.replaceChild(container, img);
      });
    };

    // Run on next tick after content is rendered
    setTimeout(styleImages, 100);

    // Also run when images might be loaded
    window.addEventListener("load", styleImages);

    return () => {
      window.removeEventListener("load", styleImages);
    };
  }, [sanitizedContent]);

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
  // ADDED: Prepare JSON-LD for Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blogData.metaTitle,
    datePublished: blogData.postedDate,
    image: blogData.coverImage,
    author: {
      "@type": "Person",
      name: "Taimoor Hamza",
    },
    publisher: {
      "@type": "Organization",
      name: "MSA Club ",
      logo: {
        "@type": "ImageObject",
        url: "https://msa-club.com/logo.png",
      },
    },
    description: blogData.metaDescription || "",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://msa-club.com/blog/post/${blogData.friendlyUrl}`,
    },
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
        className=" -mt-5 mx-0 bg-cover bg-center "
        // style={{ backgroundImage: `url(${BackgroundImage.src})`, height:'auto', width:'100%' }}
      >
        <SectionWrapper>
          {/* Main Blog Content */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {/* Blog Content Area */}
            <div className=" lg:col-span-2 px-2 lg:p-4 rounded-2xl relative ">
              {/* Blog Top Image */}
              <div className="relative">
                <BlogDetailHeroImage
                  imageUrl={blogData?.coverImage}
                  className="w-full max-w-[1208px] mx-auto"
                />
                <Image
                  width={60}
                  t
                  height={60}
                  src={Bubble.src}
                  alt="Floating big Bubble"
                  className="absolute -bottom-7 left-0  w-12 md:w-12 lg:w-24 2xl:left-5 z-50 "
                />
                <div className="absolute -left-[40%] md:-left-[10%] lg:-right-[30%]  lg:-bottom-96  overflow-visible md:scale-x-[-1] -z-20 xl:-z-10  ">
                  <RightEllipseSVG height={900} width={900} />
                </div>
              </div>


              <div className="px-2 lg:px-0">
                {/* Blog Title */}
                <div className=" items-center mt-6 lg:mt-10  w-full ">
                  <h1 className="text-2xl lg:text-4xl xl:text-5xl  font-bold text-white font-primary mb-1 ">
                    {blogData?.title}
                  </h1>
                  <span className="justify-end text-xs pe-2 mt-10 text-white font-medium-kgpr text-right"></span>
                  <div className="mb-0 mt-0  flex flex-wrap gap-1.5 gap-x-3">
                    {blogData?.categories
                      ?.slice(0, 3)
                      .map((category, index) => (
                        <ClippedAutoWidthBtn
                          text={category}
                          textSize={isLargeScreen ? "lg:text-2xl" : "text-xl"}
                          strokeWidth={1.16}
                          key={index}
                        />
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
            
          </div>
        </SectionWrapper>
        <BlogCardsDynamic apiEndpoint={`${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs?limit=8`} text1={"Recomened Blogs"}   />
      </div>
      <BlogImageProcessor />
    </>
  );
};

export default BlogClient;
