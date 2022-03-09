import React from 'react';
import DiscountBanner from './components/DiscountBanner';
import Questions from './components/Questions';
import MembershipPlanInfo from './components/MembershipPlanInfo';
import MoreInfo from './components/MoreInfo';
import SuccessStories from './components/SuccessStories';
import LogoBanner from './components/LogoBanner';


function App() {

  return (
    <div className='w-full h-screen overflow-y-scroll'>
      <DiscountBanner/> 
      <div className='w-full h-full flex flex-col items-center'>
        <LogoBanner/>
        <p className='w-full md:text-center p-3 mt-5'>Over <span className='font-semibold'>52 147</span> plans ordered.</p>
        <div className='w-full h-fit p-3 space-y-10'>
          <MembershipPlanInfo title={<span className='text-3xl md:text-4xl font-extrabold'>Get access to your yoga program now!</span>}/>
          <SuccessStories/>
          <MoreInfo/>
          <Questions/>
          <MembershipPlanInfo title={<span className='text-2xl font-bold flex justify-center'>Start your yoga program today!</span>}/>
        </div>
      </div>
    </div>
  );
}

export default App;
