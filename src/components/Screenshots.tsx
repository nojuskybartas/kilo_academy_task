import React from 'react'
import Wrapper from './Wrapper'
import screenshot1 from '../static/screenshots/Picture1.png'
import screenshot2 from '../static/screenshots/Picture2.png'

function Screenshots() {

  return (
    <Wrapper title='Start your yoga journey now!' ariaLabel='Screenshots' className='w-full h-fit flex space-x-3 justify-center md:justify-start'>
        <img src={screenshot1} className='w-fit max-h-[350px] md:max-h-[300px] object-contain mt-7'/>
        <img src={screenshot2} className='w-fit max-h-[350px] md:max-h-[300px] object-contain mt-16'/>
    </Wrapper>
  )
}

export default Screenshots