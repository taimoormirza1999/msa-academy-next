"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Button from "./utils/Button";
import msaText from "../assets/msa_text.png";
import RightArrow from "@/assets/rightArrows.png";
import ChinsiseText from "@/assets/chinise.png";
import Moon from "@/assets/moon.png";
import RightLady from "@/assets/RightLady.png";
import LeftLady from "@/assets/LeftLady.png";
import ps from "@/assets/ps.png";
import C4D from "@/assets/C4D.png";
import Blender from "@/assets/Blender.png";
import Bubble from "@/assets/bubble.svg";
import DownElipse from "@/assets/DownElipse.png";
const GradeinetOutlineText = ({ text, classes }) => {
  return (
    <div className="absolute w-full flex justify-center items-center py-10">
      {/* Outline Text (Behind) */}
      <h1 className="absolute text-[9rem] mt-5 font-extrabold uppercase text-transparent stroke-text">
        {text}
      </h1>

      {/* Gradient Filled Text (Front) */}
      <h1 className=" absolute  text-[9rem]  ml-4 font-extrabold uppercase bg-gradient-to-r from-[#A400E8] to-[#F7009E] text-transparent bg-clip-text font-primary  ">
        {text}
      </h1>
    </div>
  );
};

const Banner = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <motion.div
      initial={{ opacity: 0, y: isLargeScreen ? 150 : 70 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1.8, ease: "easeInOut" },
      }}
      viewport={isLargeScreen ? { once: true } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 10, duration: 1 }}
      className="relative w-full mx-auto max-w-[1920px] mb-7 md:mb-10 lg:mb-20 xl:mb-0 pb-10 pt-5 lg:pb-16 h-[80vh] z-20 "
    >
      {/* Left Arrow */}
      <Image
        width={100}
        height={100}
        src={RightArrow.src}
        alt="Left Arrow"
        className="absolute -bottom-6 left-14 w-7 scale-y-[-1]"
      />

      {/* Chinese Text */}
      <Image
        width={200}
        height={200}
        src={ChinsiseText.src}
        alt="Chinese Text"
        className="absolute bottom-1/2 right-5 lg:right-10 w-5 lg:w-10 h-auto"
      />

      {/* Moon */}
      <Image
        width={1080}
        height={1080}
        src={Moon.src}
        alt="Moon"
        className="absolute -top-24 left-[18%] lg:w-[60rem] "
      />
      <div className="relative">
        <div className="realtive absolute  left-[6%] -top-20 w-[55%] lg:w-[52rem]">
          {/* Left Lady */}
          <Image
            width={1080}
            height={1080}
            src={LeftLady.src}
            alt="Left Lady"
            className="inset-0"
          />
          {/* all tools images */}
          <div className="flex flex-col items-center absolute space-y-7  left-[6%] top-32">
            <motion.div
              initial={{ opacity: 0,scale:0.9, y: 100 }}
              whileInView={{
                y: 0,
                scale:1,
                opacity: 1,
                transition: { delay: 0.2, duration: 1.8, ease: "easeInOut" },
              }}
            >
              <Image
                width={100}
                height={100}
                src={C4D.src}
                alt="Left Arrow"
                className=" w-24 scale-y-[-1]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0,scale:0.9, y: 100 }}
              whileInView={{
                y: 0,
                scale:1,
                opacity: 1,
                transition: { delay: 0.4, duration: 1.8, ease: "easeInOut" },
              }}
            >
              {" "}
              <Image
                width={100}
                height={100}
                src={ps.src}
                alt="Left Arrow"
                className=" w-16 scale-y-[-1]"
              />
            </motion.div>
            <motion.div
              initial={{ delay: 0.8, opacity: 0,scale:0.8, y: 100 }}
              whileInView={{
                y: 0,
                scale:1,
                opacity: 1,
                transition: { duration: 1.8, ease: "easeInOut" },
              }}
            >
              <Image
                width={100}
                height={100}
                src={Blender.src}
                alt="Left Arrow"
                className=" w-14 scale-y-[-1]"
              />
            </motion.div>
          </div>
        </div>
        {/* Right Lady */}
        <Image
          width={1080}
          height={1080}
          src={RightLady.src}
          alt="Right Lady"
          className="absolute right-[20%] lg:w-[64rem] -top-8 z-10"
        />
      </div>
      {/* Floating Bubble */}
      <Image
        width={60}
        height={60}
        src={Bubble.src}
        alt="Floating Bubble"
        className="absolute -bottom-6 right-32 w-10 md:w-20 h-auto animate-pulse"
      />

      <div className="absolute bottom-[39%]  left-[31%] ">
        <GradeinetOutlineText text={"MSA"} />
      </div>
      <div className="absolute bottom-[25%] left-[50%] ">
        <GradeinetOutlineText text={"ACADEMY"} />
      </div>

      {/* Enroll Button */}
      <div className="absolute -bottom-2 right-[30%] animate-bounceSlow mt-9 md:mt-auto z-100">
        <Button isRounded={false} />
      </div>
      <motion.div
        className="absolute bottom-10 md:right-16 lg:right-28 md:left-auto left-0 right-0 z-10 mx-auto w-max"
        style={{ top: "calc(100% - 35%)" }}
      >
        <Image
          height={500}
          width={500}
          src={msaText.src}
          alt="MSA Academy Text"
          className="-mt-7 -ml-1 w-40 h-auto shadow-2xl object-contain mb-3 md:hidden shadow-pink200/65"
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
