import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

import { menuData } from "../data/data";
import MenuItem from "./MenuItem";
import axios from "axios";

const DropdownMenu = ({ menuToggle }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/users/logout");

      document.cookie =
        "user_email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
        "user_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      console.log("Koca: res ", res);
      navigate("/login");
      window.location.reload()

    
    } catch (error) {
      console.log(error, "error while logging out");
    }
  };

  const menuItemList = menuData.map((item, index) => {
    return <MenuItem key={index} item={item} />;
  });

  return (
    <div
      className={`absolute right-0 top-12 z-50 ${
        menuToggle ? "" : "hidden"
      } backdrop-filter backdrop-blur-xl dark:bg-white/10 shadow-xl my-4 text-base list-none  divide-y divide-gray-100 rounded-lg  `}
      id="user-dropdown"
    >
      <div className="px-4 py-3 backdrop-filter backdrop-blur-xl">
        <span className="block text-sm text-gray-900 dark:text-white">
          {user.name}
        </span>
        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
          {user.email}
        </span>
      </div>
      <ul
        className="py-2 backdrop-filter backdrop-blur-xl "
        aria-labelledby="user-menu-button"
      >
        {menuItemList}
        <li>
          <span
            onClick={logout}
            className="block cursor-pointer px-4 py-2 text-sm text-gray-700 backdrop-filter backdrop-blur-xl  hover:bg-gray-100 dark:hover:bg-white/10  dark:text-gray-200 dark:hover:text-white"
          >
            Log out
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
