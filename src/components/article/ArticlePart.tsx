import React from "react";
import logo from "../../assets/imgs/logo.png";

function ArticlePart() {
  return (
    <div className="bg-red-50 rounded-lg p-6 m-5 max-w-2xl mx-auto mt-1 shadow-lg md:p-8 lg:max-w-4xl">
      <div className="flex items-center space-x-3 mb-4">
        <img
          src={logo}
          alt="Profile"
          className="w-7 h-7 md:w-10 md:h-10 rounded-full"
        />
        <div className="flex flex-row items-center">
          <p className="font-bold text-lg md:text-xl">Nita12</p>
          <p className="font-thin ml-3 text-gray-500 text-sm md:text-md">
            4 hrs ago
          </p>
        </div>
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-start">
        5 Simple Tips for Glowing Skin Every Day
      </h3>
      <div className="bg-customPink rounded-md p-2 md:p-4 flex justify-center items-center mb-4">
        <img
          src={logo}
          alt="Article Visual"
          className="w-full h-48 md:h-80 lg:h-96 rounded-sm object-cover"
        />
      </div>
      <div className="space-y-4 text-start text-md md:text-xl">
        <p>
          Understanding whether your skin is oily, dry, combination, or
          sensitive is essential for choosing the right products. Do you know
          how to identify your skin type? Understanding whether your skin is
          oily, dry, combination, or sensitive is essential for choosing the
          right products.
        </p>
        <p>
          Understanding whether your skin is oily, dry, combination, or
          sensitive is essential for choosing the right products. Do you know
          how to identify your skin type? Understanding whether your skin is
          oily, dry, combination, or sensitive is essential for choosing the
          right products.
        </p>
      </div>
    </div>
  );
}

export default ArticlePart;
