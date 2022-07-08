import React from "react";
import Components from "../pages/Components";
import Dashboard from "../pages/Dashboard";
import Fragments from "../pages/Fragments";
import Settings from "../pages/Settings";
import { Route, Routes } from "react-router-dom";

export default function AccelerateRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/components" element={<Components />} />
      <Route path="/fragments" element={<Fragments />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
