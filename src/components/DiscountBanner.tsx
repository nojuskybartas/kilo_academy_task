import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil'
import { discountActiveAtom } from '../atoms/discountAtom'

function DiscountBanner() {

  const [timeRemaining, setTimeRemaining] = useState<number>(900000)
  const [, setDiscountActive] = useRecoilState<boolean>(discountActiveAtom)

  useEffect(() => {
    const startTime = new Date()
    const expiryTime = new Date(startTime.getTime() + 15 * (60 * 1000));
    const interval = setInterval(() => {
      if (timeRemaining <= 0) {
        setDiscountActive(false)
        return () => clearInterval(interval);
      }
      
      // Changed this to calculate current time instead of subtracting 1 second each time because then the calculation 'continues' even if eg. the user locks their phone.
      const currentTime = new Date()
      setTimeRemaining(expiryTime.getTime()-currentTime.getTime())
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [])

  const formatTimeInHHMMSS = (time: number) => {
    var hours: any = Math.floor(time / (1000 * 60 * 60));
    var minutes: any = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds: any = Math.floor((time % (1000 * 60)) / 1000);

    if (hours < 10) hours = '0'+ hours;
    if (minutes < 10) minutes = '0'+ minutes;
    if (seconds < 10) seconds = '0'+ seconds;

    return hours + ':' + minutes + ':' + seconds
  }

  return (
    <div className='sticky top-0 w-full h-10 bg-blue-300 flex justify-center items-center text-white text-sm shadow-sm'>
        <FontAwesomeIcon icon={faTag} className='w-5 h-5 mr-2'/>
        <span>50% discount only valid for <span className='font-semibold'>{formatTimeInHHMMSS(timeRemaining)}</span></span>
    </div>
  )
}

export default DiscountBanner