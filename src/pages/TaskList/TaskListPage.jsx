import React from "react";
import SearchBar from "./TaskAddComponents.jsx/SearchBar";
import TaskFilter from "./TaskAddComponents.jsx/TaskFilter";
import TaskList from "./TaskAddComponents.jsx/TaskList";
import { FiPlus } from "react-icons/fi";

const TaskListPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="px-5 pt-5">
        <h1 className="text-center text-xl font-bold text-[#7c4cff]">
          TaskFlow
        </h1>
        <h2 className="mt-2 text-lg font-bold">My Tasks</h2>
      </header>

      {/* Components */}
      <SearchBar />
      <TaskFilter />
      <TaskList />

      {/* Floating Add Button */}
      <div className="fixed bottom-20 right-6">
        <button className="bg-[#7c4cff] w-14 h-14 flex items-center justify-center rounded-full shadow-lg">
          <FiPlus className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default TaskListPage;
