import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.scss';

export const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="nav">
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};