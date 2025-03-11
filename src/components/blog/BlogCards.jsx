import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../ui/BlogCard";
import { motion } from "framer-motion";
import ClippedTestimonialCard from "../utils/ClippedTestimonialCard";
import useScreenStore from "@/store/useScreenStore";
import OutlineTextEffect from "../utils/OutlineTextEffect";
import { HiChevronLeft } from "react-icons/hi";
import Link from "next/link";
import { BlogPostingListSchema } from "@/components/SEO/SchemaMarkup";

const CustomNextArrow = ({ onClick, isLargeScreen }) => (
  <button
    className="absolute left-1/2 -ml-9 -translate-x-1/2 lg:right-[45%] lg:-bottom-24 -translate-y-1/2 z-10 text-white/90 p-3 lg:p-3.5 rounded-full shadow-xl"
    onClick={onClick}
    aria-label="Next slide"
  >
    <ClippedTestimonialCard
      width={!isLargeScreen ? 45 : 55}
      height={!isLargeScreen ? 40 : 50}
      value={12}
      strokeWidth={1.26}
      // bgColor="rgba(255,0,255,0.3)"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <HiChevronLeft className="w-7 h-7 " />
      </div>
    </ClippedTestimonialCard>
  </button>
);

const CustomPrevArrow = ({ onClick, isLargeScreen }) => (
  <button
    className="absolute  lg:-me-2  left-1/2 ml-9 -translate-x-1/2 lg:left-1/2  -bottom-[9%] lg:-bottom-24 lg:-translate-y-1/2 z-10  text-white/90 p-3 lg:p-3.5 "
    onClick={onClick}
    aria-label="Previous slide"
  >
    <ClippedTestimonialCard
      width={!isLargeScreen ? 45 : 55}
      height={!isLargeScreen ? 40 : 50}
      value={12}
      strokeWidth={1.26}
      strokeColor="#A400E8"
    >
      <div className="absolute top-1/2 left-1/2 text-white  -translate-x-1/2 -translate-y-1/2 scale-x-[-1]">
        <HiChevronLeft className="w-7 h-7 " />
      </div>
    </ClippedTestimonialCard>
  </button>
);

function MultipleItems() {
  const [blogData, setBlogData] = useState(null);
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);
  const isMobileSScreen = useScreenStore((state) => state.isMobileSScreen);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs?limit=8`,
        { next: { revalidate: 3600 } }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setBlogData(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const settings = {
    nextArrow: (
      <CustomNextArrow
        isLargeScreen={isLargeScreen}
        isMobileSScreen={isMobileSScreen}
      />
    ),
    prevArrow: (
      <CustomPrevArrow
        isLargeScreen={isLargeScreen}
        isMobileSScreen={isMobileSScreen}
      />
    ),
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    draggable: true,
    lazyLoad: "ondemand",
    centerMode: true,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1780,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return blogData ? (
    <section aria-label="Blog Posts Carousel" className="py-10">
      {/* Add structured data for blog list */}
      <BlogPostingListSchema blogPosts={blogData} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6 }}
        className="slider-container  lg:-mb-14 mt-0  mb-8 lg:mt-20  w-[95%] lg:w-[100%] mx-auto pb-20 "
      >
        <div className="-mb-8">
          <p className="text-center text-gray-300 text-lg md:text-xl mt-2 md:w-4/5 font-primary mx-auto">
            Enroll With MSA
          </p>

          <div className="mt-6">
            <OutlineTextEffect title={"FUEL YOUR"} classes={"w-full "} />
            <OutlineTextEffect title={"CREATIVITY"} classes={"w-full mt-2"} />
          </div>
        </div>
        
        <div className="flex justify-center mt-4 mb-8">
          <Link 
            href="/blog" 
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="View All Blog Posts"
          >
            View All Blog Posts
          </Link>
        </div>
        
        <Slider {...settings} className="rounded">
          {blogData?.map((blogItem, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * key }}
            >
              <BlogCard blogItem={blogItem} />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </section>
  ) : null;
}

export default MultipleItems;
