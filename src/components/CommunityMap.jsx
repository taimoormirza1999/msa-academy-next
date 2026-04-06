import React from "react";
import BackgroundImage from "@/assets/map-vector.webp";
import Image from "next/image";
import OutlineTextEffect from "./utils/OutlineTextEffect";

const CommunityMap = () => {
  return (
    <div className="relative  mt-2 lg:mb-20 md:mb-24 md:-mt-24 bg-cover bg-center mx-auto">
      <div className="absolute inset-0  ">
        <Image
          alt="Background"
          src={BackgroundImage}
          width={1920}
          height={1080}
          quality={50}
          loading="lazy"
          sizes="100vw"
          className="rounded-lg w-full h-[40rem]  xl:h-[70rem]"
        />
      </div>

      <div className="relative xl:pt-20 pb-10 flex flex-col items-center justify-center xl:min-h-screen z-10">
        <div className="w-full md:w-90 xl:w-[73%] mb-10">
          <Image
            alt="Community Map"
            width={1920}
            height={1080}
            draggable="false"
            src={"https://res.cloudinary.com/da6qujoed/image/upload/f_auto,q_auto,w_1200/v1743794433/map_ugwglc.png"}
            quality={75}
            loading="lazy"
            sizes="(max-width: 768px) 90vw, 73vw"
            className="w-full h-auto sm:h-[60vh] md:h-auto lg:h-[40rem] xl:w-[80%] xl:h-auto object-cover mx-auto rounded-lg"
          />
        </div>

        <div className="text-center">
          <p className="text-gray-300 text-lg md:text-xl mt-2 md:w-4/5 font-primary mx-auto">
            Be a part of
          </p>

          <div className="mt-6">
            <OutlineTextEffect
              title={"MSA ART COMMUNITY"}
              classes={"w-full -mt-3"}
            />
          </div>

          <p className="text-gray-300 text-lg md:text-xl mt-1 md:w-4/5 font-primary mx-auto">
            No matter where you are
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityMap;
