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
import { blogResponsiveCards } from "@/constants";

const CustomNextArrow = ({ onClick, isLargeScreen }) => (
  <button
    className="absolute left-1/2 -ml-9 -translate-x-1/2 lg:right-[45%] lg:-bottom-24 -translate-y-1/2 z-10 text-white/90 p-3 lg:p-3.5 rounded-full shadow-xl"
    onClick={onClick}
  >
    <ClippedTestimonialCard width={!isLargeScreen ? 45 : 55} height={!isLargeScreen ? 40 : 50} value={12} strokeWidth={1.26}>
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
    <ClippedTestimonialCard width={!isLargeScreen ? 45 : 55} height={!isLargeScreen ? 40 : 50} value={12} strokeWidth={1.26} strokeColor="#A400E8">
      <div className="absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 scale-x-[-1]">
        <HiChevronLeft className="w-7 h-7 " />
      </div>
    </ClippedTestimonialCard>
  </button>
);

function BlogCardsDynamic({ apiEndpoint, title, text1, text2 }) {
  const [data, setData] = useState(null);
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [apiEndpoint]);

  const settings = {
    nextArrow: <CustomNextArrow isLargeScreen={isLargeScreen} />, 
    prevArrow: <CustomPrevArrow isLargeScreen={isLargeScreen} />, 
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

  return data ? (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6 }} className="slider-container w-[95%] lg:w-[100%] mx-auto pb-20">
      <div className="-mb-8 text-center">
        <p className="text-gray-300 text-lg md:text-xl mt-2 md:w-4/5 font-primary mx-auto">{title}</p>
        <div className="mt-6">
          <OutlineTextEffect title={text1} classes={"w-full"} />
          <OutlineTextEffect title={text2} classes={"w-full mt-2"} />
        </div>
      </div>
      <Slider {...settings} className="rounded">
        {data.map((item, key) => (
          <motion.div key={key} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 * key }}>
            <BlogCard blogItem={item} />
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  ) : null;
}

export default BlogCardsDynamic;