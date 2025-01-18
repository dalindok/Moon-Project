import React from "react";
import profile from "../../assets/profile/Profile.png";

function Board() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-customPink font-zain">
      {/* <button onClick={handleGoBack} className="absolute top-8 left-8">
        <GoChevronLeft className="text-3xl" />
      </button> */}
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
