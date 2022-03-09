import React, { ReactNode, useState } from 'react'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

type QuestionContainerProps = {
    initialyIsOpen?: boolean,
    question: string,
    answer: ReactNode,
}


function QuestionContainer({initialyIsOpen=false, question, answer}: QuestionContainerProps) {
    const [isOpen, setIsOpen] = useState<boolean>(initialyIsOpen)

    const variants = {
        open: { 
            height: 'auto', 
            opacity: 1, 
            y: 0,
            transition: { 
                ease: 'easeOut',
                duration: 0.3
            }
        },
        closed: { 
            height: '0', 
            opacity: [0.2, 0], 
            y: -50,
            transition: { 
                ease: 'easeOut',
                duration: 0.2
            }
        },
        
    }

    return (
        <div className='w-full h-fit border border-solid border-gray-300 rounded-2xl mb-4 p-5 cursor-pointer' onClick={() => setIsOpen(open => !open)}>
            <div className='w-full h-fit flex justify-between'>
                <h3 className='font-semibold'>{question}</h3>
                <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className='w-6 h-6 text-gray-800'/>
            </div>
            <motion.p className='mt-3' variants={variants} animate={isOpen ? "open" : "closed"}>{answer}</motion.p>
        </div>
    )
}

export default QuestionContainer