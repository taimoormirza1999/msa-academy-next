import React, { useRef, useEffect, useState } from "react";

const ClippedAutoWidthBtn = ({ text, strokeWidth = 3, textSize = "text-3xl" }) => {
  const textRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const clipId = `clipShape-${Math.random().toString(36).substr(2, 9)}`;

  // Measure text dimensions after render
  useEffect(() => {
    if (textRef.current) {
      const { offsetWidth, offsetHeight } = textRef.current;
      // Add padding to the measurements
      setDimensions({
        width: offsetWidth + 20, // Add horizontal padding
        height: offsetHeight + 0 // Add vertical padding
      });
    }
  }, [text, textSize]);

  const cornerCut = 20; // Size of corner cut

  return (
    <div className="relative inline-block">
      {/* Hidden text element for measurement */}
      <div 
        ref={textRef} 
        className={`${textSize} font-primary absolute opacity-0 whitespace-nowrap p-4`}
      >
        {text}
      </div>

      {/* Only render SVG once we have dimensions */}
      {dimensions.width > 0 && (
        <svg
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          className="relative z-10"
        >
          <defs>
            <clipPath id={clipId}>
              <path
                d={`M0 0
                   H${dimensions.width - cornerCut}
                   L${dimensions.width} ${cornerCut}
                   V${dimensions.height}
                   H${cornerCut}
                   L0 ${dimensions.height - cornerCut}
                   V0Z`}
              />
            </clipPath>
          </defs>

          {/* Background */}
          <path
            d={`M0 0
               H${dimensions.width - cornerCut}
               L${dimensions.width} ${cornerCut}
               V${dimensions.height}
               H${cornerCut}
               L0 ${dimensions.height - cornerCut}
               V0Z`}
            fill="black"
          />

          {/* Text content */}
          <foreignObject
            x="0"
            y="0"
            width={dimensions.width}
            height={dimensions.height}
            clipPath={`url(#${clipId})`}
          >
            <div className={`flex items-center justify-center h-full ${textSize} text-white font-primary p-4`}>
              {text}
            </div>
          </foreignObject>

          {/* Border */}
          <path
            d={`M0 0
               H${dimensions.width - cornerCut}
               L${dimensions.width} ${cornerCut}
               V${dimensions.height}
               H${cornerCut}
               L0 ${dimensions.height - cornerCut}
               V0Z`}
            stroke="#FF00FF"
            strokeWidth={strokeWidth}
            fill="none"
          />
        </svg>
      )}
    </div>
  );
};

export default ClippedAutoWidthBtn;
