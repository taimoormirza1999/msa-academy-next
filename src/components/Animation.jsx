import React from 'react';
import AnimationImage from '../assets/animation_banner.png';
import VideoSection from './VideoSections';
import Button from './utils/Button';
import BannerTextHeading from './utils/BannerTextHeading';
import { motion } from "framer-motion"
import Image from 'next/image';

const Animation = () => {
  return (
    <motion.div  
      className="relative w-full md:w-99 h-auto bg-cover bg-center md:mb-10 lg:mb-60 xl:mb-20 mt-10 xl:mt-20 lg:w-[93%] 2xl:w-85 mx-auto max-w-[1920px] "
     id='animation-course'
    >
         <div className="relative h-auto w-99 md:w-98" >
         <Image 
      width={1920} 
      height={1080}
      src={AnimationImage.src} 
      alt="Banner" 
     className="w-full md:w-98 h-[38vh] sm:h-[60vh] md:h-full lg:h-full  object-cover object-[20%_30%]"
    />
         </div>
      <motion.div className="bg-black/40 lg:bg-transparent rounded-xl shadow-xl shadow-pink200/30 lg:shadow-none lg:rounded-none mx-auto lg:absolute top-20 right-10 p-8 text-white w-95 md:w-85 mb-16 lg:mb-0 lg:w-[54%] flex flex-col justify-end lg:justify-center md:mt-5 lg:me-5">
        <BannerTextHeading
        paragraphspecificwidth={true}
        heading="ANIMATION COURSES"
        paragraph="DO YOU WANT TO HAVE THE ABILITY 
TO MAKE THINGS AND CHARACTERS 
MOVE? YOU’RE IN THE RIGHT PLACE!"
      />
      <motion.div initial={{opacity:0}}  whileInView={{ opacity: 1 }} transition={{duration:0.8, delay:0.55}} className='mt-[15pt] lg:mt-[30pt] mb-3 animate-bounceSlow'>
      <Button textSize="text-sm"/>
      </motion.div >
        <VideoSection/>
      </motion.div>
    </motion.div>
  );
};

export default Animation;
