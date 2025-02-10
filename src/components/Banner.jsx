import React from "react";
import BannerImage from "../assets/hero_banner.png";
import msaText from "../assets/msa_text.png";
import { motion } from "framer-motion";
import Button from "./utils/Button";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Banner = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <motion.div
      initial={isLargeScreen ? { opacity: 0, scale: 0.87 } : false}
      whileInView={
        isLargeScreen
          ? {
              opacity: 1,
              scale: 1,
              transition: { duration: 1.6, ease: "easeInOut" },
            }
          : {}
      }
      viewport={isLargeScreen ? { once: true } : {}}
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 1,
      }}
      className="relative w-full 2xl:w-85 h-auto mt-16 md:mt-20 lg:mt-24  mx-auto md:w-90 lg:w-90 xl:w-[93%] max-w-[1920px] mb-7 md:mb-10 lg:mb-20 xl:mb-0  pb-10 pt-16 lg:pb-16 "
    >
      {/* Parallax Background Image */}
      {/* <motion.span > */}
      <img
        layout="responsive"
        alt="Banner"
        src={BannerImage.src}
        className=" w-full mx-auto lg:w-90 2xl:w-93  h-[44vh] sm:h-[60vh] lg:h-auto object-cover object-[25%_30%] rounded-lg scale-105 banner_img"
      />
      {/* </motion.span> */}

      {/* Parallax Foreground Content */}
      <motion.div
        className="absolute bottom-10 md:right-16 lg:right-28 md:left-auto left-0 right-0 z-10 mx-auto w-max"
        style={{ transform: "none", top: "calc(100% - 35%)" }}
      >
        <Image
          height={500}
          width={500}
          src={msaText.src}
          alt="MSAAcademy-text"
          className="-mt-7 -ml-1 w-40 h-auto shadow-2xl object-contain mb-3 md:hidden shadow-pink200/65"
        />
        <div className="animate-bounceSlow mt-8 md:mt-auto z-100 ">
          <Button isRounded={false} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
