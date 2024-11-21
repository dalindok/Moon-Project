import React from "react";
import logo from "../assets/imgs/logo.png";
const Footer = () => {
  return (
    <div className="bg-gray-100 py-1 px-2 sm:py-4 sm:px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img className="w-[80px] sm:w-[100px] object-cover" src={logo} alt="moon" />
          <div className="flex flex-col">
            <div className="flex flex-row">
              <a href="#about" className="text-gray-700 p-3 sm:p-5 sm:text-base text-sm">
                About
              </a>
              <a href="#qa" className="text-gray-700 p-3 sm:p-5">
                Q & A
              </a>
            </div>
            <p className="text-gray-700 sm:text-sm sm:pl-5 text-xs">
              @ 2024 WingedLetter, All rights reserved
            </p>
          </div>
        </div>
        <div className="text-gray-700 sm:text-base text-sm">Support: dalindok211@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
