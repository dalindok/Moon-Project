import React from 'react'
import { BsSearchHeart } from "react-icons/bs";
const Search = () => {
  return (
    <div className='flex justify-center pt-10'>
        <div className="flex  border rounded-2xl px-3 py-2 shadow-sm border-black w-96">
        <input
        type="text"
        placeholder="Search Articles"
        className="outline-none w-full flex-1"
      />
      <BsSearchHeart className="text-black mt-1" />
    </div>
    </div>
  )
}

export default Search