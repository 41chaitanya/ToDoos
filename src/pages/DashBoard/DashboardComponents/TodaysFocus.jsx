import React, { useState } from "react";

const TodaysFocus = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Project proposal draft", time: "2:00 PM - 4:00 PM", priority: "H", checked: false },
    { id: 2, title: "Team meeting", time: "4:30 PM - 5:30 PM", priority: "M", checked: false },
  ]);

  const toggleCheck = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, checked: !task.checked } : task
    ));
  };

  return (
    <>
      <h2 className="mt-6 font-bold">Today's Focus</h2>
      {tasks.map((task) => (
        <div key={task.id} className="bg-[#2d2d2d] p-4 rounded-lg mt-2 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Custom Checkbox */}
            <div
              className={`w-5 h-5 flex justify-center items-center border-2 rounded-md cursor-pointer ${
                task.checked ? "bg-[#7c4dff] border-[#7c4dff]" : "border-gray-400"
              }`}
              onClick={() => toggleCheck(task.id)}
            >
              {task.checked && <span className="text-white text-xs">✔</span>}
            </div>
            
            <div>
              <p className="text-gray-300">{task.title}</p>
              <p className="text-gray-500 text-sm">{task.time}</p>
            </div>
          </div>
          
          <span
            className={`px-2 py-2 h-8 w-8 text-center text-xs rounded-full text-white ${
              task.priority === "H" ? "bg-red-500" : "bg-yellow-500"
            }`}
          >
            {task.priority}
          </span>
        </div>
      ))}
    </>
  );
};

export default TodaysFocus;
