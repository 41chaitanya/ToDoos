import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";

const KeyFeatures = () => {
  const features = [
    {
      icon: <FaCheck />,
      iconBg: "#7c4cff",
      color: "white",
      title: "Task Management",
      description: "Add, edit, and organize your tasks.",
    },
    {
      icon: <FaRegClock />,

      iconBg: "#ff5252",
      color: "#ff5252",
      title: "Smart Reminders",
      description: "Set customizable notifications.",
    },
    {
      icon: <FaChartLine />,
      iconBg: "#ffb74d",
      color: "#ffb74d",
      title: "Progress Tracking",
      description: "Visual productivity analytics.",
    },
  ];
  return (
    <>
      <h2 className="text-lg font-bold text-white mt-6 self-start">
        Key Features
      </h2>
      <div className="w-full space-y-4 mt-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#2d2d2d] p-5 rounded-lg flex gap-4 items-center"
          >
            <div
              className={`h-8 w-8 bg-[${feature.color}] rounded-full flex items-center justify-center text-white`}
            >
              {feature.icon}
            </div>
            <div>
              <h3 className="text-white font-semibold">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
        {/* <div className="bg-[#2d2d2d] p-5 rounded-lg flex gap-4 items-center">
          <div className="h-8 w-8 bg-[#ff5252] rounded-full"></div>
          <div>
            <h3 className="text-white font-semibold">Smart Reminders</h3>
            <p className="text-gray-400 text-sm">
              Set customizable notifications.
            </p>
          </div>
        </div>

        <div className="bg-[#2d2d2d] p-5 rounded-lg flex gap-4 items-center">
          <div className="h-8 w-8 bg-[#ffb74d] rounded-full"></div>
          <div>
            <h3 className="text-white font-semibold">Progress Tracking</h3>
            <p className="text-gray-400 text-sm">
              Visual productivity analytics.
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default KeyFeatures;
