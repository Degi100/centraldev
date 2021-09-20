import React from "react";
import { ExternalLink } from "react-external-link";
import "./Main.scss";

export const Tutorials = () => {
  return (
    <div>
      <div className="layer-headline">
        <h1>Tutorials</h1>
      </div>
      <div className="layer2">
        <ExternalLink href="https://www.youtube.com/watch?v=NO7_jgzVgbc">
          <span>Build a Portfolio React and Sanity.io</span>
        </ExternalLink>
      </div>
    </div>
  );
};
