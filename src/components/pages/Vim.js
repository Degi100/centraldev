import React from "react";
import vimninjabelts from "../../data/vimninjabelts.json";
import "./vim.scss";

export const Vim = () => {
  return (
    <div>
      <div className="layer-headline">
        <h1>Vim Ninja </h1>
      </div>
      <div className="layerWhite">
        <div className="vimninjabelts">
          {vimninjabelts.white.map((belt) => {
            return (
              <div className={`vimTitle`}>
                <p>{belt.title}</p>
                <p className="command">{belt.command}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="layerYellow">
        <div className="vimninjabelts">
          {vimninjabelts.yellow.map((belt) => {
            return (
              <div className={`vimTitle`}>
                <p>{belt.title}</p>
                <p className="command">{belt.command}</p>
              </div>
            );
          })}
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
};
