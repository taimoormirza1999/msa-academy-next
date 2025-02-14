"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader";

const BlogDetail = () => {
  const params = useParams();
  const friendlyUrl = params.name;
  const [blogData, setBlogData] = useState(null);
  const [recentblogData, setRecentBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Ensure component runs only on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (friendlyUrl) {
      const fetchBlogs = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs/post/${friendlyUrl}`
          );
          setBlogData(response.data);
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
      };

      const fetchRecentBlogs = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs/recent-blogs`
          );
          const filteredBlogs = response.data.filter(
            (blog) => blog.friendlyUrl !== friendlyUrl
          );
          setRecentBlogData(filteredBlogs);
        } catch (error) {
          console.error("Error fetching recent blogs:", error);
        }
      };

      const fetchData = async () => {
        await Promise.all([fetchBlogs(), fetchRecentBlogs()]);
        setLoading(false);
      };

      fetchData();
    }
  }, [friendlyUrl]);

  if (!isClient) return null;
  if (loading) return <Loader />;

  return (
    <div className="mt-28">
      <div className="container w-[92%] xl:w-[80%] mx-auto lg:p-6 my-18 max-w-[1920px] pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Blog Content Area */}
          <div className="shadow-2xl shadow-pink200/40 lg:col-span-2 border border-white/[21%] bg-white/[9%] bg-opacity-90 px-2 lg:p-6 rounded-2xl relative">
            <Image
              height={800}
              width={1200}
              src={blogData?.coverImage}
              alt="Blog Cover"
              className="mt-3 lg:mt-0 w-full border-2 border-white/[51%] shadow-2xl shadow-pink200/40 h-[23rem] lg:h-[30rem] xl:h-[50vh] object-cover rounded-2xl mb-4 bg-gradient-to-t from-black via-black/50 to-transparent"
            />
            <div className="px-2 lg:px-0">
              <h1 className="text-2xl lg:text-4xl font-bold text-white font-impact-regular mb-1">
                {blogData?.title}
              </h1>
              <span className="justify-end text-xs pe-2 mt-10 text-white font-medium-kgpr text-right">
                {new Date(blogData?.postedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <div className="mb-0 mt-3 lg:my-4 flex flex-wrap gap-1.5">
                {blogData?.categories?.slice(0, 3).map((category, index) => (
                  <span
                    key={index}
                    className="text-white font-medium py-1.5 text-[0.65rem] md:text-xs px-5 lg:px-7 rounded-full font-impact-regular bg-opacity-40 shadow-pink200 shadow-2xl border-white/[51%] border"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <div
                className="text-gray-100 blog_description leading-relaxed bg-opacity-90 lg:p-3 lg:px-0 rounded mt-3 lg:mt-5 font-medium-kgpr text-sm"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blogData?.content),
                }}
              ></div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="shadow-2xl shadow-pink200/40 border border-white/[21%] bg-white/[9%] bg-opacity-5 p-3 py-6 lg:p-6 rounded-2xl sidebar">
            <h2 className="text-xl lg:text-2xl font-semibold text-white border-b-2 border-white/[51%] pb-2.5 mb-5 font-medium-ccm">
              Recent Blogs
            </h2>
            <ul className="space-y-4">
              {recentblogData?.slice().reverse().map((recentblogItem, index) => (
                <Link
                  href={`/blog/post/${recentblogItem.friendlyUrl}`}
                  key={index}
                  className="flex items-center space-x-4 shadow-xl hover:scale-[1.03] transition-transform duration-300 shadow-pink200/25 rounded-[13px] p-2.5 mb-5 border-[1px] border-white/50"
                >
                  <Image
                    height={80}
                    width={80}
                    src={recentblogItem?.coverImage}
                    alt={`Blog ${index + 1} thumbnail`}
                    className="border-[1px] self-start border-white/50 shadow shadow-pink200/30 w-20 h-20 object-cover rounded-md"
                  />
                  <button
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
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
