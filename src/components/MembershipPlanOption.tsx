import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { discountActiveAtom } from '../atoms/discountAtom'
import { useRecoilValue } from 'recoil';

type MembershipPlanOptionProps = {
    months: number,
    price: number,
    percentDiscount?: number,
    selected: boolean,
    onClick: () => void;
};

function MembershipPlanOption({months, price, percentDiscount, selected, onClick}: MembershipPlanOptionProps) {

    const getDiscountedPrice = (price: number, percentDiscount: number):number => {
        const discountedPrice = (price*(1-percentDiscount/100)).toFixed(2)
        return Number(discountedPrice)
    }

    const formatPrice = (num: number) => {
        return '$' + num.toFixed(2)
    }

    const [optionPrice, setOptionPrice] = useState<number>(percentDiscount ? getDiscountedPrice(price, percentDiscount) : price)
    const discountActive = useRecoilValue<boolean>(discountActiveAtom)

    useEffect(() => {
        if (!discountActive)
        setOptionPrice(price => price)
    }, [discountActive])

    return (
        <div className={`w-full h-fit border-2 border-solid ${selected ? 'border-primary' : 'border-inactive'} rounded-xl p-3 flex items-center cursor-pointer`} onClick={onClick}>
            <div className='w-full h-full'>
                <span className='w-full h-fit flex font-semibold items-center text-lg mb-1'>
                    {months} month plan
                    {discountActive && percentDiscount && percentDiscount >= 50 && <span className='text-base ml-3 bg-orange-300 rounded-lg px-2 py-1'>Save {percentDiscount}%</span>}
                </span>
                <span className='w-full h-fit flex text-3xl font-semibold items-end mb-1'>
                    {formatPrice(optionPrice)}
                    <span className='text-base font-normal ml-1'>/ month</span>
                </span>
                <span className='w-full h-fit'>
                    {percentDiscount ? 
                        discountActive ?
                            <span className='space-x-1'>
                                <span className='line-through'>${months*price}</span>
                                <span className='text-primary font-semibold'>{formatPrice(months * optionPrice)}</span>
                                <span>billed every {months} months</span>
                            </span>
                        :
                            `Billed every ${months} months`
                    :   
                        'Billed monthly'}
                </span>
            </div>
            <div className='w-fit h-full'>
                <FontAwesomeIcon icon={selected ? faCircleCheck : faCircle} className={`w-7 h-7 ${selected ? 'text-primary' : 'text-inactive'}`}/>
            </div>
        </div>
    )
}


export default MembershipPlanOption