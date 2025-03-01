import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddedTaskList from "./AddTaskComponsnts/AddedTaskList";
import NewTaskTitleDesc from "./AddTaskComponsnts/NewTaskTitleDesc";
import Schedule from "./AddTaskComponsnts/Schedule";
import Priority from "./AddTaskComponsnts/Priority";

const AddTask = () => {
  // Get current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5);
  };

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState(getCurrentTime());
  const [endTime, setEndTime] = useState(getCurrentTime());
  const [priority, setPriority] = useState("Low");

  const navigate = useNavigate();

  useEffect(() => {
    // Load saved tasks from localStorage when component mounts
    const savedTasks = localStorage.getItem("savedTasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const addTask = () => {
    if (!title || !description || !startTime) {
      alert("Please fill all required fields");
      return;
    }

    const newTask = { title, description, startTime, endTime, priority };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    
    // Also update localStorage
    localStorage.setItem("savedTasks", JSON.stringify(updatedTasks));

    // Reset fields after adding task
    setTitle("");
    setDescription("");
    setStartTime(getCurrentTime()); // Reset to current time
    setEndTime(getCurrentTime()); // Reset to default end time
    setPriority("Low");
  };

  return (
    <div className="bg-[#121212] min-h-screen text-gray-200 font-sans flex p-5">
      <div className="w-1/4 hidden lg:block">
        <AddedTaskList tasks={tasks} setTasks={setTasks} />
      </div>

      <div className="w-full lg:w-3/4 flex flex-col items-center">
        <div className="w-full max-w-6xl px-4 sm:px-8">
          <header className="flex items-center justify-between p-3">
            <button 
              className="text-white text-lg"
              onClick={() => navigate("/dashboard")}
            >
              &larr;
            </button>
            <h1 className="text-[#7c4cff] text-xl font-bold">ToDoos</h1>
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </header>

          <div className="bg-[#1e1e1e] p-4 rounded-lg">
            <NewTaskTitleDesc
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
            />

            <Schedule
              startTime={startTime}
              setStartTime={setStartTime}
              endTime={endTime}
              setEndTime={setEndTime}
            />

            <Priority priority={priority} setPriority={setPriority} />
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={addTask}
              className="bg-[#7c4cff] text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#6633cc] transition"
            >
              Add Task
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;