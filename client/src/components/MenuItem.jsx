import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ item }) => {
  const { title, path } = item;
  return (
    <li>
      <NavLink
        to={path}
        className="block px-4 py-2 text-sm text-gray-700 backdrop-filter backdrop-blur-xl  hover:bg-gray-100 dark:hover:bg-white/10  dark:text-gray-200 dark:hover:text-white"
      >
        {title}
      </NavLink>
    </li>
  );
};

export default MenuItem;
