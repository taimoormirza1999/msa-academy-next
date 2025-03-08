import React from 'react';

const RightEllipseSVG = ({ width, height }) => {
  const viewBox = "0 0 1786 1686";
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" className='-z-40'>
      <g filter="url(#filter0_f_180_10)">
        <ellipse cx="893" cy="843" rx="277" ry="227" fill="#CA2AD3" />
      </g>
      <defs>
        <filter id="filter0_f_180_10" x="0.0999756" y="0.0999756" width="1785.8" height="1685.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="307.95" result="effect1_foregroundBlur_180_10" />
        </filter>
      </defs>
    </svg>
  );
};

export default RightEllipseSVG;
