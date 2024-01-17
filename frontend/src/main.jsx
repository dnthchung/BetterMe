import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoPage from "./pages/ToDoPage.jsx";
import HabitPage from "./pages/HabitPage.jsx";
import MoneyPage from "./pages/MoneyPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />}>
          <Route path="/app/todo" element={<ToDoPage />} />
          <Route path="/app/habit" element={<HabitPage />} />
          <Route path="/app/money" element={<MoneyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
