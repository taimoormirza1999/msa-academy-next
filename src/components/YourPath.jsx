import React from 'react';
import YourPathImage from '../assets/path_banner.png'; // Replace with your actual image path
import BannerTextHeading from './utils/BannerTextHeading';
import { motion } from "framer-motion"


const YourPath = () => {
  return (
    <motion.div 
    initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:1.5, ease: "easeInOut",}}} 
  
    // transition={{ type: "spring", }}
      className="relative w-full h-auto bg-cover bg-center mt-16 mb-10 md:mt-20 md:mb-10 lg:mt-16 mx-auto md:w-99 2xl:w-85 max-w-[1920px] "
     
    >
         <div className="relative w-full h-auto lg:w-full lg:ml-1.5">
         <img
                height={1080}
                width={1920}
      src={YourPathImage.src} 
      alt="Banner" 
      className="w-full md:w-98 h-[38vh] sm:h-[60vh] md:h-auto lg:h-full object-cover md:object-contain object-[60%_30%] -z-10  mx-auto "
    />
         </div>
      <div className="bg-black/60 z-50 md:z-0 lg:bg-transparent rounded-xl shadow-xl shadow-pink200/30 lg:shadow-none lg:rounded-none mx-auto lg:absolute md:top-72 lg:top-10 2xl:top-20 lg:left-20 2xl:left-24 p-8 text-white w-95 lg:w-[51%] 2xl:w-30vw flex flex-col justify-center -mt-6 mb-28 md:-mt-4 lg:-mt-0 lg:mb-0">
       
        <BannerTextHeading
        heading="FIND YOUR PATH AND LEARN ONLINE"
        paragraph="Our courses are designed for students of all skill levels. Explore and learn from scratch with our easy-to-follow videos, allowing you to progress at your own pace."
      />
      </div>
    </motion.div>
  );
};

export default YourPath;
