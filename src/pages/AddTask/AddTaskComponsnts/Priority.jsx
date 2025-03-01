import React from "react";

const Priority = ({ priority, setPriority }) => {
  return (
    <div className="flex gap-2 mb-2">
      <button
        className={`p-2 rounded text-white ${priority === "High" ? "bg-red-600" : "bg-gray-600"}`}
        onClick={() => setPriority("High")}
      >
        High
      </button>
      <button
        className={`p-2 rounded text-white ${priority === "Medium" ? "bg-green-600" : "bg-gray-600"}`}
        onClick={() => setPriority("Medium")}
      >
        Medium
      </button>
      <button
        className={`p-2 rounded text-white ${priority === "Low" ? "bg-blue-600" : "bg-gray-600"}`}
        onClick={() => setPriority("Low")}
      >
        Low
      </button>
    </div>
  );
};

export default Priority;

