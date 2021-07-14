import React from "react";
import "./Home.scss";

export const Home = () => {
  return (
    <div>
      <div className="layer1">
        <h1>Home</h1>
        <p>My first React Project!</p>
      </div>
      <div className="layer2">
        <h1>Sources</h1>
        <ul>
          <li>
             <a href="https://www.github.com/Degi100" target="blank">
              My GitHub Repo's
            </a>
            <a href="http://www.trello.com" target="blank">
              Trello
            </a>
            <a
              href="https://github.com/Entwickler-Club/dpodreact"
              target="blank"
            >
              Entwickler-Club
            </a>
            <a href="https://github.com/FbW-D01" target="blank">
              DCI D01
            </a>
            <a href="https://onespace.netlify.app/" target="blank">
              OneSpace
            </a>
            <a href="https://d01.site/" target="blank">FbW-D01 Class Students Projects D01</a>
            <a href="https://vimninja.netlify.app/" target="blank">
              VIM-Ninja CSS Layout
            </a>
            <a href="https://degidev.netlify.app/" target="blank">
              Degi:Dev
            </a>
            <a href="https://energycalc.netlify.app/" target="blank">
              Energy Calculater
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
