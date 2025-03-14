import React from 'react'

function SectionWrapper({className, children}) {
  return (
    <div className={` mx-auto lg:max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[80vw] 4kl:max-w-[90vw] ${className}  `}>
      {children}
    </div>
  )
}

export default SectionWrapper
