import React from "react";

const ClippedImageGeneric = ({ rightTopClass='top-2.5 right-2.5', imageUrl, width = 348, height = 530, value=40,preserveAspectRatio=false }) => {
  const clipId = `clipShape-${Math.random().toString(36).substr(2, 9)}`; // Unique clip ID

  return (
    <div className="relative w-fit">
      {/* BACKGROUND BORDER (Pink, Slightly Offset) */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={`absolute ${rightTopClass} w-full h-full z-0 `}
        // preserveAspectRatio="none"
      >
        <path
          d={`M0 0H${width - value}L${width} ${value}V${height}H${value}L0 ${height - value}V0Z`} 
          stroke="#FF00FF" // Pink border
          strokeWidth="4"
          fill="none"
        />
      </svg>

      {/* FOREGROUND IMAGE WITH WHITE BORDER */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="relative w-full max-w-[348px] z-10"
        // preserveAspectRatio="none"
      >
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M0 0H${width - value}L${width} ${value}V${height}H${value}L0 ${height - value}V0Z`} 
            />
          </clipPath>
        </defs>

        {/* Clipped Image */}
        <image
          x="0"
          y="0"
          width={width}
          height={height}
          // className="w-20 h-20"
          xlinkHref={imageUrl}
          clipPath={`url(#${clipId})`} // Corrected unique clip ID
          preserveAspectRatio="xMidYMid slice"  
        />

        {/* WHITE BORDER */}
        <path
          d={`M0 0H${width - value}L${width} ${value}V${height}H${value}L0 ${height - value}V0Z`} 
          stroke="white" // White border
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default ClippedImageGeneric;
