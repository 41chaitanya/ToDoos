import React, { useEffect, useState } from "react";

const ProgressState = () => {
  const [stats, setStats] = useState({
    completedToday: 0,
    totalToday: 0,
    weeklyProgress: 0
  });

  useEffect(() => {
    // Load tasks from localStorage when component mounts
    const savedTasks = localStorage.getItem("savedTasks");
    
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      
      // For demo purposes, let's assume:
      // - 40% of tasks are completed 
      // - All tasks in localStorage are for today
      // - Weekly progress is calculated as 68%
      
      setStats({
        completedToday: Math.floor(parsedTasks.length * 0.4),
        totalToday: parsedTasks.length,
        weeklyProgress: 68
      });
    }
  }, []);

  // Calculate completion percentage
  const todayCompletionPercentage = stats.totalToday > 0 
    ? (stats.completedToday / stats.totalToday) * 100 
    : 0;

  return (
    <div className="w-full max-w-5xl mx-auto flex justify-between mt-5 gap-4">
      <div className="bg-[#2d2d2d] p-4 rounded-lg w-1/2 text-center">
        <p className="text-sm text-gray-400">Completed Today</p>
        <p className="text-2xl font-bold">{stats.completedToday}/{stats.totalToday}</p>
        <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
          <div 
            className="h-2 bg-purple-500 rounded-full" 
            style={{ width: `${todayCompletionPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-[#2d2d2d] p-4 rounded-lg w-1/2 text-center">
        <p className="text-sm text-gray-400">Weekly Progress</p>
        <p className="text-2xl font-bold">{stats.weeklyProgress}%</p>
        <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
          <div 
            className="h-2 bg-purple-500 rounded-full" 
            style={{ width: `${stats.weeklyProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressState;