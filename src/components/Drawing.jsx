import React from "react";
import { motion,useReducedMotion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import OutlineTextEffect from "./utils/OutlineTextEffect";
import Bubble from "@/assets/msa-club-academy-bubble-background.webp";
import RightEllipseSVG from "./utils/icons/RightEllipseSVG";

const Drawing = () => {
  const reduceMotion = useReducedMotion();
  return (
    <SectionWrapper>
      <motion.div
        initial={reduceMotion ? {} : { opacity: 0, y: 100 }}
        whileInView={reduceMotion ? {} : {
          y: 0,
          opacity: 1,
          transition: { duration: 1.8, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="relative w-full md:w-99 h-auto bg-cover bg-center lg:-mt-14  mb-10 md:mb-20 lg:mb-10  z-10"
        id="drawing-course"
      >
        <div className="relative h-auto mx-auto  w-99 md:w-98 lg:w-[90%] xl:w-[93%]">
          <Image
            height={1080}
            width={1920}
            src={"https://res.cloudinary.com/da6qujoed/image/upload/f_auto,q_auto,w_1200/v1743794654/drawing_banner_hxjtl2.png"}
            quality={75}
            loading="lazy"
            sizes="(max-width: 768px) 99vw, 90vw"
            alt="Banner"
            draggable="false"
            className="w-full h-[37vh] sm:h-[60vh] md:h-full lg:h-full 2xl:h-3/4 object-cover md:object-contain"
          />
        </div>
        <div className="relative w-full mt-6 z-20">
          <OutlineTextEffect title={"DRAWING COURSES"} />
          <Image
            width={60}
            height={60}
            src={Bubble.src}
            alt="Floating Bubble"
            draggable="false"
          className="absolute bottom-[13rem] md:bottom-[25rem]  lg:bottom-[25rem] xl:bottom-[30rem] left-2  md:left-24 w-12 md:w-24 h-auto animate-pulse -z-30"
          />
        </div>
        <div className="absolute -left-[40%] md:-left-[10%] lg:-left-[10%]  -top-72 lg:top-0  overflow-visible md:scale-x-[-1] -z-20 xl:z-10 ">
          <RightEllipseSVG height={900} width={900} />
        </div>
        {/* Description */}
        <p className="text-center text-grayPrimary text-lg md:text-xl mt-4 md:w-4/5 font-primary mx-auto z-50">
          We believe everyone is an artist, Join us to
          <br />
          unleash the artistic talent within you.
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default Drawing;
