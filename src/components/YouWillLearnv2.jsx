"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import ClippedImageGeneric from "./utils/ClippedImageGeneric";
import VisualDevelopment from "@/assets/Learn/1.png";
import AnimationTechniques from "@/assets/Learn/2.png";
import StoryTelling from "@/assets/Learn/3.png";
import OutlineTextEffect from "./utils/OutlineTextEffect";
import ClippedBtn from "./utils/ClippedImageBtn";
const Card = ({ imageUrl, title, description, title2 }) => {
  return (
    <div className="flex flex-col items-center justify-center  rounded-2xl shadow-lg p-6">
      <ClippedImageGeneric height={320.18} width={466.25} imageUrl={imageUrl} />
      <OutlineTextEffect title={title} />
      {title2&&( <OutlineTextEffect title={title2} />)}
     
      <p className="text-xl text-grayPrimary mt-5 text-center font-primary">
        {description}
      </p>
    </div>
  );
};

const MSALearningSection = () => {
  const [activeTab, setActiveTab] = useState("animation");
  const cards = [
    {
      imageUrl: VisualDevelopment?.src,
      title: "VISUAL DEVELOPMENT",
      description:
        "Explore the process of creating stunning visuals, from concept art to final rendered scenes.",
    },
    {
      imageUrl: AnimationTechniques?.src,
      title: "Animation Techniques",
      description:
        "Dive deep into both traditional and digital animation methods to bring your characters and stories to life.",
    },
    {
      imageUrl: StoryTelling?.src,
      title: "Story",
      title2:"Telling",
      description:
        "Learn the art of crafting compelling narratives that captivate audiences across various media formats.",
    },
  ];
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
      <SectionWrapper>
        <div className="container mx-auto px-4 ">
          <motion.h4
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-center font-primary lg:text-5xl uppercase text-white font-bold mb-2 font-ebold-ccm text-transparent bg-gradient-to-br from-[#B14BF4] to-[#4D91FF] bg-clip-text "
          >
             {( <OutlineTextEffect title={"LEARN TO CREATE"} />)}
             <div className="my-2">
             {( <OutlineTextEffect title={"LIKE MSA"} />)}
             </div>
      
          </motion.h4>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base text-center font-primary lg:text-xl lg:w-[60%] mx-auto uppercase text-grayPrimary font-bold mt-3 mb-6 "
          >
            Embark on a transformative journey to master the art of content
            creation, animation, and storytelling. Our curriculum is designed to
            empower you with the skills and techniques that make MSA's content
            truly exceptional.
          </motion.h3>
          <div>
          <div className="flex  gap-6 justify-center mb-10">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>

    
    <ClippedBtn text="What is the refund policy?" width={575} height={79}/>
            <motion.div
              // whileInView={{
              //   opacity: 1,
              //   scale: 1,
              //   transition: { duration: 1.3, ease: "easeInOut" },
              // }}
              // initial={{ opacity: 0, scale: 0.9 }}
              className=" p-5 lg:p-16 shadow-2xl overflow-hidden rounded-[1rem]"
              // variants={itemVariants}
            >
               {( <OutlineTextEffect title={"THE MSA LEARNING"} />)}
               {( <OutlineTextEffect title={"EXPERIENCE"} />)}
              <div className="grid grid-cols-1 md:grid-cols-1 lg:md:grid-cols-3 gap-5 lg:gap-0 2xl:gap-8 items-center md:flex-row">
                <div className="order-2 md:order-1 lg:col-span-2 rounded-xl ">
                
                  {/* Course Content */}
             
                </div>
                {/* Image Section */}
               
           
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default MSALearningSection;
