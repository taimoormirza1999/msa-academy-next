import React from "react";
import DrawingImage from "../assets/drawing_banner.png";
// import Button from "./utils/Button";
// import BannerTextHeading from "./utils/BannerTextHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import OutlineTextEffect from "./utils/OutlineTextEffect";
import Bubble from "@/assets/bubble.svg";
import RightEllipseSVG from "./utils/icons/RightEllipseSVG";

const Drawing = () => {
  return (
    <SectionWrapper>
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
        <div className="relative w-full mt-6 ">
          {/* <OutlineTextEffect title={"Animation Courses"} hCenter="none" /> */}
          <OutlineTextEffect title={"DRAWING COURSES"} />
          <Image
            width={60}
            height={60}
            src={Bubble.src}
            alt="Floating Bubble"
            className="absolute lg:bottom-[25rem] left-10  md:left-24 w-10 md:w-24 h-auto animate-pulse"
          />
        </div>
        <div className="absolute right-0 top-0 lg:-left-5 w-full h-full   z-10">
          <RightEllipseSVG height={900} width={900} />
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
