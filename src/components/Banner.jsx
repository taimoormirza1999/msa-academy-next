import React from 'react';
import BannerImage from '../assets/hero_banner.png';
import msaText from '../assets/msa_text.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './utils/Button';
import Image from 'next/image';

const Banner = () => {
  // Parallax Scroll Effect Setup
  const { scrollY } = useScroll();

  // Enhanced Parallax Depth Effect
  const parallaxY = useTransform(scrollY, [0, 500], [0, -150]); 
  const textParallaxY = useTransform(scrollY, [0, 500], [0, -150]); 

  return (
    <motion.div
      initial={{ opacity: 0,scale:0.87 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 1.6, ease: 'easeInOut' },
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="relative w-full 2xl:w-85 h-auto mt-16 md:mt-20  mx-auto md:w-97 max-w-[1920px] mb-16 md:mb-10 lg:mb-20 xl:mb-0  pb-10 pt-16 lg:pb-16 "
    >
      {/* Parallax Background Image */}
      
      {/* <motion.span > */}
      <img
      layout="responsive"
      alt="Banner"
      // width={2200}
      // height={1500} 
      src={BannerImage.src}
      // style={{ y: parallaxY }}
      // style={{ y: parallaxY, top: 'calc(100% - 35%)' }}
      className=" w-full mx-auto lg:w-97 h-[47vh] sm:h-[60vh] lg:h-auto object-cover object-[25%_30%] rounded-lg scale-105 banner_img"
      />
      {/* </motion.span> */}

      {/* Parallax Foreground Content */}
      <motion.div

        className="absolute bottom-10 md:right-16 lg:right-28 md:left-auto left-0 right-0 z-10 mx-auto w-max" style={{ transform: 'none', top: 'calc(100% - 35%)' }}
      >
        <Image
        height={700}
        width={1200}
          src={msaText.src}
          alt="MSAAcademy-text"
          className="-mt-7 -ml-1 w-40 h-auto shadow-2xl object-contain mb-3 md:hidden shadow-pink200/65"
        />
        <div className="animate-bounceSlow mt-8 md:mt-auto z-100 ">
          <Button isRounded={false} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
