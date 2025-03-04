import { cn } from "@/lib/utils";
import React from "react";

const ClippedCard = ({
  width = 348,
  height = 530,
  children,
  strokeWidth = 1.16,
  value = 20,
  bgColor = "none",
  strokeColor = "#FF00FF",
}) => {
  const clipId = `clipShape-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div
      className={cn(
        "relative  cursor-pointer overflow-x-hidden p-1   ",
        "",
        " hover:scale(105) animate-marquee text-white flex justify-center items-center "
      )}
    >
      {/* FOREGROUND TEXT WITH WHITE BORDER */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="relative  z-10 "
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M0 0H${
                width - value
              }L${width} ${value}V${height}H${value}L0 ${height - value}V0Z`}
            />
          </clipPath>
        </defs>

        {/* Clipped Text */}
        <foreignObject
          x="0"
          y="0"
          width={width}
          height={height}
          clipPath={`url(#${clipId})`} // Corrected unique clip ID
        >
          {/* <h3 className="text-center flex items-center justify-center bg-black text-white text-3xl leading-tight font-primary  p-4">
            {text}
          </h3> */}
          {children}
        </foreignObject>

        {/* WHITE BORDER */}
        <path
          d={`M0 0H${width - value}L${width} ${value}V${height}H${value}L0 ${
            height - value
          }V0Z`}
          stroke={strokeColor} // White border
          strokeWidth={strokeWidth}
          fill={bgColor}
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
};

export default ClippedCard;
