import React from "react";
import DrawingImage from "../assets/drawing_banner.png";
import Button from "./utils/Button";
import BannerTextHeading from "./utils/BannerTextHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import OutlineTextEffect from "./utils/OutlineTextEffect";

const Drawing = () => {
  return (
    <SectionWrapper >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1.8, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="relative w-full md:w-99 h-auto bg-cover bg-center lg:-mt-14  mb-10 md:mb-20 lg:mb-10  z-10"
        id="drawing-course"
      >
        <div className="relative h-auto mx-auto  w-99 md:w-98 lg:w-[90%] xl:w-[93%]">
          <Image
            height={1080}
            width={1920}
            src={DrawingImage.src}
            alt="Banner"
            className="w-full h-[45vh] sm:h-[60vh] md:h-full lg:h-full 2xl:h-3/4 object-cover md:object-contain"
          />
        </div>
        {/* <div className="bg-black/50 lg:bg-transparent rounded-xl shadow-xl shadow-pink200/30 lg:shadow-none lg:rounded-none mx-auto lg:absolute top-28 md:top-32 2xl:top-64 left-32 2xl:left-48 p-8  text-white w-95 md:w-85  lg:w-1/2 2xl:w-[37%] flex flex-col justify-center md:mt-5">
        <BannerTextHeading
        heading="DRAWING COURSES"
        paragraph="WE BELIEVE EVERYONE IS AN ARTIST, 
JOIN US TO UNLEASH THE ARTISTIC 
TALENT WHITHIN YOU!"
      />
        <div className='mt-2 mb-3 lg:mt-[30pt] animate-bounceSlow'>
      <Button textSize="text-sm"/>
      </div>
      </div> */}
        <div className="mt-6    ">
          
<OutlineTextEffect title={"DRAWING COURSES"}/>
        </div>
        {/* Description */}
        <p className="text-center text-grayPrimary text-lg md:text-xl mt-4 md:w-4/5 font-primary mx-auto">
          We believe everyone is an artist, Join us to
          <br />
          unleash the artistic talent within you.
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default Drawing;
