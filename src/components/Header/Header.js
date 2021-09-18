import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';
import { AiFillHome} from "react-icons/ai";
import { RiCodeBoxFill } from "react-icons/ri";
import { DiVim } from "react-icons/di";



export const Header = () => {
  return (
    <div className="navigation">
      <nav className="nav">
        <ul>
          <li>
            <NavLink exact to="/">
              <AiFillHome /> Home 
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/tutorials">
              <RiCodeBoxFill /> Tutorials
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
              <DiVim />  Vim-Ninja
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
