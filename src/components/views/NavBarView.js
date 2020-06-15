import React from "react";
import { Link } from "react-router-dom";
import "./styles/AllCampusesView.css";

const NavBarView = (props) => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/campuses" className="nav-link">
        Campuses
      </Link>
      <Link to="/students" className="nav-link">
        Students
      </Link>
    </nav>
  );
};

export default NavBarView;
