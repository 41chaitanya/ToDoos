import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Project proposal draft", time: "Today, 2:00 PM - 4:00 PM", priority: "H", completed: false },
    { id: 2, title: "Team meeting", time: "Today, 4:30 PM - 5:30 PM", priority: "M", completed: false },
    { id: 3, title: "Client presentation", time: "Tomorrow, 10:00 AM", priority: "H", completed: false },
    { id: 4, title: "Weekly review", time: "Friday, 3:00 PM", priority: "L", completed: false },
    { id: 5, title: "Morning standup", time: "Today, 9:00 AM", priority: "M", completed: true },
    { id: 6, title: "Answer client emails", time: "Yesterday, 2:30 PM", priority: "L", completed: true },
  ]);

  return (
    <div className="mt-5 px-5 flex-grow">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
