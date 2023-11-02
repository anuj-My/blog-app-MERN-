import React from "react";

const Search = () => {
  return (
    <div className="flex appearance-none  border-b-2  left-2 sm:max-w-screen-sm ">
      <input
        type="text"
        className="appearance-none bg-transparent px-2 py-1 w-32 outline-none  text-white"
        placeholder="Search..."
      />
      <button className="flex items-center justify-center px-3">
        <svg
          className="w-4 h-4"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Search;
