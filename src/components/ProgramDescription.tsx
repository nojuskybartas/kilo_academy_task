import React from 'react'
import Wrapper from './Wrapper'
import listIcon from '../static/program/list.svg'
import workoutIcon from '../static/program/workout.svg'
import shoeIcon from '../static/program/shoe.svg'
import appleIcon from '../static/program/apple.svg'
import whistleIcon from '../static/program/whistle.svg'
import smartwatchIcon from '../static/program/smartwatch.svg'
import bookIcon from '../static/program/book.svg'
import ProgramDescriptionItem from './ProgramDescriptionItem'

function ProgramDescription() {

    return (
    <Wrapper ariaLabel='Program description' title='Whats in my program?'>
        <ProgramDescriptionItem title='A personalized yoga program' description='Completely safe and focused on your key goals' icon={listIcon}/>
        <ProgramDescriptionItem title='Easy & enjoyable yoga workouts for your level' description='Program adjusts to your level and pace' icon={workoutIcon}/>
        <ProgramDescriptionItem title='No special preparation needed' description='Perfect for beginners! Requires no special preparation or equipment' icon={shoeIcon}/>
        <ProgramDescriptionItem title='Daily motivation & accountability' description='Track your progress, develop a healthy routine, reach goals faster' icon={appleIcon}/>
        <ProgramDescriptionItem title='Browse from various yoga challenges' description='30d morning yoga, mindful yoga, back flexibility challenge, and more!' icon={whistleIcon}/>
        <ProgramDescriptionItem title='Easy access on any device' description='Do your yoga anywhere across all types of devices' icon={smartwatchIcon}/>
        <ProgramDescriptionItem title='A complete guide to get started' description='Best tips, guidelines, advice, and recommendations for successful practice' icon={bookIcon}/>
    </Wrapper>
    )
}

export default ProgramDescription