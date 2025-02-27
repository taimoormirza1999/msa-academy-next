import React from "react";
import MentorsCard1 from "../assets/Mentors/1.png"; 
import MentorsCard2 from "../assets/Mentors/2.png"; 
import MentorsCard3 from "../assets/Mentors/3.png"; 
import { motion } from "framer-motion";
import Image from "next/image";
import Bubble from "@/assets/bubble.svg";
import SectionWrapper from "./SectionWrapper";
import ClippedImage from "./utils/ClippedImage";
import ClippedImageGeneric from "./utils/ClippedImageGeneric";

const Mentors = () => {
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
        <div className="relative h-auto mx-auto w-full md:w-95 lg:w-80">
          <div className=" relative flex gap-16 mb-2">
            <ClippedImageGeneric imageUrl={MentorsCard3.src} />
            <div className="-mt-12 relative">
              <ClippedImageGeneric imageUrl={MentorsCard2.src} />
              <Image
                width={60}
                height={60}
                src={Bubble.src}
                alt="Floating Bubble"
                className="absolute bottom-12 -right-8 z-10  w-10 md:w-24 h-auto animate-pulse"
              />
            </div>
            <ClippedImageGeneric imageUrl={MentorsCard1.src} />
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
