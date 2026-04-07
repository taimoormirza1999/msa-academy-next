import React from "react";

const BlogDetailHeroImage = ({ 
  imageUrl, 
  className = "",
  value = 40 // Corner cut size
}) => {
  const clipId = `clipShape-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`relative ${className}`}>
      {/* Container for aspect ratio */}
      <div className="w-full aspect-[16/9] relative">
        {/* Background with pink border */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 562.5" // 16:9 aspect ratio (1000:562.5)
          preserveAspectRatio="none"
          style={{
            left:"-8px",
            top:"8px"
          }}
        >
          <path
            d={`M0 0H${1000 - value}L1000 ${value}V562.5H${value}L0 ${562.5 - value}V0Z`}
            stroke="#FF00FF"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* Foreground with image and white border */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 562.5"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id={clipId}>
              <path d={`M0 0H${1000 - value}L1000 ${value}V562.5H${value}L0 ${562.5 - value}V0Z`} />
            </clipPath>
          </defs>

          {/* The actual image */}
          <image
            width="1000"
            height="562.5"
            xlinkHref={imageUrl}
            clipPath={`url(#${clipId})`}
            preserveAspectRatio="xMidYMid slice"
          />

          {/* White border overlay */}
          <path
            d={`M0 0H${1000 - value}L1000 ${value}V562.5H${value}L0 ${562.5 - value}V0Z`}
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default BlogDetailHeroImage;