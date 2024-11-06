import React from 'react'
import head from '../../assets/head.png'
import logo from '../../assets/logo.png'
import beauty from '../../assets/beauty.png'
const Hero = () => {
  return (
    <div className=' justify-between flex p-16 bg-red-50'>
        <img className='w-1/4 ml-28' src={head} alt="Hero Img" />
        <div className='font-zain flex items-center flex-col pt-10 pr-36'>
        {/* <p className='text-9xl font-bold pb-2 text-customPink'>Moon</p> */}
        <img className="w-[300px] h-[150px] object-cover" src={logo} alt="moon" />
        <p className='text-2xl'>"Your trusted space to learn, connect, and transform </p>
        <p className='text-2xl'>your skincare routine, one step at a time."</p>
        </div>
    </div>
  )
}

export default Hero