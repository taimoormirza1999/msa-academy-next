"use client"
import React, { useEffect, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { motion,useAnimation } from "framer-motion";

export default function CookiePolicy() {
    const [showPolicy,setShowPolicy]=useState(true)
    const controls = useAnimation();
    const resetAnimation = () => {
        controls.set({ opacity: 0, y: 150 });
        controls.start({ opacity: 1, y: 0 },{duration: 1.2, ease: "easeOut",delay:2.5});
      };
    const startAnimation = () => {
        controls.set({ opacity: 1, y: 0 });
        controls.start({ opacity: 0, y: 150 },{duration: 1.2, ease: "easeOut",delay:0.5});
      };
    const handleAcceptAll=()=>{
        // setShowPolicy(false)
        startAnimation()
    }

    const handleRejectAll=()=>{
        // setShowPolicy(false)
        startAnimation()
    }
useEffect(()=>{
    setTimeout(()=>{
        resetAnimation()
    },2000)
    },[])
  return (
    <div className='w-full'>
    {
        showPolicy && (
            <motion.div  initial={{ opacity: 0, y: 150 }} 
            animate={controls}
            // animate={{ opacity: 1, y: 0 }} 
            // transition={{ duration: 1.2, ease: "easeOut",delay:2.5 }}
            className=" fixed bottom-0  transform -translate-x-1/2 border-[1.2px] border-[#CA2AD3] bg-gradient-to-r from-[#A400E8] to-[#F7009E]  text-white/70 p-4 lg:py-5 rounded-lg shadow-lg w-full z-[99999099999] ">
           <div className='lg:flex'>
            <p className="text-sm">
              This website uses cookies to supplement a balanced diet and provide a much-deserved reward to the senses after consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are delicious. 
              <a href="#" className="text-white/90 hover:text-white/100 underline normal-transition">See our cookie policy.</a>
            </p>
            <div className="mt-3 lg:mt-0 flex lg:justify-end space-x-2 lg:mx-5 font-medium">
              <button onClick={handleAcceptAll} className="bg-white/20 hover:bg-anchorGlassBg/40 border border-mbg-translucent text-white px-8 py-2 rounded-md text-sm normal-transition">Accept&nbsp;all</button>
              <button onClick={handleRejectAll} className="bg-btnWild hover:bg-white border-btnWild text-woodsmoke normal-transition px-8 py-2 rounded-md text-sm">Reject&nbsp;all</button>
            </div>
           </div>
          </motion.div>
        )
    }
    </div>
   
  )
}
