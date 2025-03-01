import React from "react";

const NewTaskTitleDesc = ({ title, setTitle, description, setDescription }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Task Title"
        className="w-full p-2 mb-2 rounded bg-[#2d2d2d] text-white"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="w-full p-2 mb-2 rounded bg-[#2d2d2d] text-white"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};

export default NewTaskTitleDesc;

