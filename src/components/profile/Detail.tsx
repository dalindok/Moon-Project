import React from "react";

function Detail() {
  return (
    <div className="flex flex-col items-center justify-center font-zain">
      <div className="mt-10 text-lg">
        <div className="flex m-3">
          <p className="text-slate-400 w-32">Username</p>
          <p>@Thonita123</p>
        </div>
        <div className="flex m-3">
          <p className="text-slate-400 w-32">Gmail</p>
          <p>ithonita@gmail.com</p>
        </div>
        <div className="flex m-3">
          <p className="text-slate-400 w-32">Location</p>
          <p>Cambodia</p>
        </div>
        <div className="flex m-3">
          <p className="text-slate-400 w-32">Joined</p>
          <p>December 2024</p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="font-semibold text-lg bg-customPink hover:bg-red-100 hover:text-white py-2 px-6 rounded-lg mb-3">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
export default Detail;