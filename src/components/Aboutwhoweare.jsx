import React from 'react'
import ABOUTBANNER from '../assets/aboutbanner.jpg'
import MiniCards from './MiniCards'

const Aboutwhoweare = () => {
  return (
   <>
 <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:max-w-lg lg:px-5 lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={ABOUTBANNER}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Before they sold out
        <br className="hidden lg:inline-block" />
        readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, exercitationem..
      </p>
    
    </div>
    
  </div>
</section>

  
  


   </>
  )
}

export default Aboutwhoweare