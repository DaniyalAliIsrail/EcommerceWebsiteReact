import React from 'react'
import HerosSection from '../../components/HerosSection'
import MiniCards from '../../components/MiniCards'
import FeaturedProducts from '../../components/FeaturedProducts'
import CardsWala from '../../components/CardsWala'
import AdsWala from '../../components/AdsWala'
import DealWala from '../../components/DealWala'
import MC1 from '../../assets/f1.png'
import MC2 from '../../assets/f2.png'
import MC3 from '../../assets/f3.png'
import MC4 from '../../assets/f4.png'
import MC5 from '../../assets/f5.png'

import Cardsapiwala from '../../components/Cardsapiwala'





const Home = () => {
  return (
    <>
      <div className='width-full'>
        <HerosSection />
      </div>
      <div className='w-[95vw] mx-auto'>
        <div className='flex flex-wrap justify-evenly align-middle gap-2 minicard-custom-margin'>
          <MiniCards img1={MC1} />
          <MiniCards img1={MC2} />
          <MiniCards img1={MC3} />
          <MiniCards img1={MC4} />
          <MiniCards img1={MC5} />
        </div>
        <div>
          <FeaturedProducts />
        </div>
        <div>
         <Cardsapiwala />
        </div>
      </div>
      <div className='w-full lg:mt-5'>
    <AdsWala homeheading="Up to 70% Off - All t-Shirts & Accesories"/>
      </div>
      <div className='w-[90vw] mx-auto  lg:mt-24 sm:mt-28 '>
      <DealWala />
      </div>
    </>
  )
}

export default Home