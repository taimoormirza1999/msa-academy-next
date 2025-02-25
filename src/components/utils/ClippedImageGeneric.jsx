import React from "react";

const ClippedImageGeneric = ({ imageUrl, width = 348, height = 530 }) => {
  const clipId = `clipShape-${Math.random().toString(36).substr(2, 9)}`; // Unique clip ID

  return (
    <div className="relative w-fit">
      {/* BACKGROUND BORDER (Pink, Slightly Offset) */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="absolute top-2.5 right-2.5 w-full h-full z-0"
      >
        <path
          d={`M0 0H${width - 40}L${width} 40V${height}H40L0 ${height - 40}V0Z`} 
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
      >
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M0 0H${width - 40}L${width} 40V${height}H40L0 ${height - 40}V0Z`} 
            />
          </clipPath>
        </defs>

        {/* Clipped Image */}
        <image
          x="0"
          y="0"
          width={width}
          height={height}
          xlinkHref={imageUrl}
          clipPath={`url(#${clipId})`} // Corrected unique clip ID
          preserveAspectRatio="none" // Fix image getting cut
        />

        {/* WHITE BORDER */}
        <path
          d={`M0 0H${width - 40}L${width} 40V${height}H40L0 ${height - 40}V0Z`} 
          stroke="white" // White border
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default ClippedImageGeneric;
