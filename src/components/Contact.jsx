import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import CharacterFoo from "../assets/characterFoo.png";
import logoogdgirl from "../assets/logoogdgirl.png";
import HerogramLogo from "../assets/herogrmlogo.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="relative mx-auto max-w-[1920px]">
      <div className="flex flex-col lg:flex-row justify-end items-center p-0 lg-w-1/2 lg:p-8  text-white">
        {/* Channel icons */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay:0.4 }}
          className="flex flex-row items-center gap-4 lg:gap-3 lg:mx-3"
          suppressHydrationWarning={true}
        >
          <img
            src={HerogramLogo.src}
            alt="Character Foo"
            className="w-14 lg:w-16 h-auto "
          />
          <img
            src={logoogdgirl.src}
            alt="Character Foo"
            className="w-16 lg:w-16 lg:h-16 md:ml-2"
          />
        </motion.div>
        {/* Social Media Links */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay:0.4 }} className="flex space-x-6 md:mx-4 my-5">
          <a
            href="#"
            className="text-xl hover:text-pink200 transition duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="text-xl hover:text-pink200 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-xl hover:text-pink200 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-xl hover:text-pink200 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-xl hover:text-pink200 transition duration-300"
          >
            <FaTiktok />
          </a>
        </motion.div>

        {/* Privacy Policy Button */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay:0.4 }} className="mb-5 mt-4 md:mb-7 lg:mb-0">
          <Link href={"/privacy-policy"} className="md:mx-4 text-lg text-white border-2 border-white rounded-2xl py-2 px-6 hover:bg-white hover:text-gray-800 transition duration-300 shadow-xl shadow-pink200/35">
            Privacy Policy
          </Link>
        </motion.div>

        {/* Contact Us Section */}
        <div
         className="flex flex-col items-center lg:items-start md:mx-3">
          <motion.h5 initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay:0.4 }}  className="font-semibold text-xl mb-3 lg:mb-2 ">CONTACT US</motion.h5>
          <motion.p  initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay:0.4 }} className="text-sm mb-2">Contact@msa-club.com</motion.p>
          <motion.p   initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay:0.4 }} className="text-sm mb-2">
            Dubai, United Arab Emirates - <br /> Dubai World Trade Center, The
            Offices
          </motion.p>
        </div>
      </div>
      <Image
        width={600}
        height={600}
        src={CharacterFoo.src}
        alt="Character Image"
        className="mt-4 md:mt-0 mx-auto w-[40%] lg:w-1/4 h-auto lg:absolute bottom-0 left-1"
      />
    </div>
  );
}

export default Contact;
