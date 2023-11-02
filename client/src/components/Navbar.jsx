import { useContext, useState, useEffect } from "react";
import { LinksData } from "../data/data";
import NavbarLink from "./NavbarLink";

import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";
import MenuButton from "./MenuButton";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Search from "./Search";

const Navbar = () => {
  const { auth } = useContext(AuthContext);
  console.log("Koca: auth ", auth);

  const [menuToggle, setMenuToggle] = useState(false);
  const [linksToggle, setLinksToggle] = useState(false);

  const navLinkList = LinksData.map((item, index) => {
    return <NavbarLink key={index} item={item} />;
  });

  return (
    <nav className="fixed z-50 top-0 left-0 w-full backdrop-filter  backdrop-blur-xl shadow-xl  dark:text-white/10">
      <div className="max-w-screen-xl flex flex-wrap items-end md:items-center justify-between mx-auto p-4">
        <div className="md:flex md:gap-28  ">
          <Logo />

          <div
            className={`${
              linksToggle ? "" : "hidden"
            } items-center justify-between  w-full md:flex md:w-auto`}
            id="navbar-user"
          >
            <ul className="font-medium flex gap-7 ">{navLinkList}</ul>
          </div>
        </div>

        <div className="flex items-center gap-6 ">
          <Search />
          {!auth ? (
            <div className="flex items-center ">
              <NavLink to="/login" className="text-white hover:underline">
                Login
              </NavLink>
            </div>
          ) : (
            <div className="flex items-center">
              <MenuButton
                setMenuToggle={setMenuToggle}
                menuToggle={menuToggle}
              />

              <DropdownMenu menuToggle={menuToggle} />
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
                onClick={() => setLinksToggle(!linksToggle)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
