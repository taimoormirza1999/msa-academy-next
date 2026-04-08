"use client";
import React from "react";
import Image from "next/image";
import DownElipse from "@/assets/DownElipse.webp";
import { IoClose } from "react-icons/io5";
import Button from "./utils/Button";

const Menu = ({onClose, handleScroll}) => {

  const handleMenuClick = (id) => {
    handleScroll(id);
    onClose();
  };

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
        <Image
          src="/logo.png"
          alt="MSA Academy Logo"
          width={245}
          height={95}
          priority
          className="w-40 lg:w-64 h-auto relative mb-10 lg:mb-20"
        />
      </button>

      {/* Menu Items */}
      <div className="py-1 z-10 ">
        <div className="flex flex-col items-center space-y-5 lg:space-y-10">
          <Button text="ENROLL NOW" width={300} height={80} textSize="text-xl lg:text-2xl" navButton={true} onClick={() => handleMenuClick("enroll-checkout")} />
          <Button text="DRAWING COURSE" width={300} height={80} textSize="text-xl lg:text-2xl" navButton={true} onClick={() => handleMenuClick("drawing-course")} />
          <Button text="ANIMATION COURSE" width={300} height={80} textSize="text-xl lg:text-2xl" navButton={true} onClick={() => handleMenuClick("animation-course")} />
        </div>
      </div>
      <Image
        src={DownElipse}
        alt=""
        sizes="100vw"
        loading="lazy"
        className="h-auto w-full absolute -bottom-20 opacity-60"
      />
      <Image
        src={DownElipse}
        alt=""
        sizes="100vw"
        loading="lazy"
        className="h-auto w-full absolute -top-20 opacity-60 scale-y-[-1]"
      />
    </div>
  );
};

export default Menu;
