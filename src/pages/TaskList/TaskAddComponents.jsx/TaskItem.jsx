import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg mt-2 ${
        task.completed ? "bg-[#282828] opacity-50" : "bg-[#1e1e1e]"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
            task.completed ? "border-[#7c4cff] bg-[#7c4cff]" : "border-gray-400"
          }`}
        >
          {task.completed && <span className="text-white text-sm">✔</span>}
        </div>
        <div>
          <h3 className={`text-md font-bold ${task.completed ? "line-through text-gray-500" : ""}`}>
            {task.title}
          </h3>
          <p className="text-sm text-gray-400">{task.time}</p>
        </div>
      </div>
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${
          task.priority === "H" ? "bg-red-500" : task.priority === "M" ? "bg-yellow-500" : "bg-purple-500"
        }`}
      >
        {task.priority}
      </div>
    </div>
  );
};

export default TaskItem;
