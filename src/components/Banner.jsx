"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Button from "./utils/Button";
import RightArrow from "@/assets/rightArrows.png";
import ChinsiseText from "@/assets/chinise.png";
import Moon from "@/assets/moon.png";
import RightLady from "@/assets/RightLady.png";
import LeftLady from "@/assets/LeftLady.png";
import ps from "@/assets/ps.png";
import C4D from "@/assets/C4D.png";
import Blender from "@/assets/Blender.png";
import Bubble from "@/assets/bubble.svg";
import BannerMSAText from "./BannerMSAText";
import RightEllipseSVG from "./utils/icons/RightEllipseSVG";
import useScrollHandler from "@/store/useScrollHandler";
import useScreenStore from "@/store/useScreenStore";

const toolVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 100 },
  visible: (delay) => ({
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { delay, duration: 1.8, ease: "easeInOut" },
  }),
};

const Banner = () => {
  // const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);

  const { handleScroll } = useScrollHandler();
  return (
    <motion.div className="relative w-full mx-auto max-w-[1920px]  mb-7 md:mb-10 lg:mb-20 xl:mb-0 pb-10 pt-5 lg:pb-16 min-h-[600px] lg:min-h-[950px] xl:min-h-[70vh] 2xl:min-h-[1150px] z-20 overflow-visible">
      <div className="absolute left-[50%] -translate-x-[50%] -bottom-40 xl:-bottom-10 -z-50">
        <RightEllipseSVG
          width={isLargeScreen ? 2786 : 1600}
          height={isLargeScreen ? 1000 : 600}
        />
      </div>
      <Image
        width={100}
        height={100}
        src={RightArrow.src}
        alt="Left Arrow"
        className="absolute bottom-[20%] lg:bottom-[25%] left-14 w-7 scale-y-[-1] hidden lg:block"
      />
      <Image
        width={200}
        height={200}
        src={ChinsiseText.src}
        alt="Chinese Text"
        className="absolute top-[0rem] right-5 lg:right-10 w-5 lg:w-10 h-auto"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.5, duration: 1.8, ease: "easeInOut" },
        }}
        className="flex justify-center items-center mx-auto"
      >
        <div className="relative -mt-10 lg:mt-0 xl:mt-10 w-full md:w-[85%] lg:w-[90%] xl:w-full max-w-[1400px] flex justify-center ">
          <Image
            width={1080}
            height={1080}
            src={Moon.src}
            alt="Moon"
            priority
            className="rotate-[338deg] lg:rotate-0 absolute -top-1 md:-top-5 lg:-top-10 xl:-top-24 left-[15%] lg:left-[20%] xl:left-[18%] w-[19rem] md:w-[24rem] lg:w-[33rem] xl:w-[45rem] 2xl:w-[50rem]"
          />
          <div className="absolute left-[4%] lg:left-[6%] top-20 lg:-top-5 xl:-top-20 w-[92vw] md:w-[80vw] lg:w-[55vw] xl:w-[46rem] 2xl:w-[48rem]">
            {/* Left Lady */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.2, duration: 1.8, ease: "easeInOut" },
              }}
              className="relative z-10"
            >
              <Image
                width={1080}
                height={1080}
                src={LeftLady.src}
                alt="Left Lady"
                priority
                className="absolute w-[20rem]  md:w-[29rem] lg:w-full -left-3 -top-16 lg:inset-0 lg:relative"
              />
            </motion.div>

            {/* Right Lady */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.6, duration: 1.8, ease: "easeInOut" },
              }}
              className="relative z-20"
            >
              <Image
                width={1080}
                height={1080}
                src={RightLady.src}
                alt="Right Lady"
                priority
                className="absolute -top-3 left-[5%] lg:-top-96 w-[25rem] md:w-[50rem] lg:w-full xl:w-[55rem] 2xl:w-[70rem] lg:left-[13rem] xl:left-[20rem] "
              />
            </motion.div>

            <div className="lg:static absolute top-[17rem] md:top-[18rem] lg:top-[17rem] left-[18%]">
              <BannerMSAText />
            </div>

            <div className="relative">
              <Image
                height={500}
                width={500}
                src={Bubble.src}
                alt="Floating Bubble"
                priority
                className="absolute top-80 md:top-96 lg:-top-14  right-10 lg:-right-[15rem] xl:-right-[35rem] w-12 md:w-20 lg:w-24 h-auto animate-pulse"
              />
              <div className="absolute top-[24rem] md:top-[30rem] lg:top-[10rem] right-[5rem] lg:-right-[18rem] xl:-right-[30rem] animate-bounceSlow z-50">
                <Button
                  isRounded={false}
                  height={97.39}
                  width={225}
                  handleScroll={() => handleScroll("enroll-checkout")}
                />
              </div>
            </div>
            {/* Optimized all tools images */}
            <motion.div
              className="flex flex-col items-center absolute space-y-3.5 lg:space-y-7 left-[1%] lg:left-[6%] -top-16 md:-top-10 lg:top-7 xl:top-32"
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
            >
              {[
                { src: C4D, delay: 1, size: "w-16 md:w-20 lg:w-24" },
                { src: ps, delay: 1.2, size: "w-10 md:w-14 lg:w-16" },
                { src: Blender, delay: 1.4, size: "w-8 md:w-10 lg:w-14" },
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  variants={toolVariants}
                  custom={tool.delay}
                >
                  <Image
                    width={100}
                    height={100}
                    src={tool.src.src}
                    alt="Tool"
                    className={`${tool.size} scale-y-[-1]`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
