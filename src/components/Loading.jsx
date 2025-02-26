"use client";
import React, { useState, useEffect } from "react";
import DownElipse from "@/assets/DownElipse.png";
import AnimatedNumber from "./AnimatedNumber";

const Loading = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 300);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-black"></div>

      {/* Centered Logo */}
      <img
        src="/logo.png"
        alt="MSA Academy Logo"
        className="w-36 lg:w-54 h-auto relative z-10 mb-10"
      />

      {/* Loading Percentage */}
      <h4 className="text-pink200  absolute  bottom-14  text-2xl md:text-5xl font-primary  z-10 mt-4">
        <AnimatedNumber value={progress} />%
      </h4>
      <img
        src={DownElipse.src}
        alt="Elipse Logo"
        className=" h-auto absolute bottom-0 "
      />
    </div>
  );
};

export default Loading;
