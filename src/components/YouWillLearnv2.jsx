"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const FeatureCard = ({ title, description, icon }) => (
  <motion.div
    className="bg-gradient-to-tl from-black/5 to-purple/5 rounded-[3rem] shadow-pink200/40 lg:rounded-[2rem] p-6 shadow-2xl shadow-pink/35 border-2 border-pink200"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    <motion.div
      className="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 bg-gradient-to-tl from-pink200 via-pink200 to-purple rounded-full flex items-center justify-center"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-lg lg:text-xl font-bold text-white mb-2 text-center font-medium-fgm">{title}</h3>
    <p className="text-gray-50 text-center font-regular-ccm">{description}</p>
  </motion.div>
);

const MSALearningSection = () => {
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
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h2
            className="text-[1.7rem] lg:text-[3.2rem] font-ebold-ccm uppercase text-white font-bold text-center mb-5 lg:mb-8 animate-textGlow"
            variants={itemVariants}
          >
            Learn to Create Like MSA
          </motion.h2>
          <motion.p
            className="text-base text-gray-50 text-center mb-12 max-w-3xl mx-auto font-regular-ccm"
            variants={itemVariants}
          >
            Embark on a transformative journey to master the art of content creation, animation, and storytelling. Our
            curriculum is designed to empower you with the skills and techniques that make MSA's content truly
            exceptional.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-5 lg:gap-8 mb-16">
            <motion.div variants={itemVariants}>
              <FeatureCard
                title="Master Storytelling"
                description="Learn the art of crafting compelling narratives that captivate audiences across various media formats."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                }
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureCard
                title="Animation Techniques"
                description="Dive deep into both traditional and digital animation methods to bring your characters and stories to life."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                }
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureCard
                title="Visual Development"
                description="Explore the process of creating stunning visuals, from concept art to final rendered scenes."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                }
              />
            </motion.div>
          </div>

          <motion.div
            className="border-2 border-pink200 shadow-pink200/40 p-5 lg:p-8 shadow-2xl overflow-hidden rounded-[3rem]"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-1 lg:md:grid-cols-2 gap-5 lg:gap-8 items-center md:flex-row">
              {/* List Section */}
              <div className="order-2 md:order-1 ">
                <h3 className="text-2xl text-center lg:text-left lg:text-4xl uppercase text-white font-bold mb-8 font-medium-fgm z-50">
                  The MSA Learning Experience
                </h3>
                <ul className="space-y-6">
                  {[
                    "Hands-on projects mirroring real MSA productions",
                    "Personalized feedback from industry professionals",
                    "Access to cutting-edge tools and software",
                    "Collaborative workshops with fellow creatives",
                    "Insights into MSA's creative process and workflow",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start border border-pink200 p-2 py-3 rounded-[1rem] bg-gradient-to-tr from-white/15"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Check Icon */}
                      <svg
                        className="w-6 h-6 lg:w-8 lg:h-8 text-white mr-3 flex-shrink-0 bg-gradient-to-t bg-pink200 shadow-xl shadow-black/40 from-black/30 via-purple/30 to-pink200/30 rounded-full p-1 font-medium-fgm"
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
                      {/* Text */}
                      <span className="text-gray-100 text-sm lg:text-lg leading-relaxed font-medium-fgm">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div className="mt-0 flex flex-row justify-center lg:justify-start" variants={itemVariants}>
                  {/* <Link
                    smooth={true}
                    duration={800}
                    to="enroll-checkout"
                    className="cursor-pointer animate-animate-glow lg:text-[1.0956rem] mt-12 mb-7 border-[1.7px] bg-opacity-10 text-white border-pink200 hover:shadow-pink200 shadow-pink200/40 pt-[15px] pb-[15px] px-[32.5px] rounded-[19px] shadow-xl font-medium-fgm uppercase"
                  >
                    Start Your MSA Journey
                  </Link> */}
                </motion.div>
              </div>

              {/* Image Section */}
              <div className="relative order-1 md:order-2">
                {/* Image */}
                <Image
                height={500}
                width={500}
                  src="https://yt3.ggpht.com/rHv7rFC9EFL8qUBNCnKP_JofD4-hVcaeYZMXeMACRaA3D7Q-wBAAjzmx9KRIpamG2vHxVNrORL1-AyI=s1600-rw-nd-v1"
                  alt="MSA Learning Experience"
                  className="rounded-xl w-full lg:w-[90%] object-contain shadow-md lg:border-3 border-pink200 relative z-10 mt-4 lg:mt-0"
                />
                {/* Blob Animation */}
                <motion.div
                  className="absolute inset-0 -z-0"
                  initial={{ scale: 1.15 }}
                  animate={{ scale: [1.15, 1.4, 1.15], borderRadius: ["30% 70%", "50% 50%", "70% 30%"] }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default MSALearningSection;