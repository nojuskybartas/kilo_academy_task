import React from 'react'
import Features from './Features'
import Screenshots from './Screenshots'
import SectionWrapper from './SectionWrapper'

function MoreInfo() {
  return (
    <SectionWrapper wrapReverse>
        <Screenshots/>
        <Features/>
    </SectionWrapper>
  )
}

export default MoreInfo