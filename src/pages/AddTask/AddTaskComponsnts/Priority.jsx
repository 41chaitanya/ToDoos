import React from "react";

const Priority = ({ selectedPriority, onSelectPriority }) => {
  const priorities = ["Low", "Medium", "High"];

  return (
    <div className="mt-5">
      <h3 className="font-bold">Priority</h3>
      <div className="flex gap-2 mt-2">
        {priorities.map((level) => (
          <button
            key={level}
            className={`px-4 py-2 rounded-lg text-sm transition ${
              selectedPriority === level
                ? "bg-[#7c4cff] text-white"
                : "bg-[#2d2d2d] text-gray-300"
            }`}
            onClick={() => onSelectPriority(level)}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Priority;
