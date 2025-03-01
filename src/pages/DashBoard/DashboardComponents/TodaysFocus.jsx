import React, { useState, useEffect } from "react";

const TodaysFocus = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage when component mounts
    const savedTasks = localStorage.getItem("savedTasks");
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      
      // Filter for today's tasks and format for display
      const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
      
      // Convert saved tasks to the format needed for TodaysFocus
      const formattedTasks = parsedTasks.map((task, index) => ({
        id: index + 1,
        title: task.title,
        time: `${task.startTime} - ${task.endTime}`,
        priority: task.priority === "High" ? "H" : task.priority === "Medium" ? "M" : "L",
        checked: false
      }));
      
      setTasks(formattedTasks);
    }
  }, []);

  const toggleCheck = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, checked: !task.checked } : task
    ));
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="mt-6 font-bold">Today's Focus</h2>
      {tasks.length === 0 ? (
        <div className="bg-[#2d2d2d] p-4 rounded-lg mt-2">
          <p className="text-gray-400">No tasks for today. Add tasks from the Add Task page.</p>
        </div>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="bg-[#2d2d2d] p-4 rounded-lg mt-2 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 border-2 rounded-md flex justify-center items-center cursor-pointer ${
                  task.checked ? "bg-purple-500 border-purple-500" : "border-gray-500"
                }`}
                onClick={() => toggleCheck(task.id)}
              >
                {task.checked && <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>}
              </div>
              <div>
                <p className="text-gray-300">{task.title}</p>
                <p className="text-gray-500 text-sm">{task.time}</p>
              </div>
            </div>
            <span className={`px-2 py-2 h-8 w-8 text-center text-xs rounded-full text-white ${
                task.priority === "H" ? "bg-red-500" : 
                task.priority === "M" ? "bg-yellow-500" : "bg-purple-500"
              }`}>
              {task.priority}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default TodaysFocus;