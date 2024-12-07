import React from "react";
import { useNavigate } from "react-router-dom";

const More = () => {
  const navigation = useNavigate();
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          navigation("/articleList");
        }}
        className="font-bold text-xl bg-customPink hover:bg-red-100 hover:text-white py-2 px-6 rounded-lg mb-3"
      >
        More
      </button>
    </div>
  );
};

export default More;
