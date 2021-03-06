import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Employee Directory <i class="fas fa-home"></i>
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
        </li>
        <li
          className={window.location.pathname === "/team" ? "active" : ""}
        >
          <Link className="links" to="/employees">Employees <i class='fas fa-user-circle'></i></Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
