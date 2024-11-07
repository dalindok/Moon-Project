import React from 'react'
import logo from '../../assets/logo.png'
const Nav = () => {
  return (
    <div className='justify-between flex px-20 shadow-lg sticky h-[100px]'>
      <img className="w-[120px] object-cover" src={logo} alt="Logo" />
      <div className='font-zain flex space-x-5 font-bold px-10 text-[25px]' >
        <button className='px-5'>Home</button>
        <button className='px-5'>Q&As</button>
        <button className='px-5'>About</button>
        <button className='px-5'>Account</button>
      </div>
    </div>
  )
}

export default Nav