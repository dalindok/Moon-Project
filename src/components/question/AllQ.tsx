import React from "react";
import { useNavigate } from "react-router-dom";

const All_Q = () => {
  const navigation = useNavigate();
  return (
    <div className="flex justify-between px-20 pt-5 sm:px-40 sm:pt-10">
      <p className="sm:text-4xl font-zain text-xl">All Questions</p>
      <button
        onClick={() => navigation("/ask")}
        className="sm:text-2xl font-zain bg-customPink sm:py-2 sm:px-5 rounded-2xl py-1 px-2 text-base"
      >
        Ask Question
      </button>
    </div>
  );
};

export default All_Q;
