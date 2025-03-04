import ButtonSVG from '@/components/utils/icons/ButtonSVG'
import Link from 'next/link';

const Button = ({width = 250, height = 133, text = "Enroll Now", textSize="text-2xl", handleScroll , onClick, navButton=false }) => {
  return (
    <div className="relative inline-block" style={{ width: `${width}px`, height: `${height}px` }}>
      {/* SVG as background */}
      <ButtonSVG width={width} height={height} />
      
      {/* Button text */}
      <button onClick={navButton==true?onClick:handleScroll} className={`font-primary absolute top-1/2 left-1/2 transform -translate-x-[43%] -translate-y-1/2 bg-transparent border-none text-white  font-bold cursor-pointer z-10 whitespace-nowrap uppercase ${textSize}`}>
        {text}
      </button>
    </div>
  );
};
export default Button