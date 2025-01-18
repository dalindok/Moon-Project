import React from "react";
import header from "../../assets/aboutus/header.png";

const Header = () => {
  return (
    <div
      className="h-full sm:h-screen bg-cover bg-center flex items-center justify-center text-center text-white p-5 "
      style={{ backgroundImage: `url(${header})` }}
    >
      <div>
        <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-bold  text-white mb-10 pt-2 sm:mb-16 sm:pt-8">
          About Us
        </h2>
        <div className="bg-white bg-opacity-50 rounded-lg -6 sm:p-12">
          <div className=" text-slate-900 leading-relaxed font-light border-solid box-border h-200px w-250px p-8">
            <p className="text-sm sm:text-base md:text-lg text-slate-900 font-light border-solid pt-2 p-2">
              Welcome to our skincare community! Our platform is designed to
              help you nevigate
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-900 font-light border-solid pt-2 p-2">
              the world of skincare through open dicussions and expert
              recommendations. We{" "}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-900 font-light border-solid pt-2 p-2">
              focus specifially on skincare and beauty, allowing you to share
              our experiences.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-900 font-light border-solid pt-2 p-2">
              ask the questions, and explore solutions that work best for your
              skin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
