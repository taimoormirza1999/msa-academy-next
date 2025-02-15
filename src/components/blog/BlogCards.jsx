import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../ui/BlogCard";
import axios from "axios";
import { motion } from 'framer-motion';

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute shadow-pink200/40 right-2 lg:right-2 -top-12 lg:-top-12 -translate-y-1/2 z-10 lg:bg-white/[10%] border-[1.2px] border-white/[42%] bg-opacity-5 text-white/90 p-3 lg:p-3.5 rounded-full shadow-xl"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 lg:w-4 lg:h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute shadow-pink200/40 me-2 lg:-me-2 right-16  lg:left-auto lg:right-20 -top-12 lg:-top-12 -translate-y-1/2 z-10 bg-black/20 lg:bg-white/[10%] border-[1.2px] border-white/[42%] text-white/90 p-3 lg:p-3.5 rounded-full shadow-xl"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 lg:w-4 lg:h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

function MultipleItems() {
  const [blogData, setBlogData] = useState(null);

  const fetchBlogs = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs?limit=8`);
    setBlogData(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const settings = {
    // dots: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: true,
    speed: 800,
    draggable: true,
    lazyLoad: true,
    centerMode: true,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
 
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  return (
    
      blogData?(
        <motion.div initial={{opacity:0,scale:0.95}}  whileInView={{ opacity: 1, scale:1 }} transition={{duration:1.6}} className="slider-container mb-10 md:mt-32 lg:-mb-14 mt-10 lg:mt-48 w-[95%] lg:w-[85%] mx-auto ">
        <Slider {...settings} className="rounded">
          {blogData?.map((blogItem, key) => (
            <motion.div  key={key} initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay:0.2*key }}>

            <BlogCard blogItem={blogItem} />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
      ): null
    
    
  );
}

export default MultipleItems;
