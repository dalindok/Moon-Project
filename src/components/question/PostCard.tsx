import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";

const PostCard = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className="w-3/4 sm:w-3/4  p-6 bg-red-50 rounded-2xl shadow-md mx-auto my-7 font-zain text-start">
        <div className="flex items-start justify-start space-x-4">
          {/* Profile Image */}
          <img src={logo} alt="Profile" className="w-12 h-12 rounded-full" />
          <div>
            {/* Username and Time */}
            <div className="flex items-center space-x-2 pt-1 sm:pt-3 ">
              <span className=" text-lg font-bold sm:text-2xl text-gray-900">
                Nita12
              </span>
              <span className="text-xs text-gray-500 sm:text-base">
                4 hr. ago
              </span>
            </div>

            {/* Post Title */}
            <div className="flex items-start flex-col pt-1 sm:pt-5">
              <h2 className="font-semibold text-xl mt-1 sm:text-2xl sm:mt-2 text-gray-800">
                What’s your skin type, and how do you determine it?
              </h2>

              {/* Post Content */}
              <p className="text-gray-700 mt-1 text-start pt-2 text-base sm:text-xl font-light">
                Understanding whether your skin is oily, dry, combination, or
                sensitive is essential for choosing the right products. Do you
                know how to identify your skin type? Understanding whether your
                skin is oily, dry, combination, or sensitive is essential for
                choosing the right products. Do you know how to identify your
                skin type?
              </p>
            </div>
          </div>
        </div>

        {/* Icon and Count */}
        <div className="flex justify-end items-center mt-4 space-x-1">
          <div className="flex items-center bg-white px-3 py-1 rounded-lg shadow">
            <BsEnvelope className="text-gray-500" />
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigation("/questionDetail");
              }}
              className="ml-2 text-gray-700"
            >
              254
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
