import React, { Suspense, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import BackgroundImage from "../assets/background.jpg";
import Loader from "../components/Loader";
import ScrollAnimation from "../components/utils/ScrollAnimation";
import LoaderWrapper from "../components/utils/LoaderWrapper";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import axios from "axios";
import { useSearchParams } from 'next/navigation'
import DOMPurify from "dompurify";

const BlogDetail = () => {
 
  const searchParams = useSearchParams()
 
  const id = searchParams.get('id')
  const colors = ["bg-blue-500", "bg-pink-500", "bg-indigo-500"];

  const [blogData, setBlogData] = useState(null);
  const [recentblogData, setRecentBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs/${id}`
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
      const filteredBlogs = response.data.filter((blog) => blog._id !== id);
      setRecentBlogData(filteredBlogs);
    } catch (error) {
      console.error("Error fetching recent blogs:", error);
    }
  };

  useEffect(() => {
    if (id) { // ✅ Ensuring 'id' is available
      window.scrollTo({ top: 0, behavior: "smooth" });
      const fetchData = async () => {
        await Promise.all([fetchBlogs(), fetchRecentBlogs()]);
        setLoading(false);
      };
      fetchData();
    }
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div
      className="min-h-screen mx-0 bg-cover bg-center mt-28"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Navigation />

      <div className="container w-[92%] xl:w-[80%] mx-auto lg:p-6 my-18 max-w-[1920px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="shadow-2xl shadow-pink200/40 lg:col-span-2 bg-black/35 px-2 lg:p-6 rounded-2xl">
            <img
              src={blogData?.coverImage}
              alt="Blog Cover"
              className="w-full border-2 border-pink200 shadow-2xl h-[23rem] lg:h-[30rem] xl:h-[50vh] object-cover rounded-2xl mb-4"
            />
            <h1 className="text-2xl lg:text-4xl font-bold text-pink200 mb-1">
              {blogData?.title}
            </h1>
            <span className="text-xs text-white">
              {new Date(blogData?.postedDate).toLocaleDateString()}
            </span>

            <div
              className="text-gray-100 leading-relaxed mt-3"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blogData?.content),
              }}
            ></div>
          </div>

          <div className="shadow-2xl bg-black/35 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold text-pink200 mb-5">
              Recent Blogs
            </h2>
            <ul>
              {recentblogData?.reverse().map((recentblogItem, index) => (
                <a
                  href={`/blog/${recentblogItem._id}`}
                  key={index}
                  className="flex items-center shadow-xl p-2.5 mb-5"
                >
                  <img
                    src={recentblogItem?.coverImage}
                    alt="Thumbnail"
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <p className="ml-4 text-white">{recentblogItem?.title}</p>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Suspense fallback={<Loader />}>
        <ScrollAnimation>
          <LoaderWrapper>
            <FAQ />
          </LoaderWrapper>
        </ScrollAnimation>
      </Suspense>

      <LoaderWrapper>
        <Footer />
      </LoaderWrapper>
    </div>
  );
};

export default BlogDetail;
