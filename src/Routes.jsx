import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/Landing/LandingPage";
import TaskDashboard from "./pages/DashBoard/TaskDashboard";
import TaskListPage from "./pages/TaskList/TaskListPage";
import AddNewTask from "./pages/AddTask/AddTaskComponsnts/AddNewTask";
import AddTask from "./pages/AddTask/AddTask";
import EditingTask from "./pages/EditTask/EditingTask";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wraps all pages
    errorElement: <ErrorPage />, // Handles unknown routes

    children: [
      { path: "/", element: <LandingPage/> }, // Root → Landing
      { path: "/dashboard", element: <TaskDashboard/> },
      { path: "/tasks", element: <TaskListPage /> },
      { path: "/add-task", element: <AddTask/> },
      { path: "/edit-task/:taskId", element: <EditingTask /> }, // Dynamic Task Edit
    ],
  },
]);

export default appRouter;
