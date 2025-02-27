import useScreenStore from "@/store/useScreenStore";
import React from "react";

const OutlineTextEffect = ({ title, classes, hCenter = "justify-center" }) => {
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);

  return (
    <div className="flex flex-col justify-center">
      <div className={`relative w-full flex ${hCenter} items-center`}>
        {/* Outline Text (Behind) */}
        <h1
          className={`  bsolute ${
            isLargeScreen ? "text-5xl" : "text-4xl"
          }  text-center -mt-2.5 -ml-2.5 font-extrabold uppercase text-transparent stroke-textHeading ${classes}`}
        >
          {title}
        </h1>
        
        {/* Gradient Filled Text (Front) */}
        <h1
          className={`absolute ${
            isLargeScreen ? "text-5xl" : "text-4xl"
          } text-center  font-extrabold uppercase text-white font-primary ${classes}`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default OutlineTextEffect;
