import React from "react";
import UserProfile from "./DashboardComponents/UserProfile";
import ProgresState from "./DashboardComponents/ProgresState";
import TodaysFocus from "./DashboardComponents/TodaysFocus";
import UpcommingTask from "./DashboardComponents/UpcommingTask";

const TaskDashboard = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-gray-200 font-sans p-5 relative">
      <header className="flex justify-between items-center">
        <span className="text-xl font-bold text-[#7c4dff]">TaskFlow</span>
        <div className="h-3 w-3 bg-white rounded-full"></div>
      </header>
      <div className="flex justify-between items-center mt-3 relative">
        <UserProfile />
        <button className="bg-[#7c4dff] mt-5 p-3 rounded-full shadow-lg hover:bg-[#6633cc] transition">
          Add New task
        </button>
      </div>
      <ProgresState />
      <TodaysFocus />
      <UpcommingTask />
    </div>
  );
};

export default TaskDashboard;
