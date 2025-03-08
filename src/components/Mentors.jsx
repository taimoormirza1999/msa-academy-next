import React, { useRef, useEffect } from "react";
import MentorsCard1 from "../assets/Mentors/1.png";
import MentorsCard2 from "../assets/Mentors/2.png";
import MentorsCard3 from "../assets/Mentors/3.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Bubble from "@/assets/bubble.svg";
import SectionWrapper from "./SectionWrapper";
import ClippedImageGeneric from "./utils/ClippedImageGeneric";
import useScreenStore from "@/store/useScreenStore";
import RightEllipseSVG from "./utils/icons/RightEllipseSVG";

const Mentors = () => {
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen); 
  const isLaptopMediumScreen = useScreenStore((state) => state.isLaptopMediumScreen);
  const sliderRef = useRef(null);
  const isMobileSScreen = useScreenStore((state) => state.isMobileSScreen);
  // const isMediumScreen = useScreenStore((state) => state.isMediumScreen);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 100;
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
      className="relative h-auto bg-cover bg-center mt-5 md:mb-8 md:mt-16 lg:mt-24 lg:mb-10  w-[100%] md:w-full lg:w-95 2xl:w-85 mx-auto max-w-[1920px]"
    >
      <SectionWrapper>
        <div className="relative h-auto mx-auto w-full md:w-95 xl:w-[90%] flex flex-col-reverse lg:flex-col">
          <div
            ref={sliderRef}
            className="mt-10 pb-12 lg:pb-0 flex gap-10 md:gap-8 xl:gap-16 justify-start snap-x snap-mandatory scrollbar-hide w-full overflow-x-auto lg:overflow-visible  overflow-y-visible"
          >
            <div className="flex-none snap-start lg:mx-0 overflow-y-visible pl-5 lg:pl-0">
              <ClippedImageGeneric
                imageUrl={MentorsCard1.src}
                width={isLaptopMediumScreen ? 280:isLargeScreen ? 348 : 180}
                height={ isLaptopMediumScreen ? 450 :isLargeScreen ? 530 : 300}
              />
            </div>
            <div className="mt-10 md:mt-10 lg:-mt-12 relative flex-none snap-center lg:mx-0 overflow-y-visible">
              <ClippedImageGeneric
                imageUrl={MentorsCard2.src}
                width={isLaptopMediumScreen ? 280:isLargeScreen ? 348 : 220}
                height={isLaptopMediumScreen ? 450 :isLargeScreen ? 530 : 350}
              />
              <Image
                width={60}
                height={60}
                src={Bubble.src}
                alt="Floating Bubble"
                className="absolute -bottom-12 md:bottom-5 lg:bottom-12 right-[38%]  xl:-right-8 z-10 w-12 md:w-16 lg:w-24 h-auto animate-pulse"
              />
            </div>

           <div 
        className="absolute left-[50%] -translate-x-[50%] -bottom-[98%]  xl:bottom-10 -z-10 ">
      <RightEllipseSVG width={isLargeScreen ? 2786 : 1086} height={isLargeScreen ? 2000 : 1086} />
      </div>
            <div className="flex-none snap-center lg:mx-0">
              <ClippedImageGeneric
                imageUrl={MentorsCard3.src}
                width={isLaptopMediumScreen ? 280:isLargeScreen ? 348 : 210}
                height={isLaptopMediumScreen ? 450 :isLargeScreen ? 530 : 350}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h3 className="font-primary text-2xl lg:text-3xl text-grayPrimary text-center mb-2 lg:mb-7">
              Get feedback directly from
            </h3>
            <div className="relative w-full flex justify-center items-center py-10">
              {/* Outline Text (Behind) */}
              <h1
                className={`absolute ${
                  isMobileSScreen ? "text-[3.3rem]" : "text-[4.3rem]"
                }  lg:text-[8rem] mt-3.5 lg:mt-5 font-extrabold uppercase text-transparent stroke-text`}
              >
                MENTORS
              </h1>
              {/* Gradient Filled Text (Front) */}
              <h1
                className={`absolute  ${
                  isMobileSScreen ? "text-[3.3rem]" : "text-[4.3rem]"
                } lg:text-[8rem] ml-3 lg:ml-4 font-extrabold uppercase bg-gradient-to-r from-[#A400E8] to-[#F7009E] text-transparent bg-clip-text font-primary `}
              >
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
