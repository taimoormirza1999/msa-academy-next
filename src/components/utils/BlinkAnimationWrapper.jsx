import React from "react";
import "../../BlinkAnimation.css";

export default function BlinkAnimationWrapper({ children, right, left, bottom, padding, position, bgColor}) {
    const style = {
        "--bgColor": bgColor, // Dynamically set background color for ::before pseudo-element
        position: position || "relative", // Default to "relative" if position is not passed
        right: right,
        left: left,
        bottom: bottom,
        padding: padding,
      };
    return (
    <div id="outter-wrapper" className={`${bgColor?bgColor:null} ${position?position:null} ${bottom?bottom:null} ${right?right:null} ${padding?padding:null} `}>
     <div className="wrapper-inner-main" style={style}>
      {children}
     </div>
    </div>
  );
}


