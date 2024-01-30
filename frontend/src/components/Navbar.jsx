import React from "react";
import { Link, Outlet } from "react-router-dom";
import UserNavBar from "./user/UserNavBar.jsx";
import { useContext, createContext, useState } from "react";

import {
  IconBaselineDensityMedium,
  IconBellRinging,
  IconCalendarCheck,
  IconCheckbox,
  IconCoin,
} from "@tabler/icons-react";
import { AlignJustify } from "lucide-react";
import logo1 from "../assets/catFavi.png";
import Avt1 from "../assets/avatar/avatarchungfb.jpg";
import ToDoPage from "../pages/ToDoPage.jsx";
import HabitPage from "../pages/HabitPage.jsx";
import MoneyPage from "../pages/MoneyPage.jsx";

import Sidebar from "./SideBar.jsx";

const Navbar = () => {
  return (
    <>
      <div className="mynav">
        {/* <div className=""> */}
        <nav className="bg-white p-3 text-black flex justify-between items-center border-b border-gray-200">
          {/* Logo and Menu */}
          <div className="flex items-center">
            {/* Menu Icon */}
            {/* <AlignJustify className="h-5 w-6 ml-2 cursor-pointer" /> */}
            {/* Logo */}
            <Link to="/app">
              <div className="flex items-center mr-5">
                <img src={logo1} alt="Logo" className="h-8 w-8 ml-6 pr-1" />
                <p>BetterMe</p>
              </div>
            </Link>

            {/* Option */}
            <div className="flex items-center myoptions ">
              {/* ==================================| ToDo test |================================== */}
              <Link to="/app/todotest">
                <button className=" bg-white hover:bg-gray-50 text-gray-800  py-1 px-2 border border-gray-200 rounded shadow ">
                  <IconBellRinging className="h5 w-5 opacity-55 hover:opacity-85" />
                </button>
              </Link>
              {/* ==================================| ToDo |================================== */}
              <Link to="/app/todo">
                <button className=" bg-white hover:bg-gray-50 text-gray-800  py-1 px-2 border border-gray-200 rounded shadow ">
                  <IconCheckbox className="h5 w-5 opacity-55 hover:opacity-85" />
                </button>
              </Link>

              {/* ==================================| Habit |================================== */}
              <Link to="/app/habit">
                <button className="bg-white hover:bg-gray-50 text-gray-800  py-1 px-2 border border-gray-200 rounded shadow">
                  <IconCalendarCheck className="h5 w-5 opacity-55 hover:opacity-85" />
                </button>
              </Link>

              {/* ==================================| Money |================================== */}
              <Link to="/app/money">
                <button className="bg-white hover:bg-gray-50 text-gray-800  py-1 px-2 border border-gray-200 rounded shadow">
                  <IconCoin className="h5 w-5 opacity-55 hover:opacity-85" />
                </button>
              </Link>
            </div>
          </div>

          {/* Avatar */}
          <div className="dropdown dropdown-end">
            {/* Avatar */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            {/* Avatar */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              {/* <li>
                <div className="flex flex-col ">
                  <span className=" text-sm">Bonnie Green</span>
                  <span className=" text-sm text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
              </li> 
              <hr />*/}
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge bg-slate-100 border-white">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>

              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>

          {/* ... */}
        </nav>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;
