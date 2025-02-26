import React from "react";
import CommunityMapImage from "@/assets/map.png";
import BackgroundImage from "@/assets/map-vector.svg";

import Image from "next/image";
import OutlineTextEffect from "./utils/OutlineTextEffect";

const CommunityMap = () => {
  return (
    <div className="relative mb-14 mt-2 lg:mb-20 md:mb-24 md:-mt-24  w-95 h-auto bg-cover bg-center my-0 2xl:w-85 mx-auto ">
      <img
          alt="Banner"
          // width={1920}
          // height={1080}
          src={BackgroundImage.src}
          className="absolute w-full h-auto object-cover md:object-contain rounded-lg"
        />

      <div className="relative h-auto mx-auto w-full md:w-90 lg:w-[77%] max-w-[1920px]">
        {/* Fix: Use a normal img tag for SVG */}
        {/* <img
          src={CommunityMapImage}
          alt="Background Image"
          className="w-full h-full object-cover"
        /> */}
        
        <Image
          alt="Banner"
          width={1920}
          height={1080}
          src={CommunityMapImage}
          className="  top-0 w-full h-auto sm:h-[60vh] md:h-auto lg:h-[40rem] object-contain md:object-contain rounded-lg"
        />
      </div>
      <p className="text-center text-gray-300 text-lg md:text-xl mt-4 md:w-4/5 font-primary mx-auto">
        Be a part of
      </p>
      <div className="mt-6 ">
<OutlineTextEffect title={"MSA ART COMMUNITY"}/>
      </div>
      <p className="text-center text-gray-300 text-lg md:text-xl mt-4 md:w-4/5 font-primary mx-auto">
        No matter where you are
      </p>
    </div>
  );
};

export default CommunityMap;
