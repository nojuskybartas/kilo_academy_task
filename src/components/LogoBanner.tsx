import React from 'react'
import logo from '../static/logo.svg'

function LogoBanner() {
  return (
    <div className='w-full h-10 md:h-12 flex justify-center items-center shadow-md'>
        <img src={logo} className='w-32 md:w-24 h-32 md:h-24' alt='Positive Yoga'/>
    </div>
  )
}

export default LogoBanner