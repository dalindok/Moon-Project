import React, { useState } from "react";

function Detail() {
  // State for form inputs
  const [profile, setProfile] = useState({
    username: "@Thonita123",
    email: "ithonita@gmail.com",
    location: "Cambodia",
    joined: "December 2024",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center font-zain">
      <div className="mt-10 text-lg">
        <form className="flex flex-col gap-2 my-9">
          {/* Username */}
          <div className="flex m-3">
            <label htmlFor="username" className="text-slate-400 w-32">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className="rounded-xl px-3 py-3 placeholder:text-base bg-gray-100 text-gray-700"
            />
          </div>
          {/* Email */}
          <div className="flex m-3">
            <label htmlFor="email" className="text-slate-400 w-32">
              Gmail
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="rounded-xl px-3 py-3 placeholder:text-base bg-gray-100 text-gray-700"
            />
          </div>
          {/* Location */}
          <div className="flex m-3">
            <label htmlFor="location" className="text-slate-400 w-32">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={profile.location}
              onChange={handleChange}
              className="rounded-xl px-3 py-3 placeholder:text-base bg-gray-100 text-gray-700"
            />
          </div>
          {/* Joined */}
          <div className="flex m-3">
            <label className="text-slate-400 w-32">Joined</label>
            <p className="text-slate-400">{profile.joined}</p>
          </div>
        </form>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-8">
        <button
          className="font-semibold text-lg bg-customPink hover:bg-red-100 hover:text-white py-2 px-6 rounded-lg mb-3"
          onClick={() => alert(`Profile updated: ${JSON.stringify(profile)}`)}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Detail;
