import React from 'react';
import './Navigation.scss';
import {  NavLink } from "react-router-dom";

export const Navigation = () => {
	return(
		<div className="Navigation">
		<nav>
		  <ul>
		    <li>
		      <NavLink exact to="/">
			Home
		      </NavLink>
		    </li>
		    <li><NavLink exact to="/about">
		      About</NavLink></li>
		    <li><NavLink exact to="/contact">
		      Contact</NavLink>  </li>
		  </ul>
		</nav>
	      </div>
	);
};