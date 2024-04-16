import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nev">
      <div className="nav nev">
        <div className="logo">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="nav-search">
          <input type="text" placeholder="search  ...." />
        </div>
        <div className="nav-list">
          <ul style={{ gap: "10px", display: "flex" }}>
            <a href="/Login">Login</a>

            <a href="">Download</a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
