import React, { useState } from "react";

const Schedule = () => {
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");

  return (
    <div className="mt-5">
      <div className="mt-2">
        {/* Start Time Picker */}
        <div className="p-3 bg-[#1e1e1e] rounded-lg mt-2">
          <div className="flex items-center justify-between">
            <span>Start time: {startTime}</span>
            <button
              className="text-[#7c4cff] font-bold px-3 py-1 rounded-lg bg-[#2d2d2d] hover:bg-[#3b3b3b] transition"
              onClick={() => setShowStartPicker(!showStartPicker)}
            >
              {showStartPicker ? "Close" : "Select"} &rarr;
            </button>
          </div>
          {showStartPicker && (
            <div className="mt-3">
              <input
                type="time"
                className="w-full p-2 bg-[#1e1e1e] text-gray-300 rounded-lg outline-none"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* End Time Picker */}
        <div className="p-3 bg-[#1e1e1e] rounded-lg mt-2">
          <div className="flex items-center justify-between">
            <span>End time: {endTime}</span>
            <button
              className="text-[#7c4cff] font-bold px-3 py-1 rounded-lg bg-[#2d2d2d] hover:bg-[#3b3b3b] transition"
              onClick={() => setShowEndPicker(!showEndPicker)}
            >
              {showEndPicker ? "Close" : "Select"} &rarr;
            </button>
          </div>
          {showEndPicker && (
            <div className="mt-3">
              <input
                type="time"
                className="w-full p-2 bg-[#1e1e1e] text-gray-300 rounded-lg outline-none"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
