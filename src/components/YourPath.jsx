"use client";
import Image from "next/image";
import React from "react";
import Skating from "@/assets/Path/Skating.png";
import LeftEllipse from "@/assets/LeftEllipse.png";
import Bubble from "@/assets/bubble.svg";
import SectionWrapper from "./SectionWrapper";
import Button from "./utils/Button";
import OutlineTextEffect from "./utils/OutlineTextEffect";
import useScrollHandler from "@/store/useScrollHandler";
import useScreenStore from "@/store/useScreenStore";

function YourPath() {
  const {handleScroll } = useScrollHandler();
  const is4KLScreen = useScreenStore((state) => state.is4kLargeScreen);

  return (
    <section className="relative  text-white py-0 overflow-x-visible  ">
      <Image
        width={500}
        height={500}
        src={LeftEllipse.src}
        alt="Background Glow"
        draggable="false"
        // w-[65rem] h-[65rem]
        className=" absolute  w-[80rem] h-[55rem]  xl:h-[85rem] xl:w-[85rem] left-[0%] 2xl:left-[0%] -top-20 "
      />

      <SectionWrapper>
        <div className="flex flex-col-reverse mx-auto lg:flex-row-reverse items-center justify-between px-6 md:px-12 lg:px-2 relative">
          {/* Left Content */}
          <div className="relative flex flex-col items-center lg:items-start lg:w-1/2 z-10 text-center md:text-left">
            {/* Title */}
            <div className="relative  w-full md:w-[70%] lg:w-full justify-start ">
              <br />
              {/* AND LEARN ONLINE */}
              <OutlineTextEffect
                title={"FIND YOUR PATH"}
                hCenter="justify-center lg:justify-start "
                classes="4kl:text-8xl mb-2"
              />
              <OutlineTextEffect
                title={"AND LEARN ONLINE"}
                hCenter="justify-center lg:justify-start"
                classes="4kl:text-8xl"
              />

              <Image
                width={60}
                height={60}
                src={Bubble.src}
                draggable="false"
                alt="Floating Bubble"
                className="absolute -top-6 right-[30%]  md:-top-12  w-10 md:w-16 4kl:w-36 h-auto animate-pulse"
              />
            </div>

            {/* Description */}
            <p className="text-gray-300 text-center lg:text-left text-xl md:text-xl mt-4 md:w-4/5 font-primary 4kl:text-6xl">
              Our courses are designed for students of all skill levels. Explore
§              and learn from scratch with our easy-to-follow videos, allowing
              you to progress at your own pace.
            </p>

            {/* Call-to-Action Button */}
            <div className="mt-0">
              <Button text="Enroll Now" height={is4KLScreen?250:97.39} width={is4KLScreen?550:225} handleScroll={()=>handleScroll("enroll-checkout")} textSize="text-2xl 4kl:text-6xl" />
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            <Image
              width={600}
              height={600}
              src={Skating.src}
              alt="Puppet Girl"
              draggable="false"
              className="w-[99%] md:w-full lg:w-[120%] xl:w-[130%] 2xl:w-[140%] 4kl:w-[40vw]"
            />
            {/* Puppet Girl Image */}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default YourPath;
