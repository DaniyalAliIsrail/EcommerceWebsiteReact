import React from 'react'
import ABOUTBANNER from '../assets/aboutbanner.jpg'
import MiniCards from './MiniCards'

const Aboutwhoweare = () => {
  return (
   <>
   <>
  <div className=" pt-12 px-6 md:px-20 bg-hero  ">
    <div className="flex  gap-6 md:flex-row items-center max-w-8xl">
    <div className="w-full md:w-1/2 lg:h-[68vh]  flex justify-center md:justify-end ">
        <img src={ABOUTBANNER} />
      </div>
      <div className="w-full md:w-1/2 lg:pr-32 ">
        <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
        Who We Are ?
        </h2>
        <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
          Help Scout is designed with your customers in mind. Provide email and
          live chat with a personal touch, and deliver help content right where
          your customers need it, all in one place, all for one low price.
        </h3>
       
      </div>
    </div>
  </div>
  <div className='flex justify-around items-center lg:mt-5'>
    <MiniCards />
    <MiniCards />
    <MiniCards />
    <MiniCards />
    <MiniCards />


  </div>
  
</>

   </>
  )
}

export default Aboutwhoweare