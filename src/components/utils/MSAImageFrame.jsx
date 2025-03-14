import React from "react";

const MSAImageFrame = ({ imageUrl, className="" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full aspect-[16/9]">
        {/* Outer purple/pink border */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1000 562.5"
          preserveAspectRatio="none"
        >
          <path
            d={`
              M0 0
              H970
              L1000 30
              V562.5
              H30
              L0 532.5
              V0
              Z
            `}
            stroke="#ef00ff"
            strokeWidth="2"
            fill="none"
            filter="drop-shadow(0 0 3px rgba(239, 0, 255, 0.5))"
          />
        </svg>
        
        {/* Image container */}
        <svg
          className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)]"
          viewBox="0 0 984 546.5" 
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id={`msa-clip-${Math.random().toString(36).substring(2, 9)}`}>
              <path
                d={`
                  M0 0
                  H954
                  L984 30
                  V546.5
                  H30
                  L0 516.5
                  V0
                  Z
                `}
              />
            </clipPath>
          </defs>
          
          <image
            href={imageUrl}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#msa-clip-${Math.random().toString(36).substring(2, 9)})`}
          />
        </svg>
      </div>
    </div>
  );
};

export default MSAImageFrame; 