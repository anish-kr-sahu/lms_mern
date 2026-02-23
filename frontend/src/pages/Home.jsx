import React from 'react'
import Nav from '../component/Nav'
import home from "../assets/home1.jpg"

function Home() {
  return (
    <div className='w-[100%] overflow-hidden'>
      <div className='w-[100%] lg:h-[140vh] h-[70vh] relative'>
        <Nav/>
        <img src={home} className='object-cover md:object-fill w-[100%] lg:h-[100%] h-[50vh]'alt="home" />
        <span className='lg:text-[70px] absolute md:text-[40px] lg:top-[10%] top-[15%]  w-[100%] flex items-center justify-center text-white font-bold text-[20px]'>Grow Your Skills to Advance</span>
        <span  className='lg:text-[70px] text-[20px] md:text-[40px] absolute lg:top-[18%] top-[20%] w-[100%] flex items-center justify-center text-white font-bold'>Your Career path</span>
        <div className='absolute lg:top-[30%] top-[75%] md:top-[80%] w-[100%] flex items-center justify-center gap-3 flex-wrap'>
          <button className='px-[20px] py-[10px] border-2 lg:border-white border-black lg:text-white text-black rounded-[10px] text-[18px] font-light flex gap-2 cursor-pointer'>View All Courses</button>
          <button className='px-[20px] py-[10px] border-2 lg:bg-white border-black lg:text-black text-white rounded-[10px] text-[18px] font-light flex gap-2 cursor-pointer'>Search With Ai</button>
        </div>
      </div>
    </div>
  )
}

export default Home
