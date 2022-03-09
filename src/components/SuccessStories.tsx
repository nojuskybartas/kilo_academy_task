import React from 'react'
import Wrapper from './Wrapper'
import person1image from '../static/users/Picture1.png'
import person2image from '../static/users/Picture2.png'
import person3image from '../static/users/Picture3.png'
import ThemeButton from './ThemeButton'
import SuccessStoryCard from './SuccessStoryCard'

function SuccessStories() {

    const reviews = [
        {
            name: 'Emily',
            age: 28,
            address: 'Delaware, NJ',
            rating: 4,
            image: person1image,
            description: 'I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.'
        },
        {
            name: 'Kylie',
            age: 40,
            address: 'Los Angeles',
            rating: 5,
            image: person2image,
            description: <span>I will be very straightforward - I hate sports and working out. <span className='font-semibold'>Positive Yoga</span> put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.</span>
        },
        {
            name: 'Jesica',
            age: 51,
            address: 'San Francisco, CA',
            rating: 5,
            image: person3image,
            description: <span>I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With <span className='font-semibold'>Positive Yoga</span> program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.</span>
        },
    ]

    const reviewCards = reviews.map((review, i) => (
        <SuccessStoryCard key={i} name={review.name} age={review.age} address={review.address} rating={review.rating} image={review.image} description={review.description}/>
    ))


    return (
        <Wrapper ariaLabel='Success stories' title={<span className='flex justify-center'>Hear success stories from our clients</span>} fullWidth className='flex flex-col items-center'>
            
            <div className='w-full flex space-x-6 items-center md:justify-center overflow-x-scroll snap-x snap-mandatory scrollbar-hide'>
                {reviewCards}
            </div>            

            <ThemeButton label='Get my plan' onClick={() => {}}/>

        </Wrapper>
  )
}

export default SuccessStories