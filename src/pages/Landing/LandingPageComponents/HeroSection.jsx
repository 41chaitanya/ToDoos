import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#1e1e1e] p-5 rounded-lg w-full mt-5">
      <div className="flex items-center gap-4">
        <div className="bg-[#2d2d2d] p-4 rounded-md flex flex-col items-center w-1/3">
          <div className="flex gap-2">
            <div className="h-5 w-5 bg-[#7c4cff]  rounded-full mb-2"></div>
            <div className="h-4 w-16 bg-gray-600 rounded mb-2"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-5 w-5 bg-[#7c4cff]  rounded-full mb-2"></div>
            <div className="h-4 w-16 bg-gray-600 rounded mb-2"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-5 w-5 bg-transparent border-1 rounded-full mb-2"></div>
            <div className="h-4 w-16 bg-gray-500 rounded"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-5 w-5 bg-transparent border-1 rounded-full "></div>
            <div className="h-4 w-16 bg-gray-500 rounded"></div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Simplify Your Day</h2>
          <p className="text-gray-400 mt-2">
            ToDoos helps you organize your tasks, boost productivity, and never
            miss deadlines again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
