import React, { ReactNode } from 'react'

type ScreenWrapperProps = {
    children: ReactNode, 
    title: ReactNode,
    ariaLabel?: string,
    fullWidth?: boolean,
    className?: string,
}


function Wrapper({ children, title, ariaLabel, fullWidth, className }: ScreenWrapperProps) {
  return (
    <section 
    aria-label={ariaLabel}  
    className={`w-full ${!fullWidth && ' md:w-fit md:flex-1'} h-fit space-y-1`}
    >
        <h2 className='text-2xl md:text-xl font-semibold'>
          {title}
        </h2>
        
        <div className={className}>
          {children}
        </div>
        
    </section>
  )
}

export default Wrapper