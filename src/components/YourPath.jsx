'use client';
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Skating from "@/assets/Path/Skating.webp";
import LeftEllipse from "@/assets/LeftEllipse.webp";
import Bubble from "@/assets/bubble.webp";
import SectionWrapper from "./SectionWrapper";
import Button from "./utils/Button";
import OutlineTextEffect from "./utils/OutlineTextEffect";
import useScrollHandler from "@/store/useScrollHandler";

// Entrance animation variant
const entrance = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export default function YourPath() {
  const { handleScroll } = useScrollHandler();
  const reduceMotion = useReducedMotion();

  // if user prefers reduced motion, show immediately
  const initialState = reduceMotion ? 'show' : 'hidden';

  return (
    <motion.section
      className="relative text-white py-0 overflow-x-visible"
      initial={initialState}
      whileInView="show"
      variants={entrance}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Image
        width={500}
        height={500}
        src={LeftEllipse} quality={50} loading="lazy"
        alt="Background Glow"
        draggable="false"
        className="absolute w-[80rem] h-[55rem] xl:h-[85rem] xl:w-[85rem] left-0 2xl:left-0 -top-20"
      />

      <SectionWrapper>
        <div className="flex flex-col-reverse mx-auto lg:flex-row-reverse items-center justify-between px-6 md:px-12 lg:px-2 relative">
          {/* Left Content */}
          <div className="relative flex flex-col items-center lg:items-start lg:w-1/2 z-10 text-center md:text-left">
            <div className="relative mx-auto w-full md:w-[70%] lg:w-full justify-start">
              <OutlineTextEffect
                title={"FIND YOUR PATH"}
                hCenter="justify-center lg:justify-start mb-2"
              />
              <div className="hidden lg:block">
              <OutlineTextEffect
                title={"AND LEARN ONLINE"}
                hCenter="justify-center lg:justify-start mb-2"
              />
              </div>
             <div className="lg:hidden">
             <OutlineTextEffect
                title={"AND LEARN"}
                hCenter="justify-center lg:justify-start mb-2"
              />
              <OutlineTextEffect
                title={"Online"}
                hCenter="justify-center lg:justify-start"
              />
             </div>

              <Image
                width={60}
                height={60}
                src={Bubble} quality={50} loading="lazy"
                draggable="false"
                alt="Floating Bubble"
                className="absolute -top-6 right-[30%] md:-top-12 w-10 md:w-16 h-auto animate-pulse"
              />
            </div>

            <p className="text-gray-300 text-center lg:text-left text-xl md:text-xl mt-4 md:w-4/5 font-primary">
              Our courses are designed for students of all skill levels. Explore
              and learn from scratch with our easy-to-follow videos, allowing
              you to progress at your own pace.
            </p>

            <div className="mt-0">
              <Button
                text="Enroll Now"
                height={97.39}
                width={225}
                handleScroll={() => handleScroll("enroll-checkout")}
              />
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            <Image
              width={600}
              height={600}
              src={Skating} quality={75} sizes="(max-width: 768px) 99vw, 30rem" loading="lazy"
              alt="Puppet Girl"
              draggable="false"
              className="w-[99%] md:w-full max-w-md md:max-w-xl"
            />
          </div>
        </div>
      </SectionWrapper>
    </motion.section>
  );
}
