import React from 'react';
import image from '../../assets/home/moon.png'

function header() {
    return (
        <div className='justify-between flex flex-row self-center bg-white rounded shadow-lg'>
        <img src={image} alt="logo page" className='w-14 h-14 rounded-full'/>
        <div className='flex space-x-8 text-xl pr-10 pt-5'>
           <p className='text-sm hover:text-pink-500'>Home</p>
           <p className='text-sm hover:text-pink-500'>Q & A</p>
           <p className='text-sm hover:text-pink-500'>About</p>
           <p className='text-sm hover:text-pink-500'>Account</p>
       </div>
   </div>
    );
}

export default header;