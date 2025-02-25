"use client";
import Image from "next/image";
import React from "react";
import PuppetGirl from "../assets/SecondSection/PuppetGirl.png";
import LeftEllipse from "../assets/SecondSection/LeftEllipse.png";
import Bubble from "../assets/SecondSection/Bubble.png";
import SectionWrapper from "./SectionWrapper";
// import CTAButton from "./utils/CTAButton";
import Button from "./utils/Button";
import VideoSection from "./VideoSection";
import VideoGallery from "./VideoSections";

function Animation() {
  return (
    <section className="relative bg-gradient-to-b from-[#0B0211] to-[#1A0B2E] text-white py-16">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-2 relative">
          {/* Left Content */}
          <div className="relative md:w-1/2 z-10 text-center md:text-left">
            {/* Floating Bubble */}
            <Image
              width={60}
              height={60}
              src={Bubble.src}
              alt="Floating Bubble"
              className="absolute -top-6 -left-8 md:-top-12 md:-left-10 w-10 md:w-16 h-auto animate-pulse"
            />
            
            {/* Title */}
            <h2 className="font-primary text-3xl md:text-5xl uppercase leading-tight whitespace-nowrap   ">
              Animation Courses
            </h2>

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
          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            {/* Background Ellipse */}
            <Image
              width={500}
              height={500}
              src={LeftEllipse.src}
              alt="Background Glow"
              className="absolute -z-10 w-[90%] md:w-[110%] opacity-40"
            />

            {/* Puppet Girl Image */}
            <Image
              width={600}
              height={600}
              src={PuppetGirl.src}
              alt="Puppet Girl"
              className="w-[90%] md:w-full max-w-md md:max-w-xl"
            />
          </div>
        </div>
      </SectionWrapper>
      <VideoGallery/>
    </section>
  );
}

export default Animation;
