import React, { useState } from "react";
import classNames from "classnames";
import Sidebar from "./components/sidebar/Sidebar";
import NavbarHeader from "./components/Navbar-header";

import AccelerateRouter from "./routes/AccelerateRouter";
import "./pages/Pages.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="App">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className={classNames("main-content", "w-100", "h-100", {
          "padding-none": !sidebarOpen
        })}
      >
        <NavbarHeader
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
        />
        <AccelerateRouter />
      </div>
    </div>
  );
}

export default App;
