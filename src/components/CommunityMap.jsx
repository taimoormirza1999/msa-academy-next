import React from "react";
import CommunityMapImage from "@/assets/map.png";
import BackgroundImage from "@/assets/map-vector.svg";
import Image from "next/image";
import OutlineTextEffect from "./utils/OutlineTextEffect";

const CommunityMap = () => {
  return (
    <div className="relative mb-14 mt-2 lg:mb-20 md:mb-24 md:-mt-24  h-auto bg-cover bg-center mx-auto">
      <img
        alt="Banner"
        src={BackgroundImage.src}
        className="absolute w-[70vw] h-auto object-cover md:object-cover rounded-lg"
      />

      <div className="relative h-auto mx-auto w-full md:w-90 lg:w-[73%]">
        <Image
          alt="Banner"
          width={1920}
          height={1080}
          src={CommunityMapImage}
          className="w-full h-auto sm:h-[60vh] md:h-auto lg:h-[40rem] object-cover rounded-lg"
        />
      </div>

      <div className="">
        <p className="text-center text-gray-300 text-lg md:text-xl mt-2 md:w-4/5 font-primary mx-auto">
          Be a part of
        </p>

        <div className="mt-6">
          <OutlineTextEffect
            title={"MSA ART COMMUNITY"}
            classes={"w-full -mt-3"}
          />
        </div>

        <p className="text-center text-gray-300 text-lg md:text-xl mt-1 md:w-4/5 font-primary mx-auto">
          No matter where you are
        </p>
      </div>
    </div>
  );
};

export default CommunityMap;
