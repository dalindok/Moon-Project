import React from 'react';
import card from '../../assets/search/card.png'

const ArticleCard = () => {
  return (
      <div className="bg-white shadow-md rounded-lg p-4 w-96 sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <img src={card} alt="Article thumbnail" className="w-96 flex items-center" />
        <div className="p-4">
          <p className="text-gray-500 text-sm font-zain">Oct 17, 2024</p>
          <h2 className="text-lg font-zain font-bold mt-2">5 Simple Tips for Glowing Skin Every Day</h2>
          <p className="text-gray-600 font-zain mt-2">"Taking care of your skin doesn’t have to be complicated! Here are five easy steps to incorporate into your daily routine for a natural, radiant glow."</p>
        </div>
      </div>
  )
}

export default ArticleCard;
