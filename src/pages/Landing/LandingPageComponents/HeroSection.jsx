import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#1e1e1e] p-5 rounded-lg w-full mt-5 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Task List Demo */}
        <div className="bg-[#2d2d2d] p-6 rounded-md flex flex-col items-center w-full md:w-1/3">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex gap-2 w-full mb-2">
                <div className={`h-5 w-5 rounded-full ${
                  index < 2 ? "bg-[#7c4cff]" : "bg-transparent border border-gray-500"
                }`}></div>
                <div className={`h-4 w-full bg-gray-${index < 2 ? "600" : "500"} rounded`}></div>
              </div>
            ))}
        </div>
        {/* Hero Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Simplify Your Day</h2>
          <p className="text-gray-400 mt-2 max-w-md">
            ToDoos helps you organize your tasks, boost productivity, and never miss deadlines again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
