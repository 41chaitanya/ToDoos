import React, { useState } from "react";

const EditingTask = () => {
  const [taskTitle, setTaskTitle] = useState("Project proposal draft");
  const [taskDescription, setTaskDescription] = useState(
    "Prepare initial draft for client review including market analysis section"
  );
  const [startTime, setStartTime] = useState("14:00");
  const [endTime, setEndTime] = useState("16:00");
  const [reminder, setReminder] = useState(true);
  const [priority, setPriority] = useState("High");

  return (
    <div className="bg-[#121212] min-h-screen text-gray-200 font-sans p-5">
      {/* Header */}
      <header className="flex items-center justify-between p-3">
        <button className="text-white text-lg">&larr;</button>
        <h1 className="text-[#7c4cff] text-xl font-bold">ToDoos</h1>
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </header>

      {/* Title */}
      <h2 className="text-xl font-bold mt-3">Edit Task</h2>

      {/* Task Title Input */}
      <input
        type="text"
        className="w-full p-3 bg-[#1e1e1e] text-gray-200 rounded-lg mt-3 outline-none"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      {/* Task Description Input */}
      <textarea
        className="w-full p-3 bg-[#1e1e1e] text-gray-200 rounded-lg mt-3 outline-none resize-none"
        rows="3"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      ></textarea>

      {/* Schedule Section */}
      <h3 className="font-bold mt-4">Schedule</h3>
      <div className="mt-2">
        <div className="flex items-center justify-between p-3 bg-[#1e1e1e] rounded-lg mt-2">
          <span>Start time</span>
          <input
            type="time"
            className="bg-transparent text-[#7c4cff] outline-none"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between p-3 bg-[#1e1e1e] rounded-lg mt-2">
          <span>End time</span>
          <input
            type="time"
            className="bg-transparent text-[#7c4cff] outline-none"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>

      {/* Reminder Toggle */}
      <div className="mt-5 flex items-center justify-between bg-[#1e1e1e] p-3 rounded-lg">
        <span>Remind me</span>
        <div
          className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
            reminder ? "bg-[#7c4cff]" : "bg-gray-600"
          }`}
          onClick={() => setReminder(!reminder)}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
              reminder ? "translate-x-5" : "translate-x-0"
            }`}
          ></div>
        </div>
      </div>

      {/* Priority Selection */}
      <h3 className="font-bold mt-4">Priority</h3>
      <div className="flex gap-2 mt-2">
        {["Low", "Medium", "High"].map((level) => (
          <button
            key={level}
            className={`px-4 py-2 rounded-lg text-sm ${
              priority === level
                ? "bg-red-600 text-white"
                : "bg-[#2d2d2d] text-gray-300"
            }`}
            onClick={() => setPriority(level)}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Save & Delete Buttons */}
      <button className="w-full bg-[#7c4cff] text-white text-center py-3 rounded-lg mt-5 font-bold hover:bg-[#6633cc] transition">
        Save Changes
      </button>
      <button className="w-full border border-red-600 text-red-600 text-center py-3 rounded-lg mt-3 font-bold hover:bg-red-600 hover:text-white transition">
        Delete Task
      </button>
    </div>
  );
};

export default EditingTask;
