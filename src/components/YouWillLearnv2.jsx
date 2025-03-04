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
import useScreenStore from "@/store/useScreenStore";
import Bubble from "@/assets/bubble.svg";
import LeftEllipse from "@/assets/LeftEllipse.png";

const Card = ({ imageUrl, title, description, title2, index }) => {
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-3 lg:p-6 -mt-20 lg:mt-0 min-w-[300px] lg:min-w-auto snap-center"
      whileTap={{ scale: 0.95 }}
      initial={{ y: -100, x: 100, opacity: 0 }}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        delay: index * 0.2,
      }}
    >
      <ClippedImageGeneric
        height={isLargeScreen ? 320.18 : 350}
        width={isLargeScreen ? 466.25 : 390}
        imageUrl={imageUrl}
      />
      <OutlineTextEffect
        title={title}
        classes="mt-1.5 lg:-mt-8 xl:-mt-0 w-full lg:text-[2.5rem]"
      />
      {title2 && (
        <OutlineTextEffect title={title2} classes="w-full lg:text-[2.5rem]" />
      )}

      <p className="text-xl text-grayPrimary mt-5 text-center font-primary">
        {description}
      </p>
    </motion.div>
  );
};

const MSALearningSection = () => {
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);
  const isMediumScreen = useScreenStore((state) => state.isMediumScreen);
  const isMobileMScreen = useScreenStore((state) => state.isMobileMScreen);
  const isMobileSScreen = useScreenStore((state) => state.isMobileSScreen);

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
      height: isLargeScreen
        ? 60
        : isMobileSScreen
        ? 105
        : isMediumScreen
        ? 60
        : 75,
      width: isLargeScreen
        ? 610
        : isMobileSScreen
        ? 270
        : isMobileMScreen
        ? 320
        : isMediumScreen
        ? 580
        : 370,
    },
    {
      title: "Personalized feedback from industry professionals",
      height: isLargeScreen
        ? 60
        : isMobileSScreen
        ? 105
        : isMediumScreen
        ? 60
        : 75,
      width: isLargeScreen
        ? 620
        : isMobileSScreen
        ? 270
        : isMobileMScreen
        ? 320
        : isMediumScreen
        ? 580
        : 370,
    },
    {
      title: "Access to cutting-edge tools and software",
      height: isLargeScreen
        ? 60
        : isMobileSScreen
        ? 80
        : isMediumScreen
        ? 60
        : 75,
      width: isLargeScreen
        ? 520
        : isMobileSScreen
        ? 270
        : isMobileMScreen
        ? 320
        : isMediumScreen
        ? 580
        : 370,
    },
    {
      title: "Collaborative workshops with fellow creatives",
      height: isLargeScreen
        ? 60
        : isMobileSScreen
        ? 80
        : isMediumScreen
        ? 60
        : 75,
      width: isLargeScreen
        ? 620
        : isMobileSScreen
        ? 270
        : isMobileMScreen
        ? 320
        : isMediumScreen
        ? 580
        : 370,
    },
    {
      title: "Insights into MSA's creative process and workflow",
      height: isLargeScreen
        ? 60
        : isMobileSScreen
        ? 105
        : isMediumScreen
        ? 60
        : 75,
      width: isLargeScreen
        ? 610
        : isMobileSScreen
        ? 270
        : isMobileMScreen
        ? 320
        : isMediumScreen
        ? 580
        : 370,
    },
  ];

  return (
    <section className="relative py-16 md:pb-8 xl:pt-5 ">
      <SectionWrapper>
        <div className="container mx-auto px-4 ">
          <motion.h4
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-center font-primary lg:text-5xl uppercase text-white font-bold mb-2 font-ebold-ccm text-transparent bg-gradient-to-br from-[#B14BF4] to-[#4D91FF] bg-clip-text"
          >
            <div className="relative mx-auto w-full md:w-[70%] lg:w-full justify-start ">
              {<OutlineTextEffect title={"LEARN TO CREATE"} />}
              <div className="my-2">
                {<OutlineTextEffect title={"LIKE MSA"} />}
              </div>
              <Image
                width={60}
                height={60}
                src={Bubble.src}
                alt="Floating Bubble small"
                className="absolute -top-[2.5rem] md:-top-[3rem] lg:-top-[4rem]  xl:top-[15rem]   left-[4%] md:left-[8%] lg:left-[22%] xl:-left-[2%] w-7 md:w-8 lg:w-10 h-auto "
              />
              <Image
                width={60}
                height={60}
                src={Bubble.src}
                alt="Floating Bubble"
                className="absolute -top-[7rem] lg:-top-[1rem] xl:top-[5rem] -left-[5%] md:-left-[9%] lg:left-[10%] xl:-left-[9%] w-14 md:w-16 lg:w-20 xl:w-28 h-auto "
              />
            </div>
          </motion.h4>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base text-center font-primary lg:text-xl lg:w-[60%] mx-auto uppercase text-grayPrimary font-bold mt-3 mb-6"
          >
            Embark on a transformative journey to master the art of content
            creation, animation, and storytelling. Our curriculum is designed to
            empower you with the skills and techniques that make MSA's content
            truly exceptional.
          </motion.h3>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-6 justify-center mb-10 overflow-x-hidden ">
            {cards.map((card, index) => (
              <div key={index}>
                <Card index={index} {...card} />
              </div>
            ))}
          </div>

          <motion.div className="lg:p-16 shadow-2xl rounded-[1rem] mt-10">
            {<OutlineTextEffect title={"THE MSA LEARNING"} classes="w-full " />}
            <div className="my-2">
              {<OutlineTextEffect title={"EXPERIENCE"} classes="w-full " />}
            </div>
            <div className="relative flex flex-col-reverse justify-center items-center  lg:gap-0 2xl:gap-5 lg:items-center  mt-14 ">
              <div className="order md:order-0 lg:w-full flex flex-col items-center xl:items-start">
                <ul className="text-lg text-gray-300 font-primary list-disc flex flex-col justify-start  ">
                  {courses_list.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="lg:p-1.5 xl:p-2.5 py-1.5"
                    >
                      <ClippedBtn
                        text={course.title}
                        width={course.width}
                        height={course.height}
                        textSize={isLargeScreen ? "text-2xl" : "text-xl"}
                        strokeWidth={2.16}
                        key={index}
                      />
                    </motion.div>
                  ))}
                </ul>
                <div className="-ml-4 lg:-ml-4 self-center xl:self-start ">
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 6 * 0.2,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <Button
                      text="START YOUR JOURNEY"
                      textSize={isMobileSScreen ? "text-xl" : "text-2xl"}
                      height={isLargeScreen ? 127 : isMobileSScreen ? 100 : 115}
                      width={isLargeScreen ? 337 : isMobileSScreen ? 300 : 350}
                    />
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                <Image
                  className="-mt-3 lg:mt-4 md:mt-0 w-[18rem] self-center mb-5 lg:w-[28rem] xl:absolute bottom-0 lg:right-0 "
                  width={600}
                  height={600}
                  src={CharacterFoo.src}
                  alt="Character Image"
                  priority
                />
                <Image
                  width={500}
                  height={500}
                  src={LeftEllipse.src}
                  alt="Background Glow"
                  className="absolute  w-[50rem] h-[50rem] xl:h-[60rem] xl:w-[70rem] -right-[15%] xl:-right-[35%] -top-[35%] xl:-top-[70%] -z-10"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default MSALearningSection;
