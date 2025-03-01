import React from "react";
import { useNavigate } from "react-router-dom";
import UserProfile from "./DashboardComponents/UserProfile";
import ProgresState from "./DashboardComponents/ProgresState";
import TodaysFocus from "./DashboardComponents/TodaysFocus";
import UpcommingTask from "./DashboardComponents/UpcommingTask";

const TaskDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#121212] min-h-screen text-gray-200 font-sans p-5 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8">
        {/* Header Section */}
        <header className="flex justify-between items-center">
          <span className="text-xl font-bold text-[#7c4dff]">ToDoos</span>
          <div className="h-3 w-3 bg-white rounded-full"></div>
        </header>

        {/* User Profile & Add Task Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-3">
          <UserProfile />
          <button
            className="bg-[#7c4dff] mt-5 sm:mt-0 p-3 rounded-full shadow-lg hover:bg-[#6633cc] transition"
            onClick={() => navigate("/dashboard/add-task")}
          >
            Add New Task
          </button>
        </div>

        {/* Dashboard Content */}
        <ProgresState />
        <TodaysFocus />
        <UpcommingTask />
      </div>
    </div>
  );
};

export default TaskDashboard;
