import React, { useEffect, useState } from 'react'
import FeaturedProducts from '../../components/FeaturedProducts';
import Cardsapiwala from '../../components/Cardsapiwala';
import AdsWala from '../../components/AdsWala';

const Products = () => {

  return (
    <div>
      <AdsWala homeheading="#stayhome" homedesc="Save more with coupons & up to 70% off" />
      <div className='mt-3'>
        <FeaturedProducts />
      </div>
      <div >
    
        <Cardsapiwala />
        
      </div>
    </div>


  )
}

export default Products