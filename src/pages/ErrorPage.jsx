import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-5 py-2 bg-[#7c4cff] rounded-lg"
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
