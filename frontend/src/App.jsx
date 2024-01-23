import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage";
import SideBar, { SidebarItem } from "./components/SideBar.jsx";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";
const App = () => {
  return (
    <>
      <div className="bg-chung-light-grey2">
        {/* <Navbar /> */}

        {/* SideBar */}
        {/* <SideBar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            alert
          />
          <SidebarItem
            icon={<BarChart3 size={20} />}
            text="Statistics"
            active
          />
          <SidebarItem icon={<UserCircle size={20} />} text="Users" />
          <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
          <SidebarItem icon={<Package size={20} />} text="0rders" alert />
          <SidebarItem icon={<Receipt size={20} />} text="Billings" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </SideBar> */}
        <Navbar />
        <Outlet />
        {/* <p>app</p> */}
      </div>
    </>
  );
};

export default App;
