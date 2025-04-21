"use client";
import React, { useState, useEffect } from "react";
import DownElipse from "@/assets/DownElipse.png";
import AnimatedNumber from "./AnimatedNumber";
import { IoClose } from "react-icons/io5";

const Menu = ({onClose, handleScroll}) => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-black overflow-y-hidden ">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-black"></div>

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 lg:top-8 lg:right-8 z-20 text-white hover:text-pink200 transition-colors duration-300"
        aria-label="Close menu"
      >
        <IoClose className="w-8 h-8 lg:w-10 lg:h-10" />
      </button>

      {/* Centered Logo */}
      <button onClick={onClose} className="z-10">
        <img
          src="/logo.png"
          alt="MSA Academy Logo"
          className="w-40 lg:w-64 h-auto relative mb-10 lg:mb-20"
        />
      </button>

      {/* Menu Percentage */}
      <div className="py-1 z-10 ">
        <ul className="flex flex-col items-center space-y-5 lg:space-y-10 text-3xl lg:text-5xl font-primary">
          <li className="hover:text-pink200 duration-500 cursor-pointer transition-all text-grayPrimary" onClick={() => handleScroll("enroll-checkout")}>ENROLL NOW</li>
          <li className="hover:text-pink200 duration-500 cursor-pointer transition-all text-grayPrimary" onClick={() => handleScroll("drawing-course")}>DRAWING COURSE</li>
          <li className="hover:text-pink200 duration-500 cursor-pointer transition-all text-grayPrimary" onClick={() => handleScroll("animation-course")}>
            ANIMATION COURSE
          </li>
        </ul>
      </div>
      <img
        src={DownElipse.src}
        alt="Elipse Logo"
        className="h-auto absolute -bottom-20 opacity-60"
      />
      <img
        src={DownElipse.src}
        alt="Elipse Logo"
        className="h-auto absolute -top-20 opacity-60 scale-y-[-1]"
      />
    </div>
  );
};

export default Menu;
