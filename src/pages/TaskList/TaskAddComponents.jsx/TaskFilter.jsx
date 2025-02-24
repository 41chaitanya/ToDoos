import React from "react";

const TaskFilter = () => {
  return (
    <div className="flex justify-around mt-4 px-5">
      <button className="bg-[#7c4cff] text-white px-4 py-2 rounded-full text-sm font-bold">All</button>
      <button className="text-gray-400 px-4 py-2 text-sm">Today</button>
      <button className="text-gray-400 px-4 py-2 text-sm">Upcoming</button>
      <button className="text-gray-400 px-4 py-2 text-sm">Completed</button>
    </div>
  );
};

export default TaskFilter;
