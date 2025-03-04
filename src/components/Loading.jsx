"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DownElipse from "@/assets/DownElipse.png";
import AnimatedNumber from "./AnimatedNumber";

const Loading = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 200); // Reduced interval time for smoother animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-purple-900 to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Centered Logo */}
      <motion.img
        src="/logo.png"
        alt="MSA Academy Logo"
        className="w-40 lg:w-64 2xl:w-54 h-auto relative z-10 mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      />
      {/* Loading Percentage */}
      <motion.h4
        className="text-pink200 lg:absolute bottom-16 lg:bottom-16 text-5xl lg:text-6xl 2xl:text-6xl font-primary z-10 mt-10 lg:mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <AnimatedNumber value={progress} />%
      </motion.h4>

      {/* Bottom Ellipse Animation */}
      <motion.img
        src={DownElipse.src}
        alt="Elipse Logo"
        className="h-auto absolute bottom-0"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
      />
    </div>
  );
};

export default Loading;
