import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { AiFillHome } from "react-icons/ai";
import { RiCodeBoxFill } from "react-icons/ri";
import { DiVim } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { BsBookHalf } from "react-icons/bs";

export const Header = () => {
  return (
    <div className="navigation">
      <nav className="nav">
        <ul>
          <li>
            <NavLink exact to="/">
              <div className="react-icon">
                <AiFillHome />
              </div>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/tutorials">
              <div className="react-icon">
                <RiCodeBoxFill />
              </div>
              Tutorials
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact">
              <div className="react-icon">
                <IoMdContact />
              </div>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/todoes">
              <div className="react-icon">
                <BsBookHalf />
              </div>
              Taskmanager
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/vim">
              <div className="react-icon">
                <DiVim />
              </div>
              Vim
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/myrepos">
              <div className="react-icon">
                <AiFillGithub />
              </div>
              MyRepos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
