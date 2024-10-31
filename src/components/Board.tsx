import React from "react";
import makeup from "../assets/girl.png";

function Board() {
  return (
    <div className="bg-pink-100 justify-between flex flex-row self-center">
      <img src={makeup} alt="logo page" className="w-80 h-80 rounded-full ml-20" />
      <div className="flex flex-col mr-28 mt-20">
        <p className="justify-start font-bold text-3xl">Moon</p>
        <div className="text-xl">
          <p>"Your trusted space to learn, connect, and transform</p>
          <p>your skincare routine, one step at a time."</p>
        </div>
      </div>
    </div>
  );
}

export default Board;
