import React from "react";
import UserNavBar from "./user/UserNavBar.jsx";
import {
  IconBaselineDensityMedium,
  IconBellRinging,
  IconCalendarCheck,
  IconCheckbox,
  IconCoin,
} from "@tabler/icons-react";
import logo1 from "../assets/catFavi.png";
import Avt1 from "../assets/avatar/avatarchungfb.jpg";

const Navbar = () => {
  return (
    <>
      <div className="mynav">
        <div className="">
          <nav className="bg-white p-4 text-black flex justify-between items-center border-b border-red-300">
            {/* Logo and Menu */}
            <div className="flex items-center">
              {/* Menu Icon */}
              <IconBaselineDensityMedium className="h-5 w-6 ml-2 cursor-pointer" />
              {/* Logo */}
              <div className="flex items-center mr-5">
                <img src={logo1} alt="Logo" className="h-8 w-8 ml-6 pr-1" />
                <p>BetterMe</p>
              </div>
              {/* Option */}
              <div className="flex items-center myoptions ">
                {/* ==================================| ToDo |================================== */}
                <button className="bg-white hover:bg-gray-50 text-gray-800  py-1 px-2 border border-gray-200 rounded shadow ">
                  <div className="flex justify-center items-center">
                    <IconCheckbox className="h5 w-5 opacity-55 hover:opacity-85" />
                  </div>
                </button>
                {/* ==================================| Habit |================================== */}
                <button className="bg-white hover:bg-gray-50 text-gray-800  py-1 px-2 border border-gray-200 rounded shadow">
                  <div className="flex justify-center items-center">
                    <IconCalendarCheck className="h5 w-5 opacity-55 hover:opacity-85" />
                  </div>
                </button>
                {/* ==================================| Money |================================== */}
                <button className="bg-white hover:bg-gray-50 text-gray-800  py-1 px-2 border border-gray-200 rounded shadow">
                  <div className="flex justify-center items-center">
                    <IconCoin className="h5 w-5 opacity-55 hover:opacity-85" />
                  </div>
                </button>
              </div>
            </div>

            {/* Avatar */}
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
                className="h-8 w-8 rounded-full object-cover border-solid border-2 border-sky-500"
                id="dropdown1"
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
