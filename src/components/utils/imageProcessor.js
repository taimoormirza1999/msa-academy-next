export function processBlogImages() {
    // Get all blog description containers
    const blogDescriptions = document.querySelectorAll('.blog_description');
    
    blogDescriptions.forEach(container => {
      const images = container.querySelectorAll('img');
      
      images.forEach(img => {
        // Skip if already processed
        if (img.hasAttribute('data-processed')) return;
        img.setAttribute('data-processed', 'true');
        
        // Create wrapper with proper styling
        wrapImageWithMSAStyling(img);
      });
    });
  }
  
  function wrapImageWithMSAStyling(img) {
    // Get parent element
    const parent = img.parentElement;
    parent.style.position = 'relative';
    parent.style.margin = '30px 0';
    
    // Create random ID for clip path
    const clipId = `clip-${Math.random().toString(36).substring(2, 11)}`;
    
    // Save original image data
    const imgSrc = img.src;
    const imgAlt = img.alt || 'Blog image';
    
    // Create the container div
    const container = document.createElement('div');
    container.className = 'relative w-full aspect-[16/9] my-4';
    
    // Create SVG markup
    container.innerHTML = `
      <svg class="absolute inset-0 w-full h-full" 
           viewBox="0 0 1000 562.5" 
           preserveAspectRatio="none"
           style="left:-8px; top:8px;">
        <path d="M0 0H960L1000 40V562.5H40L0 522.5V0Z" 
              stroke="#FF00FF" 
              stroke-width="1" 
              fill="none" />
      </svg>
      <svg class="absolute inset-0 w-full h-full" 
           viewBox="0 0 1000 562.5" 
           preserveAspectRatio="none">
        <defs>
          <clipPath id="${clipId}">
            <path d="M0 0H960L1000 40V562.5H40L0 522.5V0Z" />
          </clipPath>
        </defs>
        <image width="1000" 
               height="562.5" 
               href="${imgSrc}" 
               clip-path="url(#${clipId})" 
               preserveAspectRatio="xMidYMid slice" />
        <path d="M0 0H960L1000 40V562.5H40L0 522.5V0Z" 
              stroke="white" 
              stroke-width="1" 
              fill="none" />
      </svg>
    `;
    
    // Replace the original image
    img.parentNode.replaceChild(container, img);
  } 