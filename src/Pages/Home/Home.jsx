import React from 'react'
import HerosSection from '../../components/HerosSection'
import MiniCards from '../../components/MiniCards'
import FeaturedProducts from '../../components/FeaturedProducts'
import CardsWala from '../../components/CardsWala'
import AdsWala from '../../components/AdsWala'
import DealWala from '../../components/DealWala'
import Cardsapiwala from '../../components/Cardsapiwala'



const Home = () => {
  return (
    <>
      <div className='width-full'>
        <HerosSection />
      </div>
      <div className='w-[90vw] mx-auto'>
        <div className='flex flex-wrap justify-evenly align-middle gap-2 minicard-custom-margin'>
          <MiniCards />
          <MiniCards />
          <MiniCards />
          <MiniCards />
          <MiniCards />
          <MiniCards />
        </div>
        <div>
          <FeaturedProducts />
        </div>
        <div>
         <Cardsapiwala />
        </div>
      </div>
      <div className='w-full'>
    <AdsWala />
      </div>
      <div className='w-[90vw] mx-auto  lg:mt-24 sm:mt-28 '>
      <DealWala />
      </div>
    </>
  )
}

export default Home