import React from "react";
import makeup from "../../assets/home/girl.png";

function Board() {
  return (
    <div className="bg-customPink font-zain justify-between flex flex-row self-center">
      <img src={makeup} alt="logo page" className="sm:w-80 sm:h-80 w- rounded-full ml-20" />
      <div className="flex flex-col mr-28 mt-20">
        <p className="justify-start font-bold text-3xl">Moon</p>
        <div className="text-xl w-40 sm:w-full">
          <p>"Your trusted space to learn, connect, and transform</p>
          <p>your skincare routine, one step at a time."</p>
        </div>
      </div>
    </div>
  );
}

export default Board;
