import React from "react";

const ProgresState = () => {
  return (
    <div className="flex justify-between mt-5 gap-4">
      <div className="bg-[#2d2d2d] p-4 rounded-lg w-1/2 text-center">
        <p className="text-sm text-gray-400">Completed Today</p>
        <p className="text-2xl font-bold">2/5</p>
        
        <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
          <div className="h-2 bg-purple-500 rounded-full w-[40%]"></div>
        </div>
      </div>

      <div className="bg-[#2d2d2d] p-4 rounded-lg w-1/2 text-center">
        <p className="text-sm text-gray-400">Weekly Progress</p>
        <p className="text-2xl font-bold">68%</p>

        <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
          <div className="h-2 bg-purple-500 rounded-full w-[68%]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgresState;
