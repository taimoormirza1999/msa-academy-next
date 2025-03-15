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
import { motion } from "framer-motion";
import useScreenStore from "@/store/useScreenStore";

function Animation() {
  const is4KLScreen = useScreenStore((state) => state.is4kLargeScreen);
  const {handleScroll } = useScrollHandler();
  return (
    <motion.section
    initial={{ opacity: 0, y: 100 }}
    whileInView={{
      y: 0,
      opacity: 1,
      transition: { duration: 1.8, ease: "easeInOut" },
    }}
      className="relative text-white pt-20 pb-0 lg:py-16 4kl:min-h-[80vh] "
      id="animation-course"
    >
      <SectionWrapper>
        <div className="relative">
          <div className="flex flex-col-reverse mx-auto lg:flex-row items-center w-full lg:w-[90%] justify-between px-6  md:px-6 lg:px-2 relative  ">
            {/* Left Content */}
            <div className="relative flex flex-col items-center lg:items-start xl:items-start lg:w-1/2 z-10 text-center md:text-left">
              <div className="relative w-full lg:w-full ggg  ">
                <OutlineTextEffect
                  title={"Animation Courses"}
                  classes="lg:text-left 4kl:text-8xl "
                  hCenter="justify-start"
                />
                <Image
                  width={60}
                  height={60}
                  src={Bubble.src}
                  alt="Floating Bubble"
                  className="absolute -top-72 left-10 md:-top-[29rem] lg:-top-16 4kl:-top-40 md:left-14 lg:-left-12 w-10 md:w-16 lg:w-14 4kl:w-40 h-auto animate-pulse"
                />
              </div>

              {/* Description */}
              <p className="text-gray-300 text-center lg:text-left text-lg md:text-xl 4kl:text-6xl  mt-4 md:w-4/5 font-primary">
                Our courses are designed for students of all skill levels.
                Explore and learn from scratch with our easy-to-follow videos,
                allowing you to progress at your own pace.
              </p>

              {/* Call-to-Action Button */}
              <div className="mt-0">
                <Button text="Enroll Now" height={is4KLScreen?250:97.39} width={is4KLScreen?500:225} handleScroll={()=>handleScroll("enroll-checkout")} textSize="text-2xl 4kl:text-6xl" />
              </div>
            </div>

            {/* Right Image Section */}
            {/* <div className="relative w-full lg:w-1/2 flex items-center justify-center "> */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-center overflow-visible">
              {/* Puppet Girl Image */}
              <Image
                width={600}
                height={600}
                src={PuppetGirl.src}
                draggable="false"
                alt="Puppet Girl"
                className="w-[90%] md:w-[70%] lg:w-full  4kl:w-[48vw] "
              />
              <div className="absolute right-0 top-0 lg:right-5 w-full h-full  overflow-visible">
                <RightEllipseSVG height={is4KLScreen?3000:900} width={is4KLScreen?3000:900} />
              </div>
            </div>
          </div>
        </div>
        <VideoGallery />
      </SectionWrapper>
    </motion.section>
  );
}

export default Animation;
