"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import { useMediaQuery } from "react-responsive";
import Button from "./utils/Button";
import RightArrow from "@/assets/rightArrows.png";
import ChinsiseText from "@/assets/chinise.png";
import Moon from "@/assets/moon.png";
import RightLady from "@/assets/RightLady.png";
import LeftLady from "@/assets/LeftLady.png";
import ps from "@/assets/ps.png";
import C4D from "@/assets/C4D.png";
import Blender from "@/assets/Blender.png";
import Bubble from "@/assets/bubble.svg";
import BannerMSAText from "./BannerMSAText";
import RightEllipseSVG from "./utils/icons/RightEllipseSVG";
import useScrollHandler from "@/store/useScrollHandler";
import useScreenStore from "@/store/useScreenStore";

const toolVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 100 },
  visible: (delay) => ({
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { 
      delay, 
      duration: 2,
      ease: [0.43, 0.13, 0.23, 0.96],
      type: "tween"
    },
  }),
  hover: {
    scale: 1.1,
    rotate: 10,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const floatingAnimation = {
  y: [-10, 10],
  transition: {
    y: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2,
      ease: "easeInOut"
    }
  }
};

const Banner = () => {
  // const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);

  const { handleScroll } = useScrollHandler();
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div className="relative w-full mx-auto max-w-[1920px]  mb-7 md:mb-10 lg:mb-20 xl:mb-0 pb-10 pt-5 lg:pb-16 min-h-[600px] lg:min-h-[950px] xl:min-h-[70vh] 2xl:min-h-[1150px] z-20 overflow-visible">
      <div className="absolute left-[50%] -translate-x-[50%] -bottom-40 xl:-bottom-10 -z-50">
        <RightEllipseSVG
          width={isLargeScreen ? 2786 : 1600}
          height={isLargeScreen ? 1000 : 600}
        />
      </div>

      <motion.div
        animate={floatingAnimation}
        // style={{ x: scrollY * -0.2 }}
      >
        <Image
        width={100}
          height={100}
          src={RightArrow.src}
          alt="Left Arrow"
          draggable="false"
          className="absolute bottom-[20%] lg:-bottom-[50vh] left-14 w-7 scale-y-[-1] hidden lg:block transform-gpu"
        />
      </motion.div>

      <motion.div
        animate={floatingAnimation}
        style={{ x: scrollY * 0.2 }}
      >
        <Image
          width={200}
          height={200}
          src={ChinsiseText.src}
          alt="Chinese Text"
          draggable="false"
          className="absolute top-[0rem] right-5 lg:right-10 w-5 lg:w-10 h-auto transform-gpu"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.5, duration: 1.8, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="flex justify-center items-center mx-auto transform-gpu"
      >
        <div className="relative -mt-10 lg:mt-0 xl:mt-10 w-full md:w-[85%] lg:w-[90%] xl:w-full max-w-[1400px] flex justify-center">
          <Image
            width={1080}
            height={1080}
            src={Moon.src}
            alt="Moon"
            priority
            draggable="false"
            className="rotate-[338deg] lg:rotate-0 absolute -top-1 md:-top-5 lg:-top-10 xl:-top-24 left-[15%] lg:left-[20%] xl:left-[18%] w-[19rem] md:w-[24rem] lg:w-[33rem] xl:w-[45rem] 2xl:w-[50rem] transform-gpu"
          />
          <div className="absolute left-[4%] lg:left-[6%] top-20 lg:-top-5 xl:-top-20 w-[92vw] md:w-[80vw] lg:w-[55vw] xl:w-[46rem] 2xl:w-[48rem]">
            {/* Left Lady */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.2, duration: 1.8, ease: "easeInOut" },
              }}
              viewport={{ once: true }}
              className="relative z-10 transform-gpu"
              style={{ 
                willChange: "transform",
                x: scrollY * -0.2
              }}
            >
              <Image
                width={1080}
                height={1080}
                src={LeftLady.src}
                alt="Left Lady"
                priority
                draggable="false"
                className="absolute w-[20rem] md:w-[29rem] lg:w-full -left-3 -top-16 lg:inset-0 lg:relative transform-gpu"
              />
            </motion.div>

            {/* Right Lady */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { 
                  delay: 0.2, 
                  duration: 2,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  type: "tween" 
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-20 transform-gpu"
              style={{ 
                willChange: "transform",
                x: scrollY * 0.2
              }}
            >
              <Image
                width={1080}
                height={1080}
                src={RightLady.src}
                alt="Right Lady"
                priority
                draggable="false"
                className="absolute -top-3 left-[5%] lg:-top-96 w-[25rem] md:w-[50rem] lg:w-full xl:w-[55rem] 2xl:w-[70rem] lg:left-[13rem] xl:left-[20rem] transform-gpu"
              />
            </motion.div>

            <motion.div 
              className="lg:static absolute top-[17rem] md:top-[18rem] lg:top-[17rem] left-[18%]"
              style={{ y: scrollY * -0.1 }}
            >
              <BannerMSAText />
            </motion.div>

            <div className="relative">
              <motion.div
                animate={floatingAnimation}
                style={{ x: scrollY * 0.3 }}
              >
                <Image
                  height={500}
                  width={500}
                  src={Bubble.src}
                  alt="Floating Bubble"
                  priority
                  className="absolute top-80 md:top-96 lg:-top-14 right-10 lg:-right-[15rem] xl:-right-[35rem] w-12 md:w-20 lg:w-24 h-auto transform-gpu"
                />
              </motion.div>
              <motion.div 
                className="absolute top-[24rem] md:top-[30rem] lg:top-[10rem] right-[5rem] lg:-right-[18rem] xl:-right-[30rem] z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  isRounded={false}
                  height={97.39}
                  width={225}
                  handleScroll={() => handleScroll("enroll-checkout")}
                />
              </motion.div>
            </div>

            {/* Tools with hover effects */}
            <motion.div
              className="flex flex-col items-center absolute space-y-3.5 lg:space-y-7 left-[1%] lg:left-[6%] -top-16 md:-top-10 lg:top-7 xl:top-32 transform-gpu"
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
              style={{ 
                willChange: "transform",
                y: scrollY * -0.15
              }}
            >
              {[
                { src: C4D, delay: 1.3, size: "w-16 md:w-20 lg:w-24" },
                { src: ps, delay: 1.6, size: "w-10 md:w-14 lg:w-16" },
                { src: Blender, delay: 1.9, size: "w-8 md:w-10 lg:w-14" },
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  variants={toolVariants}
                  custom={tool.delay}
                  whileHover="hover"
                  style={{ willChange: "transform" }}
                  className="transform-gpu cursor-pointer"
                >
                  <Image
                    width={100}
                    height={100}
                    src={tool.src.src}
                    alt="Tool"
                    className={`${tool.size} scale-y-[-1] transform-gpu`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
