import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const MenuButton = ({ setMenuToggle, menuToggle }) => {
  // const { auth } = useContext(AuthContext);
  // console.log(auth);
  return (
    <button
      type="button"
      className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      onClick={() => setMenuToggle(!menuToggle)}
    >
      <img
        className="w-8 h-8 rounded-full object-cover"
        src="https://images.pexels.com/photos/7656336/pexels-photo-7656336.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="user photo"
      />
    </button>
  );
};

export default MenuButton;
