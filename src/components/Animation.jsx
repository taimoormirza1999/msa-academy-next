"use client";
import Image from "next/image";
import React from "react";
import PuppetGirl from "../assets/SecondSection/PuppetGirl.png";
import Bubble from "@/assets/bubble.svg";
import SectionWrapper from "./SectionWrapper";
import Button from "./utils/Button";
import VideoGallery from "./VideoSections";
import OutlineTextEffect from "./utils/OutlineTextEffect";
import RightEllipseSVG from "./utils/icons/RightEllipseSVG";
import useScrollHandler from "@/store/useScrollHandler";
import { motion,useReducedMotion } from "framer-motion";

function Animation() {
  const {handleScroll } = useScrollHandler();
  const shouldReduce = useReducedMotion();
  return (
    <motion.section
    initial={shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    whileInView={shouldReduce ? {} : { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }}}
      className="relative text-white pt-20 pb-0 lg:py-20 lg:pt-24"
      id="animation-course"
    >
      <SectionWrapper>
        <div className="relative">
          <div className="flex flex-col-reverse mx-auto lg:flex-row items-center w-full lg:w-[90%] justify-between px-6  md:px-6 lg:px-2 relative ">
            {/* Left Content */}
            <div className="relative flex flex-col items-center lg:items-start xl:items-start lg:w-1/2 z-10 text-center md:text-left">
              <div className="relative w-full lg:w-full ">
                <OutlineTextEffect
                  title={"Animation Courses"}
                  classes="lg:text-left xl:-ml-14"
                />
                <Image
                  width={60}
                  height={60}
                  src={Bubble.src}
                  alt="Floating Bubble"
                  className="absolute -top-72 left-10 md:-top-[29rem] lg:-top-16 md:left-14 lg:-left-12 w-10 md:w-16 lg:w-14 h-auto animate-pulse"
                />
              </div>

              {/* Description */}
              <p className="text-gray-300 text-center lg:text-left text-lg md:text-xl mt-4 md:w-4/5 font-primary">
                Our courses are designed for students of all skill levels.
                Explore and learn from scratch with our easy-to-follow videos,
                allowing you to progress at your own pace.
              </p>

              {/* Call-to-Action Button */}
              <div className="mt-0">
                <Button text="Enroll Now" height={97.39} width={225} handleScroll={()=>handleScroll("enroll-checkout")} />
              </div>
            </div>

            {/* Right Image Section */}
            {/* <div className="relative w-full lg:w-1/2 flex items-center justify-center "> */}
            <motion.div   initial="hidden"
            whileInView="show"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { opacity: 1, scale: 1 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2, ease: "easeInOut", type: "spring" }} className="relative w-full lg:w-1/2 flex items-center justify-center overflow-visible z-10">
              {/* Puppet Girl Image */}
             
              <Image
                width={600}
                height={600}
                src={PuppetGirl.src}
                draggable="false"
                alt="Puppet Girl"
                className="w-[90%] md:w-[70%] lg:w-full max-w-md md:max-w-xl"
              />
            
              <div className="absolute right-0 top-0 lg:right-5 w-full h-full   overflow-visible">
                <RightEllipseSVG height={900} width={900} />
              </div>
            </motion.div>
          </div>
        </div>
        <VideoGallery />
      </SectionWrapper>
    </motion.section>
  );
}

export default Animation;
