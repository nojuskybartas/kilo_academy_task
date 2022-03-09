import React, { ReactNode } from 'react'

type SectionWrapperProps = {
    children: ReactNode, 
    className?: string,
    title?: ReactNode,
    wrapReverse?: boolean,
}

function SectionWrapper({ children, title, className, wrapReverse }: SectionWrapperProps) {
  return (
    <div className={`w-full h-fit space-y-6 max-w-3xl ml-auto mr-auto pb-8 ${className}`}>
        
        {title && 
          <h2 className='text-lg font-semibold'>
            {title}
          </h2>
        }
        
        <div className={`w-full h-fit flex ${wrapReverse ? 'flex-wrap-reverse' : 'flex-wrap space-y-14'} md:flex-nowrap md:space-x-10 md:space-y-0`}>
          {children}
        </div>
        
    </div>
  )
}

export default SectionWrapper