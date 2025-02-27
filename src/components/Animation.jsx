"use client";
import Image from "next/image";
import React from "react";
import PuppetGirl from "../assets/SecondSection/PuppetGirl.png";
import LeftEllipse from "../assets/LeftEllipse.png";
import Bubble from "@/assets/bubble.svg";
import SectionWrapper from "./SectionWrapper";
import Button from "./utils/Button";
import VideoGallery from "./VideoSections";
import OutlineTextEffect from "./utils/OutlineTextEffect";

function Animation() {
  return (
    
    <section className="relative text-white py-16 overflow-visible">
       <div className="absolute lg:-right-10   w-full h-full overflow-visible ">
              <Image
                width={500}
                height={500}
                src={LeftEllipse.src}
                alt="Background Glow"
                className="w-[25rem] h-[70rem] object-cover md:object-contain max-w-full inset-0 overflow-visible "
              />
            </div>
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-2 relative overflow-visible">
          {/* Left Content */}
          <div className="relative md:w-1/2 z-10 text-center md:text-left">
            <div className="relative">
              <OutlineTextEffect title={"Animation Courses"} hCenter="none" />
              <Image
                width={60}
                height={60}
                src={Bubble.src}
                alt="Floating Bubble"
                className="absolute -top-6 left-10 md:-top-20 md:-left-12 w-10 md:w-20 h-auto animate-pulse"
              />
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl mt-4 md:w-4/5 font-primary">
              Our courses are designed for students of all skill levels. Explore
              and learn from scratch with our easy-to-follow videos, allowing
              you to progress at your own pace.
            </p>

            {/* Call-to-Action Button */}
            <div className="mt-0">
              <Button text="Enroll Now" />
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center overflow-visible">
            {/* Puppet Girl Image */}
            <Image
              width={600}
              height={600}
              src={PuppetGirl.src}
              alt="Puppet Girl"
              className="w-[90%] md:w-full max-w-md md:max-w-xl"
            />

            {/* Wrapper for Left Ellipse to prevent overflow */}
          
          </div>
        </div>
      <VideoGallery />
      </SectionWrapper>

      {/* Video Gallery Section */}
    </section>
  );
}

export default Animation;
