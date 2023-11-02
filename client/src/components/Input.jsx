import React from "react";

const Input = ({ label, ...others }) => {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <input {...others} />
      {label && (
        <label
          htmlFor=""
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
