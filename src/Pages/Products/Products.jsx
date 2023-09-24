import React, { useEffect, useState } from 'react'
import ProductsBanner from '../../components/ProductsBanner'
import FeaturedProducts from '../../components/FeaturedProducts';
import Cardsapiwala from '../../components/Cardsapiwala';

const Products = () => {

  return (
    <div>
      <ProductsBanner />
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