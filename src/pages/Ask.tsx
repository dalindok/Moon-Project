import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Ask() {
  const navigation = useNavigate();
  const handleGoBack = () => {
    navigation(-1); // Navigates to the previous page
  };
  return (
    <div>
      <Nav />
      <div className="flex justify-center items-center h-full py-36">
        <div className="border-customPink border-2 p-6 sm:p-12 ">
          <div className="flex flex-col items-center my-10">
            <p className="sm:text-2xl text-base font-bold mb-2">
              Drop Your Question Here!
            </p>
            <div className="flex justify-center sm:pt-10">
              <div className="pb-8 flex border rounded-2xl sm:px-3 px-2 sm:py-2 py-1 shadow-sm border-black w-40 sm:w-96">
                <input
                  type="text"
                  placeholder="Ask Question"
                  className="outline-none w-full flex-1 text-xs sm:text-base"
                />
              </div>
            </div>
            <div className="flex justify-between mt-10 space-x-5">
              <button
                onClick={handleGoBack}
                className="sm:text-xl font-zain bg-slate-200 py-2 px-5 rounded-lg text-md"
              >
                Back
              </button>
              <button className="sm:text-xl font-zain bg-customPink py-2 px-5 rounded-xl text-md">
                Ask
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ask;
