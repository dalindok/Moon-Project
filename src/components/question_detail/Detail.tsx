import React from "react";
import { BsArrowReturnRight, BsReply, BsSearch } from "react-icons/bs";
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";

const Detail = () => {
  const navigation = useNavigate();
  return (
    <div className="max-w-2xl mx-auto bg-red-50 p-6 rounded-2xl shadow-lg my-5 font-zain text-start">
      <button
        onClick={() => navigation("/questionPage")}
        className="absolute left-20"
      >
        <GoChevronLeft className="text-3xl" />
      </button>
      {/* Main Post */}
      <div className="flex items-start space-x-4 mb-5">
        <img src={logo} alt="Profile" className="w-12 h-12 rounded-full" />
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gray-900">Nita12</span>
            <span className="text-gray-500 text-sm">4 hr. ago</span>
          </div>
          <h2 className="font-bold text-2xl mt-2 text-gray-800">
            What’s your skin type, and how do you determine it?
          </h2>
          <p className="text-gray-700 mt-1 text-xl">
            Understanding whether your skin is oily, dry, combination, or
            sensitive is essential for choosing the right products. Do you know
            how to identify your skin type? Understanding whether your skin is
            oily, dry, combination, or sensitive is essential for choosing the
            right products.
          </p>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900 font-semibold">Comments</h3>
          <div className="flex items-center bg-white px-3 py-1 rounded-lg shadow">
            <input
              type="text"
              placeholder="Search Comment"
              className="outline-none w-32 text-gray-700"
            />
            <BsSearch className="text-gray-500 ml-2" />
          </div>
        </div>

        {/* Comment */}
        <div className="flex items-start space-x-4 mb-5">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-gray-900 text-xl">Lili</span>
              <span className="text-gray-500 text-sm">4 hr. ago</span>
            </div>
            <p className="text-gray-700 mt-1 text-xl">
              Understanding whether your skin is oily, dry, combination, or
              sensitive is essential for choosing the right products. Do you
              know how to identify your skin type?
            </p>
            <button className="text-customPink font-semibold mt-2 flex items-center space-x-1">
              <BsReply className="text-sm" /> <span>Reply</span>
            </button>

            {/* Reply to Comment */}
            <div className="flex items-start space-x-4 mt-4">
              <BsArrowReturnRight className="text-gray-500 mt-2" />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-gray-900 text-xl">Lili</span>
                  <span className="text-gray-500 text-sm">4 hr. ago</span>
                </div>
                <p className="text-gray-700 mt-1 text-xl">
                  Understanding whether your skin is oily, dry, combination, or
                  sensitive is essential for choosing the right products.
                </p>
                <button className="text-customPink font-semibold mt-2 flex items-center space-x-1">
                  <BsReply className="text-sm" /> <span>Reply</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Comments */}
        <div className="flex items-start space-x-4 mb-5">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-gray-900 text-xl">Lili</span>
              <span className="text-gray-500 text-sm">4 hr. ago</span>
            </div>
            <p className="text-gray-700 mt-1 text-xl">
              Understanding whether your skin is oily, dry, combination, or
              sensitive is essential for choosing the right products.
            </p>
            <button className="text-customPink font-semibold mt-2 flex items-center space-x-1">
              <BsReply className="text-sm" /> <span>Reply</span>
            </button>
          </div>
        </div>

        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
          <input
            type="text"
            placeholder="Comment"
            className="flex-grow outline-none text-gray-700"
          />
          <button className="text-black font-bold text-lg ml-2">➤</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
