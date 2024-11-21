import React from 'react';
import ArticleCard from '../../components/search/ArticleCard';
// import card from '../../assets/search/card.png';
import { FaSearch, FaChevronLeft, FaTimes } from 'react-icons/fa';

const SearchPage = () => {
  return (
    <div className="flex items-center flex-col p-4 mx-auto ">
      {/* Header with Back Button, Search Input, and Icons */}
      <div className="flex items-center justify-between mb-6 ">
        <button className="text-2xl font-semibold pr-10">
          <FaChevronLeft className="h-6 w-6 "/>
        </button>

        <div className="relative">
          {/* Search input with icon */}
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 rounded-full px-60 py-2 pl-10 outline-none"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <FaSearch className="h-5 w-5 text-gray-500" />
          </div>
        </div>

        <div className="flex text-2xl pl-10">
          <button className="flex">
            <FaTimes className="h-6 w-6 " />
          </button>
        </div>
      </div>

      {/* Search Filters */}
      <div className="flex items-center px-5 mb-8">
        <button className="bg-customPink text-slate-600 py-1 px-4 rounded-full font-semibold font-zain">
          Popular Search
        </button>
        <button className="border border-customPink text-slate-600 py-1 px-4 rounded-full font-semibold font-zain">
          Newests
        </button>
      </div>

      {/* Article Cards in Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default SearchPage;