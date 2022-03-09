import React from 'react'
import ThemeButton from './ThemeButton'
import safeCheckoutGuarantee from '../static/safeCheckout.svg'
import Wrapper from './Wrapper'
import { useRecoilState } from 'recoil'
import { membershipPlanAtom } from '../atoms/membershipPlanAtom'
import MembershipPlanOption from './MembershipPlanOption'

export default function MembershipPlans() {

    const [selectedPlan, setSelectedPlan] = useRecoilState(membershipPlanAtom)

    const price = 19.99
    const planOptions = [
        {
            duration: 6,
            percentDiscount: 50,
        },
        {
            duration: 3,
            percentDiscount: 25,
        },
        {
            duration: 1,
        },
    ]

    return (
        <Wrapper ariaLabel='Membership plans' title={<span className='font-semibold'>Choose your plan and get <span className='text-primary'>7 days free trial</span></span>} className='space-y-5'>
            {planOptions.map((plan, i) => (
                <MembershipPlanOption key={i} months={plan.duration} price={price} percentDiscount={plan.percentDiscount} selected={i===selectedPlan} onClick={() => setSelectedPlan(i)}/>
            ))}
            <ThemeButton label='Get your plan' onClick={() => console.log({selectedPlan: planOptions[selectedPlan]})}/>
            <p className='text-center text-sm'>After 7 days free trial subscription payment is automatically charged from your account unless it is canceled at least 24 hours before the end of the trial period.</p>
            <p className='text-center text-sm'>By choosing a payment method you agree to the <a>T&Cs</a> and <a>Privacy Policy</a></p>
            <img src={safeCheckoutGuarantee} alt='Safe Checkout Guarantee' className='w-full h-fit self-center'/>
        </Wrapper>
    )
}