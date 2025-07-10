'use client';
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../ui/BlogCard";
import { motion, useReducedMotion } from "framer-motion";
import ClippedTestimonialCard from "../utils/ClippedTestimonialCard";
import useScreenStore from "@/store/useScreenStore";
import OutlineTextEffect from "../utils/OutlineTextEffect";
import { HiChevronLeft } from "react-icons/hi";
import { blogResponsiveCards } from "@/constants";

const CustomNextArrow = ({ onClick, isLargeScreen }) => (
  <button
    className="absolute left-1/2 -ml-9 -translate-x-1/2 lg:right-[45%] lg:-bottom-24 -translate-y-1/2 z-10 text-white/90 p-3 lg:p-3.5 rounded-full shadow-xl"
    onClick={onClick}
  >
    <ClippedTestimonialCard
      width={!isLargeScreen ? 45 : 55}
      height={!isLargeScreen ? 40 : 50}
      value={12}
      strokeWidth={1.26}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <HiChevronLeft className="w-7 h-7 " />
      </div>
    </ClippedTestimonialCard>
  </button>
);

const CustomPrevArrow = ({ onClick, isLargeScreen }) => (
  <button
    className="absolute lg:-me-2 left-1/2 ml-9 -translate-x-1/2 lg:left-1/2 -bottom-[9%] lg:-bottom-24 lg:-translate-y-1/2 z-10 text-white/90 p-3 lg:p-3.5"
    onClick={onClick}
  >
    <ClippedTestimonialCard
      width={!isLargeScreen ? 45 : 55}
      height={!isLargeScreen ? 40 : 50}
      value={12}
      strokeWidth={1.26}
      strokeColor="#A400E8"
    >
      <div className="absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 scale-x-[-1]">
        <HiChevronLeft className="w-7 h-7 " />
      </div>
    </ClippedTestimonialCard>
  </button>
);

function MultipleItems() {
  const [blogData, setBlogData] = useState(null);
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);
  const isMobileSScreen = useScreenStore((state) => state.isMobileSScreen);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs?limit=8`
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const settings = {
    nextArrow: <CustomNextArrow isLargeScreen={isLargeScreen} isMobileSScreen={isMobileSScreen} />,
    prevArrow: <CustomPrevArrow isLargeScreen={isLargeScreen} isMobileSScreen={isMobileSScreen} />,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 800,
    draggable: true,
    lazyLoad: "ondemand",
    centerMode: true,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: blogResponsiveCards,
  };

  if (!blogData) return null;

  const heading = (
    <div className="-mb-8">
      <p className="text-center text-gray-300 text-lg md:text-xl mt-2 md:w-4/5 font-primary mx-auto">
        Enroll With MSA
      </p>
      <div className="mt-6">
        <OutlineTextEffect title={"FUEL YOUR"} classes={"w-full "} />
        <OutlineTextEffect title={"CREATIVITY"} classes={"w-full mt-2"} />
      </div>
    </div>
  );

  const sliderItems = blogData.map((blogItem, key) =>
    reduceMotion ? (
      <div key={key}>
        <BlogCard blogItem={blogItem} />
      </div>
    ) : (
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 * key }}
        viewport={{ once: true }}
      >
        <BlogCard blogItem={blogItem} />
      </motion.div>
    )
  );

  const slider = <Slider {...settings} className="rounded">{sliderItems}</Slider>;

  const Container = reduceMotion ? 'div' : motion.div;
  const containerProps = reduceMotion
    ? { className: "slider-container lg:-mb-14 mt-0 mb-8 lg:mt-20 w-[95%] lg:w-[100%] mx-auto pb-20" }
    : { initial: { opacity: 0, scale: 0.95 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 1.6 }, className: "slider-container lg:-mb-14 mt-0 mb-8 lg:mt-20 w-[95%] lg:w-[100%] mx-auto pb-20" };

  return (
    <Container {...containerProps}>
      {heading}
      {slider}
    </Container>
  );
}

export default MultipleItems;
