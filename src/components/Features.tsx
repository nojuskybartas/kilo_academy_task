import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Wrapper from './Wrapper'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

function Features() {
  return (
    <Wrapper title='Is Positive Yoga right for me?' className='py-5'>
        <Feature label='Each program adapts to your age or fitness'/>
        <Feature label='Mindful way to exercise and get real results'/>
        <Feature label='Effective and long-term lasting results'/>
        <Feature label='Suited activities that benefit both the mind and body'/>
        <Feature label='Low-intensity but highly-effective workouts'/>
        <Feature label='Extra attention to muscle, joint and back health'/>
    </Wrapper>
  )
}

export default Features

type FeatureProps = {
    label: string
}

function Feature({label}:FeatureProps) {

    return (
        <div className='w-full h-fit flex items-center space-x-4 mt-2 mb-3 md:mb-0'>
            <FontAwesomeIcon icon={faCircleCheck} className='text-lime-500 w-6 h-6'/>
            <h3 className='w-full'>{label}</h3>
        </div>
    )
}