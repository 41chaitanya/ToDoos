import React, { useState, useEffect } from "react";

const UpcomingTask = () => {
  const [tasks, setTasks] = useState({});
  const [upcomingTasks, setUpcomingTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage when component mounts
    const savedTasks = localStorage.getItem("savedTasks");
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      
      // Initialize task states in an object for toggle state tracking
      const taskStates = {};
      parsedTasks.forEach((task, index) => {
        taskStates[`task_${index}`] = false;
      });
      setTasks(taskStates);
      
      // Set upcoming tasks
      setUpcomingTasks(parsedTasks);
    }
  }, []);

  const toggleTask = (taskId) => {
    setTasks({ ...tasks, [taskId]: !tasks[taskId] });
  };

  const formatDate = (time) => {
    // This is a simple placeholder function 
    // In a real app, you would use actual date data
    // For demo purposes, we'll just say all tasks are for tomorrow or later this week
    const index = parseInt(taskId.replace("task_", ""));
    return index % 2 === 0 ? "Tomorrow" : "Friday";
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="mt-6 font-bold">Upcoming</h2>

      {upcomingTasks.length === 0 ? (
        <div className="bg-[#2d2d2d] p-4 rounded-lg mt-2">
          <p className="text-gray-400">No upcoming tasks. Add tasks from the Add Task page.</p>
        </div>
      ) : (
        upcomingTasks.map((task, index) => {
          const taskId = `task_${index}`;
          return (
            <div key={taskId} className="bg-[#2d2d2d] p-4 rounded-lg mt-2 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 border-2 rounded-md flex justify-center items-center cursor-pointer ${
                    tasks[taskId] ? "bg-purple-500 border-purple-500" : "border-gray-500"
                  }`}
                  onClick={() => toggleTask(taskId)}
                >
                  {tasks[taskId] && <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>}
                </div>
                <div>
                  <p className="text-gray-300">{task.title}</p>
                  <p className="text-gray-500 text-sm">
                    {index % 2 === 0 ? "Tomorrow" : "Friday"}, {task.startTime}
                  </p>
                </div>
              </div>
              <span 
                className={`bg-${task.priority === "High" ? "red" : 
                            task.priority === "Medium" ? "yellow" : 
                            "purple"}-500 text-white px-2 py-2 h-8 w-8 text-center text-xs rounded-full flex justify-center items-center`}
              >
                {task.priority.charAt(0)}
              </span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UpcomingTask;