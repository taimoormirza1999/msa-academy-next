import React, { useEffect } from 'react';

const BlogImageProcessor = () => {
  useEffect(() => {
    const processImages = () => {
      const images = document.querySelectorAll('.blog_description img');
      
      images.forEach(img => {
        // Skip if already processed
        if (img.hasAttribute('data-processed')) return;
        img.setAttribute('data-processed', 'true');
        
        // Get image data
        const imgSrc = img.src;
        const clipId = `msa-clip-${Math.random().toString(36).substring(2, 11)}`;
        
        // Create wrapper structure
        const wrapper = document.createElement('div');
        wrapper.className = 'relative w-full my-10';
        
        wrapper.innerHTML = `
          <div class="w-full aspect-[16/9] relative">
            <svg
              class="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 562.5"
              preserveAspectRatio="none"
              style="left:-8px; top:8px;"
            >
              <path
                d="M0 0H960L1000 40V562.5H40L0 522.5V0Z"
                stroke="#FF00FF"
                stroke-width="1"
                fill="none"
              />
            </svg>
            <svg
              class="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 562.5"
              preserveAspectRatio="none"
            >
              <defs>
                <clipPath id="${clipId}">
                  <path d="M0 0H960L1000 40V562.5H40L0 522.5V0Z" />
                </clipPath>
              </defs>
              <image
                width="1000"
                height="562.5"
                href="${imgSrc}"
                clip-path="url(#${clipId})"
                preserveAspectRatio="xMidYMid slice"
              />
              <path
                d="M0 0H960L1000 40V562.5H40L0 522.5V0Z"
                stroke="white"
                stroke-width="1"
                fill="none"
              />
            </svg>
          </div>
        `;
        
        // Replace the original image
        img.parentNode.replaceChild(wrapper, img);
      });
    };
    
    // Process after render
    setTimeout(processImages, 100);
    
    // Also process when all images have loaded
    window.addEventListener('load', processImages);
    
    return () => {
      window.removeEventListener('load', processImages);
    };
  }, []);
  
  return null;
};

export default BlogImageProcessor; 