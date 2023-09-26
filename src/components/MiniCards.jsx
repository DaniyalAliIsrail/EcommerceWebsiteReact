import React from 'react'
import FREESHIPING from '../assets/f1.png'

const MiniCards = ({img1}) => {
       return (
              <>
                     <div className='mt-2'>
                            <div className='border-2 flex justify-center flex-col w-48 h-52 gap-5 text-center  rounded-sm hover:shadow-inner '>
                                   <div><img width={180} src={img1}></img></div>
                                   <p className='py-1 px-2 rounded bg-[#dde3fd]  w-auto mx-auto text-teal-950 font-bold'>Free Shipping</p>
                            </div>
                     </div>

              </>
       )
}

export default MiniCards