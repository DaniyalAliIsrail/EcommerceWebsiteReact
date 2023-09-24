import React from 'react'

const ProductsBanner = () => {
  return (
       <>
                     <div className='lg:w-full h-56 sm:w-full  text-white flex justify-center items-center text-center  bg-products-banner'>
                            <div className=' lg:w-[50vw] sm:w-[100vw] h-46 lg:p-5 lg:mt-5'>
                                   <p className='lg:text-1xl font-semibold'>Repair Services
                                   </p>
                                   <h2 className='lg:text-[1.9rem] sm:text-1xl p-3 font-bold sm:w-[100%]'>Up to <span className='text-red-700'>70% Off</span> -All t-Shirts & Accesories
                                   </h2>
                                   <button>Explore More</button>
                            </div>

                     </div>
              </>
  )
}

export default ProductsBanner