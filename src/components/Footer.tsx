import React from "react";
import logo from "../assets/imgs/logo.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigation = useNavigate();
  return (
    <div className="bg-gray-100 mt-10 py-1 px-2 sm:py-4 sm:px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            className="w-[80px] sm:w-[100px] object-cover"
            src={logo}
            alt="moon"
          />
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row ">
              <a
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigation("/about");
                }}
                href="#about"
                className="text-gray-700 p-2 sm:p-4 sm:text-base text-xs"
              >
                About
              </a>
              <a
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigation("/questionPage");
                }}
                href="#qa"
                className="text-gray-700 p-2 sm:p-4 sm:text-base text-xs"
              >
                Q & A
              </a>
            </div>
          </div>
        </div>
        <div className="text-gray-700 sm:text-base text-xs">
          Support: dalindok211@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
