import React from "react";
import logo from "../../assets/imgs/logo.png";
import { useNavigate } from "react-router-dom";

function NewArticle() {
  const navigation = useNavigate();
  return (
    <div className="font-zain px-4 md:px-10 lg:px-20">
      {/* <p className="font-bold text-2xl md:text-3xl text-start mt-10">
        New Article
      </p> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {[...Array(6)].map((_, index) => (
          <div
            onClick={() => navigation("/article")}
            key={index}
            className="shadow-xl hover:shadow-slate-400 flex flex-col w-full h-auto m-auto rounded-lg"
          >
            <img
              src={logo}
              alt="header of the letter"
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-start text-gray-500 text-sm mb-2">
                Oct 17, 2024
              </p>
              <div className="text-lg md:text-xl text-start font-bold">
                <p>5 Simple Tips for Glowing Skin</p>
                <p>EveryDay</p>
              </div>
              <div className="text-sm text-start mt-2 text-slate-700">
                <p>
                  Taking care of your skin doesn't have to be complicated! Here
                  are five easy steps to incorporate into your daily routine for
                  a natural, radiant glow:
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArticle;
