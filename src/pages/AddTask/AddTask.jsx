import React, { useState } from "react";
import AddNewTask from "./AddTaskComponsnts/AddNewTask";
import Schedule from "./AddTaskComponsnts/Schedule";
import Priority from "./AddTaskComponsnts/Priority";

const AddTask = () => {
  const [reminder, setReminder] = useState(false);
  const [priority, setPriority] = useState("Low"); // Added priority state

  return (
    <div className="bg-[#121212] min-h-screen text-gray-200 font-sans p-5">
      {/* Header */}
      <header className="flex items-center justify-between p-3">
        <button className="text-white text-lg">&larr;</button>
        <h1 className="text-[#7c4cff] text-xl font-bold">ToDoos</h1>
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </header>

      {/* Task Input */}
      <AddNewTask />

      {/* Schedule Section */}
      <Schedule />

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

      {/* Priority Selection - Passing Props */}
      <Priority selectedPriority={priority} onSelectPriority={setPriority} />

      {/* Add Task Button */}
      <button className="w-full bg-[#7c4cff] text-white text-center py-3 rounded-lg mt-5 font-bold hover:bg-[#6633cc] transition">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
