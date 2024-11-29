import React from "react";
import { FaFacebook } from "react-icons/fa";
import { ReactComponent as GoogleIcon } from "../assets/Login/GoogleIcon.svg";

function Login() {
  return (
    <div>
      <div className="bg-customPink rounded-md p-8 w-96 mt-3 mr-auto ml-auto font-zain">
        <div className="bg-white rounded-md p-8">
          <div className="my-3">
            <p className="text-black font-bold text-center text-6xl">Login</p>
          </div>
          <form className="flex flex-col gap-2 my-9">
            <p className="text-start font-semibold">Username</p>
            <input
              type="Text"
              placeholder="Type your username"
              className="rounded-xl px-3 py-3 placeholder:text-base bg-gray-100 text-gray-700"
            />
            <p className="text-start font-semibold">Password</p>
            <input
              type="password"
              placeholder="type your password"
              className="rounded-xl px-3 py-3 placeholder:text-base bg-gray-100 text-gray-700"
            />
          </form>
          <button className="bg-customPink text-black text-xl font-bold px-24 py-2 rounded-md">
            LOGIN
          </button>
          <p className="text-black font-thin mt-3 ">Or Sign Up with </p>
          <div className="flex flex-row justify-center items-center space-x-4  mt-5">
            <GoogleIcon width="24px" height="24px" />
            <FaFacebook size={24} color="#1877F2" />{" "}
            {/* Facebook Icon in blue */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
