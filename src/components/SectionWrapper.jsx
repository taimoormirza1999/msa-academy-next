import React from 'react'

function SectionWrapper({className, children}) {
  return (
    <div className={`${className} page-max-width`}>
      {children}
    </div>
  )
}

export default SectionWrapper
