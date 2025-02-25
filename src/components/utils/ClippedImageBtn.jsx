import React from "react";

const ClippedTextGeneric = ({ text, width = 348, height = 530 }) => {
  const clipId = `clipShape-${Math.random().toString(36).substr(2, 9)}`; 
  return (
    <div className="relative w-fit">

      {/* FOREGROUND TEXT WITH WHITE BORDER */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="relative w-full max-w-[348px] z-10"
      >
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M0 0H${width - 40}L${width} 40V${height}H40L0 ${height - 40}V0Z`} 
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
          <h3 className="w-full h-full flex items-center justify-center bg-black text-white text-5xl font-bold leading-tight font-primary  p-6">
            {text}
          </h3>
        </foreignObject>

        {/* WHITE BORDER */}
        <path
          d={`M0 0H${width - 40}L${width} 40V${height}H40L0 ${height - 40}V0Z`} 
          stroke="#FF00FF" // White border
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default ClippedTextGeneric;
