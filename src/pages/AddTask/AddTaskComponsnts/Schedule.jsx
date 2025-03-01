import React, { useState } from "react";

const Schedule = () => {
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");

  return (
    <>
      <label className="block text-gray-400 mb-1">Start Time</label>
      <input
        type="time"
        className="w-full p-2 mb-2 rounded bg-[#2d2d2d] text-white"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />

      <label className="block text-gray-400 mb-1">End Time</label>
      <input
        type="time"
        className="w-full p-2 mb-2 rounded bg-[#2d2d2d] text-white"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
    </>
  );
};

export default Schedule;
