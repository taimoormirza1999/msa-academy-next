export default function OuterBorderChildren({
    width,
    height,
    children,
    strokeWidth,
    value,
    strokeColor,
    clipId,
    classes
  }) {
    return (
      <div
        className="relative cursor-pointer overflow-hidden p-1  text-white flex justify-center items-center"
      >
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="relative z-10 "
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id={clipId}>
              <path
                d={`M0 0H${width - value}L${width} ${value}V${height}H${value}L0 ${
                  height - value
                }V0Z`}
              />
            </clipPath>
          </defs>
  
          {/* Clipped Text */}
          <foreignObject
            x="0"
            y="0"
            width={width}
            height={height}
            clipPath={`url(#${clipId})`}
          >
            <div className={`w-full h-full ${classes}`}>{children}</div>
          </foreignObject>
  
          {/* WHITE BORDER */}
          <path
            d={`M0 0H${width - value}L${width} ${value}V${height}H${value}L0 ${
              height - value
            }V0Z`}
            stroke={strokeColor} // White border
            strokeWidth={strokeWidth}
            fill="transparent"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    );
  }
  