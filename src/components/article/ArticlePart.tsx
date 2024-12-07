import React from "react";
import logo from "../../assets/imgs/logo.png";
interface Props {
  date: string;
  img: string;
  title: string;
  shortdescription: string;
  description: string;
}

const ArticlePart = (props: Props) => {
  return (
    <div className="bg-red-50 rounded-lg p-6 m-5 max-w-2xl mx-auto mt-1 shadow-lg md:p-8 lg:max-w-4xl">
      <div className="flex items-center space-x-3 mb-4">
        {/* <img
          src={props.img}
          alt="Profile"
          className="w-7 h-7 md:w-10 md:h-10 rounded-full"
        /> */}
        <div className="flex flex-row items-center">
          {/* <p className="font-bold text-lg md:text-xl">Nita12</p> */}
          <p className="font-thin text-gray-500 text-sm md:text-md">
            {props.date}
          </p>
        </div>
      </div>
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-start">
        {props.title}
      </h3>
      <div className="bg-customPink rounded-md p-2 md:p-4 flex justify-center items-center mb-4">
        <img
          src={props.img}
          alt="Article Visual"
          className="w-full h-48 md:h-80 lg:h-96 rounded-sm object-cover"
        />
      </div>
      <div className="space-y-4 text-start text-lg md:text-2xl">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ArticlePart;
