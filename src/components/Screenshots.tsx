import React from 'react'
import Wrapper from './Wrapper'
import screenshot1 from '../static/screenshots/Picture1.png'
import screenshot2 from '../static/screenshots/Picture2.png'
import accent from '../static/screenshots/accent.svg'

function Screenshots() {

  return (
    <Wrapper title='Start your yoga journey now!' ariaLabel='Screenshots' className='w-full h-fit flex space-x-3 justify-center md:justify-start relative'>
        <img src={accent} className='md:hidden min-w-[calc(100%+24px)] h-fit absolute -z-10' alt='App screenshot - accent'/>
        <img src={screenshot1} className='w-fit max-h-[350px] md:max-h-[300px] object-contain drop-shadow-2xl mt-7' alt='App screenshot - activity'/>
        <img src={screenshot2} className='w-fit max-h-[350px] md:max-h-[300px] object-contain drop-shadow-2xl mt-16' alt='App screenshot - articles'/>
    </Wrapper>
  )
}

export default Screenshots