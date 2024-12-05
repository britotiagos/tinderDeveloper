import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.js";
import Main from "./pages/Main.js";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/devs/:id" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
