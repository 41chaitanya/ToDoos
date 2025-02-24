import React from "react";

const AddNewTask = () => {
  return (
    <div className="mt-5">
      <h2 className="text-lg font-bold">Add New Task</h2>
      <input
        type="text"
        placeholder="Task title"
        className="w-full p-3 mt-3 bg-[#1e1e1e] rounded-lg text-gray-300"
      />
      <textarea
        placeholder="Task description (optional)"
        className="w-full p-3 mt-3 bg-[#1e1e1e] rounded-lg text-gray-300"
      ></textarea>
    </div>
  );
};

export default AddNewTask;
