import React from "react";
import "./Home.scss";
import { ExternalLink } from 'react-external-link';


export const Home = () => { 
  return (
    <div>
      <div className="layer1">
        <h1>Home </h1>
        <p>My first React Project!</p>
      </div>
      <div className="layer2">
        <h1>GitHub Links</h1>
        <div>
          <ExternalLink href="https://www.github.com/Degi100"><spwan>My GitHub</spwan></ExternalLink>
          <ExternalLink href="https://github.com/FbW-D01"><spwan>D01 Github</spwan></ExternalLink>
          <ExternalLink href="https://github.com/Entwickler-Club/dpodreact">Datapod Project</ExternalLink>
        </div>
      </div>
      <div className="layer2">
        <h1>Projects</h1>          
        <ExternalLink href="https://vimninja.netlify.app/"><spwan>VIM NINJA CSS LAYOUT</spwan></ExternalLink>
          <ExternalLink href="https://degidev.netlify.app/"><spwan>My HTML/ CSS Portfolio</spwan></ExternalLink>
          <ExternalLink href="https://energycalc.netlify.app/"><spwan>Energy Calculator with VueJS</spwan></ExternalLink>
      </div>
      <div className="layer2">
        <h1>External Links</h1>
              <ExternalLink href="https://onespace.netlify.app/"><spwan>OneSpace by Edward T.</spwan></ExternalLink>
          <ExternalLink href="https://d01.site/"><spwan>D01-Site</spwan></ExternalLink>
  </div>
    </div>
  );
};
