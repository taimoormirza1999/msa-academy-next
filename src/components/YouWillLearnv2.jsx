"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import ClippedImageGeneric from "./utils/ClippedImageGeneric";
import VisualDevelopment from "@/assets/Learn/1.png";
import AnimationTechniques from "@/assets/Learn/2.png";
import StoryTelling from "@/assets/Learn/3.png";
import OutlineTextEffect from "./utils/OutlineTextEffect";
import ClippedBtn from "./utils/ClippedImageBtn";
import CharacterFoo from "@/assets/characterFoo.png";
import Button from "./utils/Button";

const Card = ({ imageUrl, title, description, title2 }) => {
  return (
    <div className="flex flex-col items-center justify-center   p-6">
      <ClippedImageGeneric height={320.18} width={466.25} imageUrl={imageUrl} />
      <OutlineTextEffect title={title} />
      {title2 && <OutlineTextEffect title={title2} />}

      <p className="text-xl text-grayPrimary mt-5 text-center font-primary">
        {description}
      </p>
    </div>
  );
};

const MSALearningSection = () => {
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
      title2: "Telling",
      description:
        "Learn the art of crafting compelling narratives that captivate audiences across various media formats.",
    },
  ];
  const courses_list = [
    {
      title: "Hands-on projects mirroring real MSA productions",
      height: 60,
      width: 610,
    },
    {
      title: "Personalized feedback from industry professionals",
      height: 60,
      width: 620,
    },
    {
      title: "Access to cutting-edge tools and software",
      height: 60,
      width: 525,
    },
    {
      title: "Collaborative workshops with fellow creatives",
      height: 60,
      width: 565,
    },
    {
      title: "Insights into MSA's creative process and workflow",
      height: 60,
      width: 610,
    },
  ];
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
    <section className=" relative py-16 md:pb-8 md:pt-5">
      <SectionWrapper>
        <div className="container mx-auto px-4  overflow-x-hidden">
          <motion.h4
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-center font-primary lg:text-5xl uppercase text-white font-bold mb-2 font-ebold-ccm text-transparent bg-gradient-to-br from-[#B14BF4] to-[#4D91FF] bg-clip-text "
          >
            {<OutlineTextEffect title={"LEARN TO CREATE"} />}
            <div className="my-2">
              {<OutlineTextEffect title={"LIKE MSA"} />}
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

            {/* <ClippedBtn text="What is the refund policy?" width={575} height={79}/> */}
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
              {<OutlineTextEffect title={"THE MSA LEARNING"} />}
              <div className="my-2">
                {<OutlineTextEffect title={"EXPERIENCE"} />}
              </div>

              <div className="relative  flex flex-col lg:flex-row-reverse gap-5 lg:gap-0 2xl:gap-5 items-center md:flex-row mt-14">
                <div className="order md:order-0  w-[30%] ">
                  {/* Course Content */}
                  <ul className="text-lg text-gray-300 font-primary list-disc ">
                    {courses_list.map((course, index) => (
                      <div className=" p-2.5">
                        <ClippedBtn
                          key={index}
                          text={course.title}
                          width={course.width}
                          height={course.height}
                          textSize="text-2xl"
                          strokeWidth={2.16}
                        />
                      </div>
                    ))}
                  </ul>
                  <div className="-ml-4">
                    <Button text="START YOUR JOUREY" height={137} width={337} />
                  </div>
                </div>

                {/* Image Section */}
                {/* <div className=" "> */}
                <Image
                  width={600}
                  height={600}
                  src={CharacterFoo.src}
                  alt="Character Image"
                  // className="mt-4 md:mt-0 mx-auto w-[70%] lg:w-[38rem] h-auto lg:absolute bottom-0 left-1"
                  // className=" absolute z-10  -right-0 bottom-0 mt-4 md:mt-0 mx-auto object-contain h-[70vh] scale-x-[-1]"
                  className="mt-4 md:mt-0 w-[28rem] absolute bottom-0 right-0  scale-x-[-1]"
                />
                {/* </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default MSALearningSection;
