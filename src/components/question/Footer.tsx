import React from 'react'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className="bg-gray-100 py-4 px-8">
        <div className="flex justify-between items-center">
        
        {/* Left Side: Logo and Links */}
        <div className="flex items-center space-x-4">
          {/* <h1 className="font-bold text-lg">WingedLetter</h1> */}
          <img className='w-[100px] object-cover' src={logo} alt="" />
            <div className='flex flex-col'>
          <div className='flex flex-row'>
          <a href="#about" className="text-gray-700 p-5">About</a>
          <a href="#qa" className="text-gray-700 p-5">Q & A</a>
          </div>
          {/* Center: Copyright */}
            <p className="text-gray-700 text-sm pl-5">@ 2024 WingedLetter, All rights reserved</p>
        </div>
        </div>
        
        
        {/* Right Side: Support */}
        <div className="text-gray-700">
          Support: dalindok211@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Footer