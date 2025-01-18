import React from "react";

function CoreValue() {
  return (
    <div className="font-zain">
      <p className="underline underline-offset-8 font-bold text-xl sm:text-3xl mt-10 text-center">
        Our Core Values
      </p>
      <div className="flex flex-col items-center mt-6 sm:mt-10 p-4 sm:p-0">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="bg-red-50 mx-4 my-2 md:mx-10 md:my-4 rounded-lg flex-grow w-72 sm:w-96 h-auto p-4">
            <p className="font-bold text-xl sm:text-2xl">Community Support:</p>
            <p className="text-md">
              Connect, share, and grow with a supportive skincare community.
            </p>
          </div>
          <div className="bg-red-50 mx-4 my-2 mt-3 md:mx-4 md:my-4 rounded-lg flex-grow w-72 sm:w-96 h-auto p-4">
            <p className="font-bold text-xl sm:text-2xl">Quality & Wellness:</p>
            <p className="text-md">
              Embrace a path to radiant skin with products and routines that
              prioritize your well-being.
            </p>
          </div>
        </div>
        <div className="bg-red-50 rounded-lg w-72 sm:w-96  h-auto justify-center mt-3 md:mt-10 p-4 flex-grow">
          <p className="font-bold text-xl sm:text-2xl">Expert Insights:</p>
          <p className="text-md">
            Discover trusted tips and advice to enhance your skincare journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoreValue;
