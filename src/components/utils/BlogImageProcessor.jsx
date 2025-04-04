import React, { useEffect, useRef } from 'react';

const BlogImageProcessor = ({ contentRef }) => {
  const processedImages = useRef(new Set());
  const processingImages = useRef(new Set());

  useEffect(() => {
    const processImages = () => {
      if (!contentRef?.current) return;

      const images = contentRef.current.querySelectorAll('.blog_description img');
      
      images.forEach(img => {
        // Skip if already processed or currently processing
        if (processedImages.current.has(img) || processingImages.current.has(img)) return;
        
        // Skip if image or parent is not in DOM
        if (!document.body.contains(img)) return;
        
        try {
          processingImages.current.add(img);
          
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

          // Only proceed if image is still in DOM
          if (document.body.contains(img) && img.parentNode) {
            const parent = img.parentNode;
            parent.insertBefore(wrapper, img);
            parent.removeChild(img);
            processedImages.current.add(wrapper);
          }
        } catch (error) {
          console.error('Error processing image:', error);
        } finally {
          processingImages.current.delete(img);
        }
      });
    };
    
    // Initial processing after a delay to ensure content is loaded
    const initialTimer = setTimeout(processImages, 1000);
    
    // Process again when all images have loaded
    const handleLoad = () => {
      processImages();
    };
    window.addEventListener('load', handleLoad);
    
    // Cleanup
    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('load', handleLoad);
      processedImages.current.clear();
      processingImages.current.clear();
    };
  }, [contentRef]);
  
  return null;
};

export default BlogImageProcessor; 