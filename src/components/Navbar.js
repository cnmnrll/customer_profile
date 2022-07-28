import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="w-screen h-[80px] z-10 bg-white drop-shadow-lg relative">
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <h1
              className="text-3xl text-gray-500  hover:cursor-pointer transition-all font-bold ml-9"
              onClick={handleReload}
            >
              Customer Page
            </h1>
          </div>
          <div>
            <ul className="hidden sm:flex">
              <li className="text-xl mr-9 text-gray-500 font-bold hover:text-blue-300 hover:cursor-pointer">
                Promotions
              </li>
              <li
                className="text-xl mr-9 text-gray-500 font-bold hover:text-blue-300 hover:cursor-pointer"
                onClick={handleReload}
              >
                My profile
              </li>
            </ul>
          </div>
          <div className="sm:hidden mr-7" onClick={handleClick}>
            {!nav ? (
              <MenuIcon className="w-6 hover:cursor-pointer transition-all hover:scale-110 text-gray-500" />
            ) : (
              <XIcon className="w-6 hover:cursor-pointer transition-all hover:scale-110  text-gray-500" />
            )}
          </div>
        </div>
        <div className="sm:hidden">
          <ul
            className={
              !nav ? "hidden" : "absolute bg-white drop-shadow-xl w-full px-5"
            }
          >
            <li className="text-lg p-5 text-gray-500  hover:text-blue-300 hover:cursor-pointer border-t-[1.5px] border-gray-500 w-full transition-all">
              Promotions
            </li>
            <li
              className="text-lg p-5 text-gray-500  hover:text-blue-300 hover:cursor-pointer border-t-[1.5px] border-gray-500 w-full transition-all"
              onClick={handleReload}
            >
              My profile
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
