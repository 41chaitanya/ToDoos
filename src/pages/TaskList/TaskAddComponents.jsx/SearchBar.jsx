import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="relative mt-3 px-5">
      <input
        type="text"
        placeholder="Search tasks..."
        className="w-full p-2 pl-9 bg-[#1e1e1e] text-white rounded-lg outline-none"
      />
      <FiSearch className="absolute left-8 top-3 text-gray-400" />
    </div>
  );
};

export default SearchBar;
