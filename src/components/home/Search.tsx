import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex justify-center items-center w-full mt-10">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
          className="w-full bg-white bg-opacity-80 p-4 pl-10 rounded-md shadow-md transition-all font-zain duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-customPink hover:shadow-lg" // Added hover and focus styles
        />
        <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl font-zain text-customPink" />
      </div>
    </div>
  );
}

export default Search;
