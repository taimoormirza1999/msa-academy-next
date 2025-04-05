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
    <div className={`relative inline-block z-40 ${text=="Enroll Now" ? "animate-bounceSlowV2" : ""}`} style={{ width: `${width}px`, height: `${height}px`  }}>
      {/* SVG as background */}
      <ButtonSVG width={width} height={height} />
      {/* Button text */}
      <button onClick={handleClick} className={`font-primary absolute top-1/2 left-1/2 transform -translate-x-[43%] -translate-y-1/2 bg-transparent border-none text-white  font-bold cursor-pointer z-10 whitespace-nowrap uppercase ${textSize} `}>
        {text}
      </button>
    </div>
  );
});
Button.displayName = 'Button';
export default Button;