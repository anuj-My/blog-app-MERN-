import React from "react";

const Button = ({ title }) => {
  return (
    // <button
    //   type="submit"
    //   className="box-border mt-4 relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
    // >
    //   <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
    //   <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
    //   <span className="relative z-20 flex items-center text-sm">
    //     <svg
    //       className="relative w-5 h-5 mr-2 text-white"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         stroke-width="2"
    //         d="M13 10V3L4 14h7v7l9-11h-7z"
    //       ></path>
    //     </svg>
    //     {title}
    //   </span>
    // </button>

    <button
      type="submit"
      class="relative inline-flex items-center justify-start mt-4 px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
    >
      <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 dark:bg-gray-900"></span>
      </span>
      <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
      <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
        Publish
      </span>
    </button>
  );
};

export default Button;
