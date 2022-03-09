import React from 'react'

type ButtonProps = {
    label:string, 
    onClick:() => void
}

function ThemeButton({label, onClick}:  ButtonProps){

    return (
        <button className='w-full max-w-[400px] h-14 rounded-lg bg-primary text-white shadow-xl text-shadow-lg' onClick={onClick}>
            {label}
        </button>
    )
}

export default ThemeButton