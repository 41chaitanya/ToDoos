import React from "react";

const HeaderNavigation = () => {
  return (
    <div className="bg-[#1e1e1e] p-4 w-full flex justify-between items-center rounded-lg">
      <h1 className="text-[#7c4cff] text-2xl font-bold">ToDoos</h1>
      <div className="flex gap-4">
        {["Login", "Sign Up"].map((text, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full ${
              i === 0 ? "bg-[#2d2d2d] text-gray-200" : "bg-[#7c4dff] text-white"
            }`}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeaderNavigation;
