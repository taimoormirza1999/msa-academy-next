"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";



const MSALearningSection = () => {
  const [activeTab, setActiveTab] = useState("animation");

  const courses = {
    animation: [
      "Hands-on animation experience",
      "Mentorship from top professionals",
      "Cutting-edge animation tools",
      "Collaborative creative sessions",
      "Behind-the-scenes production insights",
      "Tailored learning for all skill levels",
      "Creative community support",
      "Practical project-based learning",
      "Real-time industry trends integration",
      "Networking with industry leaders",
    ],
    drawing: [
      "Fundamentals of drawing",
      "Understanding proportions and anatomy",
      "Shading and lighting techniques",
      "Perspective and composition",
      "Character and environment sketching",
      "Using digital and traditional tools",
      "Gesture drawing for movement",
      "Creative thinking and visualization",
      "Portfolio-building tips",
      "Live drawing sessions with experts",
    ],
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-16 md:pb-8 md:pt-5">
      <div className="container mx-auto px-4 ">
        <modiv
          // initial="hidden"
          // animate="visible"
          // variants={containerVariants}
        >
         
          <motion.div
            // whileInView={{
            //   opacity: 1,
            //   scale: 1,
            //   transition: { duration: 1.3, ease: "easeInOut" },
            // }}
            // initial={{ opacity: 0, scale: 0.9 }}
            className="bg-white/[5%] lg:bg-white/[9%] border-[0.7px] border-white/[42%] bg-opacity-0 shadow-pink200/40 p-5 lg:p-16 shadow-2xl overflow-hidden rounded-[1rem]"
            // variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-1 lg:md:grid-cols-3 gap-5 lg:gap-0 2xl:gap-8 items-center md:flex-row">
              {/* List Section */}

              <div className="order-2 md:order-1 lg:col-span-2 rounded-xl ">
                {/* Tab Buttons */}
                <div className="flex gap-5 mb-14">
                  {["animation", "drawing"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-sm px-4 py-3 border-b-2 uppercase font-bold transition-all duration-500
              ${
                activeTab === tab
                  ? " text-white shadow-lg border-white"
                  : " text-gray-400 border-gray-400 "
              }`}
                    >
                      {tab === "animation"
                        ? "Animation Course"
                        : "Drawing Course"}
                    </button>
                  ))}
                </div>

                {/* Course Content */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className=""
                >
                  <motion.h4 initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay:0.2 }} className="text-base text-center lg:text-left lg:text-lg uppercase text-white font-bold mb-2 font-ebold-ccm text-transparent bg-gradient-to-br from-[#B14BF4] to-[#4D91FF] bg-clip-text ">
                    The Outlines
                  </motion.h4>
                  <motion.h3 initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay:0.4 }} className="text-2xl text-center lg:text-left lg:text-4xl uppercase text-white font-bold mb-6 font-medium-fgm">
                    What You’ll Learn at MSA
                  </motion.h3>
                  <ul className="space-y-2">
                  <ul className="flex flex-wrap gap-4 justify-center lg:justify-start">
  {courses[activeTab].map((item, index) => (
    <motion.li
      key={index}
      className="inline-flex items-center gap-3 border-[1.3px] border-white/40 p-2.5 xl:p-2 rounded-xl bg-white/[4%]"
      // initial={{ opacity: 0, x: -20 }}
      // animate={{ opacity: 1, x: 0 }}
      // transition={{ delay: index * 0.05 }}
      initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay:0.4 }}
    >
      {/* Check Icon */}
      <svg
        className="w-5 h-5 lg:w-5 lg:h-5 text-white bg-white/25 rounded-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span className="text-white  text-xs lg:text-base">{item}</span>
    </motion.li>
  ))}
</ul>

                  </ul>
                </motion.div>
              </div>
              {/* Image Section */}
              <div className="relative order-1 md:order-2 lg:col-span-1 ">
                {/* Image */}
                <div className="relative bg-white/[12%] -mt-4 lg:p-0 flex justify-center lg:py-2.5 rounded-xl  lg:border border-white/30 ">
                  <Image
                    height={700}
                    width={700}
                    src="https://yt3.ggpht.com/C5msQoQMtZ7yQZcdTUo3FKAtyrhzClatIuIGlV-ERJvUOfPjSjUHqLjehvLX576esl21Og7nLpJWRQ=s1600-c-fcrop64=1,00002bb0ffffd44f-rw-nd-v1"
                    alt="MSA Learning Experience"
                    className="rounded-xl w-full lg:w-[90%] object-contain shadow-md lg:border border-white/30 relative z-10 mt-4 lg:mt-0 "
                  ></Image>
                 
                </div>
                <motion.div
                  className="absolute inset-0 -z-0"
                  initial={{ scale: 1.15 }}
                  animate={{
                    scale: [1.15, 1.4, 1.15],
                    borderRadius: ["30% 70%", "50% 50%", "70% 30%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-tl from-pink200 to-purple blur-2xl opacity-60 rounded-full" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </modiv>
      </div>
    </section>
  );
};

export default MSALearningSection;
