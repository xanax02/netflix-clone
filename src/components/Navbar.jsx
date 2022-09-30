import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between w-full p-4 items-center z-[4] absolute">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className="pr-4 text-white">Sign in</button>
        <button className="bg-red-600 text-white px-6 py-2 rounded cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
