import React from 'react'

const AdsWala = ({homeheading , homedesc }) => {
       return (
              <>
                     <div className='lg:w-full h-52 sm:w-full   background-custom-image text-white flex justify-center items-center text-center p-5'>
                            <div className=' lg:w-[50vw] sm:w-[100vw] h-46 lg:p-5 lg:mt-5'>
                                   <p className='lg:text-3xl text-white  font-semibold'>{homeheading}
                                   </p>
                                   <h2 className='lg:text-[1.2rem] sm:text-1xl p-3 font-bold sm:w-[100%]'>Up to <span className='text-red-700'>70% Off</span> {homedesc}
                                   </h2>
                                   <button>Explore More</button>
                            </div>

                     </div>
              </>
       )
}

export default AdsWala