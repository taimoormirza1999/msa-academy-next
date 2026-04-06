import ButtonSVG from '@/components/utils/icons/ButtonSVG'
import React, { useCallback } from 'react';
const Button = React.memo(({width = 250, height = 133, text = "Enroll Now", textSize="text-2xl", handleScroll , onClick, navButton=false }) => {
  const handleClick = useCallback((e) => {
    if (navButton || !handleScroll) {
      onClick?.(e);
    } else {
      handleScroll(e);
    }
  }, [navButton, handleScroll, onClick]);
  return (
    <button onClick={handleClick} className={`relative inline-block z-40 cursor-pointer bg-transparent border-none p-0 ${text=="Enroll Now" ? "animate-bounceSlowV2" : ""}`} style={{ width: `${width}px`, height: `${height}px`  }}>
      {/* SVG as background */}
      <ButtonSVG width={width} height={height} />
      {/* Button text */}
      <span className={`font-primary absolute top-1/2 left-1/2 transform -translate-x-[43%] -translate-y-1/2 text-white font-bold z-10 whitespace-nowrap uppercase pointer-events-none ${textSize} `}>
        {text}
      </span>
    </button>
  );
}, (prev, next) => (
  prev.width === next.width &&
  prev.height === next.height &&
  prev.text === next.text &&
  prev.textSize === next.textSize &&
  prev.handleScroll === next.handleScroll &&
  prev.onClick === next.onClick &&
  prev.navButton === next.navButton
));

Button.displayName = 'Button';
export default Button;