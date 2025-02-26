import React from "react";

export default function ButtonSVG({ width = 365, height = 167 }) {
  return (
    <svg
      width={width}
      height={height}
      style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      viewBox={`0 0 365 167`} // Keeping viewBox fixed for proper scaling
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none" // Allows independent width/height scaling
    >
      <path
        d="M28 61.5505L325.07 61.5505L349 85.4803V134.388H53.0876L28 109.3V61.5505Z"
        stroke="#FF00FF"
        strokeWidth="1.15615"
      />
      <g filter="url(#filter0_f_5460_344)">
        <rect
          x="58.8633"
          y="58.5615"
          width="208.107"
          height="49.7145"
          rx="24.8572"
          fill="#FF00FF"
        />
      </g>
      <path
        d="M40.7109 46.4219H40.1329V47V94.7499V94.9894L40.3022 95.1587L65.3898 120.246L65.5591 120.416H65.7985H363H363.578V119.838V70.9297V70.6903L363.409 70.521L339.479 46.5912L339.31 46.4219H339.07H40.7109Z"
        fill="url(#paint0_linear_5460_344)"
        stroke="white"
        strokeWidth="1.15615"
      />
      <defs>
        <filter
          id="filter0_f_5460_344"
          x="0.824493"
          y="0.522736"
          width="324.185"
          height="165.792"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="29.0194" result="effect1_foregroundBlur_5460_344" />
        </filter>
        <linearGradient
          id="paint0_linear_5460_344"
          x1="40.7109"
          y1="118.328"
          x2="286.464"
          y2="72.3989"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A400E8" />
          <stop offset="1" stopColor="#F7009E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
