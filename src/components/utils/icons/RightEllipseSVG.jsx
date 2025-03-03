import React from "react";

const RightEllipseSVG = ({ width = 1143, height = 1917 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 1143 1917"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5" filter="url(#filter0_f_2_316)">
      <ellipse cx="1031.5" cy="958.5" rx="405.5" ry="332.5" fill="#F423FF" />
    </g>
    <defs>
      <filter
        id="filter0_f_2_316"
        x="0.299988"
        y="0.299988"
        width="2062.4"
        height="1916.4"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="312.85" result="effect1_foregroundBlur_2_316" />
      </filter>
    </defs>
  </svg>
);

export default RightEllipseSVG;
