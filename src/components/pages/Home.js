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
            <a href="https://vimninja.netlify.app/" target="blank">
              VIM CSS Layout
            </a>
            <a href="https://energycalc.netlify.app/" target="blank">
              Engery Calculater
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
