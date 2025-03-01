import React, { useState } from "react";

const AddedTaskList = ({ tasks, setTasks }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editStartTime, setEditStartTime] = useState("");
  const [editEndTime, setEditEndTime] = useState("");
  const [editPriority, setEditPriority] = useState("");

  const editTask = (index) => {
    setEditIndex(index);
    setEditTitle(tasks[index].title);
    setEditDescription(tasks[index].description);
    setEditStartTime(tasks[index].startTime);
    setEditEndTime(tasks[index].endTime);
    setEditPriority(tasks[index].priority);
  };

  const saveTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = {
      title: editTitle,
      description: editDescription,
      startTime: editStartTime,
      endTime: editEndTime,
      priority: editPriority,
    };
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  const saveTaskList = () => {
    // Save tasks to localStorage
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
    console.log("Task List Saved:", tasks);
    alert("Task List Saved!");
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="p-5 w-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-white">Your Tasks</h2>
        <button
          onClick={saveTaskList}
          className="bg-[#7c4cff] text-white text-sm px-4 py-2 rounded-lg font-bold hover:bg-[#6633cc] transition"
        >
          Save Task List
        </button>
      </div>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-400">No tasks added</p>
        ) : (
          tasks.map((task, index) => (
            <div key={index} className="p-3 bg-[#2d2d2d] rounded-lg text-gray-300">
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    className="w-full p-2 mb-2 rounded bg-[#3d3d3d] text-white"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <textarea
                    className="w-full p-2 mb-2 rounded bg-[#3d3d3d] text-white"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                  <div className="flex gap-2 mb-2">
                    <input
                      type="time"
                      className="w-1/2 p-2 rounded bg-[#3d3d3d] text-white"
                      value={editStartTime}
                      onChange={(e) => setEditStartTime(e.target.value)}
                    />
                    <input
                      type="time"
                      className="w-1/2 p-2 rounded bg-[#3d3d3d] text-white"
                      value={editEndTime}
                      onChange={(e) => setEditEndTime(e.target.value)}
                    />
                  </div>
                  <select
                    className="w-full p-2 rounded bg-[#3d3d3d] text-white"
                    value={editPriority}
                    onChange={(e) => setEditPriority(e.target.value)}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                  <button
                    onClick={saveTask}
                    className="w-full bg-green-500 text-white text-center py-2 rounded-lg mt-3 font-bold hover:bg-green-700 transition"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <h3 className="font-bold">{task.title}</h3>
                  <p className="text-sm text-gray-400">{task.description}</p>
                  <p className="text-sm text-gray-400">
                    Time: {task.startTime} - {task.endTime}
                  </p>
                  <p className="text-sm text-gray-400">Priority: {task.priority}</p>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => editTask(index)}
                      className="w-1/2 bg-yellow-500 text-white text-center py-2 rounded-lg font-bold hover:bg-yellow-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="w-1/2 bg-red-500 text-white text-center py-2 rounded-lg font-bold hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddedTaskList;