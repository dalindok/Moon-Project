import React from "react";
import profile from "../../assets/profile/Profile.png";

function Board() {
  return (
    <div className="flex flex-col items-center justify-center bg-customPink font-zain">
      <img
        src={profile}
        alt="user profile"
        className="w-32 h-32 rounded-full shadow-sm mt-10"
      />
      <p className="text-3xl font-bold m-5">Chom Thonita</p>
    </div>
  );
}

export default Board;
