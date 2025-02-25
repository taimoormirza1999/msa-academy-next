import React from "react";

const ClippedImage = ({ imageUrl, width = 600, height = 400 }) => {
  return (
    <div className="relative w-fit">
      {/* BACKGROUND BORDER (Pink, Slightly Offset) */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 600 400"
        className="absolute top-3 right-3 w-full h-full z-0"
      >
        <path
          d="M0 0H560L600 40V400H40L0 360V0Z"
          stroke="#FF00FF" // Pink border
          strokeWidth="4"
          fill="none"
        />
      </svg>

      {/* FOREGROUND IMAGE WITH WHITE BORDER */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 600 400"
        className="relative w-full max-w-[600px] z-10"
      >
        <defs>
          <clipPath id="clipShape">
            <path d="M0 0H560L600 40V400H40L0 360V0Z" />
          </clipPath>
        </defs>

        {/* Clipped Image */}
        <image
          x="0"
          y="0"
          width="600"
          height="400"
          xlinkHref={imageUrl}
          clipPath="url(#clipShape)"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* WHITE BORDER */}
        <path
          d="M0 0H560L600 40V400H40L0 360V0Z"
          stroke="white" // White border
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default ClippedImage;
