import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../ui/BlogCard";
import { motion } from "framer-motion";
import ClippedTestimonialCard from "../utils/ClippedTestimonialCard";
import useScreenStore from "@/store/useScreenStore";

const CustomNextArrow = ({ onClick, isLargeScreen }) => (
  <button
    className="absolute left-1/2 -ml-9 -translate-x-1/2 lg:right-[45%] lg:-bottom-24 -translate-y-1/2 z-10 text-white/90 p-3 lg:p-3.5 rounded-full shadow-xl"
    onClick={onClick}
  >
    <ClippedTestimonialCard
      width={55}
      height={50}
      value={12}
      strokeWidth={1.26}
      bgColor="rgba(255,0,255,0.3)"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7 lg:w-4 lg:h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </ClippedTestimonialCard>
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute  lg:-me-2  left-1/2 ml-9 -translate-x-1/2 lg:left-1/2  -bottom-[9%] lg:-bottom-24 lg:-translate-y-1/2 z-10  text-white/90 p-3 lg:p-3.5 "
    onClick={onClick}
  >
    <ClippedTestimonialCard
      width={55}
      height={50}
      value={12}
      strokeWidth={1.26}
      strokeColor="#A400E8"
    >
      <div className="absolute top-1/2 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7 lg:w-4 lg:h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </ClippedTestimonialCard>
  </button>
);

function MultipleItems() {
  const [blogData, setBlogData] = useState(null);
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);
  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs?limit=8`
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
    nextArrow: <CustomNextArrow isLargeScreen={isLargeScreen} />,
    prevArrow: <CustomPrevArrow isLargeScreen={isLargeScreen} />,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 800,
    draggable: true,
    lazyLoad: "ondemand", // Fix for lazyLoad
    centerMode: true,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1780,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, // Fix: Ensure consistency
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6 }}
      className="slider-container  lg:-mb-14 mt-0  mb-8 lg:mt-20  w-[95%] lg:w-[100%] mx-auto pb-20 "
    >
      <div className="mb-5">
        <p className="text-center text-gray-300 text-lg md:text-xl mt-2 md:w-4/5 font-primary mx-auto">
        Enroll With MSA
        </p>

        <div className="mt-6">
          <OutlineTextEffect
            title={"FUEL YOUR"}
            classes={"w-full "}
          />
          <OutlineTextEffect
            title={"CREATIVITY"}
            classes={"w-full "}
          />
        </div>

       
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
  ) : null;
}

export default MultipleItems;
