import React, { useState } from "react";

const UserProfile = () => {
  const [isOnline, setIsOnline] = useState(true); // Simulating online/offline status

  return (
    <div className="flex items-center gap-4 mt-5">
      {/* Profile Avatar */}
      <div className="relative">
        <div className="h-12 w-12 bg-[#7c4dff] text-white font-semibold text-lg flex items-center justify-center rounded-full">
          JS
        </div>
        {/* Online/Offline Indicator */}
        <div
          className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-black ${
            isOnline ? "bg-green-500" : "bg-gray-500"
          }`}
        ></div>
      </div>

      {/* User Details */}
      <div>
        <h2 className="font-bold text-lg">John Smith</h2>
        <p className="text-gray-400 text-sm">5 tasks for today</p>
      </div>
    </div>
  );
};

export default UserProfile;
