import React from "react";
import MentorsBanner from "../assets/Mentors_done.png"; // Replace with your actual image path
import { motion } from "framer-motion";
import Image from "next/image";
const Mentors = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      className="relative w-full h-auto bg-cover bg-center mt-16 md:mb-8 md:mt-16 lg:mt-24 lg:mb-10  md:w-95  lg:w-95 2xl:w-85 mx-auto max-w-[1920px]"
    >
      <div className="relative h-auto mx-auto w-full md:w-95 lg:w-80">
        <Image
          height={1080}
          width={1400}
          src={MentorsBanner.src}
          alt="Banner"
          className="w-full  h-[34vh] sm:h-[60vh] md:h-full lg:h-full  object-cover md:object-contain  rounded-lg  md:object-center -me-20"
        />
      </div>
    </motion.div>
  );
};

export default Mentors;
