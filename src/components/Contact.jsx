"use client";
import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import CharacterFoo from "@/assets/msa-club-academy-character-design-girl.png";
import logoogdgirl from "../assets/msa-club-academy-logo-character-design.png";
import HerogramLogo from "../assets/msa-club-academy-animation-character-dubai.png";
import Image from "next/image";
import Link from "next/link";
import { motion,useReducedMotion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Bubble from "@/assets/msa-club-academy-bubble-background.webp";
import OuterBorderChildren from "./utils/OuterBorderChildren";
import LeftEllipse from "@/assets/msa-club-academy-ellipse-down-background.webp";

function Contact() {
  const issmallScreen = useMediaQuery({ maxWidth: 768 });
  const reduceMotion = useReducedMotion();
  return (
    <motion.div className="relative mx-auto max-w-[1920px] xl:pt-20"
    initial={reduceMotion ? {} : undefined}
    animate={reduceMotion ? {} : undefined}>
      <Image
        width={500}
        height={500}
        src={LeftEllipse.src}
        alt="Background Glow"
        className=" absolute  w-[80rem] h-[80rem] left-[50%] -translate-x-[50%] bottom-0 -z-10"
        draggable="false"
      />
      <div className="flex flex-col lg:flex-row justify-end items-center p-0 lg-w-1/2 lg:p-8  text-white">
        <div className="flex flex-col items-center">
          <motion.div
            initial={reduceMotion ? {} : issmallScreen ? { opacity: 0, y: 50 } : {}}
            whileInView={reduceMotion ? {} : issmallScreen ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row items-center gap-4 lg:gap-3 lg:mx-3"
            suppressHydrationWarning={true}
          >
            <Image
              src={HerogramLogo.src}
              height={80}
              width={80}
              alt="MSA Club Academy - character design and animation courses Dubai"
              className="w-14 lg:w-16 h-auto "
              draggable="false"
            />
            <Image
              src={logoogdgirl.src}
              height={80}
              width={80}
              alt="Character Foo"
              className="w-16 lg:w-16 lg:h-16 md:ml-2"
              draggable="false"
            />
          </motion.div>
          {/* Social Media Links */}
          <motion.div
            initial={reduceMotion ? {} : issmallScreen ? { opacity: 0, y: 50 } : undefined}
            whileInView={reduceMotion ? {} : issmallScreen ? { opacity: 1, y: 0 } : undefined}
            transition={
              reduceMotion ? {} : issmallScreen ? { duration: 0.8, delay: 0.4 } : undefined
            }
            className="flex justify-center items-center space-x-0.5 md:mx-4 my-5"
          >
            {[
              { icon: <FaYoutube />, href: "#" },
              { icon: <FaFacebook />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
              { icon: <FaTwitter />, href: "#" },
              { icon: <FaTiktok />, href: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-xl flex justify-center items-center hover:text-pink200 transition duration-300 mx-auto"
              >
                <OuterBorderChildren
                  width={35}
                  height={35}
                  value={5}
                  strokeWidth={1.26}
                  strokeColor="#fff"
                  clipId={`clip-${index}`}
                >
                  <div className="w-full h-full flex justify-center items-center text-white">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                </OuterBorderChildren>
              </a>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col xl:items-start">
          {/* Contact Us Section */}
          <div className="flex flex-col items-center lg:items-start md:mx-3">
            <motion.h5
              initial={reduceMotion ? {} : issmallScreen && { opacity: 0, y: 50 }}
              whileInView={reduceMotion ? {} : issmallScreen && { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-semibold text-2xl xl:text-3xl mb-3 lg:mb-2 font-primary "
            >
              CONTACT US
            </motion.h5>
            <motion.p
              initial={reduceMotion ? {} : issmallScreen && { opacity: 0, y: 50 }}
              whileInView={reduceMotion ? {} : issmallScreen && { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base mb-2 font-primary"
            >
              Contact@msa-club.com
            </motion.p>
            <motion.p
              initial={reduceMotion ? {} : issmallScreen && { opacity: 0, y: 50 }}
              whileInView={reduceMotion ? {} : issmallScreen && { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm mb-2 font-primary"
            >
              Dubai, United Arab Emirates - <br /> Dubai World Trade Center, The
              Offices
            </motion.p>
          </div>
          {/* Privacy Policy Button */}
          <div className="flex flex-row items-center justify-between gap-3 -mt-2 xl:-mt-10">
            <motion.div
              initial={reduceMotion ? {} : issmallScreen && { opacity: 0, y: 50 }}
              whileInView={reduceMotion ? {} : issmallScreen && { opacity: 1, y: 0 }}
              transition={reduceMotion ? {} : issmallScreen && { duration: 0.8, delay: 0.4 }}
              className="mb-5 mt-4 md:mb-7 lg:mb-0"
            >
              <Link
                href={"/privacy-policy"}
                className="font-primary md:mx-4 text-lg text-white py-2 hover:bg-white hover:text-gray-800 transition duration-300 text-center mt-10"
              >
                <OuterBorderChildren
                  width={155}
                  height={38}
                  value={10}
                  classes={"mt-1 pt-1.5 lg:pt-0"}
                  strokeWidth={1.26}
                  strokeColor="#fff"
                  clipId={`clip-privacypolicy}`}
                >
              
                  <span className="text-white">Privacy Policy</span>
          
                </OuterBorderChildren>
              </Link>
            </motion.div>
            <motion.div
              initial={reduceMotion ? {} : issmallScreen && { opacity: 0, y: 50 }}
              whileInView={reduceMotion ? {} : issmallScreen && { opacity: 1, y: 0 }}
              transition={reduceMotion ? {} : issmallScreen && { duration: 0.8, delay: 0.4 }}
              className="mb-5 mt-4 md:mb-7 lg:mb-0"
            >
              <Link
                href={"/privacy-policy"}
                className="font-primary text-lg text-white  hover:bg-white hover:text-gray-800 transition duration-300 "
              >
               @ MSA Club Official
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <Image
            width={200}
            height={200}
            src={CharacterFoo.src}
            alt="Character Image"
            draggable="false"
            className="mt-4 md:mt-0  w-[75%] xl:w-[32rem] h-auto  hidden"
          />
      <div className="flex justify-start  mx-auto lg:absolute bottom-0 left-1">
        <div className="realtive ">
          <Image
            width={600}
            height={600}
            src={CharacterFoo.src}
            alt="Character Image"
            draggable="false"
            className="mt-4 md:mt-0  w-[75%] xl:w-[32rem] h-auto "
          />
          <motion.div  initial={reduceMotion ? {} : issmallScreen && { opacity: 0, y: 50 }}
              whileInView={reduceMotion ? {} : issmallScreen && { opacity: 1, y: 0 }}
              transition={reduceMotion ? {} : issmallScreen && { duration: 0.8, delay: 0.8, type: "spring" }}
              className="absolute bottom-48 md:bottom-44 left-52  md:left-52 lg:left-52  lg:top-10 xl:top-24 xl:left-96  mt-3">

          <Image
            width={60}
            height={60}
            src={Bubble.src}
            alt="Floating small Bubble"
            className="  w-12 md:w-16 lg:w-16 xl:w-16 h-auto "
            draggable="false"
            />
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
