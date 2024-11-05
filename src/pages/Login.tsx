import React from "react";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
function Login() {
    return (
      <div>
        <div className="bg-pink-100 rounded-md p-8 w-96 mr-auto ml-auto">
          <div className="bg-white rounded-md p-8">
            <div className="my-3">
            <p className="text-black font-bold text-center text-3xl">Login</p>
            </div>
            <form className="flex flex-col gap-5 my-9">
                <p className="text-start font-semibold">Username</p>
              <input
                type="Text"
                placeholder="Type your username"
                className="rounded-xl px-3 py-3 placeholder:text-base bg-slate-100 text-gray-700" 
              />
             <p className="text-start font-semibold">Password</p>
              <input
                type="password"
                placeholder="type your password"
                className="rounded-xl px-3 py-3 placeholder:text-base bg-slate-100 text-gray-700" 
              />
            </form>
            <button className="bg-pink-100 text-black text-xl font-bold px-24 py-2 rounded-md">
              LOGIN
            </button>
          <p className="text-black font-thin mt-3 ">Or Sign Up with </p>
          <div>
      <FaGoogle size={24} color="#DB4437" /> {/* Google Icon in red */}
      <FaFacebook size={24} color="#1877F2" /> {/* Facebook Icon in blue */}
    </div>
          </div>
            
        </div>
      </div>
    );
  }
  
  export default Login;
  