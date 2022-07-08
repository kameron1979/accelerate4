import React from "react";

export default function NavbarHeader(props) {
  const { sidebarOpen, setSidebarOpen } = props;

  return (
    <div className="Navbar-header">
      <div className="page-topbar d-flex justify-content-between align-items-left">
        <div onClick={() => setSidebarOpen(!sidebarOpen)} className="menu-btn">
          <img
            src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Flist.svg?v=1596545874905"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
