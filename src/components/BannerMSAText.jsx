import React from 'react'

export default function BannerMSAText() {
    const GradeinetOutlineText = ({ text, classes }) => {
        return (
          <div className="w-full flex justify-center items-center py-10">
            <h1 className="absolute text-[3.5rem] lg:text-[8rem] 2xl:text-[8rem] mt-5 font-extrabold uppercase text-transparent stroke-text">
              {text}
            </h1>
            <h1 className="absolute text-[3.5rem] lg:text-[8rem]  2xl:text-89rem] ml-4 font-extrabold uppercase bg-gradient-to-r from-[#A400E8] to-[#F7009E] text-transparent bg-clip-text font-primary">
              {text}
            </h1>
          </div>
        );
      };
  return (
<div className="relative ">

        {/* MSA text */}
        <div className="mb-[-2rem] md:mb-[-4rem] lg:mb-[-6rem]">
          <GradeinetOutlineText text="MSA" className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]" />
        </div>

        {/* ACADEMY text */}
        <div className="absolute right-32 -bottom-28 ">
          <GradeinetOutlineText text="ACADEMY" className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl" />
        </div>
      </div>
  )
}
