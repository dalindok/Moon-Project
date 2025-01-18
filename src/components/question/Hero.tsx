import React from "react";
import head from "../../assets/imgs/head.png";
import logo from "../../assets/imgs/logo.png";
const Hero = () => {
  return (
    <div className="w-full justify-between flex flex-col items-center sm:flex-row sm:p-12 p-5 bg-red-50">
      <img
        data-aos="fade-right"
        className="sm:w-1/4 w-1/3 sm:ml-8"
        src={head}
        alt="Hero Img"
      />
      <div
        data-aos="fade-left"
        className="font-zain flex items-center justify-center text-center flex-col pt-10 md:pr-36 sm:pr-24"
      >
        {/* <p className='text-9xl font-bold pb-2 text-customPink'>Moon</p> */}
        <img
          className=" object-cover w-[100px] h-[50px]"
          src={logo}
          alt="moon"
        />
        <p className="text-2xl">
          "Your trusted space to learn, connect, and transform{" "}
        </p>
        <p className="text-2xl ">your skincare routine, one step at a time."</p>
      </div>
    </div>
  );
};

export default Hero;
