import React from "react";
import { FaCheck, FaRegClock, FaChartLine } from "react-icons/fa";

const KeyFeatures = () => {
  const features = [
    {
      icon: <FaCheck />,
      color: "#7c4cff",
      title: "Task Management",
      description: "Add, edit, and organize your tasks.",
    },
    {
      icon: <FaRegClock />,
      color: "#ff5252",
      title: "Smart Reminders",
      description: "Set customizable notifications.",
    },
    {
      icon: <FaChartLine />,
      color: "#ffb74d",
      title: "Progress Tracking",
      description: "Visual productivity analytics.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-6">
      <h2 className="text-lg font-bold text-white text-left">Key Features</h2>
      <div className="space-y-4 mt-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#2d2d2d] p-5 rounded-lg flex gap-4 items-center"
          >
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: feature.color }}
            >
              {feature.icon}
            </div>
            <div>
              <h3 className="text-white font-semibold">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
