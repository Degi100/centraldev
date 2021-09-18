import React from "react";
import "./Home.scss";
import { ExternalLink } from "react-external-link";

export const Home = () => {
  return (
    <div>
      <div className="layer1">
        <h1>Home </h1>
        <p>My first React Project!</p>
      </div>
      <div className="layer2">
        <h1>GitHub Links</h1>

        <ExternalLink href="https://www.github.com/Degi100">
          <span>My GitHub</span>
        </ExternalLink>
        <ExternalLink href="https://github.com/FbW-D01">
          <span>D01 Github</span>
        </ExternalLink>
        <ExternalLink href="https://github.com/Entwickler-Club/dpodreact">
          <span>Datapod Project</span>
        </ExternalLink>
      </div>

      <div className="layer2">
        <h1>Projects</h1>
        <ExternalLink href="https://vimninja.netlify.app/">
          <span>VIM NINJA CSS LAYOUT</span>
        </ExternalLink>
        <ExternalLink href="https://degidev.netlify.app/">
          <span>My HTML/ CSS Portfolio</span>
        </ExternalLink>
        <ExternalLink href="https://energycalc.netlify.app/">
          <span>Energy Calculator with VueJS</span>
        </ExternalLink>
      </div>

      <div className="layer2">
        <h1>External Links</h1>
        <ExternalLink href="https://onespace.netlify.app/">
          <span>OneSpace by Edward T.</span>
        </ExternalLink>
        <ExternalLink href="https://d01.site/">
          <span>D01-Site</span>
        </ExternalLink>
      </div>
    </div>
  );
};
