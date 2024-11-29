import React, { useState } from "react";
import Profile from "../../assets/editProfile/Profile.png";
import { GoChevronLeft } from "react-icons/go";

function Board() {
  // State to manage the name input
  const [name, setName] = useState("Chom Thonita");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-customPink font-zain">
      <button className="absolute top-8 left-8">
        <GoChevronLeft className="text-3xl" />
      </button>
      <img
        src={Profile}
        alt="user profile"
        className="w-32 h-32 rounded-full shadow-sm mt-10"
      />
      <div className="flex mt-5 mb-5 items-center">
        <p className="text-xl w-32 text-slate-400">Name</p>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="rounded-xl px-3 py-3 placeholder:text-base bg-gray-100 text-black placeholder:text-black"
        />
      </div>
    </div>
  );
}

export default Board;
