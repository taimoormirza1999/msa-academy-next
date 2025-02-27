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
      <h1 className="absolute lg:text-[7rem] 2xl:text-[9rem] mt-5 font-extrabold uppercase text-transparent stroke-text">
        {text}
      </h1>
      <h1 className="absolut lg:text-[7rem]  2xl:text-[9rem] ml-4 font-extrabold uppercase bg-gradient-to-r from-[#A400E8] to-[#F7009E] text-transparent bg-clip-text font-primary">
        {text}
      </h1>
    </div>
  );
};

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
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <motion.div
      initial={{ opacity: 0, y: isLargeScreen ? 150 : 70 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1.8, ease: "easeInOut" } }}
      viewport={isLargeScreen ? { once: true } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 10, duration: 1 }}
      className="relative w-full mx-auto max-w-[1920px] mb-7 md:mb-10 lg:mb-20 xl:mb-0 pb-10 pt-5 lg:pb-16 h-[80vh] z-20 overflow-x-clip"
    >
      <Image width={100} height={100} src={RightArrow.src} alt="Left Arrow" className="absolute -bottom-6 left-14 w-7 scale-y-[-1]" />
      <Image width={200} height={200} src={ChinsiseText.src} alt="Chinese Text" className="absolute bottom-1/2 right-5 lg:right-10 w-5 lg:w-10 h-auto" />
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0.3, duration: 1.8, ease: "easeInOut" } }}>
        <Image width={1080} height={1080} src={Moon.src} alt="Moon" className="absolute -top-24 left-[18%] xl:w-[45rem] 2xl:w-[60rem]" />
      </motion.div>
      <div className="relative">
        <div className="absolute left-[6%] -top-20 w-[55%] xl:w-[45rem] 2xl:w-[52rem]">
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0.1, duration: 1.8, ease: "easeInOut" } }}>
            <Image width={1080} height={1080} src={LeftLady.src} alt="Left Lady" className="inset-0" />
          </motion.div>
          {/* Optimized all tools images */}
          <motion.div className="flex flex-col items-center absolute space-y-7 left-[6%] top-32" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[{ src: C4D, delay: 0.6, size: "w-24" }, { src: ps, delay: 0.8, size: "w-16" }, { src: Blender, delay: 1, size: "w-14" }].map((tool, index) => (
              <motion.div key={index} variants={toolVariants} custom={tool.delay}>
                <Image width={100} height={100} src={tool.src.src} alt="Tool" className={`${tool.size} scale-y-[-1]`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4, duration: 1.8, ease: "easeInOut" } }} className="z-10">
          <Image width={1080} height={1080} src={RightLady.src} alt="Right Lady" className="absolute right-[20%] xl:w-[55rem] 2xl:w-[64rem] -top-8 z-10" />
        </motion.div>
      </div>
      <Image width={60} height={60} src={Bubble.src} alt="Floating Bubble" className="absolute -bottom-10 right-32 w-10 md:w-24 h-auto animate-pulse" />
      <div className="absolute lg:bottom-[44%] 2xl:bottom-[39%] left-[31%]">
        <GradeinetOutlineText text={"MSA"} />
      </div>
      <div className="absolute lg:bottom-[30%] 2xl:bottom-[25%] lg:left-[44%] 2xl:left-[50%]">
        <GradeinetOutlineText text={"ACADEMY"} />
      </div>
      <div className="absolute -bottom-2 lg:right-[18%] 2xl:right-[30%] animate-bounceSlow mt-9 md:mt-auto z-100">
        <Button isRounded={false} />
      </div>
     
      <Image height={500} width={500} src={DownElipse.src} alt="Elipse Top" className="w-full absolute -bottom-10 z-20 scale-y-[1] opacity-50 overflow-auto" />
    </motion.div>
  );
};

export default Banner;
