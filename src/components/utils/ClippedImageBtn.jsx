import useScreenStore from "@/store/useScreenStore";
import React from "react";

const ClippedTextGeneric = ({ text, width = 348, height = 530, strokeWidth=3,textSize="text-3xl" }) => {
  const clipId = `clipShape-${Math.random().toString(36).substr(2, 9)}`; 

  return (
    <div className="relative ">
      {/* FOREGROUND TEXT WITH WHITE BORDER */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="relative  z-10 "
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M0 0H${width - 20}L${width} 20V${height}H20L0 ${height - 20}V0Z`} 
            />
          </clipPath>
        </defs>

        {/* Clipped Text */}
        <foreignObject
          x="0"
          y="0"
          width={width}
          height={height}
          clipPath={`url(#${clipId})`} 
        >
          <h3 className={`text-center flex items-center lg:whitespace-nowrap w-full justify-center bg-black text-white ${textSize} leading-tight font-primary  p-4`}>
            {text}
          </h3>
        </foreignObject>

        {/* WHITE BORDER */}
        <path
          d={`M0 0H${width - 20}L${width} 20V${height}H20L0 ${height - 20}V0Z`} 
          stroke="#FF00FF" // White border
          strokeWidth={strokeWidth}
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
};

export default ClippedTextGeneric;
