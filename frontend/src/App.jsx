import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="bg-chung-light-grey2">
        <Navbar />
        <p>App</p>
        <Outlet />
      </div>
    </>
  );
};

export default App;
