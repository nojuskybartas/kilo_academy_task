import React, { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'

type SuccessStoryCardProps = {
    name: string,
    age: number,
    address: string,
    rating: number,
    image: string,
    description: ReactNode,
}

function SuccessStoryCard({name, age, address, rating, image, description}: SuccessStoryCardProps) {

    return (
        <div className='w-full min-w-[350px] max-w-sm h-[650px] snap-center border border-solid border-gray-300 rounded-2xl p-6 flex flex-col text-left shadow-lg mt-5 mb-10'>
            <h3 className='font-semibold'>{name}, {age}</h3>
            <p className='text-sm font-light'>{address}</p>
            <div className="flex items-center w-fit h-fit text-primary mb-5 mt-5">
                {Array(rating).fill(0).map((_, i) => (<FontAwesomeIcon key={i} icon={faStarSolid} className='w-6 h-6'/>))}
                {Array(5-rating).fill(0).map((_, i) => (<FontAwesomeIcon key={i} icon={faStar} className='w-6 h-6'/>))}
            </div>
            <img src={image} alt='user review' className='w-40 h-40 mb-5'/>
            <p className='text-ellipsis'>{description}</p>
        </div>
    )
}
export default SuccessStoryCard