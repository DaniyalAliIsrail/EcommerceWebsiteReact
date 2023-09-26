import React from 'react'
import AdsWala from '../../components/AdsWala'
import Aboutwhoweare from '../../components/Aboutwhoweare'
import MiniCards from '../../components/MiniCards'
import MC1 from '../../assets/f1.png'
import MC2 from '../../assets/f2.png'
import MC3 from '../../assets/f3.png'
import MC4 from '../../assets/f4.png'
import MC5 from '../../assets/f5.png'

const About = () => {
  return (
    <>
      <AdsWala homeheading="#KnowUs" homedesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit !" />
      <div>
        <Aboutwhoweare />
      </div>
      <div className='flex  flex-wrap justify-around items-center lg:mt-2 lg:mb-5'>
        <MiniCards img1={MC1} />
        <MiniCards img1={MC2} />
        <MiniCards img1={MC3} />
        <MiniCards img1={MC4} />
        <MiniCards img1={MC5} />


      </div>

    </>
  )
}

export default About