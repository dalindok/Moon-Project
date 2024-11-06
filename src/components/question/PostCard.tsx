import React from 'react'
import { BsEnvelope } from 'react-icons/bs'

const PostCard = () => {
  return (
    <div >
      <div className="w-2/4 p-6 bg-red-50 rounded-2xl shadow-md mx-auto my-7 font-zain">
        <div className="flex items-start justify-start space-x-4">
          {/* Profile Image */}
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
          {/* Username and Time */}
            <div className="flex items-center space-x-2 pt-3">
              <span className="font-bold text-2xl text-gray-900">Nita12</span>
              <span className="text-gray-500 text-base">4 hr. ago</span>
            </div>
          
            {/* Post Title */}
            <div className='flex items-start flex-col pt-5'>
            <h2 className="font-medium text-2xl mt-2 text-gray-800">
              What’s your skin type, and how do you determine it?
            </h2>

            {/* Post Content */}
            <p className="text-gray-700 mt-1 text-start pt-2 text-lg font-light">
              Understanding whether your skin is oily, dry, combination, or sensitive is essential for choosing
              the right products. Do you know how to identify your skin type? Understanding whether your skin 
              is oily, dry, combination, or sensitive is essential for choosing the right products. Do you 
              know how to identify your skin type?
            </p>
            </div>
          </div>
        </div>

        {/* Icon and Count */}
      <div className="flex justify-end items-center mt-4 space-x-1">
        <div className="flex items-center bg-white px-3 py-1 rounded-lg shadow">
          <BsEnvelope className="text-gray-500" />
          <button className="ml-2 text-gray-700">254</button>
          {/* <span className="ml-2 text-gray-700">254</span> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default PostCard