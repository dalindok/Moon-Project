import React from "react";
import { BsSearchHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigation = useNavigate();
  return (
    <div className="flex justify-center pt-5 sm:pt-10">
      <div className="flex  border rounded-2xl sm:px-3 px-2 sm:py-2 py-1 shadow-sm border-black w-40 sm:w-96">
        <input
          type="text"
          // disabled
          placeholder="Search Articles"
          onClick={() => {
            console.log("IN");
            navigation("/searchPage");
          }}
          className="outline-none w-full flex-1 text-xs sm:text-base"
        />
        <BsSearchHeart className="text-black sm:mt-1 mt-0" />
      </div>
    </div>
  );
};

export default Search;
