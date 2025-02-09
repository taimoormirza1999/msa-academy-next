import React from 'react';
import CommunityMapImage from '../assets/community_map.png';
import Image from 'next/image';

const CommunityMap = () => {
  return (
    <div
      className="relative mb-14 mt-2 lg:mb-20 md:mb-24 md:mt-7  lg:mt-4 w-95 h-auto bg-cover bg-center my-0 2xl:w-85 mx-auto max-w-[1920px] "
     
    >
         <div className="relative h-auto mx-auto w-full md:w-90 lg:w-[77%]" >
         <Image
              layout="responsive"
              alt="Banner"
              width={1920}
              height={1080}
      src={CommunityMapImage.src} 
      className="w-full h-auto sm:h-[60vh] md:h-auto lg:h-auto object-contain md:object-contain rounded-lg"
    />
         </div>
    
    </div>
  );
};

export default CommunityMap;
