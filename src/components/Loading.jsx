"use client";
import React, { useState, useEffect, useCallback, memo } from "react";
import { motion,useReducedMotion } from "framer-motion";
import DownElipse from "@/assets/DownElipse.png";
import AnimatedNumber from "./AnimatedNumber";

const Loading = memo(() => {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(10);

  const updateProgress = useCallback(() => {
    setProgress((prev) => (prev < 100 ? prev + 5 : 100));
  }, []);

  useEffect(() => {
    const interval = setInterval(updateProgress, 200);
    return () => clearInterval(interval);
  }, [updateProgress]);

  const backgroundVariants = {
    initial: reduceMotion ? {} : { opacity: 0 },
    animate: reduceMotion ? {} : { opacity: 1 },
    transition: reduceMotion ? {} : { duration: 1 }
  };

  const logoVariants = {
    initial: reduceMotion ? {} : { opacity: 0, scale: 0.8 },
    animate: reduceMotion ? {} : { opacity: 1, scale: 1 },
    transition: reduceMotion ? {} : { duration: 0.8, delay: 0.2, ease: "easeInOut" }
  };

  const percentageVariants = {
    initial: reduceMotion ? {} : { opacity: 0, y: 10 },
    animate: reduceMotion ? {} : { opacity: 1, y: 0 },
    transition: reduceMotion ? {} : { duration: 0.8, delay: 0.5, ease: "easeOut" }
  };

  const ellipseVariants = {
    initial: reduceMotion ? {} : { opacity: 0, y: 30, scale: 0.9 },
    animate: reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 },
    transition: reduceMotion ? {} : { duration: 1, delay: 0.7, ease: "easeOut" }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-purple-900 to-black"
        {...backgroundVariants}
      />

      {/* Centered Logo */}
      <motion.img
        src="/logo.png"
        alt="MSA Academy Logo"
        draggable="false"
        className="w-40 lg:w-64 2xl:w-54 h-auto relative z-10 mb-10"
        {...logoVariants}
      />

      {/* Loading Percentage */}
      <motion.h4
        className="text-pink200 lg:absolute bottom-20 lg:bottom-16 text-[3.5rem] lg:text-6xl 2xl:text-7xl font-primary z-10 mt-10 lg:mt-4"
        {...percentageVariants}
      >
        <AnimatedNumber value={progress} />%
      </motion.h4>

      {/* Bottom Ellipse Animation */}
      <motion.img
        src={DownElipse.src}
        alt="Elipse Logo"
        className="h-[70rem] lg:h-auto absolute bottom-0 md:bottom-0"
        {...ellipseVariants}
      />
    </div>
  );
});

Loading.displayName = 'Loading';
export default Loading;