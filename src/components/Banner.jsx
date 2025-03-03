"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
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

const Banner = () => {
  const targetRef = useRef(null);
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Transformations based on scroll position
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]); // Shrink banner
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]); // Fade out
  


  return (
    <motion.div
      ref={targetRef}
      style={{ scale, opacity }}
      className="relative w-full mx-auto max-w-[1920px] mb-7 md:mb-10 lg:mb-20 xl:mb-0 pb-10 pt-5 lg:pb-16 min-h-[600px] lg:min-h-[800px] z-20 bg-background"
    >
      <Image
        width={100}
        height={100}
        src={RightArrow.src}
        alt="Left Arrow"
        className="absolute bottom-[5%] left-14 w-7 scale-y-[-1] hidden lg:block"
      />
      <Image
        width={200}
        height={200}
        src={ChinsiseText.src}
        alt="Chinese Text"
        className="absolute top-[0rem] right-5 lg:right-10 w-5 lg:w-10 h-auto"
      />

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.5, duration: 1.8, ease: "easeInOut" },
        }}
        className="w-full flex justify-center items-center"
      >
        <div className="relative -mt-10 lg:mt-0 w-full max-w-[1400px] flex justify-center">
          {/* Moon Image */}
          <Image
            width={1080}
            height={1080}
            src={Moon.src}
            alt="Moon"
            className="rotate-[338deg] lg:rotate-0 absolute -top-1 lg:-top-24 left-[15%] lg:left-[18%] w-[18rem] lg:w-[23rem] xl:w-[45rem] 2xl:w-[55rem]"
          />

          <div className="absolute left-[2%] lg:left-[6%] top-20 lg:-top-20 w-[25rem] xl:w-[45rem] 2xl:w-[52rem]">
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
                className="absolute w-[20rem] md:w-[22rem] lg:w-full -left-3 -top-16 lg:inset-0 lg:relative"
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
                className="absolute top-5 lg:-top-96 left-[2%] w-[24rem] md:w-full lg:left-[20rem] xl:w-[55rem] 2xl:w-[70rem]"
              />
            </motion.div>

            <div className="lg:static absolute top-[22rem] left-[18%]">
              <BannerMSAText />
            </div>

            <div className="relative">
              <Image
                height={500}
                width={500}
                src={Bubble.src}
                alt="Floating Bubble"
                className="absolute lg:-top-14 top-96 right-10 lg:-right-[35rem] w-16 md:w-24 h-auto animate-pulse"
              />
              <div className="absolute top-[30rem] lg:top-[10rem] right-[5rem] lg:-right-[30rem] animate-bounceSlow z-100">
                <Button isRounded={false} height={97.39} width={225} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
