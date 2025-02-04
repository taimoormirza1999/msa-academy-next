import React from 'react';
import { motion } from "framer-motion"

const BannerTextHeading = ({ heading, paragraph, paragraphspecificwidth=false }) => {
  return (
    <div >
      
      <motion.h2 initial={{opacity:0}}  whileInView={{ opacity: 1 }} transition={{duration:1.3, delay:0.25}} className="text-2xl lg:text-[4.2rem] lg:leading-[50pt] font-bold mb-[10pt] font-ebold-ccm">{heading}</motion.h2>
        <motion.p initial={{opacity:0}}  whileInView={{ opacity: 1 }}  transition={{duration:1.3, delay:0.45}} className={`${paragraphspecificwidth&&'w-[63%]'} text-[0.93rem] md:text-[1.1rem] lg:text-[1.4rem] mb-4 text-ferozi uppercase font-regular-ccm `}>
        {paragraph}
        </motion.p>
    </div>
  );
};

export default BannerTextHeading;
