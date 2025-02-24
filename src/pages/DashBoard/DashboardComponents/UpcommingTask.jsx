import React, { useState } from "react";

const UpcommingTask = () => {
  // State to track checked tasks
  const [tasks, setTasks] = useState({
    clientPresentation: false,
    weeklyReview: false,
  });

  // Toggle function for manual checkbox
  const toggleTask = (task) => {
    setTasks({ ...tasks, [task]: !tasks[task] });
  };

  return (
    <>
      <h2 className="mt-6 font-bold">Upcoming</h2>

      {/* Client Presentation */}
      <div className="bg-[#2d2d2d] p-4 rounded-lg mt-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Custom Checkbox */}
          <div
            className={`w-5 h-5 border-2 rounded-md flex justify-center items-center cursor-pointer ${
              tasks.clientPresentation
                ? "bg-purple-500 border-purple-500"
                : "border-gray-500"
            }`}
            onClick={() => toggleTask("clientPresentation")}
          >
            {tasks.clientPresentation && (
              <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
            )}
          </div>

          {/* Task Details */}
          <div>
            <p className="text-gray-300">Client presentation</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10:00 AM</p>
          </div>
        </div>

        {/* Priority Tag */}
        <span className="bg-red-500 text-white px-2 py-2 h-8 w-8 text-center text-xs rounded-full flex justify-center items-center">
          H
        </span>
      </div>

      {/* Weekly Review */}
      <div className="bg-[#2d2d2d] p-4 rounded-lg mt-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Custom Checkbox */}
          <div
            className={`w-5 h-5 border-2 rounded-md flex justify-center items-center cursor-pointer ${
              tasks.weeklyReview
                ? "bg-purple-500 border-purple-500"
                : "border-gray-500"
            }`}
            onClick={() => toggleTask("weeklyReview")}
          >
            {tasks.weeklyReview && (
              <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
            )}
          </div>

          {/* Task Details */}
          <div>
            <p className="text-gray-300">Weekly review</p>
            <p className="text-gray-500 text-sm">Friday, 3:00 PM</p>
          </div>
        </div>

        {/* Priority Tag */}
        <span className="bg-purple-500 text-white px-2 py-2 h-8 w-8 text-center text-xs rounded-full flex justify-center items-center">
          L
        </span>
      </div>
    </>
  );
};

export default UpcommingTask;
