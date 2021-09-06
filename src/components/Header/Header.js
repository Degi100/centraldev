import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';


export const Header = () => {
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
            <NavLink exact to="/tutorials">
              Tutorials
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact">
              Contact
            </NavLink>
          </li>          
          <li>
            <NavLink exact to="/news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/vim">
              Vim-Ninja
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/myrepos">
              MyRepos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
