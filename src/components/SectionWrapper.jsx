import React from 'react'

function SectionWrapper({className, children}) {
  return (
    <div className={` mx-auto max-w-[1280px] ${className}  `}>
      {children}
    </div>
  )
}

export default SectionWrapper
