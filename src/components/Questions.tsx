import React from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import QuestionContainer from './QuestionContainer'
import ThemeButton from './ThemeButton'
import Wrapper from './Wrapper'

function Questions() {
    const {width} = useWindowDimensions()

    return (
        <Wrapper title={<span className='flex md:justify-center'>Frequently Asked Questions</span>} ariaLabel='Frequently asked questions' fullWidth className='w-full h-fit max-w-2xl ml-auto mr-auto py-10 flex flex-col items-center'>
            <QuestionContainer 
            question='What happens after I order?' 
            answer={<span>After you place your order, we get to work!<br/>
                    Based on the questions you answered in the quiz, we’ll craft 
                    your personal plan to your level with recomendations on how to improve. 
                    </span>}
            initialyIsOpen
            />
            <QuestionContainer 
            question='Where can I access my plan?' 
            answer={<span>Your plan will be accessible in 
                    <span className='font-semibold'> Positive Yoga's </span>
                    web app with a special link generated after your purchase.
                    </span>}
            initialyIsOpen={width < 768}
            />
            <QuestionContainer 
            question='How can I cancel my subscription?' 
            answer={<span>You can manage or cancel your subscription by writing our customer support <a href='mailto: hello@positiveyoga.app'>hello@positiveyoga.app</a></span>}
            initialyIsOpen={width < 768}
            />
            <QuestionContainer 
            question='Why this program is paid?' 
            answer='We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback! '
            initialyIsOpen={width < 768}
            />
                                    
            <ThemeButton label='Get my plan' onClick={() => {}}/>
        </Wrapper>
    )
}

export default Questions