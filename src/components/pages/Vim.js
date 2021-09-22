import React from "react";
import vimninjabelts from "../../data/vimninjabelts.json";
import ReactPlayer from 'react-player'
import "./vim.scss";

export const Vim = () => {

  return (
    <div>
      <div className="layer-headline">
        <h1>Vim Ninja  <input
          type="text"
           placeholder="Search VIM "
        /> </h1>
      </div>

      <div className="layerWhite">
        <div className="vimninjabelts">
          {vimninjabelts.white.map((belt) => {
            return (
              <div className={`vimTitle`}>
                <p className="title">{belt.title} </p>
                <p className="command">{belt.command}</p>
                 <p className="player"><ReactPlayer url={belt.tutorial}/> </p>
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
        </div>
      </div>
    </div>
  );
};
