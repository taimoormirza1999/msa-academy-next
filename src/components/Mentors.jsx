import React, { useRef, useEffect } from 'react';
import MentorsCard1 from "../assets/Mentors/1.png";
import MentorsCard2 from "../assets/Mentors/2.png";
import MentorsCard3 from "../assets/Mentors/3.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Bubble from "@/assets/bubble.svg";
import SectionWrapper from "./SectionWrapper";
// import ClippedImage from "./utils/ClippedImage";
import ClippedImageGeneric from "./utils/ClippedImageGeneric";
import { useMediaQuery } from "react-responsive";

const Mentors = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 3;
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 1.8, ease: "easeInOut" },
      }}
      className="relative w-full h-auto bg-cover bg-center mt-16 md:mb-8 md:mt-16 lg:mt-24 lg:mb-10  md:w-95  lg:w-95 2xl:w-85 mx-auto max-w-[1920px]"
    >
      <SectionWrapper>
        <div className="relative h-auto mx-auto w-full md:w-95 lg:w-80 flex flex-col-reverse lg:flex-col">
          <div className="mt-10  pb-12 lg:pb-0 flex gap-0 lg:gap-6 lg:justify-center justify-start overflow-x-auto lg:overflow-visible snap-x snap-mandatory  scrollbar-hide w-full lg:pr-0">
            {/* <div className="relative flex gap-16 mb-20 mt-10 overflow-x-auto snap-x snap-mandatory  scrollbar-hide w-full pr-6"> */}

            <div className="flex-none snap-center">
              <ClippedImageGeneric imageUrl={MentorsCard1.src} width ={ isLargeScreen ? 348 : 200} height ={ isLargeScreen ? 530 : 300}/>
            </div>
            <div className="lg:-mt-12 relative flex-none snap-center">
              <ClippedImageGeneric imageUrl={MentorsCard2.src} width ={ isLargeScreen ? 348 : 200} height ={ isLargeScreen ? 530 : 300} />
              <Image
                width={60}
                height={60}
                src={Bubble.src}
                alt="Floating Bubble"
                className="absolute bottom-12 -right-8 z-10 w-10 md:w-24 h-auto animate-pulse"
              />
            </div>
            <div className="flex-none snap-center">
              <ClippedImageGeneric imageUrl={MentorsCard3.src} width ={ isLargeScreen ? 348 : 200} height ={ isLargeScreen ? 530 : 300} />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-primary text-2xl lg:text-3xl text-grayPrimary text-center mb-2 lg:mb-7">
              Get feedback directly from
            </h3>
            <div className="relative w-full flex justify-center items-center py-10">
              {/* Outline Text (Behind) */}
              <h1 className="absolute text-[4.2rem] lg:text-[8rem] mt-5 font-extrabold uppercase text-transparent stroke-text">
                MENTORS
              </h1>
              {/* Gradient Filled Text (Front) */}
              <h1 className=" absolute  text-[4.2rem] lg:text-[8rem]  ml-4 font-extrabold uppercase bg-gradient-to-r from-[#A400E8] to-[#F7009E] text-transparent bg-clip-text font-primary  ">
                MENTORS
              </h1>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </motion.div>
  );
};

export default Mentors;
