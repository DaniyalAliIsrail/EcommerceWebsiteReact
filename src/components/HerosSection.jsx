import React from 'react'
import HEROSBACKGROUND from '../assets/heroimage.png'

const HerosSection = () => {
    return (
        <>
            <div className="background-heros-section w-[100%] h-[90vh] custom-height">
                <div className="heros-text w-[60vw] heros-custom">
                    <h3 className=" trade-heading">Trade-in-offer</h3>
                    <h2 className="super-main-heading">Super value deals
                        On all products</h2>
                    <p className='heading-deal'>Save more with coupons & up to 70% off</p>
                    <button type="button" class= " custom-btn text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Shop Now</button>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}

export default HerosSection