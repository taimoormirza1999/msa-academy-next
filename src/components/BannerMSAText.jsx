import React from "react";

export default function BannerMSAText() {
  const GradeinetOutlineText = ({ text, classes }) => {
    return (
      <div className="w-full flex justify-center items-center py-5 lg:py-10 ">
        <h1 className="absolute text-[3rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[8rem]  2xl:text-[8rem] 4kl:text-[8vw] mt-3 lg:mt-5 font-extrabold uppercase text-transparent stroke-text">
          {text}
        </h1>
        <h1 className="absolute text-[3rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[8rem]  2xl:text-89rem] 4kl:text-[8vw] ml-3 lg:ml-4 font-extrabold uppercase bg-gradient-to-r from-[#A400E8] to-[#F7009E] text-transparent bg-clip-text font-primary">
          {text}
        </h1>
      </div>
    );
  };
  return (
    <div className="relative 4kl:-ml-[65%] 4kl:mt-12">
      {/* MSA text */}
      <div className="mb-[-2rem] md:mb-[-4rem] lg:mb-[-6rem]  animate-bounceSlow">
        <GradeinetOutlineText
          text="MSA"
          className="text-8xl md:text-8xl lg:text-9xl xl:text-[10rem]"
        />
      </div>
      {/* ACADEMY text */}
      <div className="absolute -right-36 lg:right-32 -bottom-12  md:-bottom-24 lg:-bottom-28 4kl:right-[25%] 4kl:-bottom-[18rem] ">
        <GradeinetOutlineText
          text="Club"
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        />
      </div>
    </div>
  );
}
