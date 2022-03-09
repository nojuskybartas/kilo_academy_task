import React from 'react'

type ProgramDescriptionItemProps = {
    title: string,
    description: string,
    icon: string
}

function ProgramDescriptionItem({title, description, icon}: ProgramDescriptionItemProps) {

    return (
        <div className='w-full h-fit min-h-[5rem] flex items-center space-x-4'>
            <img alt={title} src={icon} className='w-12 h-12'/>
            <div className='w-full h-fit font-semibold'>
                <h3>{title}</h3>
                <p className='text-xs font-normal'>{description}</p>
            </div>
        </div>
    )
}

export default ProgramDescriptionItem